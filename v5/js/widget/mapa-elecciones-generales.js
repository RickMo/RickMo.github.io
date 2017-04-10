var mapa_elecciones=function(e){if("object"==typeof e){var t="object"==typeof e.electoral_data?e.electoral_data.circunscripciones:{},a="object"==typeof e.electoral_data_old&&e.electoral_data_old&&e.electoral_data_old.circunscripciones?e.electoral_data_old.circunscripciones:{},o="object"==typeof e.electoral_data_old&&e.electoral_data_old&&e.electoral_data_old.year?e.electoral_data_old.year:0,n="string"==typeof e.base_url_json_data?e.base_url_json_data:"",l="string"==typeof e.default_year?e.default_year:e.electoral_data&&e.electoral_data.year,r="string"==typeof e.elemResultadosId?e.elemResultadosId:null,i="number"==typeof e.max_parties_list&&parseInt(e.max_parties_list)>0?parseInt(e.max_parties_list):6,s="string"==typeof e.elemMapId?e.elemMapId:"js-map-svg-congress",c="boolean"==typeof e.refresh&&e.refresh,d="number"==typeof e.main_timer&&parseInt(e.main_timer)>0?parseInt(e.main_timer):30,p="boolean"==typeof e.tooltipActivo&&e.tooltipActivo,u="tooltipMap",m=null,v=null,g="svg-",f="select-year-mapa-",y="legend-map-",h=null,_=[],b="congreso",E="senado",T="string"==typeof e.default_tipo_camara?e.default_tipo_camara:b,I=[l,o],C={pp:"#2a91d5",psoe:"#e32d42",psc:"#e32d42",pse:"#e32d42",cs:"#eb6615",podemos:"#641766",encomu:"#641766",iu:"#2e613d",up:"#2e613d",upyd:"#c83a8f",cdc:"#282d69",dili:"#282d69",erc:"#fcb743",bildu:"#bfcd28",eajpnv:"#35d226",coalicioncanaria:"#feea36",geroabai:"#d02f12",nos:"#d6edfb",dl:"#282d69","default":"#898A89"},B=!0,j=this;this.selectDataYear=function(e){var t=document.getElementById(f),a=t?t.options[t.selectedIndex].value:l;return a&&""!=a||(a=l),e&&(clearInterval(h),m==b?j.load_congreso_electoral_data(a,c?d:null):m==E&&j.load_senado_electoral_data(a,c?d:null)),a},this.resetDataYear=function(){var e=document.getElementById(f),t=e?e.options[e.selectedIndex].value:l;l!=t&&(document.querySelector("#"+f+' [value="'+l+'"]').selected=!0,v=null)},this.asignarClickProvincia=function(e){j.click_provincia(this,e)},this.asignarClickAreaProvincia=function(e){var t=this.id.replace("area_","");j.click_provincia(document.getElementById(t),e)},this.click_provincia=function(e,t){v=e;var a=j.getActualElectoralData(e.id);j.loadDataResult(a),j.toggleClassLightBox(r),B&&(m==b?envioSC("MAPACONGRESO"):m==E&&envioSC("MAPASENADO")),t&&t.stopPropagation()};var L=35,M=10;this.efectoOpacity=function(e,t){if(e){var a=""==e.style.opacity?1:parseFloat(e.style.opacity);if(t=parseFloat(t),t!=a){0==t&&setTimeout(function(){e.style.display="none"},L*M);for(var o=0;o<L;o++){var n;n=t>a?a+(t-a)/L*o:a-(a-t)/L*o,function(t){setTimeout(function(){j.setOpacity(e,t)},M*o)}(n)}}}},this.setOpacity=function(e,t){e&&(e.style.opacity=t,e.style.MozOpacity=t,e.style.KhtmlOpacity=t,e.style.filter="alpha(opacity="+t+")",e.style.zoom=1)},this.displayNone=function(e){j.setDisplayOpacity(e,"none",0)},this.displayDefault=function(e){j.setDisplayOpacity(e,"block",1)},this.setDisplayOpacity=function(e,t,a){e&&(e.style.opacity=a,e.style.display=t)},this.load_congreso_electoral_data=function(e,r){if(g){r=r||!1;var i=n+e+"/99.json";r||!t?h=setInterval(function(){ueAjax.getRequest(i,"json",function(e){t=e.circunscripciones,j.loadDataResult(t[v.id])})},1e3*r):e==l?j.loadDataResult(t[v.id]):a&&o==e?j.loadDataResult(a[v.id]):ueAjax.getRequest(i,"json",function(e){a=e.circunscripciones,o=e.year,j.loadDataResult(a[v.id])})}},this.load_senado_electoral_data=function(e,r){if(g){r=r||!1;var i=n+e+"/99.json";r||!t?h=setInterval(function(){ueAjax.getRequest(i,"json",function(e){t=e,j.loadDataResult(t[v.id])})},1e3*r):e==l?j.loadDataResult(t[v.id]):a&&o==e?j.loadDataResult(a[v.id]):ueAjax.getRequest(i,"json",function(e){a=e,o=e.year,j.loadDataResult(a[v.id])})}},this.loadDataResult=function(e){var t;m==b&&e.diputados?t="congress":m==E&&e.senadores&&(t="senate"),j.loadDataTableResult(e,t)},this.toggleClassLightBox=function(e){var t=document.getElementById(e).parentNode.parentNode,a=t.className;a.indexOf("lightbox-active")==-1?t.className+=" lightbox-active":t.className=a.replace("lightbox-active","").trim()},this.loadDataTableResult=function(e,t){if(!e)return!1;j.createVoidTable(t),j.loadStandarData(e,t);var a=document.getElementById("electoral-data-results-map-"+t),e=m==E&&e.senadores?e.senadores:e.partidos;j.createResultTable(a,e,t);var o=document.getElementById(r);o.style.display="",j.efectoOpacity(o,1)},this.createVoidTable=function(e){if(document.getElementById("electoral-data-results-map-"+e))document.getElementById("electoral-data-results-map-"+e).innerHTML="",document.getElementById("electoral-data-footer-results-map-"+e)&&document.getElementById("electoral-data-footer-results-map-"+e).remove();else{var t='<h1 id="electoral-data-name-map-'+e+'" class="electoral-data-global-map"><a></a></h1><div class="cierra"><i id="div-cierra-'+e+'" class="fa fa-close icon-close_16_a"></i></div><ul id="electoral-data-global-map-'+e+'"><li></li><li></li></ul><table class="tables tables-'+e+'-map"><thead><tr><th>';t+='<label class="comparar-datos"><span></span><select id="'+f+'">';for(var a=0,o=I.length;a<o;a++)t+='<option value="'+I[a]+'" '+(0==a?'selected="selected"':"")+">"+I[a]+"</option>";t+="</select></label></th>",t+=m==b?'</th><th><abbr title="Esca&ntilde;os">Esc.</abbr></th><th>Votos</th></tr></thead>':'</th><th><abbr title="Porcentaje">%</abbr></th><th>Votos</th></tr></thead>',t+='<tbody id="electoral-data-results-map-'+e+'"></tbody></table><button id="resultados-completos-map-'+e+'" class="btn btn-default">Resultados completos de la provincia</button>',document.getElementById(r).innerHTML=t,document.getElementById(f)&&document.getElementById(f).addEventListener("change",function(){j.selectDataYear(!0)}),document.getElementById("div-cierra-"+e).addEventListener("click",function(){j.efectoOpacity(document.getElementById(r),0),j.resetDataYear(),setTimeout(function(e){j.toggleClassLightBox(r)},350)})}},this.loadStandarData=function(e,t){if(!e)return!1;var a=document.getElementById("electoral-data-global-map-"+t).getElementsByTagName("li"),o=document.getElementById("electoral-data-name-map-"+t);o.getElementsByTagName("a")[0].innerHTML=e.name;var n=e.diputados?e.diputados:e.total_senadores;a[0].innerHTML=e.diputados?"<span>Esca&ntilde;os a repartir:</span>"+n:"<span>Senadores:</span>"+n,a[1].innerHTML='<div class="bars bars-thinner bars-progress bars-progress-b"><ul class="bars-list"><li><p class="bars-label">Escrutinio: '+e.porcentaje_censo_escrutado.replace(".",",")+'%</p><span class="bars-barBg"><span class="bars-bar" style="width:'+e.porcentaje_censo_escrutado+'%"></span></span></li><li><p class="bars-label">Participaci&oacute;n: '+e.porcentaje_total_votantes.replace(".",",")+'%</p><span class="bars-barBg"><span class="bars-bar" style="width:'+e.porcentaje_total_votantes+'%"></span></span></li></ul></div>';var r="/elecciones/elecciones-generales/resultados/"+m+"/"+l+"/"+e.ccaa_code+"/"+e.code+"/p99.html";o.getElementsByTagName("a")[0].href=r,document.getElementById("resultados-completos-map-"+t).setAttribute("onclick","window.location='"+r+"';")},this.createResultTable=function(e,t,a){var o=0,n=[];t=j.ordenar_array_data(t,m);for(var l=0,r=t.length;l<r;l++){var s=t[l],c=s.diputados?s.diputados:"nombres";if(c>0||"nombres"==c)if(o<i){var d=document.createElement("tr");e.appendChild(d);var p=document.createElement("td");d.appendChild(p);var u=document.createElement("td");d.appendChild(u);var v=document.createElement("td");d.appendChild(v);var g=document.createElement("span");g.className="party-bullet";var f=s.color&&""!=s.color?s.color:j.macheaColorElementoPorSiglas(s);g.style.backgroundColor=f;var y=document.createElement("span");p.appendChild(g),p.appendChild(y),m==b?(y.innerHTML=s.siglas,u.innerHTML=c,v.innerHTML=s.votos_candidatura):(y.innerHTML='<abbr title="'+s.nombre+" ("+s.siglas+')">'+s.nombre+" ("+s.siglas+")</abbr>",u.innerHTML=s.porcentaje_votos_senador?s.porcentaje_votos_senador.replace(".",",")+"%":s.porcentaje_votos_candidatura.replace(".",",")+"%",v.innerHTML=s.votos_senador?s.votos_senador:s.votos_candidatura),o++}else c>0&&n.push(s)}if(m==b&&n.length>0){var h=document.createElement("tfoot");h.id="electoral-data-footer-results-map-"+a;var d=document.createElement("tr"),_=document.createElement("td");_.setAttribute("colspan","3");var g=document.createElement("span");g.className="party-bullet otros";for(var y=document.createElement("span"),l=0,r=n.length;l<r;l++){var E=n[l].diputados?n[l].diputados:n[l].senadores;y.innerHTML+=n[l].siglas+": "+E,l!=n.length-1&&(y.innerHTML+=", ")}_.appendChild(g),_.appendChild(y),d.appendChild(_),h.appendChild(d),e.parentNode.appendChild(h)}},this.fillMapProvincias=function(e){if(!e)return!1;for(var t=Object.keys(e),a=document.getElementById(g),o=(a.querySelectorAll("path"),0),n=t.length;o<n;o++){var l=a.querySelector("path[id='"+t[o]+"']");l&&(l.className.baseVal+=" provincia",j.fillColorProvincia(e[l.id],l))}for(var r=a.querySelectorAll("circle"),o=0,n=r.length;o<n;o++){var l=r[o];l&&e[l.id]&&(l.className.baseVal+=" provincia",j.fillColorProvincia(e[l.id],l))}j.pintaLeyendaPartidos()},this.fillColorProvincia=function(t,a){if(!t)return!1;var o=j.obtenerElementoMasVotado(t);if(!o)return!1;var n=o.color&&""!=o.color?o.color:j.macheaColorElementoPorSiglas(o);a.style.fill=n,a.setAttribute("data-color",n);var l=document.getElementById(g).querySelector("path[id='area_"+a.id+"']");l?l.setAttribute("data-name",t.name):a.setAttribute("data-name",t.name);for(var r=!1,i=0,s=_.length;i<s;i++)if(_[i].color==[n]){r=!0;break}if(!r)for(var c=e.electoral_data.partidos,i=0,s=c.length;i<s;i++)if(n==c[i].color){_.push(c[i]);break}},this.obtenerElementoMasVotado=function(e){var e=m==E&&e.senadores?e.senadores:e.partidos;return e=j.ordenar_array_data(e,m),e[0]},this.macheaColorElementoPorSiglas=function(e){for(var t=Object.keys(C),a="",o=0,n=t.length;o<n;o++)j.normalizarCadena(e.siglas).indexOf(t[o])!=-1&&t[o].length>a&&(a=t[o]);return C[a]},this.pintaLeyendaPartidos=function(){_=j.ordenar_array_data(_,m),document.getElementById(y)&&document.getElementById(y).remove();var e=document.createElement("div"),t=document.createElement("ul");e.id=y,e.className="legend legend-map";for(var a=0,o=_.length;a<o;a++){var n=document.createElement("li"),l=document.createElement("span");l.className="party-bullet",l.style.backgroundColor=_[a].color;var r=document.createElement("span");r.innerHTML=_[a].siglas,n.appendChild(l),n.appendChild(r),t.appendChild(n)}e.appendChild(t),document.getElementById(s).parentNode.appendChild(e)},this.settingDefaultTootip=function(){var e=document.getElementById(u);e||(e=document.createElement("div"),e.id=u,e.className="tooltip-elections-2015"),e.style.display="none",e.style.position="absolute",document.body.appendChild(e)};var D=25,A=35;this.ShowTooltip=function(e){var t=j.getMousePosition(e);if(e.target.getAttribute("data-name")){var a=document.getElementById(u),o=document.body.getBoundingClientRect().top;a.innerHTML="",a.style.display="",a.style.left=t.x-D+"px",a.style.top=t.y-(A+o)+o+"px";var n=document.createElement("span");n.className="tooltip-important",n.innerHTML=e.target.getAttribute("data-name"),a.appendChild(n)}},this.HideTooltip=function(e){var t=document.getElementById(u);t.style.display="none"},this.normalizarCadena=function(e){return e?(e=e.toLowerCase(),e=e.replace(/[??????]/g,"a"),e=e.replace(/[????]/g,"e"),e=e.replace(/[????]/g,"i"),e=e.replace(/[?????]/g,"o"),e=e.replace(/[????]/g,"u"),e=e.replace(/[?]/g,"n"),e=e.replace(/[?]/g,"c"),e=e.replace(/[-]/g,""),e=e.replace(/ /g,""),e=e.replace(/[^a-z0-9-]/g,"")):""},this.getMousePosition=function(e){e=e||window.event;var t={x:0,y:0};if(e.pageX||e.pageY)t.x=e.pageX,t.y=e.pageY;else if(e.clientX||e.clientY){var a=document.documentElement,o=document.body;t.x=e.clientX+(a.scrollLeft||o.scrollLeft)-(a.clientLeft||0),t.y=e.clientY+(a.scrollTop||o.scrollTop)-(a.clientTop||0)}else e.changedTouches&&(t.x=e.changedTouches[0].pageX,t.y=e.changedTouches[0].pageY);return t},this.ordenar_array_data=function(e,t){return t==b?e.sort(function(e,t){return parseFloat(t.porcentaje_votos_candidatura)-parseFloat(e.porcentaje_votos_candidatura)}):t==E&&e.sort(function(e,t){return t.votos_senador&&e.votos_senador?parseFloat(t.votos_senador.replace(/[.]/g,""))-parseFloat(e.votos_senador.replace(/[.]/g,"")):t.porcentaje_votos_senador&&e.porcentaje_votos_senador?parseFloat(t.porcentaje_votos_senador)-parseFloat(e.porcentaje_votos_senador):parseFloat(t.porcentaje_votos_candidatura)-parseFloat(e.porcentaje_votos_candidatura)}),e},this.setFuncionalidadTooltip=function(e,t){p&&("activo"==t?(e.addEventListener("mouseout",j.HideTooltip,!1),e.addEventListener("mousemove",j.ShowTooltip,!1)):"inactivo"==t&&(e.removeEventListener("mouseout",j.HideTooltip),e.removeEventListener("mousemove",j.ShowTooltip)))},this.asignarFuncionalidadMapa=function(e){if(!e)return!1;j.fillMapProvincias(e),j.settingDefaultTootip();for(var t=document.getElementById(g),a=t.querySelectorAll(".provincia"),o=0,n=a.length;o<n;++o){var l=t.querySelector("path[id='area_"+a[o].id+"']");l?(l.addEventListener("click",j.asignarClickAreaProvincia,!1),j.setFuncionalidadTooltip(l,"activo")):(a[o].addEventListener("click",j.asignarClickProvincia,!1),j.setFuncionalidadTooltip(a[o],"activo"))}},this.getActualElectoralData=function(e){var o=j.selectDataYear()==l?t:a;return!!o&&(e?o[e]:o)},this.initElecciones=function(){j.displayNone(document.getElementById(r)),m=T,g+=m,y+=m,f+=m;var e=document.getElementById(s);e.querySelector("svg").id=g,j.asignarFuncionalidadMapa(t),j.displayDefault(e)},j.initElecciones()}};