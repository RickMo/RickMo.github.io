function dragdrop(e){e.drag=!1,e.mousePosition={x:0,y:0},e.ref={x:0,y:0},e.timer=null,e.snapThreshold=40,e.clickCancel=!1;var t="ontouchstart"in window,n=("onorientationchange"in window?"orientationchange":"resize",t?"touchstart":"mousedown"),r=t?"touchmove":"mousemove",o=t?"touchend":"mouseup";ueUtils.addEvent(e,n,function(t){e.drag=!0,e.clickCancel=!1,e.mousePosition=ueUtils.getMousePosition(t),e.ref.x=e.offsetLeft,e.ref.y=e.offsetTop,e.timer=setTimeout(function(){e.clickCancel=!0,fireEvent(e,"tap")},800),ueUtils.preventDefault(t)},!1),ueUtils.addEvent(e.parentNode,r,function(t){if(e.drag){e.clickCancel=!0;var n={},r={};n=ueUtils.getMousePosition(t),r.x=n.x-e.mousePosition.x,r.y=n.y-e.mousePosition.y,e.timer&&(clearInterval(e.timer),e.timer=null)}},!1),ueUtils.addEvent(document,o,function(t){if(e.drag){e.drag=!1;var n="",r={};pos=ueUtils.getMousePosition(t),r.x=pos.x-e.mousePosition.x,r.y=pos.y-e.mousePosition.y,Math.abs(r.x)>e.snapThreshold&&(n=pos.x>e.mousePosition.x?"swiperight":"swipeleft"),Math.abs(r.y)>e.snapThreshold&&(n=pos.y>e.mousePosition.y?"swipebottom":"swipetop"),n&&ueUtils.fireEvent(e,n),e.timer&&(clearInterval(e.timer),e.timer=null)}},!1)}function otras_redes(){function e(){a&&(clearTimeout(a),a=null)}function t(){e(),o.style.display="block"}function n(){e(),a=setTimeout(function(){o.style.display="none"},50)}if(/msie/i.test(navigator.userAgent))try{var r=ueUtils.getElementsByClass("compartir")[0],o=ueUtils.getElementsByClass("otras-redes")[0],a=null;o.style.display="none",r.onmouseover=t,r.onmouseout=n}catch(i){}}var ueUtils={insertAfter:function(e,t){t.parentNode.insertBefore(e,t.nextSibling)},getElementsByClass:function(e,t,n){null==t&&(t=document),null==n&&(n="*");for(var r=[],o=t.getElementsByTagName(n),a=" "+e+" ",i=0,s=0,c=o.length;i<c;++i){var u=" "+o[i].className+" ";u.indexOf(a)!=-1&&(r[s++]=o[i])}return r},addClass:function(e,t){if("string"==typeof e&&(e=document.getElementById(e)),e){var n=new RegExp("(^|\\s)"+t+"(\\s|$)");n.test(e.className)||(e.className+=" "+t)}},removeClass:function(e,t){if("string"==typeof e&&(e=document.getElementById(e)),e){var n=new RegExp("(^|\\s)"+t+"(\\s|$)");e.className=e.className.replace(n," ")}},toggleClass:function(e,t){if("string"==typeof e&&(e=document.getElementById(e)),e){var n=new RegExp("(^|\\s)"+t+"(\\s|$)");return n.test(e.className)?(e.className=e.className.replace(n," "),!1):(e.className+=" "+t,!0)}},addEvent:function(e,t,n,r){return"function"==typeof n&&(e.addEventListener?(e.addEventListener(t,n,r),!0):!!e.attachEvent&&(e.attachEvent("on"+t,function(t){n.call(e,t)}),!0))},removeEvent:function(e,t,n,r){return"function"==typeof n&&(e.removeEventListener?(e.removeEventListener(t,n,r),!0):!!e.detachEvent&&(e.detachEvent("on"+t,n),!0))},fireEvent:function(e,t){if(!e)return!1;if(document.createEvent){var n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!0,!0,{}),e.dispatchEvent&&e.dispatchEvent(n),!0}if(document.createEventObject){var n=document.createEventObject();return e.fireEvent&&e.fireEvent("on"+t,n),!0}return!1},getMousePosition:function(e){e=e||window.event;var t={x:0,y:0};if(e.pageX||e.pageY)t.x=e.pageX,t.y=e.pageY;else if(e.clientX||e.clientY){var n=document.documentElement,r=document.body;t.x=e.clientX+(n.scrollLeft||r.scrollLeft)-(n.clientLeft||0),t.y=e.clientY+(n.scrollTop||r.scrollTop)-(n.clientTop||0)}else e.changedTouches&&(t.x=e.changedTouches[0].pageX,t.y=e.changedTouches[0].pageY);return t},preventDefault:function(e){"function"==typeof e.preventDefault&&e.cancelable?e.preventDefault():e.returnValue=!1},readCookie:function(e){for(var t=e+"=",n=document.cookie.split(";"),r=n.length,o=0;o<r;++o){for(var a=n[o];" "==a.charAt(0);)a=a.substring(1,a.length);if(0==a.indexOf(t))return a.substring(t.length,a.length)}return null},createCookie:function(e,t,n){if(n){var r=new Date;r.setTime(r.getTime()+24*n*3600*1e3);var o="; expires="+r.toGMTString()}else var o="";var a=location.hostname.match(/[a-zA-Z0-9-]+\.[a-zA-Z]{2,6}?$/);document.cookie=e+"="+t+o+"; path=/"+(a[0]?";domain="+a[0]:"")},removeCookie:function(e){document.cookie=e+"=; expires=Thu, 01-Jan-1970 00:00:01 GMT; path=/"},stripTags:function(e){var t=/(<([^>]+)>)/gi;return e.replace(t,"")},strToXml:function(e){var t=null;return window.DOMParser?(parser=new DOMParser,t=parser.parseFromString(e,"text/xml")):(t=new ActiveXObject("Microsoft.XMLDOM"),t.async=!1,t.loadXML(e)),t}};ueUtils.font={size:5,minSize:3,maxSize:7,inc:function(){if(ueUtils.font.size<ueUtils.font.maxSize){ueUtils.font.size++;var e=document.getElementById("tamano");e&&(e.className="tamano tamanoletra"+ueUtils.font.size)}},dec:function(){if(ueUtils.font.size>ueUtils.font.minSize){ueUtils.font.size--;var e=document.getElementById("tamano");e&&(e.className="tamano tamanoletra"+ueUtils.font.size)}}},String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")},Array.prototype.indexOf||(Array.prototype.indexOf=function(e){for(var t=0,n=this.length;t<n;++t)if(this[t]===e)return t;return-1}),ueUtils.serialize=function(e){var t,n,r,o="",a="",i=0,s=function(e){var t=0,n=0,r=e.length,o="";for(n=0;n<r;n++)o=e.charCodeAt(n),t+=o<128?1:o<2048?2:3;return t},c=function(e){var t,n,r,o,a=typeof e;if("object"===a&&!e)return"null";if("object"===a){if(!e.constructor)return"object";r=e.constructor.toString(),t=r.match(/(\w+)\(/),t&&(r=t[1].toLowerCase()),o=["boolean","number","string","array"];for(n in o)if(r==o[n]){a=o[n];break}}return a},u=c(e);switch(u){case"function":t="";break;case"boolean":t="b:"+(e?"1":"0");break;case"number":t=(Math.round(e)==e?"i":"d")+":"+e;break;case"string":t="s:"+s(e)+':"'+e+'"';break;case"array":case"object":t="a";for(n in e)if(e.hasOwnProperty(n)){if(o=c(e[n]),"function"===o)continue;r=n.match(/^[0-9]+$/)?parseInt(n,10):n,a+=this.serialize(r)+this.serialize(e[n]),i++}t+=":"+i+":{"+a+"}";break;case"undefined":default:t="N"}return"object"!==u&&"array"!==u&&(t+=";"),t},ueUtils.unserialize=function(e){var t=this,n=function(e){var t=e.charCodeAt(0);return t<128?0:t<2048?1:2},r=function(e,n,r,o){throw new t.window[e](n,r,o)},o=function(e,t,n){for(var o=2,a=[],i=e.slice(t,t+1);i!=n;)o+t>e.length&&r("Error","Invalid"),a.push(i),i=e.slice(t+(o-1),t+o),o+=1;return[a.length,a.join("")]},a=function(e,t,r){var o,a,i;for(i=[],o=0;o<r;o++)a=e.slice(t+(o-1),t+o),i.push(a),r-=n(a);return[i.length,i.join("")]},i=function(e,t){var n,s,c,u,l,f,d,m,p,v,g,h,y,E,b,U=0,k=function(e){return e};switch(t||(t=0),n=e.slice(t,t+1).toLowerCase(),s=t+2,n){case"i":k=function(e){return parseInt(e,10)},f=o(e,s,";"),U=f[0],l=f[1],s+=U+1;break;case"b":k=function(e){return 0!==parseInt(e,10)},f=o(e,s,";"),U=f[0],l=f[1],s+=U+1;break;case"d":k=function(e){return parseFloat(e)},f=o(e,s,";"),U=f[0],l=f[1],s+=U+1;break;case"n":l=null;break;case"s":d=o(e,s,":"),U=d[0],m=d[1],s+=U+2,f=a(e,s+1,parseInt(m,10)),U=f[0],l=f[1],s+=U+2,U!=parseInt(m,10)&&U!=l.length&&r("SyntaxError","String length mismatch");break;case"a":for(l={},c=o(e,s,":"),U=c[0],u=c[1],s+=U+2,p=0;p<parseInt(u,10);p++)g=i(e,s),h=g[1],v=g[2],s+=h,y=i(e,s),E=y[1],b=y[2],s+=E,l[v]=b;s+=1;break;default:r("SyntaxError","Unknown / Unhandled data type(s): "+n)}return[n,s-t,k(l)]};return i(e+"",0)[2]};var ueHeader={cookieName:"UE_pref",editions:["n","a"],devices:["e","m"],indexOf:function(e,t){if(e.indexOf)return e.indexOf(t)!=-1;for(var n=0,r=e.length;n<r;++n)if(e[n]==t)return!0;return!1},readPreferences:function(){try{var e=ueUtils.readCookie(ueHeader.cookieName);return!!e&&(e=JSON.parse(decodeURIComponent(e)))}catch(t){return!1}},readPreferencesOLD:function(){try{var e=ueUtils.readCookie(ueHeader.cookieName);return!!e&&(e=ueUtils.unserialize(decodeURIComponent(e)),cookieA={},cookieA.v=e[0],cookieA.d=e[1],cookieA.u=e[2],cookieA)}catch(t){return!1}},savePreferences:function(e){ueUtils.createCookie(ueHeader.cookieName,encodeURIComponent(JSON.stringify(e)),1460)},savePreferencesOLD:function(e){ueUtils.createCookie(ueHeader.cookieName,encodeURIComponent(ueUtils.serialize({0:e.v,1:e.d,2:e.u})),1460)},changeEdition:function(e){if(!e||!ueHeader.indexOf(ueHeader.editions,e))return!1;var t=ueHeader.readPreferences();if(t){if(t.v==e)return!1;t.v=e,ueHeader.savePreferences(t)}else if(t=ueHeader.readPreferencesOLD()){if(t.v==e)return!1;t.v=e,ueHeader.savePreferencesOLD(t)}location.href=location.pathname},changeDevice:function(e){if(!e||!ueHeader.indexOf(ueHeader.devices,e))return!1;var t=ueHeader.readPreferences();if(t){if(t.d==e)return!1;t.d=e,ueHeader.savePreferences(t)}else if(t=ueHeader.readPreferencesOLD()){if(t.d==e)return!1;t.d=e,ueHeader.savePreferencesOLD(t)}"e"==e?location.href=location.pathname+"?intcmp=BACK1":location.href=location.pathname+"?intcmp=BACK2"},changeUserOption:function(){var e=ueHeader.readPreferences();e?(e.u=1,ueHeader.savePreferences(e),document.getElementById("popup-cambio-version").style.display="none"):(e=ueHeader.readPreferencesOLD(),e?(e.u=1,ueHeader.savePreferencesOLD(e),document.getElementById("popup-cambio-version").style.display="none"):location.href=location.pathname)},search:function(){var e=document.getElementById("buscar");e&&(e.className.indexOf("open")==-1||""==e.value?ueUtils.toggleClass(e,"open"):e.form.submit())}};ueUtils.addEvent(window,"load",function(){for(var e=document.getElementsByTagName("summary"),t=0,n=e.length;t<n;++t)"details"==e[t].parentNode.tagName.toLowerCase()&&(e[t].onclick=function(){this.parentNode.className="open"==this.parentNode.className?"close":"open"})},!1),ueUtils.loadEcommerce=function(e){if("object"==typeof e&&"string"==typeof e.idCont){var t=document.getElementById(e.idCont);if(t){var n={portal:e.portal,seccion:e.seccion,idItem:e.idItem,tags:e.tags},r=e.url+encodeURIComponent(JSON.stringify(n)),o=ueAjax.getRequest(r,"text");t.innerHTML=o}}};var ueMenu=window.ueMenu||function(){function e(){ueUtils.removeClass("desplegable","open")}return{toggle:function(t){return ueUtils.toggleClass("desplegable","open")?ueUtils.addEvent(document,"click",e,!1):ueUtils.removeEvent(document,"click",e,!1),t.stopPropagation?t.stopPropagation():t.cancelBubble=!0,!1}}}();