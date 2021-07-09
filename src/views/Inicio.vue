+<template lang="pug">
section
  .banner-principal.mb-5
    .container.tarjeta.p-4.p-sm-5(
      :style="{'background-image': `url(${require('@/assets/curso/fondo-banner-principal.svg')})`}"
    )
      .row.justify-content-around.align-items-center
        .col-lg-7.col-xxl-6.banner-principal__info
          .banner-principal__programa
            .h1.mb-0 Tecnología en Desarrollo Publicitario
          
          .h2 Información del programa
          .banner-principal__datos
            ul
              li.mb-3.banner-principal__datos__item
                p.h4.mb-0.me-3.banner-principal__datos__item__titulo Nombre del programa: 
                p.banner-principal__datos__item__texto Tecnología en Desarrollo Publicitario
              li.mb-3.banner-principal__datos__item
                p.h4.mb-0.me-3.banner-principal__datos__item__titulo Código: 
                p.banner-principal__datos__item__texto 124100
              li.mb-3.banner-principal__datos__item
                p.h4.mb-0.me-3.banner-principal__datos__item__titulo Total Horas: 
                p.banner-principal__datos__item__texto 3120 horas
              li.mb-3.banner-principal__datos__item
                p.h4.mb-0.me-3.banner-principal__datos__item__titulo Duración en semanas: 
                p.banner-principal__datos__item__texto 27 meses
              li.mb-3.banner-principal__datos__item
                p.h4.mb-0.me-3.banner-principal__datos__item__titulo Modalidad: 
                p.banner-principal__datos__item__texto Virtual              


        .d-none.d-lg-block.col-lg-5
          //- img(src="@/assets/curso/banner-princiapal.svg")
          .video
            | <iframe data-v-1f9e4816="" width="560" height="315" src="https://www.youtube.com/embed/vkKidW9oBE0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>

  .container.tarjeta.tarjeta__template--azul-claro.p-4.p-md-5.mb-5
    .titulo__template--a.mb-4
      span.h4 1. Presentación

    p El programa, Tecnología en Desarrollo Publicitario está enfocado en los procesos de publicidad y comunicación. Sus egresados serán competentes en el desarrollo de acciones de estructuración de la estrategia de mercadeo digital, preparación de campañas y piezas publicitarias, fortaleciendo el manejo de la imagen y comunicación corporativa, y en ordenar e interpretar la información específica de las actividades de publicidad y mercadeo de una organización. Su ocupación estará encaminada en ofrecer soporte en la implementación de campañas y gestionar planes de comunicación empresariales en los diferentes sectores de la economía colombiana.
      br
      br
      |Por este motivo, a lo largo del programa de formación se desarrollarán actividades que permiten llevar a cabo el proyecto formativo: Desarrollo de soluciones publicitarias para las MiPymes de la región, creando evidencias que apuntan a este fin.
      br
      br
      |De igual manera, se desarrollarán unidades temáticas que abordan diferentes temas necesarios para quienes deseen ser expertos en publicidad, implicando con ello, todos los procesos que esto requiere.
      br
      br
      |¡Ánimo! Le aseguramos que al terminar este programa estará en la capacidad de desarrollar soluciones publicitarias en las Mypimes de su región.


  .container.tarjeta.tarjeta__template--azul-claro.p-4.p-md-5.mb-5
    .titulo__template--a.mb-4
      span.h4 2. Justificación<br>del programa

    p La postura reactiva de la mayoría de las empresas colombianas, requiere una urgente transformación para lograr mantenerse en los actuales mercados y como respuesta a esta necesidad, el SENA presenta la Tecnología en Desarrollo Publicitario, con la que se intenta robustecer el talento humano al servicio de las Mipymes, incluyendo colaboradores capacitados en exteriorizar campañas publicitarias sugestivas que permitan llegar a un mayor número de consumidores potenciales, a través del uso de estrategias de marketing online.


  .container.tarjeta.tarjeta__template--azul-claro.p-4.p-md-5.mb-5
    .titulo__template--a.mb-4
      span.h4 3. Competencias<br> a desarrollar

    ul.lista-ul.px-3
      li
        i.lista-ul__vineta
        | Construir el brief según metodologías de diagnóstico organizacional.
      li
        i.lista-ul__vineta
        | Definir el plan de comunicación interna de acuerdo con la cultura y estrategia corporativa.
      li
        i.lista-ul__vineta
        | Estructurar la estrategia de mercadeo digital de acuerdo con objetivos de campaña y normativa legal.
      li
        i.lista-ul__vineta
        | Elaborar piezas graficas de acuerdo con los requerimientos del cliente y principios del diseño gráfico.
      li
        i.lista-ul__vineta
        | Estructurar la campaña publicitaria de acuerdo con objetivos de comunicación y metodología de planeación.
      li
        i.lista-ul__vineta
        | Generar hábitos saludables de vida mediante la aplicación de programas de actividad física en los contextos productivos y sociales.
      li
        i.lista-ul__vineta
        | Gestionar procesos propios de la cultura emprendedora y empresarial de acuerdo con el perfil personal y los requerimientos productivo y social.
      li
        i.lista-ul__vineta
        | Aplicar prácticas de protección ambiental, seguridad y salud en el trabajo de acuerdo con las políticas organizacionales y la normatividad vigente.
      li
        i.lista-ul__vineta
        | Enrique Low Murtra -Interactuar en el contexto productivo y social de acuerdo con principios éticos para la construcción de una cultura de paz.
      li
        i.lista-ul__vineta
        | Ejercer derechos fundamentales del trabajo en el marco de la constitución política y los convenios internacionales.
      li
        i.lista-ul__vineta
        | Orientar investigación formativa según referentes técnicos.
      li
        i.lista-ul__vineta
        | Razonar cuantitativamente frente a situaciones susceptibles de ser abordadas de manera matemática en contextos laborales, sociales y personales.
      li
        i.lista-ul__vineta
        | Aplicación de conocimientos de las ciencias naturales de acuerdo con situaciones del contexto productivo y social.
      li
        i.lista-ul__vineta
        | Utilizar herramientas informáticas de acuerdo con las necesidades de manejo de información.
      li
        i.lista-ul__vineta
        | Desarrollar procesos de comunicación eficaces y efectivos, teniendo en cuenta situaciones de orden social, personal y productivo.
      li
        i.lista-ul__vineta
        | Interactuar en lengua inglesa de forma oral y escrita dentro de contextos sociales y laborales según los criterios establecidos por el Marco Común Europeo de referencia para las lenguas.
  .container.tarjeta.tarjeta__template--azul-claro.p-4.p-md-5.mb-5
    .titulo__template--a.mb-4
      span.h4 4. Perfil<br> de ingreso
    ul.lista-ul.px-3
      li.mb-0
        i.lista-ul__vineta
        p
          b Nivel académico: 
          b-none media académica
      li.mb-0
        i.lista-ul__vineta
        p
          b Curso: 
          b-none Undécimo.
      li.mb-0
        i.lista-ul__vineta
        p
          b Formación para el trabajo y el desarrollo humano: 
          b-none No.
      li.mb-0
        i.lista-ul__vineta
        p
          b Número de horas: 
          b-none No.
      li.mb-0
        i.lista-ul__vineta
        p
          b Requiere certificación académica: 
          b-none Sí.
      li.mb-0
        i.lista-ul__vineta
        p
          b Requiere experiencia laboral: 
          b-none No      
      li.mb-0
        i.lista-ul__vineta
        p
          b Edad mínima definida en la ley: 
          b-none 14 años. 
      li.mb-0
        i.lista-ul__vineta
        p
          b Requisitos adicionales: 
          b-none Título de bachiller o su equivalente validación aprobada por la entidad competente. Acreditar presentación del examen de estado de la educación media y los establecidos por el programa de formación.
      li.mb-0
        i.lista-ul__vineta
        p
          b Restricciones de ingreso soportadas en la legislación vigente:
          b-none No existe legislación que establezca restricciones de ingreso a nivel de discapacidad física y cognitiva.  
      li.mb-0
        i.lista-ul__vineta
        p
          b Aspectos actitudinales, motivacionales y de interés:
          b-none Relaciones interpersonales con su equipo de trabajo y con el cliente. Autocontrol. Responsabilidad de tipo personal, social y laboral. Tolerancia ante las diferentes situaciones. Solidaridad con sus compañeros de trabajo y el público en general. Alteridad ante los cambios que se presentan en su entorno. Valores éticos universales. Comunicación asertiva con los integrantes del equipo de trabajo. Capacidad de resolución de problemas. Creatividad.
  .container.tarjeta.tarjeta__template--azul-claro.p-4.p-md-5.mb-5
    .titulo__template--a.mb-4
      span.h4 5. Perfil<br>de egreso
    p El programa, Tecnología en Desarrollo Publicitario está enfocado en los procesos de publicidad y comunicación. Sus egresados serán competentes en el desarrollo de acciones de estructuración de la estrategia de mercadeo digital, preparación de campañas y piezas publicitarias, fortaleciendo el manejo de la imagen y comunicación corporativa y en ordenar e interpretar la información específica de las actividades de publicidad y mercadeo de una organización. Su ocupación estará enfocada en ofrecer soporte en la implementación de campañas y gestionar planes de comunicación empresariales en los diferentes sectores de la economía colombiana.
  .container.tarjeta.tarjeta__template--azul-claro.p-4.p-md-5.mb-5
    .titulo__template--a.mb-4
      span.h4 6. Estrategia<br>metodológica
    p Centrada en la construcción de autonomía para garantizar la calidad de la formación en el marco de la formación por competencias, el aprendizaje por proyectos y el uso de técnicas didácticas activas que estimulan el pensamiento para la resolución de problemas simulados y reales; soportadas en el utilización de las tecnologías de la información y la comunicación, integradas en ambientes virtuales de aprendizaje, que en todo caso recrean el contexto productivo y vinculan al aprendiz con la realidad cotidiana y el desarrollo de las competencias. 
      br
      br
      |Igualmente, debe estimular de manera permanente la autocrítica y la reflexión del aprendiz sobre el quehacer y los resultados de aprendizaje que logra a través de la vinculación activa de las cuatro fuentes de información para la construcción de conocimiento:
    ul.lista-ul.px-3
      li
        i.lista-ul__vineta
        | El instructor - Tutor
      li
        i.lista-ul__vineta
        | El entorno
      li
        i.lista-ul__vineta
        | las TIC
      li
        i.lista-ul__vineta
        | El trabajo colaborativo

  //- Créditos
  .container.tarjeta.tarjeta__template--azul-claro.p-4.p-md-5.mb-5
    .titulo__template--a.mb-4
      span.h4 Créditos

    Creditos

  Footer

</template>
<script>
export default {
  name: 'Inicio',
  data: () => ({}),
}
</script>

<style lang="sass"></style>
