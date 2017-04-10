var graficos_elecciones=function(){function e(e){var t=0;if(e.offsetParent){do t+=e.offsetTop;while(e=e.offsetParent);return[t]}}function t(e,t){return function(){var a=d3.interpolateNumber(e,t);return function(e){scrollTo(0,a(e))}}}function a(a){var n=window.pageYOffset,r=!0,o=a.currentTarget.parentNode;do"SECTION"==o.tagName?r=!1:o=o.parentNode;while(r);var i=parseInt(e(o));n>i&&(i-=60),d3.transition().duration(750).tween("scroll",t(n,i))}var n,r,o,s,d,c,p,u,m,b,_=this,h=[],v=0,f=0,y=0,E=!0,T=!0,j=!0,C=!1,A=!0,L="",I=5,M=0,B=0,H=115,x=17,N="select-year-table-",k="2016",w=[2016,2015],z=!0,O={pp:20,psoe:20,cs:3,"unidos-podemos":7,"eaj-pnv":1,esquerra:2,cdc:2},P={pp:21,psoe:18,cs:2,podemos:4,"eaj-pnv":1,"erc-catsi":1,"podemos-compromis":1};this.normalizarCadena=function(e){return e?(e=e.toLowerCase(),e=e.replace(/[������]/g,"a"),e=e.replace(/[����]/g,"e"),e=e.replace(/[����]/g,"i"),e=e.replace(/[�����]/g,"o"),e=e.replace(/[����]/g,"u"),e=e.replace(/[�]/g,"n"),e=e.replace(/[�]/g,"c"),e=e.replace(/ /g,"-"),e=e.replace(/[^a-z0-9-]/g,"")):""},this.graficoElecciones=function(e){if("object"==typeof e){r="string"==typeof e.base_url?e.base_url:"",o="object"==typeof e.data_grafico?e.data_grafico:"",s="object"==typeof e.data_grafico_old?e.data_grafico_old:"",d="string"==typeof e.clave_json?e.clave_json:"";var t="string"==typeof e.id_elemento_html?e.id_elemento_html:"";m="string"==typeof e.id_contenedor_alianzas_html?e.id_contenedor_alianzas_html:"",p="string"==typeof e.id_contenedor_html?e.id_contenedor_html:"",u="string"==typeof e.id_leyenda_html?e.id_leyenda_html:"",b="number"==typeof e.ancho_grafico?e.ancho_grafico:5,c=document.getElementById(t),n="string"==typeof e.tipo_grafico?e.tipo_grafico:"semicirculo",L="string"==typeof e.tipo_camara?e.tipo_camara:"congreso",E="boolean"!=typeof e.tooltipActivo||e.tooltipActivo,T="boolean"!=typeof e.leyendaMayoria||e.leyendaMayoria,j="boolean"!=typeof e.grafico_actual||e.grafico_actual,C="boolean"==typeof e.grafico_portada&&e.grafico_portada,A="boolean"!=typeof e.grafico_independiente||e.grafico_independiente,M="number"==typeof e.min_porcentaje?e.min_porcentaje:0,B="number"==typeof e.min_representacion?e.min_representacion:0,_.settingDefaultTootip();var a=new Object;a.id_elemento_html=t,a.clave_json=d,a.base_url=r,a.ancho_grafico=b,j?(a.pWidth=parseInt(getComputedStyle(c).getPropertyValue("width"))-2*I-x,_.initGraficoElecciones(a)):(a.pWidth=parseInt(getComputedStyle(c).getPropertyValue("width"))-H,_.initGraficoElecciones(a))}},this.initGraficoElecciones=function(e){""!=o?_.codificacion_datos(e):_.grafico_sin_datos(e.id_elemento_html)},this.grafico_sin_datos=function(e){switch(n){case"pactometro":_.alianzas_pactometro(e)}},this.codificacion_datos=function(e){if("2015"==e.year)var t=P;else var t=O;if(y=o[e.clave_json],v=o[e.clave_json],o.partidos)for(var a in o.partidos)parseInt(o.partidos[a][e.clave_json])>B&&(f+=parseInt(o.partidos[a][e.clave_json])),h[a]={codigo_candidatura:o.partidos[a].code?""+o.partidos[a].code:"",color:o.partidos[a].color?""+o.partidos[a].color:"",siglas:o.partidos[a].siglas?""+o.partidos[a].siglas:"",representacion_partido:o.partidos[a][e.clave_json]?""+parseInt(o.partidos[a][e.clave_json]):"",porcentaje:o.partidos[a].porcentaje_votos_candidatura?""+o.partidos[a].porcentaje_votos_candidatura:"",votos_candidatura:o.partidos[a].votos_candidatura?""+o.partidos[a].votos_candidatura:""};switch(n){case"barras-porcentaje":_.grafico_barras_porcentaje(e.id_elemento_html,h,B);break;case"barras-candidatos":_.grafico_barras_candidatos(e.id_elemento_html,h,f);break;case"tabla":_.carga_datos_tabla(e.id_elemento_html,m);break;case"senado-barras":_.senado_barras(e.id_elemento_html,h,o.senadores,t);break;case"barra-progreso":_.barras_escrutinio_participacion(e.id_elemento_html,o);break;case"semicirculo":_.dibuja_hemiciclo(e,m);break;case"tabla-datos":_.crea_tabla_elecciones(e.id_elemento_html,o);break;case"tabla-partido-interior":_.tabla_partidos_interiores(e.id_elemento_html,o,B);break;case"tabla-nombres-senadores":_.tabla_senadores_interiores(e.id_elemento_html,o)}},this.ordenar_array_porcentaje_votos=function(e){e.sort(function(e,t){return parseFloat(t.porcentaje_votos_senador)-parseFloat(e.porcentaje_votos_senador)})},this.ordenar_array_porcentaje_votos_partido=function(e){e.sort(function(e,t){return parseFloat(t.porcentaje_votos_candidatura)-parseFloat(e.porcentaje_votos_candidatura)})},this.ordenar_array_data=function(e){if("diputados"==e||"senadores"==e)h.sort(function(e,t){return t.representacion_partido-e.representacion_partido});else{h.sort(function(e,t){return t.porcentaje-e.porcentaje});var t=0;for(i=0,l=h.length;i<l;i++)h[i].porcentaje>M&&(t+=parseInt(h[i].porcentaje)),grados=180/t}},this.dibuja_elementos=function(e,t){var a=e.g.append(t);switch(t){case"text":a.attr("transform",function(t){return arcText=d3.svg.arc().innerRadius(e.radius).outerRadius(e.radius-e.ancho).startAngle(e.animando*e.t).endAngle((e.angulo+1)*e.t),"translate("+arcText.centroid(t)+")"}).attr("class","text-diputados").attr("dy","0.30em").style("text-anchor","middle").text(function(t){return e.texto});break;case"circle":a.attr("transform",function(t){return arcText=d3.svg.arc().innerRadius(e.radius).outerRadius(e.radius-e.ancho).startAngle(e.animando*e.t).endAngle((e.angulo+1)*e.t),"translate("+arcText.centroid(t)+")"}).attr("r","14px").style("fill","white");break;case"line":a.attr("x1",e.width/v*parseInt(v/2+1)+parseInt(e.g.style("padding"))).attr("y1",-50).attr("x2",e.width/v*parseInt(v/2+1)+parseInt(e.g.style("padding"))).attr("y2",2*e.ancho+10).attr("class","linea-absoluta").attr("stroke","gray")}},this.arcTween=function(e,t,a){e.attrTween("d",function(e){var n=d3.interpolate(e.endAngle,t);return function(t){return e.endAngle=n(t),a(e)}})},this.dibuja_path=function(e){e.g.append("path").datum({endAngle:e.angulo*e.t}).style("fill","#E6E6E6").attr("d",e.arc),e.g.append("path").datum({endAngle:(e.animando-.25)*e.t}).style("fill",h[i].color).attr("d",e.arc).attr("opacity",j?1:.25).transition().duration(1e3).call(_.arcTween,e.angulo*e.t,e.arc)},this.dibuja_svg=function(e,t){var a=d3.select("#"+e.id_elemento_html).append("svg").attr("id","svg-"+e.id_elemento_html).attr("class","svg-hemicycle").attr("data-div-alianza",t).attr("width",e.width+2*I).attr("height","circulo"==e.tipo_grafico?e.height:e.height/2+2*I).style("padding",j?I+"px":I+"px");return a},this.dibuja_arco=function(e){var t=d3.svg.arc().innerRadius(e.radius).outerRadius(e.radius-e.ancho).startAngle((e.angulo+e.desfase)*e.t);return t},this.leyenda_central=function(e){var t=d3.select("#"+e.id_elemento_html).append("div").attr("id","contenedor-centro-"+e.id_elemento_html).attr("class","cont-centro-hemicycle"),t=d3.select("#contenedor-centro-"+e.id_elemento_html).append("div").attr("id","centro-"+e.id_elemento_html).attr("class","centro-hemicycle");if(!C){t.append("span").attr("id","id_nombre_partido_"+L).attr("class","resultados_nombre_partido"),t.append("span").attr("id","id_partido_resultados_"+L).attr("class","partido_resultados")}},this.dibuja_g=function(e,t){var a=e.svg.append("g").attr("transform","translate("+e.width/2+","+e.height/2+")").attr("id",j?"actual_"+t.id+"_"+L:"anterior_"+t.id+"_"+L).attr("data-name-partido",t.siglas).attr("data-porcentaje",t.porcentaje);return"congress"==L?a.attr("data-esc",t.representacion_partido):"senate"==L&&a.attr("data-senadores",t.representacion_partido),a},this.dibuja_hemiciclo_votos=function(e){for(i=0,l=h.length;i<l;i++)h[i].porcentaje>M&&(h[i].porcentaje<=51?(desplazamiento=-h[i].porcentaje,e.angulo=e.angulo-desplazamiento*e.grados,e.animando=e.angulo+desplazamiento*e.grados):(desplazamiento=h[i].porcentaje,e.angulo=e.angulo+desplazamiento*e.grados,e.animando=e.angulo-desplazamiento*e.grados)),_.dibuja_path(e),e.desfase=.25,_.dibuja_arco(e),h[i].porcentaje>M?j&&(e.texto="",_.dibuja_elementos(e,"circle"),e.texto=h[i].representacion_partido,_.dibuja_elementos(e,"text")):h[i].porcentaje<M,i!=h.length-1&&(g=e.svg.append("g").attr("transform","translate("+e.width/2+","+e.height/2+")").attr("id",j?h[i+1].codigo_candidatura:"anterior_"+h[i+1].codigo_candidatura).attr("data-name-partido",h[i+1].siglas))},this.dibuja_hemiciclo_candidatos=function(e){for(i=0,l=h.length;i<l;i++)if(h[i].representacion_partido<=parseInt(f/2+1)?(desplazamiento=-h[i].representacion_partido,e.angulo=e.angulo-desplazamiento*e.grados,e.animando=e.angulo+desplazamiento*e.grados):(desplazamiento=h[i].representacion_partido,e.angulo=e.angulo+desplazamiento*e.grados,e.animando=e.angulo-desplazamiento*e.grados),h[i].representacion_partido>B&&(_.dibuja_path(e),e.desfase=.5,e.arc=_.dibuja_arco(e),h[i].porcentaje.replace(",",".")>M&&h[i].representacion_partido>B?j&&(e.texto="",_.dibuja_elementos(e,"circle"),e.texto=h[i].representacion_partido,_.dibuja_elementos(e,"text")):"senate"==L&&100*h[i].representacion_partido/208>M&&j&&(e.texto="",_.dibuja_elementos(e,"circle"),e.texto=h[i].representacion_partido,_.dibuja_elementos(e,"text")),i!=h.length-1&&h[i+1].representacion_partido>B)){var t=new Object;t.id=h[i+1].codigo_candidatura,t.siglas=h[i+1].siglas,t.representacion_partido=h[i+1].representacion_partido,t.porcentaje=h[i+1].porcentaje,e.g=_.dibuja_g(e,t),j||C||("congress"==L&&(e.g.attr("data-name","<span>"+h[i+1].siglas+"</span><span>Esca&ntilde;os: "+h[i+1].representacion_partido+"</span> <span>Porcentaje: "+h[i+1].porcentaje.replace(".",",")+"%</span>"),_.setFuncionalidadTooltip(e.g[0][0],"activo")),"senate"==L&&(e.g.attr("data-name","<span>"+h[i+1].siglas+"</span><span>Senadores: "+h[i+1].representacion_partido+"</span>"),_.setFuncionalidadTooltip(e.g[0][0],"activo")))}},this.pintaLeyendaPartidosHemiciclo=function(e){var t=4,a=document.createElement("div"),n=document.createElement("ul");for(a.className="legend-map",n.innerHTML="",i=0;i<t;i++){var r=document.createElement("li"),o=document.createElement("span");o.className="party-bullet",o.style.backgroundColor=h[i].color;var s=document.createElement("span");s.innerHTML=h[i].siglas,r.appendChild(o),r.appendChild(s),n.appendChild(r)}a.appendChild(n);e.split("-");d3.select("#"+p)[0][0].appendChild(a)},this.dibuja_hemiciclo=function(e,t){var a=e.pWidth,r=a,o="circulo"==n?2:1,i=Math.PI/(180/o),s=Math.min(a,r)/2,d=180/f,l=0,c=-90*o;_.ordenar_array_data(e.clave_json),e.width=a,e.height=r,e.svg=_.dibuja_svg(e,t),d3.select("#"+e.id_elemento_html).style("height","circulo"==n?r:r/2+2*I+"px");var p=new Object;p.id=h[0].codigo_candidatura,p.siglas=h[0].siglas,p.representacion_partido=h[0].representacion_partido,p.porcentaje=h[0].porcentaje,e.g=_.dibuja_g(e,p),j?(d3.select("#"+u).style("width",a+"px"),_.leyenda_central(e)):(d3.select("#"+e.id_elemento_html).style("margin-top","circulo"==n?-r:-(r/2+2*I)+"px"),C||("congress"==L&&(e.g.attr("data-name","<span>"+h[0].siglas+"</span><span>Esca&ntilde;os: "+h[0].representacion_partido+"</span> <span>Porcentaje: "+h[0].porcentaje.replace(".",",")+"%</span>"),_.setFuncionalidadTooltip(e.g[0][0],"activo")),"senate"==L&&(e.g.attr("data-name","<span>"+h[0].siglas+"</span><span>Senadores: "+h[0].representacion_partido+"</span>"),_.setFuncionalidadTooltip(e.g[0][0],"activo")))),e.desfase=.25,e.angulo=c,e.t=i,e.animando=l,e.radius=s,e.ancho=b,e.grados=d,e.arc=_.dibuja_arco(e),"diputados"!=e.clave_json&&"senadores"!=e.clave_json?_.dibuja_hemiciclo_votos(e):_.dibuja_hemiciclo_candidatos(e),C?j&&_.pintaLeyendaPartidosHemiciclo(e.id_elemento_html):(W(),J())},this.settingDefaultTootip=function(e){var t=document.getElementById("tooltipGrafico");t||(t=document.createElement("DIV"),t.id="tooltipGrafico",t.className="tooltip-elections-2015"),t.style.display="none",t.style.position="absolute",document.body.appendChild(t)};var S=10,R=65,F=95;this.ShowTooltip=function(e){var t=_.getMousePosition(e);if(e.target.parentNode.getAttribute("data-name")){var a=document.getElementById("tooltipGrafico"),n=document.body.getBoundingClientRect().top;a.style.display="",a.style.left=t.x-S+"px",a.style.top=t.y-(R+n)+n+"px",a.innerHTML=e.target.parentNode.getAttribute("data-name")}else if(e.target.getAttribute("data-name")){var a=document.getElementById("tooltipGrafico"),n=document.body.getBoundingClientRect().top;a.style.display="",a.style.left=t.x-S+"px",a.style.top=t.y-(F+n)+n+"px",a.innerHTML=e.target.getAttribute("data-name")}},this.HideTooltip=function(e){var t=document.getElementById("tooltipGrafico");t.style.display="none"},this.setFuncionalidadTooltip=function(e,t){E&&("activo"==t?(e.addEventListener("mouseout",_.HideTooltip,!1),e.addEventListener("mousemove",_.ShowTooltip,!1)):"inactivo"==t&&(e.removeEventListener("mouseout",_.HideTooltip),e.removeEventListener("mousemove",_.ShowTooltip)))},this.getMousePosition=function(e){e=e||window.event;var t={x:0,y:0};if(e.pageX||e.pageY)t.x=e.pageX,t.y=e.pageY;else if(e.clientX||e.clientY){var a=document.documentElement,n=document.body;t.x=e.clientX+(a.scrollLeft||n.scrollLeft)-(a.clientLeft||0),t.y=e.clientY+(a.scrollTop||n.scrollTop)-(a.clientTop||0)}else e.changedTouches&&(t.x=e.changedTouches[0].pageX,t.y=e.changedTouches[0].pageY);return t};var G=function(e){K(this,e)},D=function(e){te(this,e)},V=function(e){"checkbox"!=e.currentTarget.type?U(this,e):Z(this,e),e.stopPropagation()},Y=function(e){$(this,e)},X=function(e){ee(this,e)},q=function(){for(var e=d3.select("#li_senado_barras")[0][0],t=0,a=e.childElementCount;t<a;++t)_.setFuncionalidadTooltip(e.childNodes[t],"activo")},W=function(){for(var e=d3.selectAll("g"),t=0,a=e[0].length;t<a;++t)e[0][t].id.indexOf("actual")>-1&&e[0][t].addEventListener("click",G,!1)},J=function(){for(var e=d3.selectAll("g"),t=0,a=e[0].length;t<a;++t)e[0][t].id.indexOf("anterior")>-1&&(e[0][t].addEventListener("mouseover",Y,!1),e[0][t].addEventListener("mouseout",X,!1))},K=function(e,t){for(var a=d3.select("#"+e.parentNode.id).selectAll("g"),n=e.parentNode.id.split("-")[4],r=0,o=a[0].length;r<o;++r)""!=a[0][r].id&&a[0][r].childNodes[0].getAttribute("stroke")&&a[0][r].childNodes[0].removeAttribute("stroke");e.childNodes[0].setAttribute("stroke","gray"),e.childNodes[0].setAttribute("stroke-width","5px"),e.childNodes[0].setAttribute("stroke-linejoin","round");var i=e;i.parentNode.insertBefore(i,i.parentNode.childNodes[a[0].length]);var s=document.getElementById("id_nombre_partido_"+n);s.innerHTML="",s.innerHTML=e.getAttribute("data-name-partido"),s.title=e.getAttribute("data-name-partido");var d=document.getElementById("id_partido_resultados_"+n);d.innerHTML="",e.getAttribute("data-esc")?d.innerHTML="<text>"+e.getAttribute("data-esc")+" esca&ntilde;os</text>":e.getAttribute("data-senadores")&&(d.innerHTML="<text>"+e.getAttribute("data-senadores")+" senadores</text>")};this.toggleClassLightBox=function(e){var t=document.getElementById(e).parentNode.parentNode.parentNode,a=t.className;a.indexOf("table-congress-active")==-1?t.className+=" table-congress-active":t.className=a.replace("table-congress-active","").trim()};var Q=function(e){var t=e.id.split("_")[0]+"_checkbox";return document.getElementById(t)},U=function(e,t){E||a(t);var n=Q(e);n.checked?(n.checked=!1,e.removeAttribute("class")):(e.setAttribute("class","active"),n.checked=!0),_.toggleClassLightBox(e.id),_.alianzas_pactometro("js-cont-bipartisanship-congress",n.id,e)},Z=function(e,t){E||a(t);var n=Q(e);n.checked?e.parentNode.parentNode.setAttribute("class","active"):e.parentNode.parentNode.removeAttribute("class"),_.toggleClassLightBox(e.parentNode.parentNode.id),_.alianzas_pactometro("js-cont-bipartisanship-congress",n.id,e)},$=function(e,t){for(var a=d3.selectAll("g"),n=0,r=a[0].length-1;n<r;++n)a[0][n].id.indexOf("anterior")>-1&&a[0][n].childNodes[1].getAttribute("stroke")&&a[0][n].childNodes[1].removeAttribute("stroke");e.childNodes[1].setAttribute("stroke","gray"),e.childNodes[1].setAttribute("stroke-width","3px"),e.childNodes[1].setAttribute("stroke-linejoin","round"),e.childNodes[1].setAttribute("opacity",.65)},ee=function(e,t){for(var a=d3.selectAll("g"),n=0,r=a[0].length-1;n<r;++n)a[0][n].id.indexOf("anterior")>-1&&a[0][n].childNodes[1].getAttribute("stroke")&&(a[0][n].childNodes[1].removeAttribute("stroke"),a[0][n].childNodes[1].setAttribute("opacity",.25))};this.animate_bars_pactometro=function(e){setTimeout(function(){span_bars=document.querySelectorAll("span.bars-bar");for(var t=0,a=span_bars.length;t<a;t++)span_bars[t].style.width=span_bars[t].getAttribute("data-election-percent")+"%";e&&setTimeout(function(){e.remove()},350)},350)};var te=function(){var e=document.getElementById("electoral-data-results-table-congress").childNodes;for(i=0,l=e.length-1;i<l;i++){var t=document.getElementById(e[i].id.split("_")[0]+"_checkbox");t.checked=!1,e[i].removeAttribute("class")}var a=document.getElementById("barra-pactometro").childNodes;for(i=0,l=a.length;i<l;i++){var n=document.getElementById(a[i].id);n.setAttribute("data-election-percent","0"),_.animate_bars_pactometro(n),document.getElementById("id_suma_pacto").textContent=0}};this.alianzas_pactometro=function(e,t,a){var n;if(null==a){var r='<ul id="alianza_barras'+e+'" class="bars-list"></ul>',o=document.getElementById(e);o.innerHTML=r,n=document.getElementById("alianza_barras"+e),n.innerHTML="";var i=document.createElement("li");i.setAttribute("class","bars-item"),i.innerHTML+='<span id="barra-pactometro" class="bars-barBg"></span>',n.appendChild(i);var s='<div class="bars-values"><p class="bars-values-medium"><span>176</span></p><p class="bars-values-max">350</p></div>';o.innerHTML+=s;var d='<p class="bars-data bars-data-outside">Total: <span id="id_suma_pacto">0</span></p>';o.innerHTML+=d;var l='<a id="btn_borra" href="javascript:void(0);" rel="nofollow" class="btn">Borrar Selecci&oacute;n</a>';o.innerHTML+=l,document.getElementById("btn_borra").addEventListener("click",D,!1)}else{var i=document.getElementById("barra-pactometro"),c=document.getElementById("id_suma_pacto"),p=document.getElementById("pact_"+t);null==p?(i.innerHTML+='<span id="pact_'+t+'" class="bars-bar" data-election-percent="'+100*a.getAttribute("data-esc-pacto")/350+'" style="width: 0%; background-color:'+a.getAttribute("color-pacto")+' "></span>',_.animate_bars_pactometro(),c.textContent=parseInt(c.textContent)+parseInt(a.getAttribute("data-esc-pacto"))):(p.setAttribute("data-election-percent","0"),_.animate_bars_pactometro(p),c.textContent=parseInt(c.textContent)-parseInt(a.getAttribute("data-esc-pacto"))),a.id.indexOf("tabla")>-1?setTimeout(function(){_.toggleClassLightBox(a.id)},750):setTimeout(function(){_.toggleClassLightBox(a.parentNode.parentNode.id)},750)}},this.barras_escrutinio_participacion=function(e,t){var a='<ul id="escrutinio_participacion'+e+'" class="bars-list"></ul>';document.getElementById(e).innerHTML+=a;var n=document.getElementById("escrutinio_participacion"+e);n.innerHTML="";var r=document.createElement("li");r.setAttribute("class","bars-item"),r.innerHTML+='<p class="bars-label">Escrutinio: '+t.porcentaje_censo_escrutado.replace(".",",")+"%</p>",r.innerHTML+='<span class="bars-barBg"><span class="bars-bar" data-election-percent="'+t.porcentaje_censo_escrutado+'" style="width: 0%"></span></span>',n.appendChild(r);var r=document.createElement("li");r.setAttribute("class","bars-item"),r.innerHTML+='<p class="bars-label">Participaci&oacute;n: '+t.porcentaje_total_votantes.replace(".",",")+"%</p>",r.innerHTML+='<span class="bars-barBg"><span class="bars-bar" data-election-percent="'+t.porcentaje_total_votantes+'" style="width: 0%"></span></span>',n.appendChild(r),_.animate_bars()},this.grafico_barras_porcentaje=function(e,t,a){"diputados"!=d?_.ordenar_array_data(d):_.ordenar_array_data("porcentaje");var n='<ul id="listado_barras'+e+'" class="bars-list"></ul>';document.getElementById(e).innerHTML+=n;var r=document.getElementById("listado_barras"+e);r.innerHTML="";var o=a>0?a:t.length;for(i=0,l=t.length;i<l;i++)if(t[i].representacion_partido>0&&i<o){var s=document.createElement("li");s.setAttribute("class","bars-item"),s.innerHTML+='<p class="bars-label"><abbr title="'+t[i].siglas+'">'+t[i].siglas+"</abbr></p>",s.innerHTML+='<span class="bars-barBg"><span class="bars-bar" data-election-percent="'+t[i].porcentaje+'" style="width: 0%; background-color:'+t[i].color+'"></span></span>',s.innerHTML+='<span class="bars-data bars-data-outside">'+t[i].porcentaje.replace(".",",")+" %</span>",r.appendChild(s)}_.animate_bars()},this.grafico_barras_candidatos=function(e,t,a){"diputados"!=d?_.ordenar_array_data(d):_.ordenar_array_data("porcentaje");var n='<ul id="listado_barras'+e+'" class="bars-list"></ul>';document.getElementById(e).innerHTML+=n;var r=document.getElementById("listado_barras"+e);for(r.innerHTML="",i=0,l=h.length;i<l;i++)if(h[i].representacion_partido>0){var o=100*h[i].representacion_partido/a,s=document.createElement("li");s.setAttribute("class","bars-item"),s.innerHTML+='<p class="bars-label"><abbr title="'+h[i].siglas+'">'+h[i].siglas+"</abbr></p>",s.innerHTML+='<span class="bars-barBg"><span class="bars-bar" data-election-percent="'+o+'" style="width: 0%; background-color:'+h[i].color+'"></span></span>',s.innerHTML+='<span class="bars-data bars-data-outside">'+h[i].representacion_partido+"</span>",r.appendChild(s)}_.animate_bars()},this.animate_bars=function(e){if(e){span_bars=e.querySelectorAll("span.bars-bar");for(var t=0,a=span_bars.length;t<a;t++)span_bars[t].style.width="0%"}setTimeout(function(){span_bars=document.querySelectorAll("span.bars-bar");for(var e=0,t=span_bars.length;e<t;e++)span_bars[e].style.width=span_bars[e].getAttribute("data-election-percent")+"%"},350)},this.selectDataYearTable=function(e,t){var a=document.getElementById("cont-aviso").children,i=document.getElementById(N+t),s=i?i.options[i.selectedIndex].value:k;if(s!=k)if(o="congress"==t?data_congreso_old:data_senado_old,document.getElementById(e).parentNode.className="covenant covenant-2015","congress"==t){document.getElementById("js-covenant").childNodes[1].innerHTML="Resultados 2015",document.getElementById("js-covenant").childNodes[5].innerHTML="Comprueba los resultados del 2015";var l=new Object;l.id_elemento_html=e,l.clave_json=d,l.base_url=r,l.ancho_grafico=b,_.initGraficoElecciones(l),_.alianzas_pactometro("js-cont-bipartisanship-congress")}else{a[0].className="text-aviso",a[1].className="text-aviso active",n="senado-barras";var l=new Object;l.id_elemento_html="js-cont-preelected-senate",l.clave_json=d,l.year="2015",_.initGraficoElecciones(l)}else if(o="congress"==t?data_congreso:data_senado,document.getElementById(e).parentNode.className="covenant","congress"==t){document.getElementById("js-covenant").childNodes[1].innerHTML="El Pact&oacute;metro",document.getElementById("js-covenant").childNodes[5].innerHTML="Haz click en los partidos para formar pactos";var l=new Object;l.id_elemento_html=e,l.clave_json=d,l.base_url=r,l.ancho_grafico=b,_.initGraficoElecciones(l)}else{a[0].className="text-aviso active",a[1].className="text-aviso",n="senado-barras";var l=new Object;l.id_elemento_html="js-cont-preelected-senate",l.clave_json=d,l.year="2016",_.initGraficoElecciones(l)}n="tabla",_.carga_datos_tabla(e,m,s)},this.carga_datos_tabla=function(e,t,a){if(!h)return!1;if("congress"==L){_.creaTablaPartido(e,t);var n=document.getElementById("electoral-data-results-table-"+L);_.creaTablaPartidoResultados(n)}else if("senate"==L){_.creaTablaSenado(e,t);var n=document.getElementById("electoral-data-results-table-"+L);_.creaTablaSenadoResultados(n,a)}},this.creaTablaPartido=function(e,t){if(document.getElementById("electoral-data-results-table-"+L))document.getElementById("electoral-data-results-table-"+L).innerHTML="";else{for(var a='<table class="tables tables-'+L+'"><thead><tr><th><label class="comparar-datos"><span></span><select id="'+N+L+'">',n=0,r=w.length;n<r;n++)a+='<option value="'+w[n]+'" '+(0==n?'selected="selected"':"")+">"+w[n]+"</option>";a+='</select></label></th></th><th><abbr title="Esca&ntilde;os">Esca&ntilde;os</abbr></th><th>%</th><th><!--Texto check--></th></tr></thead><tbody id="electoral-data-results-table-'+L+'" data-div-alianza="'+t+'"></tbody></table><div class="cont-table"></div>',document.getElementById(e).innerHTML=a}var o=document.getElementById("electoral-data-results-foot_"+L);o&&(o.innerHTML=""),document.getElementById(N+L).addEventListener("change",function(){_.selectDataYearTable(e,L),z&&envioSC("SELECTABLACONGRESO")})},this.creaTablaPartidoResultados=function(e){var t=document.getElementById(N+L),a=t?t.options[t.selectedIndex].value:k,n=0,r=[];_.ordenar_array_data(d);for(var o=0,i=h.length;o<i;o++){var s=h[o],l=s.representacion_partido;if(l>0)if(n<B){var c=document.createElement("tr");c.setAttribute("id",_.normalizarCadena(s.codigo_candidatura)+"_tabla_"+L),c.setAttribute("data-esc-pacto",l),c.setAttribute("color-pacto",s.color),a==k&&c.addEventListener("click",V,!1),e.appendChild(c);var p=document.createElement("td");c.appendChild(p);var u=document.createElement("td");c.appendChild(u);var m=document.createElement("td");c.appendChild(m);var b=document.createElement("td");c.appendChild(b);var g=document.createElement("span");g.className="party-bullet",g.setAttribute("name",s.siglas),g.setAttribute("value",l),g.style.backgroundColor=s.color;var v=document.createElement("span");v.setAttribute("title",s.siglas),p.appendChild(g),p.appendChild(v),v.innerHTML=s.siglas,u.innerHTML="<strong>"+l+"</strong>",m.innerHTML="<strong>"+s.porcentaje.replace(".",",")+"</strong>";var f=document.createElement("input");f.className="party-bullet-check",f.setAttribute("id",_.normalizarCadena(s.codigo_candidatura)+"_checkbox"),f.setAttribute("type","checkbox"),f.setAttribute("data-esc-pacto",l),f.setAttribute("color-pacto",s.color),a==k?f.addEventListener("click",V,!1):f.disabled=!0,b.appendChild(f),n++}else l>0&&r.push(s)}_.creaFilaOtrosPartidos(e,r,L)},this.creaTablaSenado=function(e,t){if(document.getElementById("electoral-data-results-table-"+L))document.getElementById("electoral-data-results-table-"+L).innerHTML="";else{for(var a='<table class="tables tables-'+L+'"><thead><tr><th><label class="comparar-datos"><span></span><select id="'+N+L+'">',n=0,r=w.length;n<r;n++)a+='<option value="'+w[n]+'" '+(0==n?'selected="selected"':"")+">"+w[n]+"</option>";a+='</select></label></th></th><th><abbr title="Designados">Desig.</abbr></th><th>Electos</th><th>Total</th></tr></thead><tbody id="electoral-data-results-table-'+L+'" data-div-alianza="'+t+'"></tbody></table>',document.getElementById(e).innerHTML=a}var o=document.getElementById("electoral-data-results-foot_"+L);o&&(o.innerHTML=""),document.getElementById(N+L).addEventListener("change",function(){_.selectDataYearTable(e,L),z&&envioSC("SELECTABLASENADO")})},this.creaTablaSenadoResultados=function(e,t){if("2015"==t)var a=P;else var a=O;var n=0,r=[];_.ordenar_array_data(d);for(var o=0,i=h.length;o<i;o++){var s=h[o],l=s.representacion_partido;if(l>0)if(n<B){var c=document.createElement("tr");c.setAttribute("id",_.normalizarCadena(s.codigo_candidatura)+"tabla_"+L),e.appendChild(c);var p=document.createElement("td");c.appendChild(p);var u=document.createElement("td");c.appendChild(u);var m=document.createElement("td");c.appendChild(m);var b=document.createElement("td");c.appendChild(b);var g=document.createElement("span");g.className="party-bullet",g.style.backgroundColor=s.color;var v=document.createElement("span");v.setAttribute("title",s.siglas),p.appendChild(g),p.appendChild(v),v.innerHTML=s.siglas,a.hasOwnProperty(_.normalizarCadena(s.siglas))?u.innerHTML="<strong>"+a[_.normalizarCadena(s.siglas)]+"</strong>":u.innerHTML="<strong> 0 </strong>",m.innerHTML="<strong>"+l+"</strong>",b.innerHTML="<strong>"+(parseInt(l)+parseInt(u.textContent))+"</strong>",n++}else l>0&&r.push(s)}_.creaFilaOtrosPartidos(e,r,L)},this.creaFilaOtrosPartidos=function(e,t,a){if(t.length>0){var n=document.createElement("tr");e.appendChild(n);var r=document.createElement("td");n.appendChild(r);var o=document.createElement("td");n.appendChild(o);var i=document.createElement("td");n.appendChild(i);var s=document.createElement("span");s.className="party-bullet",s.style.backgroundColor="#898A89";var d=document.createElement("span");r.appendChild(s),r.appendChild(d),d.innerHTML="Otros";var l=document.getElementById("electoral-data-results-foot_"+a);if(l)l.innerHTML="",c=l;else{var c=document.createElement("tfoot");c.setAttribute("id","electoral-data-results-foot_"+a)}var n=document.createElement("tr");c.appendChild(n);var p=document.createElement("td");p.setAttribute("colspan","4");var s=document.createElement("span");s.className="party-bullet",s.style.backgroundColor="#898A89";var d=document.createElement("span");p.appendChild(s),p.appendChild(d);for(var u=0,m=t.length;u<m;u++)d.innerHTML+=t[u].siglas+" "+t[u].representacion_partido,u!=t.length-1&&(d.innerHTML+=", ");p.appendChild(d),n.appendChild(p),c.appendChild(n),e.parentNode.appendChild(c)}},this.dibuja_senadores_designados=function(e,t,a,n,r){var o=r+parseInt(n),i=document.createElement("span");i.setAttribute("id","designado_"+_.normalizarCadena(t.codigo_candidatura)),i.setAttribute("class","bars-bar bars-pattern"),i.setAttribute("data-election-percent",100*a/o),i.setAttribute("data-name",'<span class="tooltip-important">'+t.siglas+"</span><span>"+a+" designados</span> <span>"),i.setAttribute("style","width: 0%"),i.style.backgroundColor=t.color,e.appendChild(i)},this.senado_barras=function(e,t,a,n){var r=0,o=0;for(i=0,l=t.length;i<l;i++)n.hasOwnProperty(_.normalizarCadena(t[i].siglas))&&(o+=parseInt(n[_.normalizarCadena(t[i].siglas)]));var s=o+parseInt(a),c='<ul id="senado_barras" class="bars-list"></ul>';document.getElementById(e).innerHTML="",document.getElementById(e).innerHTML+=c;var p=document.getElementById("senado_barras");p.innerHTML="";var u=document.createElement("li");u.setAttribute("id","li_senado_barras"),u.setAttribute("class","bars-item"),p.appendChild(u);var m=document.createElement("span");m.setAttribute("id","span_senado_barras"),m.setAttribute("class","bars-barBg"),u.appendChild(m);var b=document.getElementById("span_senado_barras");for(_.ordenar_array_data(d),i=0,l=t.length;i<l;i++)if(100*t[i].representacion_partido/s>2){var g=document.createElement("span");g.setAttribute("id","electo_"+_.normalizarCadena(t[i].codigo_candidatura)),g.setAttribute("class","bars-bar"),g.setAttribute("data-election-percent",100*parseInt(t[i].representacion_partido)/s),g.setAttribute("data-name",'<span class="tooltip-important">'+t[i].siglas+"</span><span>"+t[i].representacion_partido+" electos</span>"),g.setAttribute("style","width: 0%"),g.style.backgroundColor=t[i].color,b.appendChild(g),n.hasOwnProperty(_.normalizarCadena(t[i].siglas))&&_.dibuja_senadores_designados(b,t[i],n[_.normalizarCadena(t[i].siglas)],a,o)}else{var h=document.createElement("span");h.setAttribute("id","designado_"+_.normalizarCadena(t[i].codigo_candidatura)),h.setAttribute("class","bars-bar bars-pattern"),r+=parseInt(t[i].representacion_partido),h.setAttribute("data-name",'<span class="tooltip-important">Otros</span><span>'+r+" electos + </span> <span>2  designados</span><span>Total: "+r+"</span>"),h.setAttribute("style","width: 0%"),h.style.backgroundColor="black"}h&&(h.setAttribute("data-election-percent",100*r/s),b.appendChild(h));var v='<div class="bars-values"><p class="bars-values-medium"><span>134</span></p><p class="bars-values-max">266</p></div>';document.getElementById(e).innerHTML+=v,_.animate_bars(),q()},this.crea_tabla_elecciones=function(e,t){if(document.getElementById("electoral-data-results-table-"+e))document.getElementById("electoral-data-results-table-"+e).innerHTML="";else{var a='<table class="tables tables-data-elections"><tbody id="electoral-data-results-table-'+e+'"></tbody></table>';document.getElementById(e).innerHTML=a}var n="congress"==L?"Diputados a elegir":"Senadores a elegir",r=[n,"Mesas","Censo","Censo escrutado"],o=["Votos contabilizados","Abstenciones","Votos en blanco","Votos nulos"],s=[t.diputados,t.mesas_totales,t.censo,t.censo_escrutado],d=[t.total_votantes,t.abstencion,t.votos_blanco,t.votos_nulos],l=[t.porcentaje_total_votantes,t.porcentaje_abstencion,t.porcentaje_votos_blanco,t.porcentaje_votos_nulos],c=document.getElementById("electoral-data-results-table-"+e),p=void 0==t.diputados?1:0;
for(i=p;i<4;i++){var u=document.createElement("tr");c.appendChild(u);var m=document.createElement("th");u.appendChild(m),m.innerHTML=r[i];var b=document.createElement("td");u.appendChild(b),b.innerHTML=s[i],b.setAttribute("colspan","2")}for(i=0;i<4;i++){var u=document.createElement("tr");c.appendChild(u);var m=document.createElement("th");u.appendChild(m),m.innerHTML=o[i];var b=document.createElement("td");u.appendChild(b),b.innerHTML=d[i];var g=document.createElement("td");u.appendChild(g),g.innerHTML=l[i]+" %"}},this.tabla_partidos_interiores=function(e,t,a){if(document.getElementById("electoral-data-results-table-"+e))document.getElementById("electoral-data-results-table-"+e).innerHTML="";else{if(void 0==t.diputados)var n='<table class="tables tables-data-parties"><thead><tr><th></th><th>%</th><th>Votos</th></tr></thead><tbody id="electoral-data-results-table-'+e+'"></tbody></table>';else var n='<table class="tables tables-data-parties"><thead><tr><th></th><th>Esc</th><th>%</th><th>Votos</th></tr></thead><tbody id="electoral-data-results-table-'+e+'"></tbody></table>';document.getElementById(e).innerHTML=n}_.ordenar_array_porcentaje_votos_partido(t.partidos);var r=document.getElementById("electoral-data-results-table-"+e),o=12;for(i=0,l=o;i<l;i++)if(t.partidos[i]){var s=document.createElement("tr");r.appendChild(s);var d=document.createElement("td");s.appendChild(d);var c=document.createElement("span");c.className="party-bullet",c.style.backgroundColor=t.partidos[i].color;var p=document.createElement("span");if(p.setAttribute("title",t.partidos[i].siglas),d.appendChild(c),d.appendChild(p),p.innerHTML=t.partidos[i].siglas,void 0!=t.partidos[i].diputados){var u=document.createElement("td");s.appendChild(u),u.innerHTML=t.partidos[i].diputados}var m=document.createElement("td");s.appendChild(m),m.innerHTML=t.partidos[i].porcentaje_votos_candidatura.replace(".",",");var b=document.createElement("td");s.appendChild(b),b.innerHTML=t.partidos[i].votos_candidatura}},this.tabla_senadores_interiores=function(e,t){if(document.getElementById("electoral-senators-results-table-"+e))document.getElementById("electoral-senators-results-table-"+e).innerHTML="";else{if(void 0!=t.senadores[0].electo)var a='<table class="tables tables-data-parties"><thead><tr><th></th><th>Senadores</th><th>Votos</th></tr></thead><tbody id="electoral-senators-results-table-'+e+'"></tbody></table>';else var a='<table class="tables tables-data-parties"><thead><tr><th></th><th>Votos</th></tr></thead><tbody id="electoral-senators-results-table-'+e+'"></tbody></table>';document.getElementById(e).innerHTML=a}_.ordenar_array_porcentaje_votos(t.senadores);var n=document.getElementById("electoral-senators-results-table-"+e);for(i=0,l=t.senadores.length;i<l;i++){var r=document.createElement("tr");n.appendChild(r);var o=document.createElement("td");if(r.appendChild(o),o.innerHTML=t.senadores[i].nombre,void 0!=t.senadores[i].electo){var s=document.createElement("td");r.appendChild(s),s.innerHTML=t.senadores[i].electo}var d=document.createElement("td");r.appendChild(d),d.innerHTML=t.senadores[i].votos_senador}}};