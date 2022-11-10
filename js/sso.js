// TODO: need to find out where to add sso.js and sso.css in the file structure
  
  function closeSsoPopup() {
    const element = document.getElementById("sso-popup");
    element.classList.remove("overlay");
  }
  
  function getQsParam(name, url) {
    let urlTemp = url;
    if (!url) urlTemp = window.location.href;
    const nameTemp = name.replace(/[\[\]]/g, "\\$&");
    const regex = new RegExp("[?&]" + nameTemp + "(=([^&#]*)|&|#|$)");
    const results = regex.exec(urlTemp);
    if (!results) return null;
    if (!results[2]) return "";
    return decodeURIComponent(results[2].replace(/\+/g, " "));
  }
  
  function setInitials() {
    const language = getQsParam("language") || getQsParam("langCode") || "en-gb";
    localStorage.setItem("language", language.toLowerCase());
    const userKey = getQsParam("key");
    if (userKey) {
      localStorage.setItem("userKey", userKey);
    }
  }
  
  function successCallback(data, popup) {
    console.log("successCallback", data);
    const element = document.getElementById("sso-popup");
    element.classList.remove("overlay");
    localStorage.setItem("aa_tokens", JSON.stringify(data));
    localStorage.setItem("userKey", "");
    if (popup) window.location.reload();
  }
  
  function failureFunction(error) {
    console.log("failureFunction", error);
    if (getQsParam("key")) {
      localStorage.setItem("userKey", "");
    }
    window.aaWidget
      .logout()
      .then(() => {
        localStorage.setItem("userKey", "");
      })
      .catch((e) => {
        localStorage.setItem("aa_tokens", JSON.stringify({}));
      });
  }
  
  function logout() {
    localStorage.setItem("memberId", "");
    if (getQsParam("key")) {
      localStorage.setItem("userKey", "");
      window.location.reload();
    }
    window.aaWidget
      .logout()
      .then(() => {
        localStorage.setItem("userKey", "");
        window.location.reload();
      })
      .catch((e) => {
        window.location.reload();
      });
  }
  
  function reloadWidget(popup = true) {
    if (getQsParam("key") && !popup) return false;
    let configuration = {
      successCallback: (data) => {
        successCallback(data, popup);
      },
      failureCallback: failureFunction,
    };
    if (popup) {
      document.getElementById("sso-popup").classList.add("overlay");
      configuration = {
        elementRoot: "airasia_widget",
        hideSignupTab: false, // TODO: set true for desktop, false for mobile
        orientation: "horizontal",
        lang: getQsParam("language") || getQsParam("langCode") || "en-gb",
        successCallback: (data) => {
          successCallback(data, popup);
        },
        failureCallback: failureFunction,
      };
    }
    console.log("window: ", popup, window.aaWidget)
    if(window.aaWidget){
      window.aaWidget.initialize(configuration);
    }else{
      setTimeout(()=>reloadWidget(popup), 500);
    }
    
  }
  
  setInitials();
  reloadWidget(false);
  
  // since onclick doesnt rendered in _document (SSR), then we add event click dynamically
  // add listener into sso-close-btn
  const ssoCloseBtn = document.getElementById("sso-close-btn");
  ssoCloseBtn.onclick = () => {
    closeSsoPopup();
  };
  
  // hardcode
  // TODO: need to find out how to check user login properly
  // if (!localStorage.getItem("aa_tokens")) {
  //   reloadWidget(true);
  // }
  
  window.logout = logout;
  window.reloadWidget = reloadWidget;
