function enviarPeticionComentarios(e,o,n,a,i,t){var r=!1;if(window.XMLHttpRequest)r=new XMLHttpRequest;else if(window.ActiveXObject)try{r=new ActiveXObject("MSXML2.XMLHTTP")}catch(s){try{r=new ActiveXObject("Microsoft.XMLHTTP")}catch(s){}}if(r){var m="string"==typeof n?newsContainer.find("#"+n)[0]:n;if(r.open("POST",e,!0),r.onreadystatechange=function(){if(4==r.readyState&&200==r.status){var e=!0;try{var o=jQuery.parseJSON(r.responseText)}catch(n){var e=!1}e?ueLightbox.open({url:URL_REGISTRO+"?csp="+o.csp+"&logged="+o.logged,title:"Por favor, rellena los siguientes datos",className:"inicio-sesion"}):m.innerHTML=r.responseText,null==t||e||t()}},r.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8"),r.send(o),i)try{_nnEventTrack(document.location)}catch(s){}}}function encodeValue(e){var o;return encodeURIComponent?(o=encodeURIComponent(e),o=o.replace(/~/g,"%7E"),o=o.replace(/!/g,"%21"),o=o.replace(/\(/g,"%28"),o=o.replace(/\)/g,"%29"),o=o.replace(/'/g,"%27")):(o=escape(e),o=o.replace(/@/g,"%40"),o=o.replace(/\//g,"%2F"),o=o.replace(/\+/g,"%2B")),o.replace(/\%20/g,"+")}function desconectarComentarios(){var e=newsContainer.find("#formulario_comentar_comentarios")[0].noticia.value,o=newsContainer.find("#formulario_comentar_comentarios")[0].portal.value,n=newsContainer.find("#formulario_paginar_comentarios")[0].pagina.value,a="noticia="+encodeValue(e)+"&portal="+encodeValue(o)+"&pagina="+encodeValue(n);enviarPeticionComentarios(urlComentarios+"desconectar.html",a,"login",!0,!1)}function isChecked(e){var o=newsContainer.find("#"+e)[0];return void 0!=o&&o.checked}function limpiarTextoEnviado(){"undefined"!=document.formulario_comentar_comentarios&&void 0!=document.formulario_comentar_comentarios&&"undefined"!=document.formulario_comentar_comentarios.texto&&void 0!=document.formulario_comentar_comentarios.texto&&(document.formulario_comentar_comentarios.texto.value="")}function enviarComentario(){var e=newsContainer.find("#formulario_comentar_comentarios")[0].opcion.value,o=newsContainer.find("#formulario_comentar_comentarios")[0].noticia.value,n=newsContainer.find("#formulario_comentar_comentarios")[0].portal.value,a=newsContainer.find("#formulario_comentar_comentarios")[0].texto.value.trim();if(""==a&&a.indexOf("su comentario")!==-1)alert("El Mundo mejora con sus opiniones. Por favor, escribe su comentario.");else if(a.length>1e3)alert("Su comentario supera el l?mite m?ximo de 1000 caracteres. Res?malo un poco y pruebe de nuevo.");else{var i="opcion="+encodeValue(e)+"&noticia="+encodeValue(o)+"&portal="+encodeValue(n)+"&texto="+encodeValue(a);enviarPeticionComentarios(urlComentarios+"comentar.html",i,"hacer-comentario",!0,!1)}}function datosAdicionalesCompletos(){var e;"undefined"!=document.formulario_comentar_comentarios&&void 0!=document.formulario_comentar_comentarios&&"undefined"!=document.formulario_comentar_comentarios.texto&&void 0!=document.formulario_comentar_comentarios.texto?(e=document.formulario_comentar_comentarios.texto.value.trim(),""!=e&&e.indexOf("su comentario")===-1?enviarComentario():ueAjax.postRequest(urlComentarios+"CajaComentario",{noticia:ueComments.noticia,portal:ueComments.portal},"text",function(e){var o=document.getElementById("hacer-comentario");o.innerHTML=e})):ueAjax.postRequest(urlComentarios+"CajaComentario",{noticia:ueComments.noticia,portal:ueComments.portal},"text",function(e){var o=document.getElementById("hacer-comentario");o.innerHTML=e,"undefined"!=document.formulario_comentar_comentarios&&void 0!=document.formulario_comentar_comentarios&&"undefined"!=document.formulario_comentar_comentarios.texto&&void 0!=document.formulario_comentar_comentarios.texto&&(document.formulario_comentar_comentarios.texto.value="")})}function enviarCaptchaComentario(){var e=newsContainer.find("#formulario_comentar_comentarios")[0].opcion.value,o=newsContainer.find("#formulario_comentar_comentarios")[0].noticia.value,n=newsContainer.find("#formulario_comentar_comentarios")[0].portal.value,a=newsContainer.find("#formulario_comentar_comentarios")[0].captcha.value.trim();if(""==a||6!=a.length)alert("El c?digo de seguridad que ha introducido no es correcto. Por favor, rev?selo y pruebe de nuevo.");else{var i="opcion="+encodeValue(e)+"&noticia="+encodeValue(o)+"&portal="+encodeValue(n)+"&captcha="+encodeValue(a);enviarPeticionComentarios(urlComentarios+"comentar.html",i,"hacer-comentario",!0,limpiarTextoEnviado)}}function recargarCaptcha(){var e=new Date;newsContainer.find("#captchaComentarios")[0].src=urlComentarios+"captcha.jpg?tmp="+e.getTime()}function enviarValoracionComentario(e,o){var n="comentario="+encodeValue(e)+"&voto="+encodeValue(o);enviarPeticionComentarios(urlComentarios+"valorar.html",n,"valoracion_comentario_"+e,!1,!1)}function enviarDenunciaComentario(e){var o="comentario="+encodeValue(e);enviarPeticionComentarios(urlComentarios+"denunciar.html",o,"denunciar_comentario_"+e,!1,!1)}function pasarPaginaComentarios(e){ueLogin.close();var o=newsContainer.find("#formulario_paginar_comentarios")[0].noticia.value,n=newsContainer.find("#formulario_paginar_comentarios")[0].portal.value;newsContainer.find("#formulario_paginar_comentarios")[0].pagina.value=e;var a="noticia="+encodeValue(o)+"&portal="+encodeValue(n)+"&pagina="+encodeValue(e);enviarPeticionComentarios(urlComentarios+"listar.html",a,"listado_comentarios",!0,!0)}function pasarPaginaComentariosTeMencionan(e){ueLogin.close();var o=newsContainer.find("#formulario_paginar_comentarios")[0].noticia.value,n=newsContainer.find("#formulario_paginar_comentarios")[0].portal.value;newsContainer.find("#formulario_paginar_comentarios")[0].pagina.value=e;var a="noticia="+encodeValue(o)+"&portal="+encodeValue(n)+"&pagina="+encodeValue(e);enviarPeticionComentarios(urlComentarios+"listarTeMencionan.html",a,"listado_comentarios",!0,!0)}function pasarPaginaComentariosTuRed(e){ueLogin.close();var o=newsContainer.find("#formulario_paginar_comentarios")[0].noticia.value,n=newsContainer.find("#formulario_paginar_comentarios")[0].portal.value;newsContainer.find("#formulario_paginar_comentarios")[0].pagina.value=e;var a="noticia="+encodeValue(o)+"&portal="+encodeValue(n)+"&pagina="+encodeValue(e);enviarPeticionComentarios(urlComentarios+"listarTuRed.html",a,"listado_comentarios",!0,!0)}function pasarPaginaComentariosMejorValorados(e){ueLogin.close();var o=newsContainer.find("#formulario_paginar_comentarios")[0].noticia.value,n=newsContainer.find("#formulario_paginar_comentarios")[0].portal.value;newsContainer.find("#formulario_paginar_comentarios")[0].pagina.value=e;var a="noticia="+encodeValue(o)+"&portal="+encodeValue(n)+"&pagina="+encodeValue(e);enviarPeticionComentarios(urlComentarios+"listarMejorValorados.html",a,"listado_comentarios",!0,!0)}function Hash(){this.length=0,this.items=new Array;for(var e=0;e<arguments.length;e+=2)"undefined"!=typeof arguments[e+1]&&(this.items[arguments[e]]=arguments[e+1],this.length++);this.remove=function(e){var o;if("undefined"!=typeof this.items[e]){this.length--;var o=this.items[e];delete this.items[e]}return o},this.get=function(e){return this.items[e]},this.set=function(e,o){var n;return"undefined"!=typeof o&&("undefined"==typeof this.items[e]?this.length++:n=this.items[e],this.items[e]=o),n},this.contains=function(e){return"undefined"!=typeof this.items[e]},this.clear=function(){for(var e in this.items)delete this.items[e];this.length=0}}function mostrarPerfil(e,o){var n=newsContainer.find("#perfil_comentario_"+o)[0];ueComments.showProfile(e,o,n)}function cargarPerfil(e,o){var n=newsContainer.find("#perfil_comentario_"+o)[0];ueComments.loadProfile(e,o,n)}function ocultarPerfil(e,o){var n=newsContainer.find("#perfil_comentario_"+o)[0];ueComments.hideProfile(e,o,n)}function descargarPerfil(e){descargaPerfiles.contains(e)&&(clearTimeout(descargaPerfiles.get(e)),descargaPerfiles.remove(e)),ocultarCapa(newsContainer.find("#perfil_comentario_"+e)[0])}function cerrarPerfil(e){ueComments.clearTimer(),ocultarCapa(e.parentNode),ueComments.loaded=null}function mostrarCapa(e){void 0!=e&&(e.style.display="block")}function ocultarCapa(e){void 0!=e&&(e.style.display="")}function inicializarTexto(e,o,n){var a=jQuery(n).find("#"+e);a.length>0&&(a[0].value=o)}function inicializarCheckbox(e,o,n){var a=jQuery(n).find("#"+e);a.length>0&&(a[0].checked=o)}function inicializarDisabled(e,o,n){var a=jQuery(n).find("#"+e);a.length>0&&(a[0].disabled=o)}function inicializarComentarios(e,o){inicializarTexto("formulario_login_comentarios_usuario","",o),inicializarTexto("formulario_login_comentarios_clave","",o),inicializarCheckbox("formulario_login_comentarios_recordar",!1,o),inicializarPagina(e,o)}function inicializarPagina(e,o){try{jQuery(o).find("#formulario_paginar_comentarios")[0].pagina.value=e}catch(n){}}function mostrarAyudaCaptcha(){var e=newsContainer.find("#explicacionCodigo")[0];0==estadoAyudaCaptcha?(e.style.display="block",estadoAyudaCaptcha=!0):(e.style.display="none",estadoAyudaCaptcha=!1)}function seguir(e,o){eliminarClickSeguimiento(newsContainer.find("#seguir_usuario_"+o)[0]),ueComments.profiles["#"+o]=newsContainer.find("#perfil_comentario_"+o)[0].innerHTML;var n="usuario="+encodeValue(e)+"&comentario="+encodeValue(o);enviarPeticionComentarios(urlComentarios+"seguir.html",n,"seguir_usuario_"+o,!1,!1,function(){ueComments.profiles["#"+o]=newsContainer.find("#perfil_comentario_"+o)[0].innerHTML})}function noSeguir(e,o){eliminarClickSeguimiento(newsContainer.find("#seguir_usuario_"+o)[0]);var n="usuario="+encodeValue(e)+"&comentario="+encodeValue(o);enviarPeticionComentarios(urlComentarios+"noSeguir.html",n,"seguir_usuario_"+o,!1,!1,function(){ueComments.profiles["#"+o]=newsContainer.find("#perfil_comentario_"+o)[0].innerHTML})}function eliminarClickSeguimiento(e){for(var o=e.getElementsByTagName("a"),n=0;n<o.length;n++){var a=o[n];a.onclick=function(){return!1}}}function initComments(){ueComments={timer:null,loaded:null,modal:!1,profiles:{},noticia:null,portal:null,loading:!1},"undefined"!=typeof ueDataPage?newsContainer=jQuery("#js_"+ueDataPage.contentId):newsContainer=jQuery(document),newsContainer.find("#formulario_paginar_comentarios")[0]&&newsContainer.find("#formulario_paginar_comentarios")[0].noticia&&(ueComments.noticia=newsContainer.find("#formulario_paginar_comentarios")[0].noticia.value),newsContainer.find("#formulario_paginar_comentarios")[0]&&newsContainer.find("#formulario_paginar_comentarios")[0].portal&&(ueComments.portal=newsContainer.find("#formulario_paginar_comentarios")[0].portal.value),jQuery(document).on("urlChanged",function(e,o){ueComments.timer=null,ueComments.loaded=null,ueComments.modal=!1,ueComments.profiles={},ueComments.noticia=null,ueComments.portal=null,ueComments.loading=!1,newsContainer=jQuery("#"+o.newsId),newsContainer.find("#formulario_paginar_comentarios")[0]&&newsContainer.find("#formulario_paginar_comentarios")[0].noticia&&(ueComments.noticia=newsContainer.find("#formulario_paginar_comentarios")[0].noticia.value),newsContainer.find("#formulario_paginar_comentarios")[0]&&newsContainer.find("#formulario_paginar_comentarios")[0].portal&&(ueComments.portal=newsContainer.find("#formulario_paginar_comentarios")[0].portal.value)})}function comentarReferenciaComentario(e,o){if(ueLogin.isLogged()){var n=newsContainer.find("#formulario_comentar_comentarios_texto")[0];if(void 0!=n){var a=n.value;n.value=a+" "+o+" ",n.focus()}return!0}return ueLogin.open(),ueComments.modal=!0,!1}function cargarPerfilUsuarioOficial(e,o){var n=newsContainer.find("#perfil_comentario_usuario_oficial_"+o)[0];ueComments.loadProfile(e,o,n)}function mostrarPerfilUsuarioOficial(e,o){var n=newsContainer.find("#perfil_comentario_usuario_oficial_"+o)[0];ueComments.showProfile(e,o,n)}function ocultarPerfilUsuarioOficial(e,o){var n=newsContainer.find("#perfil_comentario_usuario_oficial_"+o)[0];ueComments.hideProfile(e,o,n)}function enviarValoracionComentarioUsuarioOficial(e,o){var n="comentario="+encodeValue(e)+"&voto="+encodeValue(o);enviarPeticionComentarios(urlComentarios+"valorar.html",n,"valoracion_comentario_usuario_oficial_"+e,!1,!1)}function enviarDenunciaComentarioUsuarioOficial(e){var o="comentario="+encodeValue(e);enviarPeticionComentarios(urlComentarios+"denunciar.html",o,"denuncia_comentario_usuario_oficial_"+e,!0,!1)}urlComentarios="/servicios/noticias/scroll/comentarios/comunidad/";var URL_REGISTRO="https://seguro.elmundo.es/registro/v2/",perfiles=new Hash,cargaPerfiles=new Hash,descargaPerfiles=new Hash,estadoAyudaCaptcha=!1;jQuery(document).ready(function(){initComments(),ueComments.clearTimer=function(){ueComments.timer&&clearInterval(ueComments.timer),ueComments.timer=null},ueComments.showProfile=function(e,o,n){ueComments.modal||(ueComments.clearTimer(),ueComments.loaded!=o&&(ueComments.profiles["#"+o]?(n.innerHTML=ueComments.profiles["#"+o],ueComments.loaded=o):(n.innerHTML='<a class="cerrar" href="#" onclick="javascript:cerrarPerfil(this);return false;">Cerrar</a><div class="precarga"></div>',ueComments.timer=setTimeout(function(){ueComments.loadProfile(e,o,n)},500)),mostrarCapa(n),ueComments.hideAllProfiles(n)))},ueComments.hideProfile=function(e,o,n){ueComments.clearTimer(),ueComments.timer=setTimeout(function(){n.style.display="",ueComments.loaded=null},1e3)},ueComments.hideAllProfiles=function(e){for(var o=ueUtils.getElementsByClass("info-usuario"),n=0,a=o.length;n<a;++n)o[n].id&&o[n].id!=e.id&&(o[n].style.display="")},ueComments.loadProfile=function(e,o,n){if(!ueComments.modal)if(ueComments.profiles["#"+o])n.innerHTML=ueComments.profiles["#"+o],ueComments.loaded=o;else{var a="usuario="+encodeValue(e)+"&comentario="+encodeValue(o);enviarPeticionComentarios(urlComentarios+"perfil.html",a,n.id,!1,!1,function(){ueComments.profiles["#"+o]=n.innerHTML,ueComments.loaded=o})}},ueComments.openPrivateMessage=function(e){ueComments.modal=!0,ueComments.clearTimer();for(var o=e;o.parentNode&&"article"!=o.tagName.toLowerCase();)o=o.parentNode;if("article"==o.tagName.toLowerCase()){var n=ueUtils.getElementsByClass("info-usuario",o)[0],a=ueUtils.getElementsByClass("mensaje-privado",o)[0],i=ueUtils.getElementsByClass("enviado",a)[0],t=ueUtils.getElementsByClass("error",a)[0],r=ueUtils.getElementsByClass("caja-enviar",a)[0],s=a.getElementsByTagName("form")[0];ocultarCapa(n),i&&ocultarCapa(i),t&&ocultarCapa(t),mostrarCapa(r),s.reset(),mostrarCapa(a),n=a=i=t=r=s=null}},ueComments.closePrivateMessage=function(e){ueComments.modal=!1;for(var o=e;o.parentNode&&"article"!=o.tagName.toLowerCase();)o=o.parentNode;if("article"==o.tagName.toLowerCase()){var n=ueUtils.getElementsByClass("mensaje-privado",o)[0];ocultarCapa(n)}},ueComments.sendPrivateMessage=function(e){for(var o=e;o.parentNode&&"article"!=o.tagName.toLowerCase();)o=o.parentNode;if("article"==o.tagName.toLowerCase()){var n=ueUtils.getElementsByClass("mensaje-privado",o)[0],a=e.form,i=a.elements.mensaje_privado_comentario.value,t=a.elements.mensaje_privado_destinatario.value,r=a.elements.mensaje_privado_asunto.value,s=a.elements.mensaje_privado_texto.value,m=a.elements.mensaje_privado_destacado.value;if(""==s)alert("Por favor, escriba su mensaje.");else if(s.length>1e3)alert("Su mensaje supera el l?mite m?ximo de 1000 caracteres. Res?malo un poco y pruebe de nuevo.");else if(""==r)alert("El mensaje ha de tener un asunto.");else if(r.length>100)alert("El asunto supera el l?mite m?ximo de 100 caracteres. Ac?rtelo un poco y pruebe de nuevo.");else if(""==t)alert("Indique el destinatario de su mensaje.");else{var l="comentario="+encodeValue(i)+"&destinatario="+encodeValue(t)+"&asunto="+encodeValue(r)+"&texto="+encodeValue(s)+"&destacado="+encodeValue(m);enviarPeticionComentarios(urlComentarios+"enviarPrivado.html",l,n,!0,!1)}}},ueComments.follow=function(e,o,n){e.onclick=function(){return!1};for(var a=e;a.parentNode&&"article"!=a.tagName.toLowerCase();)a=a.parentNode;if("article"==a.tagName.toLowerCase()){var i=ueUtils.getElementsByClass("info-usuario",a)[0];"usuario="+encodeValue(o)+"&comentario="+encodeValue(n);enviarPeticionComentarios(urlComentarios+"seguir.html",e.parentNode,!1,!1,function(){ueComments.profiles["#"+n]=newsContainer.find("#"+i)[0].innerHTML})}},ueComments.noFollow=function(e,o){node.onclick=function(){return!1};for(var n=node;n.parentNode&&"article"!=n.tagName.toLowerCase();)n=n.parentNode;if("article"==n.tagName.toLowerCase()){var a=ueUtils.getElementsByClass("info-usuario",n)[0],i="usuario="+encodeValue(e)+"&comentario="+encodeValue(o);enviarPeticionComentarios(urlComentarios+"noSeguir.html",i,node.parentNode,!1,!1,function(){ueComments.profiles={},ueComments.profiles["#"+o]=newsContainer.find("#"+a)[0].innerHTML})}},ueComments.moreComments=function(e,o,n){if(!ueComments.loading){var a=e?newsContainer.find("#botonMasTop")[0]:newsContainer.find("#botonMas")[0],i=newsContainer.find("#listado_comentarios")[0],t=i.getElementsByTagName("section")[0],r=document.createElement("div");r.className="precarga",a.parentNode.insertBefore(r,a),n=n?n:urlComentarios+"listar.html";var s={noticia:ueComments.noticia,portal:ueComments.portal,pagina:o,sinMenu:1};e&&(s.subiendo=1),ueComments.loading=!0,ueAjax.postRequest(n,s,"text",function(o){ueComments.loading=!1;var n=document.createElement("div");n.innerHTML=o;var a=(newsContainer.find("#"+self.botonMasId)[0],n.getElementsByTagName("article"));if(e){for(var r=t.getElementsByTagName("h1")[0],s=0,m=a.length;s<m;++s)t.insertBefore(a[0],r);t.insertBefore(r,t.firstChild);var l=newsContainer.find("#subNavComentariosTop")[0],u=n.getElementsByTagName("div")[0]}else{for(var s=0,m=a.length;s<m;++s)t.appendChild(a[0]);var l=newsContainer.find("#subNavComentarios")[0],u=n.getElementsByTagName("ul")[0]}u?i.replaceChild(u,l):i.removeChild(l),n=a=l=u=null})}},ueComments.searchComment=function(){if(!ueComments.loading){var e=document.getElementById("listado_comentarios"),o=document.getElementById("buscarcomentario");if(!isNaN(parseInt(o.value))){var n=document.createElement("div");n.className="precarga",o.parentNode.appendChild(n),ueComments.loading=!0,ueAjax.postRequest(urlComentarios+"listar.html",{noticia:ueComments.noticia,portal:ueComments.portal,pagina:parseInt(o.value)+1,subiendo:1,sinMenu:0},"text",function(a){ueComments.loading=!1,e.innerHTML=a,window.location.hash="#comentarios",o.parentNode.removeChild(n),n=null})}}}}),ueUtils.addEvent(window,"load",function(){jQuery(document).on("login",function(){ueComments.profiles={},ueComments.modal=!1,document.getElementById("navTopComentarios").style.display="none",e=document.getElementById("hacer-comentario"),e.innerHTML='<div class="precarga"></div>',document.formulario_comentar_comentarios||document.formulario_comentar_comentarios.captcha||ueAjax.postRequest(urlComentarios+"CajaComentario",{noticia:ueComments.noticia,portal:ueComments.portal},"text",function(e){var o=document.getElementById("hacer-comentario");o.innerHTML=e});var e=document.getElementById("comentarios-destacados");e.innerHTML='<div class="precarga"></div>',ueAjax.postRequest(urlComentarios+"listarComentariosUsuariosOficiales.html",{noticia:ueComments.noticia,portal:ueComments.portal},"text",function(e){if(""!=e){ueUtils.removeClass(o,"ocultar");var o=document.getElementById("comentarios-destacados");o.innerHTML=e}}),pasarPaginaComentarios(0)}),jQuery(document).on("logout",function(){ueComments.profiles={},document.getElementById("navTopComentarios").style.display="block",document.getElementById("hacer-comentario").innerHTML="";var e=document.getElementById("comentarios-destacados");e.innerHTML='<div class="precarga"></div>',ueAjax.postRequest(urlComentarios+"listarComentariosUsuariosOficiales.html",{noticia:ueComments.noticia,portal:ueComments.portal},"text",function(e){var o=document.getElementById("comentarios-destacados");o.innerHTML=e}),pasarPaginaComentarios(0)}),jQuery(document).on("close",function(){1==ueComments.modal&&(ueComments.modal=!1)})},!1);