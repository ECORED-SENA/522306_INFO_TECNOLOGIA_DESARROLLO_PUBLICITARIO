(function(e){function a(a){for(var t,n,o=a[0],l=a[1],c=a[2],d=0,u=[];d<o.length;d++)n=o[d],Object.prototype.hasOwnProperty.call(r,n)&&r[n]&&u.push(r[n][0]),r[n]=0;for(t in l)Object.prototype.hasOwnProperty.call(l,t)&&(e[t]=l[t]);p&&p(a);while(u.length)u.shift()();return s.push.apply(s,c||[]),i()}function i(){for(var e,a=0;a<s.length;a++){for(var i=s[a],t=!0,n=1;n<i.length;n++){var o=i[n];0!==r[o]&&(t=!1)}t&&(s.splice(a--,1),e=l(l.s=i[0]))}return e}var t={},n={app:0},r={app:0},s=[];function o(e){return l.p+"js/"+({}[e]||e)+"."+{"chunk-01b6bcc8":"ba8b664c","chunk-0f934e30":"9e671e29"}[e]+".js"}function l(a){if(t[a])return t[a].exports;var i=t[a]={i:a,l:!1,exports:{}};return e[a].call(i.exports,i,i.exports,l),i.l=!0,i.exports}l.e=function(e){var a=[],i={"chunk-01b6bcc8":1,"chunk-0f934e30":1};n[e]?a.push(n[e]):0!==n[e]&&i[e]&&a.push(n[e]=new Promise((function(a,i){for(var t="css/"+({}[e]||e)+"."+{"chunk-01b6bcc8":"8f3a14dd","chunk-0f934e30":"7a15e596"}[e]+".css",r=l.p+t,s=document.getElementsByTagName("link"),o=0;o<s.length;o++){var c=s[o],d=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(d===t||d===r))return a()}var u=document.getElementsByTagName("style");for(o=0;o<u.length;o++){c=u[o],d=c.getAttribute("data-href");if(d===t||d===r)return a()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=a,p.onerror=function(a){var t=a&&a.target&&a.target.src||r,s=new Error("Loading CSS chunk "+e+" failed.\n("+t+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=t,delete n[e],p.parentNode.removeChild(p),i(s)},p.href=r;var m=document.getElementsByTagName("head")[0];m.appendChild(p)})).then((function(){n[e]=0})));var t=r[e];if(0!==t)if(t)a.push(t[2]);else{var s=new Promise((function(a,i){t=r[e]=[a,i]}));a.push(t[2]=s);var c,d=document.createElement("script");d.charset="utf-8",d.timeout=120,l.nc&&d.setAttribute("nonce",l.nc),d.src=o(e);var u=new Error;c=function(a){d.onerror=d.onload=null,clearTimeout(p);var i=r[e];if(0!==i){if(i){var t=a&&("load"===a.type?"missing":a.type),n=a&&a.target&&a.target.src;u.message="Loading chunk "+e+" failed.\n("+t+": "+n+")",u.name="ChunkLoadError",u.type=t,u.request=n,i[1](u)}r[e]=void 0}};var p=setTimeout((function(){c({type:"timeout",target:d})}),12e4);d.onerror=d.onload=c,document.head.appendChild(d)}return Promise.all(a)},l.m=e,l.c=t,l.d=function(e,a,i){l.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:i})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,a){if(1&a&&(e=l(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(l.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var t in e)l.d(i,t,function(a){return e[a]}.bind(null,t));return i},l.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(a,"a",a),a},l.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},l.p="",l.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],d=c.push.bind(c);c.push=a,c=c.slice();for(var u=0;u<c.length;u++)a(c[u]);var p=d;s.push([0,"chunk-vendors"]),i()})({0:function(e,a,i){e.exports=i("56d7")},"230f":function(e,a,i){e.exports=i.p+"img/fondo-banner-principal.bf1b49fb.svg"},"56d7":function(e,a,i){"use strict";i.r(a);i("e260"),i("e6cf"),i("cca6"),i("a79d"),i("d3b7"),i("3ca3"),i("ddb0");var t=i("2b0e"),n=function(){var e=this,a=e.$createElement,i=e._self._c||a;return i("div",{staticClass:"app",attrs:{id:"app"}},[e._m(0),i("div",{staticClass:"contenedor-principal"},[i("section",{staticClass:"seccion-principal"},[i("Inicio")],1)])])},r=[function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("header",{staticClass:"header"},[t("div",{staticClass:"container"},[t("div",{staticClass:"row align-items-center justify-content-between"},[t("div",{staticClass:"col col-sm-auto d-flex align-items-center justify-content-between justify-content-sm-star"},[t("img",{staticClass:"header__logo me-sm-5",attrs:{src:i("9eb5")}})])])])])}],s=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("section",[t("div",{staticClass:"banner-principal mb-5"},[t("div",{staticClass:"container tarjeta p-4 p-sm-5",style:{"background-image":"url("+i("230f")+")"}},[e._m(0)])]),e._m(1),e._m(2),e._m(3),t("div",{staticClass:"container tarjeta tarjeta__template--azul-claro p-4 p-md-5 mb-5"},[e._m(4),t("ul",{staticClass:"lista-ul px-3"},[t("li",{staticClass:"mb-0"},[t("i",{staticClass:"lista-ul__vineta"}),t("p",[t("b",[e._v("Nivel académico: ")]),t("b-none",[e._v("media académica")])],1)]),t("li",{staticClass:"mb-0"},[t("i",{staticClass:"lista-ul__vineta"}),t("p",[t("b",[e._v("Curso: ")]),t("b-none",[e._v("undécimo.")])],1)]),t("li",{staticClass:"mb-0"},[t("i",{staticClass:"lista-ul__vineta"}),t("p",[t("b",[e._v("Formación para el trabajo y el desarrollo humano: ")]),t("b-none",[e._v("no.")])],1)]),t("li",{staticClass:"mb-0"},[t("i",{staticClass:"lista-ul__vineta"}),t("p",[t("b",[e._v("Número de horas: ")]),t("b-none",[e._v("no.")])],1)]),t("li",{staticClass:"mb-0"},[t("i",{staticClass:"lista-ul__vineta"}),t("p",[t("b",[e._v("Requiere certificación académica: ")]),t("b-none",[e._v("sí.")])],1)]),t("li",{staticClass:"mb-0"},[t("i",{staticClass:"lista-ul__vineta"}),t("p",[t("b",[e._v("Requiere experiencia laboral: ")]),t("b-none",[e._v("no ")])],1)]),t("li",{staticClass:"mb-0"},[t("i",{staticClass:"lista-ul__vineta"}),t("p",[t("b",[e._v("Edad mínima definida en la ley: ")]),t("b-none",[e._v("14 años. ")])],1)]),t("li",{staticClass:"mb-0"},[t("i",{staticClass:"lista-ul__vineta"}),t("p",[t("b",[e._v("Requisitos adicionales: ")]),t("b-none",[e._v("título de bachiller o su equivalente validación aprobada por la entidad competente. Acreditar presentación del examen de estado de la educación media y los establecidos por el programa de formación.")])],1)]),t("li",{staticClass:"mb-0"},[t("i",{staticClass:"lista-ul__vineta"}),t("p",[t("b",[e._v("Restricciones de ingreso soportadas en la legislación vigente:")]),t("b-none",[e._v(" no existe legislación que establezca restricciones de ingreso a nivel de discapacidad física y cognitiva. ")])],1)]),t("li",{staticClass:"mb-0"},[t("i",{staticClass:"lista-ul__vineta"}),t("p",[t("b",[e._v("Aspectos actitudinales, motivacionales y de interés:")]),t("b-none",[e._v(" relaciones interpersonales con su equipo de trabajo y con el cliente. Autocontrol. Responsabilidad de tipo personal, social y laboral. Tolerancia ante las diferentes situaciones. Solidaridad con sus compañeros de trabajo y el público en general. Alteridad ante los cambios que se presentan en su entorno. Valores éticos universales. Comunicación asertiva con los integrantes del equipo de trabajo. Capacidad de resolución de problemas. Creatividad.")])],1)])])]),e._m(5),e._m(6),t("div",{staticClass:"container tarjeta tarjeta__template--azul-claro p-4 p-md-5 mb-5"},[e._m(7),t("Creditos")],1),t("Footer")],1)},o=[function(){var e=this,a=e.$createElement,i=e._self._c||a;return i("div",{staticClass:"row justify-content-around align-items-center"},[i("div",{staticClass:"col-lg-7 col-xxl-6 banner-principal__info"},[i("div",{staticClass:"banner-principal__programa"},[i("div",{staticClass:"h1 mb-0"},[e._v("Tecnología en Desarrollo Publicitario")])]),i("div",{staticClass:"h2"},[e._v("Información del programa")]),i("div",{staticClass:"banner-principal__datos"},[i("ul",[i("li",{staticClass:"mb-3 banner-principal__datos__item"},[i("p",{staticClass:"h4 mb-0 me-3 banner-principal__datos__item__titulo"},[e._v("Nombre del programa: ")]),i("p",{staticClass:"banner-principal__datos__item__texto"},[e._v("Tecnología en Desarrollo Publicitario")])]),i("li",{staticClass:"mb-3 banner-principal__datos__item"},[i("p",{staticClass:"h4 mb-0 me-3 banner-principal__datos__item__titulo"},[e._v("Código: ")]),i("p",{staticClass:"banner-principal__datos__item__texto"},[e._v("124100")])]),i("li",{staticClass:"mb-3 banner-principal__datos__item"},[i("p",{staticClass:"h4 mb-0 me-3 banner-principal__datos__item__titulo"},[e._v("Total Horas: ")]),i("p",{staticClass:"banner-principal__datos__item__texto"},[e._v("3120 horas")])]),i("li",{staticClass:"mb-3 banner-principal__datos__item"},[i("p",{staticClass:"h4 mb-0 me-3 banner-principal__datos__item__titulo"},[e._v("Duración en meses: ")]),i("p",{staticClass:"banner-principal__datos__item__texto"},[e._v("27 meses")])]),i("li",{staticClass:"mb-3 banner-principal__datos__item"},[i("p",{staticClass:"h4 mb-0 me-3 banner-principal__datos__item__titulo"},[e._v("Modalidad: ")]),i("p",{staticClass:"banner-principal__datos__item__texto"},[e._v("virtual ")])])])])]),i("div",{staticClass:"d-none d-lg-block col-lg-5"},[i("div",{staticClass:"video"},[i("iframe",{attrs:{"data-v-1f9e4816":"",width:"560",height:"315",src:"https://www.youtube.com/embed/A4tp-Te0G7k",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:"allowfullscreen"}})])])])},function(){var e=this,a=e.$createElement,i=e._self._c||a;return i("div",{staticClass:"container tarjeta tarjeta__template--azul-claro p-4 p-md-5 mb-5"},[i("div",{staticClass:"titulo__template--a mb-4"},[i("span",{staticClass:"h4"},[e._v("1. Presentación")])]),i("p",[e._v("El programa, Tecnología en Desarrollo Publicitario está enfocado en los procesos de publicidad y comunicación. Sus egresados serán competentes en el desarrollo de acciones de estructuración de la estrategia de mercadeo digital, preparación de campañas y piezas publicitarias, fortaleciendo el manejo de la imagen y comunicación corporativa, y en ordenar e interpretar la información específica de las actividades de publicidad y mercadeo de una organización. Su ocupación estará encaminada en ofrecer soporte en la implementación de campañas y gestionar planes de comunicación empresariales en los diferentes sectores de la economía colombiana."),i("br"),i("br"),e._v("Por este motivo, a lo largo del programa de formación se desarrollarán actividades que permiten llevar a cabo el proyecto formativo: desarrollo de soluciones publicitarias para las MiPymes de la región, creando evidencias que apuntan a este fin."),i("br"),i("br"),e._v("De igual manera, se desarrollarán unidades temáticas que abordan diferentes temas necesarios para quienes deseen ser expertos en publicidad, implicando con ello, todos los procesos que esto requiere."),i("br"),i("br"),e._v("¡Ánimo! Le aseguramos que al terminar este programa estará en la capacidad de desarrollar soluciones publicitarias en las Mypimes de su región.")])])},function(){var e=this,a=e.$createElement,i=e._self._c||a;return i("div",{staticClass:"container tarjeta tarjeta__template--azul-claro p-4 p-md-5 mb-5"},[i("div",{staticClass:"titulo__template--a mb-4"},[i("span",{staticClass:"h4"},[e._v("2. Justificación"),i("br"),e._v("del programa")])]),i("p",[e._v("La postura reactiva de la mayoría de las empresas colombianas, requiere una urgente transformación para lograr mantenerse en los actuales mercados y como respuesta a esta necesidad, el SENA presenta la Tecnología en Desarrollo Publicitario, con la que se intenta robustecer el talento humano al servicio de las Mipymes, incluyendo colaboradores capacitados en exteriorizar campañas publicitarias sugestivas que permitan llegar a un mayor número de consumidores potenciales, a través del uso de estrategias de marketing online.")])])},function(){var e=this,a=e.$createElement,i=e._self._c||a;return i("div",{staticClass:"container tarjeta tarjeta__template--azul-claro p-4 p-md-5 mb-5"},[i("div",{staticClass:"titulo__template--a mb-4"},[i("span",{staticClass:"h4"},[e._v("3. Competencias"),i("br"),e._v(" a desarrollar")])]),i("ul",{staticClass:"lista-ul px-3"},[i("li",[i("i",{staticClass:"lista-ul__vineta"}),e._v("Construir el brief según metodologías de diagnóstico organizacional.")]),i("li",[i("i",{staticClass:"lista-ul__vineta"}),e._v("Definir el plan de comunicación interna de acuerdo con la cultura y estrategia corporativa.")]),i("li",[i("i",{staticClass:"lista-ul__vineta"}),e._v("Estructurar la estrategia de mercadeo digital de acuerdo con objetivos de campaña y normativa legal.")]),i("li",[i("i",{staticClass:"lista-ul__vineta"}),e._v("Elaborar piezas graficas de acuerdo con los requerimientos del cliente y principios del diseño gráfico.")]),i("li",[i("i",{staticClass:"lista-ul__vineta"}),e._v("Estructurar la campaña publicitaria de acuerdo con objetivos de comunicación y metodología de planeación.")]),i("li",[i("i",{staticClass:"lista-ul__vineta"}),e._v("Generar hábitos saludables de vida mediante la aplicación de programas de actividad física en los contextos productivos y sociales.")]),i("li",[i("i",{staticClass:"lista-ul__vineta"}),e._v("Gestionar procesos propios de la cultura emprendedora y empresarial de acuerdo con el perfil personal y los requerimientos productivo y social.")]),i("li",[i("i",{staticClass:"lista-ul__vineta"}),e._v("Aplicar prácticas de protección ambiental, seguridad y salud en el trabajo de acuerdo con las políticas organizacionales y la normatividad vigente.")]),i("li",[i("i",{staticClass:"lista-ul__vineta"}),e._v("Enrique Low Murtra -Interactuar en el contexto productivo y social de acuerdo con principios éticos para la construcción de una cultura de paz.")]),i("li",[i("i",{staticClass:"lista-ul__vineta"}),e._v("Ejercer derechos fundamentales del trabajo en el marco de la constitución política y los convenios internacionales.")]),i("li",[i("i",{staticClass:"lista-ul__vineta"}),e._v("Orientar investigación formativa según referentes técnicos.")]),i("li",[i("i",{staticClass:"lista-ul__vineta"}),e._v("Razonar cuantitativamente frente a situaciones susceptibles de ser abordadas de manera matemática en contextos laborales, sociales y personales.")]),i("li",[i("i",{staticClass:"lista-ul__vineta"}),e._v("Aplicación de conocimientos de las ciencias naturales de acuerdo con situaciones del contexto productivo y social.")]),i("li",[i("i",{staticClass:"lista-ul__vineta"}),e._v("Utilizar herramientas informáticas de acuerdo con las necesidades de manejo de información.")]),i("li",[i("i",{staticClass:"lista-ul__vineta"}),e._v("Desarrollar procesos de comunicación eficaces y efectivos, teniendo en cuenta situaciones de orden social, personal y productivo.")]),i("li",[i("i",{staticClass:"lista-ul__vineta"}),e._v("Interactuar en lengua inglesa de forma oral y escrita dentro de contextos sociales y laborales según los criterios establecidos por el Marco Común Europeo de referencia para las lenguas.")])])])},function(){var e=this,a=e.$createElement,i=e._self._c||a;return i("div",{staticClass:"titulo__template--a mb-4"},[i("span",{staticClass:"h4"},[e._v("4. Perfil"),i("br"),e._v(" de ingreso")])])},function(){var e=this,a=e.$createElement,i=e._self._c||a;return i("div",{staticClass:"container tarjeta tarjeta__template--azul-claro p-4 p-md-5 mb-5"},[i("div",{staticClass:"titulo__template--a mb-4"},[i("span",{staticClass:"h4"},[e._v("5. Perfil"),i("br"),e._v("de egreso")])]),i("p",[e._v("El programa, Tecnología en Desarrollo Publicitario está enfocado en los procesos de publicidad y comunicación. Sus egresados serán competentes en el desarrollo de acciones de estructuración de la estrategia de mercadeo digital, preparación de campañas y piezas publicitarias, fortaleciendo el manejo de la imagen y comunicación corporativa y en ordenar e interpretar la información específica de las actividades de publicidad y mercadeo de una organización. Su ocupación estará enfocada en ofrecer soporte en la implementación de campañas y gestionar planes de comunicación empresariales en los diferentes sectores de la economía colombiana.")])])},function(){var e=this,a=e.$createElement,i=e._self._c||a;return i("div",{staticClass:"container tarjeta tarjeta__template--azul-claro p-4 p-md-5 mb-5"},[i("div",{staticClass:"titulo__template--a mb-4"},[i("span",{staticClass:"h4"},[e._v("6. Estrategia"),i("br"),e._v("metodológica")])]),i("p",[e._v("Centrada en la construcción de autonomía para garantizar la calidad de la formación en el marco de la formación por competencias, el aprendizaje por proyectos y el uso de técnicas didácticas activas que estimulan el pensamiento para la resolución de problemas simulados y reales; soportadas en el utilización de las tecnologías de la información y la comunicación, integradas en ambientes virtuales de aprendizaje, que en todo caso recrean el contexto productivo y vinculan al aprendiz con la realidad cotidiana y el desarrollo de las competencias. "),i("br"),i("br"),e._v("Igualmente, debe estimular de manera permanente la autocrítica y la reflexión del aprendiz sobre el quehacer y los resultados de aprendizaje que logra a través de la vinculación activa de las cuatro fuentes de información para la construcción de conocimiento:")]),i("ul",{staticClass:"lista-ul px-3"},[i("li",[i("i",{staticClass:"lista-ul__vineta"}),e._v("El instructor - Tutor")]),i("li",[i("i",{staticClass:"lista-ul__vineta"}),e._v("El entorno")]),i("li",[i("i",{staticClass:"lista-ul__vineta"}),e._v("las TIC")]),i("li",[i("i",{staticClass:"lista-ul__vineta"}),e._v("El trabajo colaborativo")])])])},function(){var e=this,a=e.$createElement,i=e._self._c||a;return i("div",{staticClass:"titulo__template--a mb-4"},[i("span",{staticClass:"h4"},[e._v("Créditos")])])}],l={name:"Inicio",data:function(){return{}}},c=l,d=i("2877"),u=Object(d["a"])(c,s,o,!1,null,null,null),p=u.exports,m={name:"App",components:{Inicio:p}},_=m,v=(i("cf25"),Object(d["a"])(_,n,r,!1,null,null,null)),b=v.exports,f=(i("becf"),i("7b17"),i("ab8b"),i("a3a0"),{creditos:{liderEquipo:{nombre:"Maria Camila Garcia Santamaria",cargo:"Líder del equipo"},contenidoInstruccional:[{nombre:"Rafael Neftalí Lizcano Reyes.",cargo:"Asesor metodológico y pedagógico",centro:"Centro Industrial del Diseño y la Manufactura ",regional:"Regional Santander"},{nombre:"Manuel Augusto Arias López",cargo:"Instructor-experto temático",centro:"Centro de Comercio y Turismo ",regional:"Regional Quindío"},{nombre:"Andrés Felipe Velandia Espitia",cargo:"Diseñador instruccional",centro:"Centro de Diseño y Metrología ",regional:"Regional Distrito Capital"},{nombre:"Vilma Lucía Perilla Méndez",cargo:"Evaluadora instruccional",centro:"Centro para la Industria de la Comunicación Gráfica ",regional:"Regional Distrito Capital"},{nombre:"Julieth Paola Vital López",cargo:"Evaluadora instruccional",centro:"Centro para la Industria de la Comunicación Gráfica ",regional:"Regional Distrito Capital"}],desarrolloProducto:[{nombre:"Francisco José Lizcano Reyes",cargo:"Responsable del equipo",centro:"Centro Industrial del Diseño y la Manufactura",regional:"Regional Santander"},{nombre:"Leyson Fabian Castaño Perez",cargo:"Soporte organizacional",centro:"Centro de Comercio y Servicios",regional:"Regional Tolima"},{nombre:"Zuleidy Maria Ruiz Torres",cargo:"Producción audiovisual",centro:"Centro de Comercio y Servicios",regional:"Regional Tolima"},{nombre:["Gilberto Junior Rodriguez Rodriguez","Ludwyng Corzo García","Maria Carolina Tamayo López","Wilson Andrés Arenales Caceres"],cargo:"Producción audiovisual",centro:"Centro Industrial del Diseño y la Manufactura",regional:"Regional Santander"},{nombre:"Camilo Andres Bolaño Rey",cargo:"Diseño y desarrollo front-end",centro:"Centro Industrial del Diseño y la Manufactura",regional:"Regional Santander"},{nombre:"María Isabel Rueda Román",cargo:"Validación de diseño y contenido",centro:"Centro Industrial del Diseño y la Manufactura",regional:"Regional Santander"}],gestoresRepositorio:[{nombre:"Milady Tatiana Villamil castellanos",cargo:["Validación y vinculación en plataforma LMS"],centro:"Centro de comercio y servicios",regional:"Regional Tolima"}]}});t["a"].prototype.$config=f;var g=i("9224");t["a"].prototype.$package=g,t["a"].component("Creditos",(function(){return i.e("chunk-0f934e30").then(i.bind(null,"dba0"))})),t["a"].component("Footer",(function(){return i.e("chunk-01b6bcc8").then(i.bind(null,"e9c6"))})),t["a"].config.productionTip=!1,new t["a"]({render:function(e){return e(b)}}).$mount("#app")},9224:function(e){e.exports=JSON.parse('{"name":"sena-base-info-2021","version":"1.1.0","private":true,"scripts":{"serve":"vue-cli-service serve","build":"vue-cli-service build","lint":"vue-cli-service lint"},"dependencies":{"@fortawesome/fontawesome-free":"^5.15.3","@popperjs/core":"^2.9.1","bootstrap":"^5.0.0-beta3","core-js":"^3.6.5","ecored-base-pkg":"2.2.0","vue":"^2.6.11","vue-router":"^3.2.0","vuex":"^3.4.0"},"devDependencies":{"@vue/cli-plugin-babel":"^4.5.12","@vue/cli-plugin-eslint":"^4.5.12","@vue/cli-plugin-router":"^4.5.12","@vue/cli-plugin-vuex":"^4.5.12","@vue/cli-service":"^4.5.12","@vue/eslint-config-prettier":"^6.0.0","babel-eslint":"^10.1.0","eslint":"^6.7.2","eslint-plugin-prettier":"^3.1.3","eslint-plugin-vue":"^6.2.2","node-sass":"^4.12.0","prettier":"^1.19.1","sass-loader":"^8.0.2","vue-cli-plugin-pug":"^2.0.0","vue-template-compiler":"^2.6.11"}}')},"9eb5":function(e,a,i){e.exports=i.p+"img/logo-sena-naranja.43e61d0f.svg"},a3a0:function(e,a,i){},cf25:function(e,a,i){"use strict";i("fea6")},fea6:function(e,a,i){}});
//# sourceMappingURL=app.1f8d099f.js.map