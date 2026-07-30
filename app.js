const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Header and mobile navigation
const header = document.querySelector('.site-header');
const menuToggle = document.querySelector('.menu-toggle');
const mobileNav = document.querySelector('.mobile-nav');

const syncHeader = () => header?.classList.toggle('scrolled', window.scrollY > 28);
syncHeader();
window.addEventListener('scroll', syncHeader, { passive: true });

menuToggle?.addEventListener('click', () => {
  const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!isOpen));
  mobileNav?.classList.toggle('is-open', !isOpen);
  document.body.style.overflow = isOpen ? '' : 'hidden';
});

mobileNav?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    menuToggle?.setAttribute('aria-expanded', 'false');
    mobileNav.classList.remove('is-open');
    document.body.style.overflow = '';
  });
});

document.querySelector('#year').textContent = new Date().getFullYear();

// Scroll reveals work without JavaScript dependencies; Motion adds the hero choreography.
const revealItems = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window && !reducedMotion) {
  const revealObserver = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -35px' }
  );
  revealItems.forEach(item => revealObserver.observe(item));

  // Also reveal anything already passed during a fast scroll or anchor jump.
  let revealTicking = false;
  const revealPassedItems = () => {
    revealItems.forEach(item => {
      if (!item.classList.contains('is-visible') && item.getBoundingClientRect().top < window.innerHeight * 1.15) {
        item.classList.add('is-visible');
        revealObserver.unobserve(item);
      }
    });
    revealTicking = false;
  };
  const schedulePassedReveal = () => {
    if (revealTicking) return;
    revealTicking = true;
    requestAnimationFrame(revealPassedItems);
  };
  window.addEventListener('scroll', schedulePassedReveal, { passive: true });
  window.addEventListener('hashchange', schedulePassedReveal);
  window.addEventListener('resize', schedulePassedReveal, { passive: true });
  revealPassedItems();
} else {
  revealItems.forEach(item => item.classList.add('is-visible'));
}

if (!reducedMotion) {
  import('https://cdn.jsdelivr.net/npm/motion@11.18.2/+esm')
    .then(({ animate, stagger }) => {
      animate(
        '.title-line',
        { opacity: [0, 1], transform: ['translateY(105%)', 'translateY(0%)'] },
        { duration: 1.05, delay: stagger(0.12), easing: [0.22, 1, 0.36, 1] }
      );
      animate(
        '.system-map',
        { opacity: [0, 1], transform: ['translateX(30px) scale(.97)', 'translateX(0) scale(1)'] },
        { duration: 1.2, delay: 0.25, easing: [0.22, 1, 0.36, 1] }
      );
      document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('pointermove', event => {
          if (window.innerWidth < 900) return;
          const rect = card.getBoundingClientRect();
          const x = (event.clientX - rect.left) / rect.width - 0.5;
          const y = (event.clientY - rect.top) / rect.height - 0.5;
          animate(card, { transform: `perspective(900px) rotateX(${-y * 2.5}deg) rotateY(${x * 2.5}deg) translateY(-7px)` }, { duration: 0.25 });
        });
        card.addEventListener('pointerleave', () => animate(card, { transform: 'perspective(900px) rotateX(0deg) rotateY(0deg) translateY(0)' }, { duration: 0.4 }));
      });
    })
    .catch(() => {
      // Native CSS animation remains the deliberate fallback.
    });
}

// Custom Lottie: a small routing pulse authored for this portfolio.
if (window.lottie && !reducedMotion) {
  window.lottie.loadAnimation({
    container: document.querySelector('#lottie-orbit'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'assets/network-pulse.json',
    rendererSettings: { preserveAspectRatio: 'xMidYMid meet' }
  });
}

// The fixed canvas draws a quiet, responsive routing graph behind the page.
const canvas = document.querySelector('#signal-canvas');
const context = canvas?.getContext('2d');
const pointer = { x: 0.72, y: 0.22 };
let canvasWidth = 0;
let canvasHeight = 0;
let animationFrame = 0;

const nodes = Array.from({ length: 22 }, (_, index) => ({
  x: ((index * 47) % 101) / 100,
  y: ((index * 73 + 17) % 97) / 100,
  phase: (index * 0.37) % 1,
  size: index % 5 === 0 ? 2 : 1
}));

const resizeCanvas = () => {
  if (!canvas || !context) return;
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  canvasWidth = window.innerWidth;
  canvasHeight = window.innerHeight;
  canvas.width = Math.round(canvasWidth * dpr);
  canvas.height = Math.round(canvasHeight * dpr);
  canvas.style.width = `${canvasWidth}px`;
  canvas.style.height = `${canvasHeight}px`;
  context.setTransform(dpr, 0, 0, dpr, 0, 0);
};

const renderSignalGraph = time => {
  if (!context) return;
  context.clearRect(0, 0, canvasWidth, canvasHeight);
  const projected = nodes.map(node => ({
    ...node,
    px: node.x * canvasWidth + (pointer.x - 0.5) * (node.size * 7),
    py: node.y * canvasHeight + (pointer.y - 0.5) * (node.size * 7)
  }));

  for (let index = 0; index < projected.length; index += 1) {
    const node = projected[index];
    for (let target = index + 1; target < projected.length; target += 1) {
      const next = projected[target];
      const distance = Math.hypot(node.px - next.px, node.py - next.py);
      if (distance > 210) continue;
      context.strokeStyle = `rgba(60, 118, 205, ${0.045 * (1 - distance / 210)})`;
      context.lineWidth = 1;
      context.beginPath();
      context.moveTo(node.px, node.py);
      context.lineTo(next.px, next.py);
      context.stroke();
    }
    const pulse = 0.45 + Math.sin(time * 0.0012 + node.phase * 9) * 0.25;
    context.fillStyle = `rgba(87, 157, 255, ${pulse})`;
    context.beginPath();
    context.arc(node.px, node.py, node.size, 0, Math.PI * 2);
    context.fill();
  }

  // A packet travels along a deterministic route.
  const start = projected[4];
  const end = projected[9];
  const progress = (time * 0.00008) % 1;
  const packetX = start.px + (end.px - start.px) * progress;
  const packetY = start.py + (end.py - start.py) * progress;
  context.shadowBlur = 13;
  context.shadowColor = '#6ce7ff';
  context.fillStyle = '#6ce7ff';
  context.fillRect(packetX - 1.5, packetY - 1.5, 3, 3);
  context.shadowBlur = 0;
  animationFrame = requestAnimationFrame(renderSignalGraph);
};

if (canvas && context && !reducedMotion) {
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas, { passive: true });
  window.addEventListener('pointermove', event => {
    pointer.x = event.clientX / Math.max(window.innerWidth, 1);
    pointer.y = event.clientY / Math.max(window.innerHeight, 1);
  }, { passive: true });
  animationFrame = requestAnimationFrame(renderSignalGraph);
}

window.addEventListener('pagehide', () => cancelAnimationFrame(animationFrame));

// Hero map readout
const readout = document.querySelector('#map-readout-text');
const readouts = [
  'agent / tool-call / success',
  'payment / transfer / routed',
  'container / rollout / healthy',
  'pull-request / patch / open'
];
let readoutIndex = 0;
if (readout && !reducedMotion) {
  window.setInterval(() => {
    readoutIndex = (readoutIndex + 1) % readouts.length;
    readout.animate([{ opacity: 0, transform: 'translateY(5px)' }, { opacity: 1, transform: 'translateY(0)' }], { duration: 400, easing: 'ease-out' });
    readout.textContent = readouts[readoutIndex];
  }, 2600);
}

// Portfolio chat. The browser only calls the proxy; it never receives the LLM credential.
const chatConfig = window.PORTFOLIO_CONFIG || {};
const chatEndpoint = chatConfig.chatEndpoint || '/api/chat';
const chatForm = document.querySelector('#chat-form');
const chatInput = document.querySelector('#chat-input');
const chatSubmit = document.querySelector('#chat-submit');
const chatMessages = document.querySelector('#chat-messages');
const chatStatus = document.querySelector('#chat-status');
const chatUnavailable = document.querySelector('#chat-unavailable');
const chatReset = document.querySelector('#chat-reset');
const maxHistory = 10;
let conversation = [];
let proxyUnavailable = false;

const timeLabel = () => new Intl.DateTimeFormat('en', { hour: '2-digit', minute: '2-digit', hour12: false }).format(new Date());

function addMessage(role, text, labelSuffix = '') {
  const wrapper = document.createElement('div');
  wrapper.className = `message message-${role}`;
  const label = document.createElement('span');
  label.className = 'message-label';
  label.textContent = `${role === 'user' ? 'VISITOR' : 'WORK GRAPH'} / ${timeLabel()}${labelSuffix ? ` / ${labelSuffix}` : ''}`;
  const copy = document.createElement('p');
  copy.textContent = text;
  wrapper.append(label, copy);
  chatMessages.append(wrapper);
  chatMessages.scrollTop = chatMessages.scrollHeight;
  return wrapper;
}

function addTyping() {
  const wrapper = document.createElement('div');
  wrapper.className = 'message message-assistant message-typing';
  wrapper.id = 'typing-message';
  const label = document.createElement('span');
  label.className = 'message-label';
  label.textContent = `WORK GRAPH / ${timeLabel()} / ROUTING`;
  const dots = document.createElement('p');
  dots.innerHTML = '<i></i><i></i><i></i>';
  wrapper.append(label, dots);
  chatMessages.append(wrapper);
  chatMessages.scrollTop = chatMessages.scrollHeight;
  return wrapper;
}

function localPortfolioAnswer(input) {
  const query = input.toLowerCase();
  if (query.includes('fintech') || query.includes('bank') || query.includes('payment') || query.includes('maybank')) {
    return 'Azad currently works as a Senior Software Engineer at Maybank, contributing to MAE payment and transfer flows for Cambodia and the Philippines. His work includes cross-border financial journeys, React Native performance, app shielding, RSA security, and a GrowthBook-configurable Axios cache with bounded LRU eviction.';
  }
  if (query.includes('airasia') || query.includes('aviation') || query.includes('rewards')) {
    return 'At AirAsia MOVE from October 2022 to September 2024, Azad built the AirAsia Xchange mini app in Flutter and Dart. He also delivered Spring Boot services on Google Cloud and React/Next.js interfaces across the Rewards ecosystem.';
  }
  if (query.includes('ai') || query.includes('agent') || query.includes('llm')) {
    return 'His applied AI work includes the multi-tenant Neyobytes WhatsApp Agent, Pi Advisor, and Pi Pool Router. The themes are multi-provider LLM routing, tool calling, durable sessions, model selection, health-aware failover, and putting AI behind secure server-side boundaries.';
  }
  if (query.includes('skill') || query.includes('stack') || query.includes('technology')) {
    return 'Azad’s core stack is Java and Spring Boot for backend services; JavaScript and TypeScript across products and tooling; React, Next.js, React Native, Flutter, and Dart for interfaces; and GCP, Docker, Kubernetes, GKE, and Istio for cloud delivery. He also works with MongoDB, PostgreSQL, and MySQL.';
  }
  if (query.includes('jemput') || query.includes('wedding')) {
    return 'Neyobytes Jemput is a Malaysian digital wedding invitation platform. It includes a live React editor, ten visual templates, shareable invitation pages, RSVP and guestbook flows, an AI guest chatbot, quota controls, Supabase data, and Stripe subscriptions.';
  }
  if (query.includes('open source') || query.includes('github') || query.includes('pull request') || query.includes('repo')) {
    return 'Azad documents 91 pull requests on his GitHub profile, including work across react-native-paper, react-native-share, cobra, date-fns, faker, es-toolkit, valibot, and radash. His public developer tools include Pi Advisor, Pi Pool Router, Xiaomi MiMo provider support, and Discord Rhythm Bot.';
  }
  if (query.includes('history') || query.includes('experience') || query.includes('career') || query.includes('work')) {
    return 'His route is Nokia (Software Engineer, 2016–2020), Boost Connect / Axiata Digital (Engineering Team Lead, 2020–2022), AirAsia MOVE (Senior Software Engineer, 2022–2024), and Maybank (Senior Software Engineer, 2024–present).';
  }
  if (query.includes('contact') || query.includes('hire') || query.includes('resume') || query.includes('résumé')) {
    return 'You can reach Azad at hazrid93@hotmail.com, connect through LinkedIn, or open the résumé using the links near the bottom of this page.';
  }
  return 'Azad is a Senior Software Engineer in Kuala Lumpur with experience across banking, aviation, telecom, cloud platforms, web and mobile products, and applied AI systems. Ask me about a specific company, project, skill, or open-source contribution and I’ll narrow it down.';
}

function setProxyUnavailable() {
  proxyUnavailable = true;
  chatUnavailable.hidden = false;
  chatStatus.classList.add('is-offline');
  chatStatus.innerHTML = '<i></i> local knowledge mode';
}

async function submitChat(message) {
  const cleanMessage = message.trim();
  if (!cleanMessage || chatSubmit.disabled) return;
  addMessage('user', cleanMessage);
  conversation.push({ role: 'user', content: cleanMessage });
  conversation = conversation.slice(-maxHistory);
  chatInput.value = '';
  chatInput.style.height = 'auto';
  chatSubmit.disabled = true;
  const typing = addTyping();

  try {
    if (proxyUnavailable) throw new Error('Proxy unavailable');
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 30000);
    const response = await fetch(chatEndpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ messages: conversation }),
      signal: controller.signal
    });
    window.clearTimeout(timeout);
    if (!response.ok) throw new Error(`Chat proxy returned ${response.status}`);
    const data = await response.json();
    if (!data.output || typeof data.output !== 'string') throw new Error('Chat proxy returned no output');
    typing.remove();
    addMessage('assistant', data.output);
    conversation.push({ role: 'assistant', content: data.output });
    conversation = conversation.slice(-maxHistory);
    sessionStorage.setItem('azad-work-graph', JSON.stringify(conversation));
  } catch (error) {
    typing.remove();
    setProxyUnavailable();
    const fallback = localPortfolioAnswer(cleanMessage);
    addMessage('assistant', fallback, 'LOCAL');
    conversation.push({ role: 'assistant', content: fallback });
    conversation = conversation.slice(-maxHistory);
  } finally {
    chatSubmit.disabled = false;
    chatInput.focus();
  }
}

chatForm?.addEventListener('submit', event => {
  event.preventDefault();
  submitChat(chatInput.value);
});

chatInput?.addEventListener('input', () => {
  chatInput.style.height = 'auto';
  chatInput.style.height = `${Math.min(chatInput.scrollHeight, 120)}px`;
});

chatInput?.addEventListener('keydown', event => {
  if (event.key === 'Enter' && !event.shiftKey) {
    event.preventDefault();
    chatForm.requestSubmit();
  }
});

document.querySelectorAll('[data-prompt]').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelector('#ask').scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth', block: 'center' });
    window.setTimeout(() => submitChat(button.dataset.prompt), reducedMotion ? 0 : 450);
  });
});

chatReset?.addEventListener('click', () => {
  conversation = [];
  sessionStorage.removeItem('azad-work-graph');
  chatMessages.innerHTML = '';
  addMessage('assistant', 'Fresh route. Ask me about Azad’s projects, career, technical strengths, or open-source work.');
});