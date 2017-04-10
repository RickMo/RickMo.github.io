var mapa_elecciones=function(e){if("object"==typeof e){var a="object"==typeof e.electoral_data?e.electoral_data.circunscripciones:{},t="object"==typeof e.electoral_data_old&&e.electoral_data_old&&e.electoral_data_old.circunscripciones?e.electoral_data_old.circunscripciones:{},o=2012,n="string"==typeof e.base_url_json_data?e.base_url_json_data:"",l=2016,r="string"==typeof e.elemResultadosId?e.elemResultadosId:null,s="number"==typeof e.max_parties_list&&parseInt(e.max_parties_list)>0?parseInt(e.max_parties_list):6,i="string"==typeof e.elemMapId?e.elemMapId:"js-map-svg-congress",c="boolean"==typeof e.refresh&&e.refresh,d="number"==typeof e.main_timer&&parseInt(e.main_timer)>0?parseInt(e.main_timer):30,p="boolean"==typeof e.tooltipActivo&&e.tooltipActivo,u="tooltipMap",m=null,v=null,g="svg-",f="select-year-mapa-",y="legend-map-",h=null,_=[],b="congreso",E="senado",I="string"==typeof e.default_tipo_camara?e.default_tipo_camara:b,T=[l,o],B={pp:"#2a91d5",psoe:"#e32d42",psc:"#e32d42",pse:"#e32d42",cs:"#eb6615",podemos:"#641766",encomu:"#641766",iu:"#2e613d",up:"#2e613d",upyd:"#c83a8f",cdc:"#282d69",dili:"#282d69",erc:"#fcb743",bildu:"#bfcd28",eajpnv:"#35d226",coalicioncanaria:"#feea36",geroabai:"#d02f12",nos:"#d6edfb",dl:"#282d69","default":"#898A89"},j=!0,C=this;this.selectDataYear=function(e){var a=document.getElementById(f),t=a?a.options[a.selectedIndex].value:l;return t&&""!=t||(t=l),e&&(clearInterval(h),m==b?C.load_congreso_electoral_data(t,c?d:null):m==E&&C.load_senado_electoral_data(t,c?d:null)),t},this.resetDataYear=function(){var e=document.getElementById(f),a=e?e.options[e.selectedIndex].value:l;l!=a&&(document.querySelector("#"+f+' [value="'+l+'"]').selected=!0,v=null)},this.asignarClickProvincia=function(e){C.click_provincia(this,e)},this.asignarClickAreaProvincia=function(e){var a=this.id.replace("area_","");C.click_provincia(document.getElementById(a),e)},this.click_provincia=function(e,a){v=e;var t=C.getActualElectoralData(e.id);C.loadDataResult(t),C.toggleClassLightBox(r),j&&(m==b?envioSC("mapa_"+r):m==E&&envioSC("MAPASENADO")),a&&a.stopPropagation()};var N=35,L=10;this.efectoOpacity=function(e,a){if(e){var t=""==e.style.opacity?1:parseFloat(e.style.opacity);if(a=parseFloat(a),a!=t){0==a&&setTimeout(function(){e.style.display="none"},N*L);for(var o=0;o<N;o++){var n;n=a>t?t+(a-t)/N*o:t-(t-a)/N*o,function(a){setTimeout(function(){C.setOpacity(e,a)},L*o)}(n)}}}},this.setOpacity=function(e,a){e&&(e.style.opacity=a,e.style.MozOpacity=a,e.style.KhtmlOpacity=a,e.style.filter="alpha(opacity="+a+")",e.style.zoom=1)},this.displayNone=function(e){C.setDisplayOpacity(e,"none",0)},this.displayDefault=function(e){C.setDisplayOpacity(e,"block",1)},this.setDisplayOpacity=function(e,a,t){e&&(e.style.opacity=t,e.style.display=a)},this.load_congreso_electoral_data=function(e,r){if(g){r=r||!1;var s=n+e+"/99.json";r||!a?h=setInterval(function(){ueAjax.getRequest(s,"json",function(e){a=e.circunscripciones,C.loadDataResult(a[v.id])})},1e3*r):e==l?C.loadDataResult(a[v.id]):t&&o==e?C.loadDataResult(t[v.id]):ueAjax.getRequest(s,"json",function(e){t=e.circunscripciones,o=e.year,C.loadDataResult(t[v.id])})}},this.load_senado_electoral_data=function(e,r){if(g){r=r||!1;var s=n+e+"/99.json";r||!a?h=setInterval(function(){ueAjax.getRequest(s,"json",function(e){a=e,C.loadDataResult(a[v.id])})},1e3*r):e==l?C.loadDataResult(a[v.id]):t&&o==e?C.loadDataResult(t[v.id]):ueAjax.getRequest(s,"json",function(e){t=e,o=e.year,C.loadDataResult(t[v.id])})}},this.loadDataResult=function(e){var a;m==b&&e.diputados?a="congress":m==E&&e.senadores&&(a="senate"),C.loadDataTableResult(e,a)},this.toggleClassLightBox=function(e){var a=document.getElementById(e).parentNode.parentNode,t=a.className;t.indexOf("lightbox-active")==-1?a.className+=" lightbox-active":a.className=t.replace("lightbox-active","").trim()},this.loadDataTableResult=function(e,a){if(!e)return!1;C.createVoidTable(a),C.loadStandarData(e,a);var t=document.getElementById("electoral-data-results-map-"+a),e=m==E&&e.senadores?e.senadores:e.partidos;C.createResultTable(t,e,a);var o=document.getElementById(r);o.style.display="",C.efectoOpacity(o,1)},this.createVoidTable=function(e){if(document.getElementById("electoral-data-results-map-"+e))document.getElementById("electoral-data-results-map-"+e).innerHTML="",document.getElementById("electoral-data-footer-results-map-"+e)&&document.getElementById("electoral-data-footer-results-map-"+e).remove();else{var a='<h1 id="electoral-data-name-map-'+e+'" class="electoral-data-global-map"><a></a></h1><div class="cierra"><i id="div-cierra-'+e+'" class="fa fa-close icon-close_16_a"></i></div><ul id="electoral-data-global-map-'+e+'"><li></li><li></li></ul><table class="tables tables-'+e+'-map"><thead><tr><th>';a+='<label class="comparar-datos"><span></span><select id="'+f+'">';for(var t=0,o=T.length;t<o;t++)a+='<option value="'+T[t]+'" '+(0==t?'selected="selected"':"")+">"+T[t]+"</option>";a+="</select></label></th>",a+=m==b?'</th><th><abbr title="Esca&ntilde;os">Esc.</abbr></th><th>Votos</th></tr></thead>':'</th><th><abbr title="Porcentaje">%</abbr></th><th>Votos</th></tr></thead>',a+='<tbody id="electoral-data-results-map-'+e+'"></tbody></table><button id="resultados-completos-map-'+e+'" class="btn btn-default">Resultados completos de la provincia</button>',document.getElementById(r).innerHTML=a,document.getElementById(f)&&document.getElementById(f).addEventListener("change",function(){C.selectDataYear(!0)}),document.getElementById("div-cierra-"+e).addEventListener("click",function(){C.efectoOpacity(document.getElementById(r),0),C.resetDataYear(),setTimeout(function(e){C.toggleClassLightBox(r)},350)})}},this.loadStandarData=function(e,a){if(!e)return!1;var t=document.getElementById("electoral-data-global-map-"+a).getElementsByTagName("li"),o=document.getElementById("electoral-data-name-map-"+a);o.getElementsByTagName("a")[0].innerHTML=e.name;var n=e.diputados?e.diputados:e.total_senadores;if(t[0].innerHTML="<span>Esca&ntilde;os a repartir:</span>"+n,t[1].innerHTML='<div class="bars bars-thinner bars-progress bars-progress-b"><ul class="bars-list"><li><p class="bars-label">Escrutinio: '+e.porcentaje_censo_escrutado.replace(".",",")+'%</p><span class="bars-barBg"><span class="bars-bar" style="width:'+e.porcentaje_censo_escrutado+'%"></span></span></li><li><p class="bars-label">Participaci&oacute;n: '+e.porcentaje_total_votantes.replace(".",",")+'%</p><span class="bars-barBg"><span class="bars-bar" style="width:'+e.porcentaje_total_votantes+'%"></span></span></li></ul></div>',document.getElementsByTagName("body")[0].className.includes("galicia")||document.getElementsByTagName("body")[0].className.includes("elecciones-galicia"))var r="/elecciones/elecciones-galicia/resultados/"+l+"/"+e.ccaa_code+"/"+e.code+"/p99.html";else var r="/elecciones/elecciones-pais-vasco/resultados/"+l+"/"+e.ccaa_code+"/"+e.code+"/p99.html";o.getElementsByTagName("a")[0].href=r,document.getElementById("resultados-completos-map-"+a).setAttribute("onclick","window.location='"+r+"';")},this.createResultTable=function(e,a,t){var o=0,n=[];for(var l in a)isNaN(parseFloat(a[l].porcentaje_votos_candidatura))&&(a[l].porcentaje_votos_candidatura="0"),isNaN(parseInt(a.diputados))&&(a.diputados="0"),isNaN(parseInt(a.votos_candidatura))&&(a.votos_candidatura="0");a=C.ordenar_array_data(a,m);for(var l=0,r=a.length;l<r;l++){var i=a[l],c=i.diputados?i.diputados:"nombres";if(c>0||"nombres"==c)if(o<s){var d=document.createElement("tr");e.appendChild(d);var p=document.createElement("td");d.appendChild(p);var u=document.createElement("td");d.appendChild(u);var v=document.createElement("td");d.appendChild(v);var g=document.createElement("span");g.className="party-bullet";var f=i.color&&""!=i.color?i.color:C.macheaColorElementoPorSiglas(i);g.style.backgroundColor=f;var y=document.createElement("span");p.appendChild(g),p.appendChild(y),m==b?(y.innerHTML=i.siglas,u.innerHTML=c,v.innerHTML=i.votos_candidatura):(y.innerHTML='<abbr title="'+i.nombre+" ("+i.siglas+')">'+i.nombre+" ("+i.siglas+")</abbr>",u.innerHTML=i.porcentaje_votos_senador?i.porcentaje_votos_senador.replace(".",",")+"%":i.porcentaje_votos_candidatura.replace(".",",")+"%",v.innerHTML=i.votos_senador?i.votos_senador:i.votos_candidatura),o++}else c>0&&n.push(i)}if(m==b&&n.length>0){var h=document.createElement("tfoot");h.id="electoral-data-footer-results-map-"+t;var d=document.createElement("tr"),_=document.createElement("td");_.setAttribute("colspan","3");var g=document.createElement("span");g.className="party-bullet otros";for(var y=document.createElement("span"),l=0,r=n.length;l<r;l++){isNaN(parseInt(n[l].diputados))&&(n[l].diputados="0");var E=n[l].diputados?n[l].diputados:n[l].senadores;y.innerHTML+=n[l].siglas+": "+E,l!=n.length-1&&(y.innerHTML+=", ")}_.appendChild(g),_.appendChild(y),d.appendChild(_),h.appendChild(d),e.parentNode.appendChild(h)}},this.fillMapProvincias=function(e){if(!e)return!1;for(var a=Object.keys(e),t=document.getElementById(g),o=(t.querySelectorAll("path"),0),n=a.length;o<n;o++){var l=t.querySelector("path[id='"+a[o]+"']");l&&(l.className.baseVal+=" provincia",C.fillColorProvincia(e[l.id],l))}for(var r=t.querySelectorAll("circle"),o=0,n=r.length;o<n;o++){var l=r[o];l&&e[l.id]&&(l.className.baseVal+=" provincia",C.fillColorProvincia(e[l.id],l))}C.pintaLeyendaPartidos()},this.fillColorProvincia=function(a,t){if(!a)return!1;var o=C.obtenerElementoMasVotado(a);if(!o)return!1;var n=o.color&&""!=o.color?o.color:C.macheaColorElementoPorSiglas(o);t.style.fill=n,t.setAttribute("data-color",n);var l=document.getElementById(g).querySelector("path[id='area_"+t.id+"']");l?l.setAttribute("data-name",a.name):t.setAttribute("data-name",a.name);for(var r=!1,s=0,i=_.length;s<i;s++)if(_[s].color==[n]){r=!0;break}if(!r)for(var c=e.electoral_data.partidos,s=0,i=c.length;s<i;s++)if(n==c[s].color){_.push(c[s]);break}},this.obtenerElementoMasVotado=function(e){var e=m==E&&e.senadores?e.senadores:e.partidos;for(var a in e)isNaN(parseFloat(e[a].porcentaje_votos_candidatura))&&(e[a].porcentaje_votos_candidatura="0"),isNaN(parseInt(e.diputados))&&(e.diputados="0"),isNaN(parseInt(e.votos_candidatura))&&(e.votos_candidatura="0");return e=C.ordenar_array_data(e,m),e[0]},this.macheaColorElementoPorSiglas=function(e){for(var a=Object.keys(B),t="",o=0,n=a.length;o<n;o++)C.normalizarCadena(e.siglas).indexOf(a[o])!=-1&&a[o].length>t&&(t=a[o]);return B[t]},this.pintaLeyendaPartidos=function(){_=C.ordenar_array_data(_,m),document.getElementById(y)&&document.getElementById(y).remove();var e=document.createElement("div"),a=document.createElement("ul");e.id=y,e.className="legend legend-map";for(var t=0,o=_.length;t<o;t++){var n=document.createElement("li"),l=document.createElement("span");l.className="party-bullet",l.style.backgroundColor=_[t].color;var r=document.createElement("span");r.innerHTML=_[t].siglas,n.appendChild(l),n.appendChild(r),a.appendChild(n)}e.appendChild(a),document.getElementById(i).parentNode.appendChild(e)},this.settingDefaultTootip=function(){var e=document.getElementById(u);e||(e=document.createElement("div"),e.id=u,e.className="tooltip-elections-2015"),e.style.display="none",e.style.position="absolute",document.body.appendChild(e)};var D=25,M=35;this.ShowTooltip=function(e){var a=C.getMousePosition(e);if(e.target.getAttribute("data-name")){var t=document.getElementById(u),o=document.body.getBoundingClientRect().top;t.innerHTML="",t.style.display="",t.style.left=a.x-D+"px",t.style.top=a.y-(M+o)+o+"px";var n=document.createElement("span");n.className="tooltip-important",n.innerHTML=e.target.getAttribute("data-name"),t.appendChild(n)}},this.HideTooltip=function(e){var a=document.getElementById(u);a.style.display="none"},this.normalizarCadena=function(e){return e?(e=e.toLowerCase(),e=e.replace(/[??????]/g,"a"),e=e.replace(/[????]/g,"e"),e=e.replace(/[????]/g,"i"),e=e.replace(/[?????]/g,"o"),e=e.replace(/[????]/g,"u"),e=e.replace(/[?]/g,"n"),e=e.replace(/[?]/g,"c"),e=e.replace(/[-]/g,""),e=e.replace(/ /g,""),e=e.replace(/[^a-z0-9-]/g,"")):""},this.getMousePosition=function(e){e=e||window.event;var a={x:0,y:0};if(e.pageX||e.pageY)a.x=e.pageX,a.y=e.pageY;else if(e.clientX||e.clientY){var t=document.documentElement,o=document.body;a.x=e.clientX+(t.scrollLeft||o.scrollLeft)-(t.clientLeft||0),a.y=e.clientY+(t.scrollTop||o.scrollTop)-(t.clientTop||0)}else e.changedTouches&&(a.x=e.changedTouches[0].pageX,a.y=e.changedTouches[0].pageY);return a},this.ordenar_array_data=function(e,a){return a==b?e.sort(function(e,a){return parseFloat(a.porcentaje_votos_candidatura)-parseFloat(e.porcentaje_votos_candidatura)}):a==E&&e.sort(function(e,a){return a.votos_senador&&e.votos_senador?parseFloat(a.votos_senador.replace(/[.]/g,""))-parseFloat(e.votos_senador.replace(/[.]/g,"")):a.porcentaje_votos_senador&&e.porcentaje_votos_senador?parseFloat(a.porcentaje_votos_senador)-parseFloat(e.porcentaje_votos_senador):parseFloat(a.porcentaje_votos_candidatura)-parseFloat(e.porcentaje_votos_candidatura)}),e},this.setFuncionalidadTooltip=function(e,a){p&&("activo"==a?(e.addEventListener("mouseout",C.HideTooltip,!1),e.addEventListener("mousemove",C.ShowTooltip,!1)):"inactivo"==a&&(e.removeEventListener("mouseout",C.HideTooltip),e.removeEventListener("mousemove",C.ShowTooltip)))},this.asignarFuncionalidadMapa=function(e){if(!e)return!1;C.fillMapProvincias(e),C.settingDefaultTootip();for(var a=document.getElementById(g),t=a.querySelectorAll(".provincia"),o=0,n=t.length;o<n;++o){var l=a.querySelector("path[id='area_"+t[o].id+"']");l?(l.addEventListener("click",C.asignarClickAreaProvincia,!1),C.setFuncionalidadTooltip(l,"activo")):(t[o].addEventListener("click",C.asignarClickProvincia,!1),C.setFuncionalidadTooltip(t[o],"activo"))}},this.getActualElectoralData=function(e){var o=C.selectDataYear()==l?a:t;return!!o&&(e?o[e]:o)},this.initElecciones=function(){C.displayNone(document.getElementById(r)),m=I,g=i,y+=i,f+=m;var e=document.getElementById(i);C.asignarFuncionalidadMapa(a),C.displayDefault(e)},C.initElecciones()}};