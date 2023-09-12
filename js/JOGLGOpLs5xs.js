function t_throttle(t,e,n){var o,r;return e||(e=250),function(){var i=n||this,a=+new Date,l=arguments;o&&a<o+e?(clearTimeout(r),r=setTimeout((function(){o=a,t.apply(i,l)}),e)):(o=a,t.apply(i,l))}}function t674_init(t){var e=document.getElementById("rec"+t);if(e){var n=e.querySelector(".t674__img-holder");if(n){n.onload=function(){var t=0;"yes"!==document.getElementById("allrecords").getAttribute("data-blocks-animationoff")&&(t=600),setTimeout((function(){document.body.classList.add("t674__body_with-bg")}),t)};var o=document.createEvent("HTMLEvents");o.initEvent("load",!0,!1),n.dispatchEvent(o)}}}function t826_init(t){var e=document.querySelector("#rec"+t);if(e){var n=e.querySelector(".t826");t826_startAnimation(t),window.isMobile||window.addEventListener("resize",t_throttle((function(){t826_prepareAnimation(t)}))),window.isMobile&&window.addEventListener("orientationchange",(function(){t826_prepareAnimation(t)})),n.addEventListener("displayChanged",(function(){t826_prepareAnimation(t)}))}}function t826_prepareAnimation(t){var e=document.querySelectorAll('div:not(.t826__animation) > div[data-galaxy-id="'+t+'"]');Array.prototype.forEach.call(e,(function(t){t&&null!==t.parentNode&&t.parentNode.removeChild(t)})),t826_startAnimation(t)}function t826_startAnimation(t){var e=document.querySelector("#rec"+t);if(e&&(o=e.querySelector(".t826"))){var n=e.querySelector(".t826__galaxy");if(n){var o,r=document.querySelector("#allrecords"),i=o.getAttribute("data-galaxy-rec-ids"),a=o.getAttribute("data-galaxy-whole-page"),l=o.getAttribute("data-galaxy-vflip"),c=o.getAttribute("data-element-color"),d=o.getAttribute("data-element-opacity"),s={color:c||"#fff",opacity:d?d.replace(/^0?.([0-9])0?$/g,".$1"):1};if(-1!==s.color.indexOf("#"))(c=s.color)[1]===c[2]&&c[3]===c[4]&&c[5]===c[6]&&(s.color="#"+c[1]+c[3]+c[5]);if("yes"===l&&n.classList.add("t826__galaxy_flip"),"edit"===r.getAttribute("data-tilda-mode"))return(o=e.querySelector(".t826__demo")).insertAdjacentElement("beforeend",n),o.style.position="relative",void t826_runningAnimation(o,s);if(i)(i=i.split(",")).forEach((function(t){var e=document.querySelector("#rec"+t),o=n.cloneNode(!0);o.style.position="absolute",t826_addAnimation(e,o,s)}));else{var u,p;e.nextElementSibling&&e.nextElementSibling.querySelector(".t-cover")&&(u=e.nextElementSibling),e.previousElementSibling&&e.previousElementSibling.querySelector(".t-cover")&&(p=e.previousElementSibling);var y=n.cloneNode(!0);y&&(y.style.position="absolute"),u?t826_addAnimation(u,y,s):p&&t826_addAnimation(p,y,s)}if("yes"===a)e.querySelector(".t826__animation").style.display="block",n.style.position="fixed",t826_addAnimation(r,n,s)}}}function t826_addAnimation(t,e,n){if(t){t.setAttribute("data-animationappear","off"),t.classList.remove("r_hidden");var o=t.getAttribute("data-record-type"),r=t.getAttribute("id");if("396"===o)t.querySelector(".t396__filter").insertAdjacentElement("afterend",e),e.style.zIndex="0";else if("allrecords"===r)e.style.zIndex="-1";else{var i=t.querySelector(".t-cover");if(i){i.querySelector(".t-cover__filter").insertAdjacentElement("afterend",e),e.style.zIndex="0"}else{var a=t;if(0===a.length)return!0;a.appendChild(e),a.style.position="relative";var l=a.getAttribute("data-record-type");if((c=[480,478,477].some((function(t){return Number(l)===t}))?a.querySelector(".t"+l):a.querySelector("div")).style.position="relative",c.style.zIndex="1","734"==o||"675"==o||"215"==o)return;var c;if(-1!==[754,776,778,786,770].indexOf(parseInt(o,10)))(c=a.querySelector("div")).style.zIndex="",e.style.zIndex="-1";else e.style.zIndex="0"}}t826_runningAnimation(t,n)}}function t826_runningAnimation(t,e){var n;n=window.isMobile?[{name:"near",count:25,speed:50},{name:"mid",count:50,speed:100},{name:"far",count:175,speed:150}]:[{name:"near",count:100,speed:50},{name:"mid",count:200,speed:100},{name:"far",count:700,speed:150}];var o=t.getAttribute("id"),r=t.offsetHeight,i=t.offsetWidth;void 0===o?o="demo":"allrecords"===o&&(r=window.innerHeight,i=window.innerWidth);var a="t826__galaxy-"+o,l=t.querySelector("#"+a);l&&null!==l.parentNode&&l.parentNode.removeChild(l);var c=document.createElement("style");c.id=a,c.innerHTML="@keyframes "+a+"{to{transform:translateY("+-r+"px)}}",n.forEach((function(n,l,d){var s=Math.round(Math.random()*r),u=Math.round(Math.random()*i),p="";p=-1!==e.color.indexOf("#")?s+"px "+u+"px":e.opacity<1?s+"px "+u+"px rgba("+e.color+","+e.opacity+")":s+"px "+u+"px rgb("+e.color+")";for(var y=Math.round(d[l].count*r/2e3),_=0;_<y;_++){s=Math.round(Math.random()*i),u=Math.round(Math.random()*r);-1!==e.color.indexOf("#")?(p+=", "+s+"px "+u+"px",p+=", "+s+"px "+(u+r)+"px"):e.opacity<1?(p+=", "+s+"px "+u+"px rgba("+e.color+","+e.opacity+")",p+=", "+s+"px "+(u+r)+"px rgba("+e.color+","+e.opacity+")"):(p+=", "+s+"px "+u+"px rgb("+e.color+")",p+=", "+s+"px "+(u+r)+"px rgb("+e.color+")")}var f=Math.round(d[l].speed*r/2e3),m="t826__galaxy-"+d[l].name+"-"+o;c.innerHTML+="."+m+":after, ."+m+"{box-shadow:"+p+";animation-duration:"+f+"s;animation-name:"+a+";"+(-1!==e.color.indexOf("#")?"color:"+e.color+";":"")+(-1!==e.color.indexOf("#")&&e.opacity<1?"opacity:"+e.opacity:"")+"}."+m+":after{content:' ';position:absolute;top:"+r+"px}";var v=t.querySelectorAll(".t826__galaxy > .t826__galaxy-wrapper > .t826__galaxy-"+d[l].name);Array.prototype.forEach.call(v,(function(t){t.classList.add(m)}))})),t.insertAdjacentElement("afterbegin",c);var d=t.querySelectorAll(".t826__galaxy > .t826__galaxy-wrapper");Array.prototype.forEach.call(d,(function(t){t.style.animationName="t826__galaxy-fadeIn"}))}function t393_appearMenu(t){if(window.innerWidth>980)for(var e=document.querySelectorAll(".t393"),n=window.pageYOffset,o=document.body,r=document.documentElement,i=Math.max(o.scrollHeight,o.offsetHeight,r.clientHeight,r.scrollHeight,r.offsetHeight),a=0;a<e.length;a++){var l=e[a],c=l.getAttribute("data-appearoffset"),d=l.getAttribute("data-hideoffset");c&&(c.indexOf("vh")>-1&&(c=Math.floor(window.innerHeight*(parseInt(c)/100))),n>=(c=parseInt(c,10))?"hidden"===l.style.visibility&&(l.style.visibility="visible",t393__fadeIn(l)):l.style.visibility="hidden"),d&&(d.indexOf("vh")>-1&&(d=Math.floor(window.innerHeight*(parseInt(d)/100))),d=parseInt(d,10),n+window.innerHeight>=i-d?"hidden"!==l.style.visibility&&(l.style.visibility="hidden"):c?n>=c&&(l.style.visibility="visible"):l.style.visibility="visible")}}function t393__fadeIn(t){if("block"!==t.style.display){var e=0;t.style.opacity=e,t.style.display="block";var n=setInterval((function(){t.style.opacity=e,(e+=.1)>=1&&(clearInterval(n),t.style.display="")}),30)}}function t690_onSuccess(t){t_onFuncLoad("t_forms__onSuccess",(function(){t_forms__onSuccess(t)}))}function t875_init(){document.layers&&document.captureEvents(Event.MOUSEDOWN),document.onmousedown=t875_click,document.oncontextmenu=function(t){var e=(t=t||window.event).target||t.srcElement;return!(!e||!(e.tagName.match(/INPUT|TEXTAREA/i)||e.hasAttribute("contenteditable")||e.parentElement&&e.parentElement.hasAttribute("contenteditable")))&&void 0},t875_preventSelection(document),t875_preventUserSelect()}function t875_preventUserSelect(){var t=document.body.getAttribute("style");document.body.style.cssText=t}function t875_click(t){return t875_returnPrevent(t),(!document.all||2!==t.button)&&((!document.layers||3!==t.which)&&void 0)}function t875_preventSelection(t){var e=!1;t875_addHandler(t,"mousemove",(function(){e&&t875_removeSelection()})),t875_addHandler(t,"mousedown",(function(t){var n=(t=t||window.event).target||t.srcElement;e=n&&!n.tagName.match(/INPUT|TEXTAREA/i)&&!n.hasAttribute("contenteditable")&&n.parentElement&&!n.parentElement.hasAttribute("contenteditable")})),t875_addHandler(t,"mouseup",(function(){e&&t875_removeSelection(),e=!1})),t875_addHandler(t,"keydown",t875_killCtrlA),t875_addHandler(t,"keyup",t875_killCtrlA),t875_addHandler(t,"keydown",t875_killCtrlU),t875_addHandler(t,"keyup",t875_killCtrlU),t875_addHandler(t,"keydown",t875_killAltCmdI),t875_addHandler(t,"keyup",t875_killAltCmdI),t875_addHandler(t,"keydown",t875_killCtrlShiftI),t875_addHandler(t,"keyup",t875_killCtrlShiftI)}function t875_addHandler(t,e,n){t.attachEvent?t.attachEvent("on"+e,n):t.addEventListener&&t.addEventListener(e,n,!1)}function t875_removeSelection(){window.getSelection?window.getSelection().removeAllRanges():document.selection&&document.selection.clear&&document.selection.clear()}function t875_killCtrlU(t){t875_returnPrevent(t);var e=t.keyCode||t.which;(t.ctrlKey&&e=="U".charCodeAt(0)||t.altKey&&t.metaKey&&(e=="U".charCodeAt(0)||e=="u".charCodeAt(0)))&&(t.preventDefault?t.preventDefault():t.returnValue=!1)}function t875_killAltCmdI(t){t875_returnPrevent(t);var e=t.keyCode||t.which;t.altKey&&t.metaKey&&(e=="I".charCodeAt(0)||e=="i".charCodeAt(0))&&(t.preventDefault?t.preventDefault():t.returnValue=!1)}function t875_killCtrlShiftI(t){t875_returnPrevent(t);var e=t.keyCode||t.which;t.shiftKey&&t.ctrlKey&&(e=="I".charCodeAt(0)||e=="i".charCodeAt(0))&&(t.preventDefault?t.preventDefault():t.returnValue=!1)}function t875_killCtrlA(t){var e=(t=t||window.event).target||t.srcElement;if(!e||!(e.tagName.match(/INPUT|TEXTAREA|BUTTON/i)||e.hasAttribute("contenteditable")||e.parentElement&&e.parentElement.hasAttribute("contenteditable"))){var n=t.keyCode||t.which;(t.ctrlKey&&n=="A".charCodeAt(0)||t.metaKey&&n=="A".charCodeAt(0))&&(t875_removeSelection(),t.preventDefault?t.preventDefault():t.returnValue=!1)}}function t875_returnPrevent(t){var e=(t=t||window.event).target||t.srcElement;!e||e.tagName.match(/INPUT|TEXTAREA/i)||e.hasAttribute("contenteditable")||e.parentElement&&e.parentElement.hasAttribute("contenteditable")}function t868_initPopup(t){var e=document.getElementById("rec"+t);if(e){e.setAttribute("data-animationappear","off"),e.style.opacity="1";var n=e.querySelector(".t-popup");if(n){var o=n.getAttribute("data-tooltip-hook");if(o){for(var r=n.getAttribute("data-track-popup"),i=t868__readCustomCode(e),a=document.querySelectorAll(".r"),l=0;l<a.length;l++)a[l].addEventListener("click",(function(n){var a=n.target;if(!!a.closest('a[href$="'+o+'"]')&&a&&(n.preventDefault(),t868_showPopup(e,i),t_onFuncLoad("t_popup__resizePopup",(function(){t_popup__resizePopup(t)})),"#popup:"===o.substring(0,7)&&r&&window.Tilda)){var l=o;l=l.substring(7),Tilda.sendEventToStatistics(r,l)}}));if(!n.getAttribute("data-popup-inited")&&"MutationObserver"in window){n.setAttribute("data-popup-inited","yes");var c=document.querySelectorAll("body .t-store");Array.prototype.forEach.call(c,(function(e){new MutationObserver((function(e){for(var o in e){var r=e[o];"attributes"===r.type&&-1!==r.target.className.indexOf("t-popup_show")&&(n.style.zIndex="99999999",t868_initPopup(t))}})).observe(e,{attributes:!0,attributeFilter:["class"],subtree:!0})}))}}}}}function t868__readCustomCode(t){var e=t.querySelector(".t868 .t868__code-wrap");if(e)return e.innerHTML}function t868_showPopup(t){var e=t.querySelector(".t-popup");if(e){var n=e.querySelector(".t-popup__container");if(n){var o=e.querySelector(".t868__code-wrap");if(o){var r=window.innerWidth,i=t.getAttribute("data-screen-min"),a=t.getAttribute("data-screen-max");if(!(i&&r<parseInt(i,10)||a&&r>parseInt(a,10))){e.style.display="block",o.style.display="block",t868_setHeight(t),setTimeout((function(){n.classList.add("t-popup__container-animated"),e.classList.add("t-popup_show")}),100),"function"==typeof t_triggerEvent&&t_triggerEvent(document.body,"popupShowed"),document.body.classList.add("t-body_popupshowed"),e.addEventListener("click",(function(e){e.target.closest(".t-popup__container")||t868_closePopup(t)}));var l=t.querySelector(".t-popup__close");l&&l.addEventListener("click",(function(){t868_closePopup(t)}));var c=t.querySelectorAll('a[href*="#"]');Array.prototype.forEach.call(c,(function(e){e.addEventListener("click",(function(){var n=e.getAttribute("href");if(-1!==n.indexOf("#order")){var o=t.querySelector(".t-popup__container");setTimeout((function(){for(;o.firstChild;)o.removeChild(o.firstChild)}),600)}n&&"#price:"===n.substring(0,7)||(t868_closePopup(t),n&&"#popup:"!==n.substring(0,7)||setTimeout((function(){"function"==typeof t_triggerEvent&&t_triggerEvent(document.body,"popupShowed"),document.body.classList.add("t-body_popupshowed")}),300))}))})),document.addEventListener("keydown",(function(e){27===e.keyCode&&t868_closePopup(t)}))}}}}}function t868_closePopup(t){var e=t.querySelector(".t-popup"),n=t.querySelector(".t868 .t868__code-wrap");"function"==typeof t_triggerEvent&&t_triggerEvent(document.body,"popupHidden"),document.body.classList.remove("t-body_popupshowed"),e.classList.remove("t-popup_show"),setTimeout((function(){e.classList.contains(".t-popup_show")||(e.style.display="none",n&&(n.style.display="none"))}),300)}function t868_setHeight(t){var e=t.querySelector(".t868__video-carier");if(e){var n=parseInt(e.style.paddingLeft,10)||0,o=parseInt(e.style.paddingRight,10)||0,r=(e.clientWidth-(n+o))/(16/9);e.style.height=r,Array.prototype.forEach.call(e.closest,(function(t){t.style.height=r}))}}function t706_onSuccessCallback(){var t=document.querySelector(".t706__cartwin-products"),e=document.querySelector(".t706__cartwin-bottom"),n=document.querySelector(".t706 .t-form__inputsbox");t&&t706_slideUp(t,10),e&&t706_slideUp(e,10),n&&t706_slideUp(n,700);try{tcart__unlockScroll()}catch(t){}}function t706_slideUp(t,e){t&&(e||0===e||(e=500),t.style.transitionProperty="height, margin, padding",t.style.transitionDuration=e+"ms",t.style.boxSizing="border-box",t.style.height=t.offsetHeight+"px",t.style.overflow="hidden",t.style.height="0",t.style.paddingTop="0",t.style.paddingBottom="0",t.style.marginTop="0",t.style.marginBottom="0",setTimeout((function(){t.style.display="none",t.style.height="",t.style.paddingTop="",t.style.paddingBottom="",t.style.marginTop="",t.style.marginBottom="",t.style.overflow="",t.style.transitionDuration="",t.style.transitionProperty=""}),e))}function t651_initPopup(t){var e=document.getElementById("rec"+t);if(e&&e.querySelector(".t651"))if(!window.isMobile||window.isTablet){e.setAttribute("data-animationappear","off"),e.style.opacity=1;var n=e.querySelector(".t651__popup").getAttribute("data-track-popup"),o="TildaCallBackWidget"+t;(a=e.querySelector(".t651__btn")).addEventListener("click",(function(e){a.classList.contains("t651__btn_active")?t651_closePopup():(a.classList.add("t651__btn_active"),t651_showPopup(t),e.preventDefault(),n&&window.Tilda&&Tilda.sendEventToStatistics(n,o))}))}else{var r=e.querySelector(".t651__phone");if(!r)return;var i=r.textContent.replace(/\s+/g,""),a=e.querySelector(".t651__btn"),l=e.querySelector(".t651__btn_wrapper"),c=e.querySelector(".t651__btn-text");a.addEventListener("click",(function(){window.location.href="tel:"+i,l&&l.classList.remove("t651__btn_animate"),c&&(c.style.display="none")}))}}function t651_showPopup(t){var e=document.getElementById("rec"+t);if(e){var n=e.querySelector(".t651__popup");if(n){var o=e.querySelector(".t651__btn_wrapper"),r=e.querySelector(".t651__btn-text");o&&o.classList.remove("t651__btn_animate"),r&&(r.style.display="none"),n.style.display="block",setTimeout((function(){n.classList.add("t651__popup_show")}),50),document.addEventListener("keydown",t651_escClosePopup)}}}function t651_escClosePopup(t){"Escape"===t.key&&t651_closePopup()}function t651_closePopup(){for(var t=document.querySelectorAll(".t651__btn"),e=document.querySelectorAll(".t651__popup"),n=0;n<t.length;n++)t[n].classList.remove("t651__btn_active");for(n=0;n<e.length;n++)e[n].classList.remove("t651__popup_show");setTimeout((function(){for(var t=document.querySelectorAll(".t651__popup:not(.t651__popup_show)"),e=0;e<t.length;e++)t[e].style.display="none"}),300),document.removeEventListener("keydown",t651_escClosePopup)}window.isMobile=!1,/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)&&(window.isMobile=!0),window.isTablet=/(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/i.test(navigator.userAgent),Element.prototype.matches||(Element.prototype.matches=Element.prototype.matchesSelector||Element.prototype.msMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.webkitMatchesSelector||Element.prototype.oMatchesSelector),Element.prototype.closest||(Element.prototype.closest=function(t){for(var e=this;e&&1===e.nodeType;){if(Element.prototype.matches.call(e,t))return e;e=e.parentElement||e.parentNode}return null});