import { Component } from '@angular/core';
import { HeaderComponent } from '../../../shared/component/header/header.component';
import { FooterComponent } from '../../../shared/component/footer/footer.component';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-productos-mecanicos',
  standalone: true,
  imports: [HeaderComponent,FooterComponent],
  templateUrl: './productos-mecanicos.component.html',
  styleUrl: './productos-mecanicos.component.css'
})
export default class ProductosMecanicosComponent {

  productos_mecanicos: any[] = [
    {
      title : 'Tecnicatura Superior en Diseño y Desarrollo de productos mecánicos',
      url: '../assets/piezas_mecanicas.webp',
      description_one: `El Técnico Superior en Diseño y Desarrollo de productos mecánicos es el profesional diseñador de piezas mecánicas y de conjuntos formados por varios componentes mecánicos. 
          Diseña productos nuevos y modificaciones a productos mecánicos existentes como así también planifica los procesos de fabricación, modificando los existentes para garantizar la calidad del producto en el menor tiempo posible, 
          siendo capaz de gestionar todo el proceso productivo aplicando normas de seguridad, de cuidados del medio ambiente y aplicando las herramientas del campo digital. 
          Selecciona los equipos y máquinas que intervendrán en el proceso de fabricación y diseña el herramental para la producción, generando prototipos operando básicamente máquinas comandadas a Control Numérico Computarizado e impresoras 3D. 
          Además, opera software de diseño y simuladores.`,
      url_inscription: "https://docs.google.com/forms/d/e/1FAIpQLSckdc1B_7mdMYMFK3Zc7XEmid4omMR3l9kkZ2g8X76y_fZ3ag/closedform",
      info_inscription: `Inscripción definitiva para el ciclo 2025
                      11 y 12 de Diciembre de 2024
                      en nuestra sede de Junín y Tomás Guido, Burzaco,
                      en el horario de 17:30 a 20:30 horas`,
      title_obt:'Título que se obtiene',
      title_obt_second:'Tecnicatura Superior en Diseño y Desarrollo de productos Mecánicos',
      info_primary:'Esta carrera está aprobada por la resolución 2727/2022',
      info_second:'Título oficial de validez Nacional.',
      title_area: 'Área ocupacional',
      info_area:`La/el Técnica/o Superior en Diseño y Desarrollo de Productos Mecánicos podrá insertarse en Empresas industriales desempeñando distintos roles: diseñadora/or, productora/or, directora/or de procesos, jefa/e de planta, jefa/e de oficina técnica y en Empresas diseñadoras de productos, empresas diseñadoras de procesos, empresas productoras, empresas generadoras de herramental y dispositivos.`,
      title_perfil: 'Perfil profesional',
      info_perfil:`El Técnico Superior en Diseño y Desarrollo de Productos Mecánicos es un profesional capacitado para intervenir en los procesos de diseño y fabricación de productos mecánicos, desde la creación de un producto hasta su fabricación, interviniendo en las tres etapas de diseño: [1] el diseño del producto, [2] el diseño de la secuencia de fabricación y [3] el diseño de los elementos de producción.`,
      info_perfil_1:`Es el responsable de organizar y gestionar procesos de producción, estableciendo etapas, tiempos, tercerizando acciones y recursos, controlando y supervisando el proceso de producción tomando decisiones y modificando planificaciones si fuera necesario.`,
      info_perfil_2:`Esta/e profesional puede trabajar bajo relación de dependencia o generar su propio emprendimiento. De acuerdo a la envergadura y organización del área ocupacional, puede tener autonomía en todas sus acciones o parcialmente dependiendo de un referente superior.`,
      info_perfil_3:` Para poder desarrollar plenamente su profesionalidad, la/el Técnica/o Superior en diseño y desarrollo de productos mecánicos tiene que poseer un conjunto de capacidades inherentes al nivel de educación superior que resultan transversales a todas sus funciones y tienen que ser desarrolladas durante el transcurso de su formación, entre ellas:`,
      info_perfil_req_1:'-Resolver problemas y analizar todas sus variables dentro de su campo profesional que impliquen el dominio y la conceptualización de saberes científicos tecnológicos y gerenciales, desarrollando posibles estrategias para su resolución.',
      info_perfil_req_2:'-Diseñar, gestionar y evaluar proyectos y/o procesos en el ámbito de su especialidad que lleven a la mejora de la calidad de la organización, respetando normas de seguridad, higiene y cuidado del medio ambiente.',
      info_perfil_req_3:'-Asumir el rol de liderazgo, coordinación y supervisión, reconociendo el rol de cada integrante del proyecto, transmitiendo la información necesaria en forma precisa y utilizando el lenguaje apropiado para el entendimiento mutuo en interacciones individuales o grupales.',
      info_perfil_req_4:'-Promover en su ámbito de trabajo, la realización de tareas de manera equitativa sin discriminación entre los géneros.',
      info_perfil_req_5:'-Documentar todas las etapas de su tarea como así también las especificaciones de los productos que puedan surgir de su trabajo, referenciando y registrando de tal manera que le facilite acceder posteriormente en forma rápida para recuperarla y/o evaluarla.',
      title_requisitos: 'Requisitos de Ingreso',
      info_req_1: 'Carpeta 3 solapas azul',
      info_req_2: 'Completar la Ficha de Inscripción',
      info_req_3: '2 fotos 4 cm x 4 cm.',
      info_req_4: 'Presentar fotocopia del título secundario y exhibir el original. También se acepta la fotocopia y/o la constancia de título en trámite.',
      info_req_5: 'Presentar fotocopia del DNI anverso - reverso y exhibir el original.',
      info_req_6: 'Presentar fotocopia de la partida de nacimiento.',
      title_plan_est:'Plan de Estudios',
      info_plan_est:`Esta carrera se encuentra destinada a todos los interesados en adquirir saberes vinculados al entorno del diseño y el desarrollo de productos mecáncios, no requiriendo que tengan conocimientos técnicos previos para su cursada`,
      title_materias:'1º año',
      title_materias_cuatrimestre_1:'Primer Cuatrimestre',
      info_materias_1: 'Tecnología de la representación',
      info_materias_2: 'Tecnología de los materiales',
      info_materias_3: 'Procesos de arranque de viruta con tornos paralelos',
      info_materias_4: 'Procesos por conformado mecánico y unión soldada',
      title_materias_cuatrimestre_2:'Segundo Cuatrimestre',
      info_materias_5: 'Construcción de modelos',
      info_materias_6: 'Ensayos de materiales',
      info_materias_7: 'Procesos de Arranque de viruta con fresadoras',
      info_materias_8: 'Práctica Profesionalizante 1: Aproximación a los procesos productivos',
      title_general: 'General',
      info_general_1:'Comunicación',
      title_materias_2:'2º año',
      info_materias_seg_1: 'Procesos de Fabricación con tornos CNC',
      info_materias_seg_2: 'Diseño de Productos Mecánicos',
      info_materias_seg_3: 'Diseño de Moldes para Inyectar Productos Mecánicos',
      info_materias_seg_4: 'Práctica Profesionalizante 2: Implementación de Procesos de Fabricación',

      info_materias_seg_5: 'Procesos de Fabricación con fresadoras CNC',
      info_materias_seg_6: 'Diseño de dispositivos para la producción',
      info_materias_seg_7: 'Diseño de Herramientas para Fabricar Productos Mecánicos',
      info_materias_seg_8: 'Práctica Profesionalizante 3: Diseños y Fabricación de Moldes',

      title_materias_3:'3º año',
      info_materias_ter_1: 'Diseño de Procesos de Fabricación',
      info_materias_ter_2: 'Práctica Profesionalizante 4: Diseño de Mejoras para la Producción',
      info_materias_ter_3: 'Desarrollo de Proyectos de Producción',
      info_materias_ter_4: 'Práctica Profesionalizante 5: Desarrollo y Gestión de Proyectos de Producción',
      info_materias_ter_5: 'Trabajo, Tecnología y Sociedad'
    }
  ]

  footer: any[] = [
    {
      url : '../assets/Logo232.webp'
    }
  ];

  faInstagram = faInstagram;
  faFacebook = faFacebook;

}
