import { readFile, writeFile } from 'node:fs/promises';
import { homedir } from 'node:os';
import { resolve } from 'node:path';

const TOKEN_ENDPOINT = 'https://auth.openai.com/oauth/token';
const CODEX_CLIENT_ID = 'app_EMoamEEZ73f0CkXaXp7hrann';
const EXPIRY_BUFFER_MS = 5 * 60 * 1000;

function expandHome(filePath) {
  if (!filePath || filePath === '~') return homedir();
  if (filePath.startsWith('~/')) return resolve(homedir(), filePath.slice(2));
  return resolve(filePath);
}

export class CodexTokenManager {
  constructor(filePath = '~/.codex/auth.json') {
    this.filePath = expandHome(filePath);
    this.auth = null;
    this.accessToken = '';
    this.refreshToken = '';
    this.expiresAt = 0;
    this.accountId = '';
  }

  async load() {
    const raw = await readFile(this.filePath, 'utf8');
    this.auth = JSON.parse(raw);
    this.accessToken = this.auth.tokens?.access_token || '';
    this.refreshToken = this.auth.tokens?.refresh_token || '';
    this.#readClaims();
    if (!this.accessToken) throw new Error('Codex auth file does not contain an access token');
    return this;
  }

  #readClaims() {
    try {
      const payload = JSON.parse(Buffer.from(this.accessToken.split('.')[1], 'base64url').toString('utf8'));
      this.expiresAt = Number(payload.exp || 0) * 1000;
      this.accountId = payload['https://api.openai.com/auth']?.chatgpt_account_id || '';
    } catch {
      this.expiresAt = 0;
      this.accountId = '';
    }
  }

  async getAccessToken() {
    if (!this.auth) await this.load();
    if (Date.now() >= this.expiresAt - EXPIRY_BUFFER_MS) await this.refresh();
    return this.accessToken;
  }

  async refresh() {
    if (!this.refreshToken) throw new Error('Codex auth file does not contain a refresh token');
    const response = await fetch(TOKEN_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        grant_type: 'refresh_token',
        refresh_token: this.refreshToken,
        client_id: CODEX_CLIENT_ID
      })
    });
    if (!response.ok) throw new Error(`Codex token refresh failed (${response.status})`);
    const payload = await response.json();
    this.accessToken = payload.access_token;
    this.refreshToken = payload.refresh_token || this.refreshToken;
    this.#readClaims();
    this.auth.tokens.access_token = this.accessToken;
    this.auth.tokens.refresh_token = this.refreshToken;
    this.auth.last_refresh = new Date().toISOString();
    await writeFile(this.filePath, JSON.stringify(this.auth, null, 2), { encoding: 'utf8', mode: 0o600 });
    return this.accessToken;
  }
}