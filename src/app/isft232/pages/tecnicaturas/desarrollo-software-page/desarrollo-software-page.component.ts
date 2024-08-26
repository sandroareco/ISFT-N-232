import { Component } from '@angular/core';
import { Tecnicaturas } from '../../../interfaces/tecnicaturas.interface';

@Component({
  selector: 'app-desarrollo-software-page',
  templateUrl: './desarrollo-software-page.component.html',
  styles: ``
})
export class DesarrolloSoftwarePageComponent {

  public desarrollo_software: Tecnicaturas[] = [
    {
      title : 'Tecnicatura Superior en Desarrollo de Software',
      url: '../assets/desarrollo_de_software.webp',
      description_one: `El desarrollador de Software se ha convertido en una de las profesiones más importantes de la actualidad, especialmente vinculado a la etapa histórica que vivimos, la denominada INDUSTRIA 4.0 en la cual se brindan soluciones de entorno digital a problemas de la sociedad moderna.
      Las habilidades adquiridas por un desarrollador de Software son muy bien valoradas y requeridas por todo tipo de empresas comerciales, industriales y de servicios, como así también organizaciones no gubernamentales y entidades públicas.
      Esta Tecnicatura provee los conocimientos teóricos prácticos necesarios que permitirán diseñar software con el fin de satisfacer requerimientos de proyectos y abordar soluciones a las variadas problemáticas de las organizaciones.
      Base de datos, Algoritmos, Programación, Diseño Web, Sistemas operativos, HTML, Ingeniería de Software, Aplicaciones móviles, Sistemas Digitales, Estadística, Lógica, Laboratorio de Hardware.`,
      url_inscription: "https://docs.google.com/forms/d/e/1FAIpQLSd4LgYgWpHcw5cHXbVMvohaEKIxTSsurYw9vH5ki88e2F8Y8Q/viewform",
      info_inscription: `Inscripción definitiva para el ciclo 2025 
                        13 y 14 de Diciembre de 2024
                        en nuestra sede de Junín y Tomás Guido, Burzaco,
                        en el horario de 17:30 a 20:30 horas`,
      title_obt:'Título que se obtiene',
      title_obt_second:'Tecnicatura Superior en Desarrollo de Software',
      info_primary:'Esta carrera está aprobada por la resolución 5847/19.',
      info_second:'Título oficial de validez Nacional.',
      title_perfil: 'Perfil profesional',
      info_perfil:`El técnico Superior en Desarrollo de Software estará capacitado para diseñar software dentro de un marco de trabajo individual o en un equipo 
                  grupal interdisciplinario.
                  Asimismo podrá asesorar, modificar, resolver problemáticas, mejorar programas y mantener los  sistemas de complejidad media adaptándolos a 
                  las nuevas exigencias a fin de asegurar su correcto funcionamiento.
                  Su posición ocupacional suele denominarse “analista programador” o “programador” y en forma más abarcativa “desarrollador de Software”.
                  También es una excelente carrera para que administradores y personal de oficina puedan construir programas y rutinas de automatización 
                  vinculadas con su tarea diaria en la operatoria del procesamiento de datos y que construyan procedimientos en el entorno organizacional para 
                  favorecer a procesos administrativos en el manejo de la información con la finalidad de tomar decisiones de alcance ejecutivo.`,
      title_requisitos: 'Requisitos de Ingreso',
      info_req_1: 'Carpeta 3 solapas azul',
      info_req_2: 'Completar la Ficha de Inscripción',
      info_req_3: '2 fotos 4 cm x 4 cm.',
      info_req_4: 'Presentar fotocopia del título secundario y exhibir el original. También se acepta la fotocopia y/o la constancia de título en trámite.',
      info_req_5: 'Presentar fotocopia del DNI anverso - reverso y exhibir el original.',
      info_req_6: 'Presentar fotocopia de la partida de nacimiento.',
      title_plan_est:'Plan de Estudios',
      info_plan_est:`Esta carrera se encuentra destinada a todos los interesados en adquirir saberes vinculados al entorno de la programación 
      y creación de software de propósito general, no requiriendo que tengan conocimientos técnicos previos para su cursada.`,
      title_materias:'1º año',
      info_materias_1: 'Análisis Matemático',
      info_materias_2: 'Administración y gestión de base de datos',
      info_materias_3: 'Introducción a la programación',
      info_materias_4: 'Introducción a las redes de datos',
      info_materias_5: 'Sistemas Digitales',
      info_materias_6: 'Sistemas Operativos',
      info_materias_7: 'Laboratorio de Hardware',
      info_materias_8: 'Prácticas Profesionalizantes I',
      title_materias_2:'2º año',
      info_materias_seg_1: 'Inglés I',
      info_materias_seg_2: 'Desarrollo de aplicativos móviles',
      info_materias_seg_3: 'Álgebra y lógica',
      info_materias_seg_4: 'Programación',
      info_materias_seg_5: 'Diseño Web',
      info_materias_seg_6: 'Estadística y Probabilidades',
      info_materias_seg_7: 'Desarrollo de sistemas Orientados a Objetos',
      info_materias_seg_8: 'Prácticas Profesionalizantes II',
      title_materias_3:'3º año',
      info_materias_ter_1: 'Inglés II',
      info_materias_ter_2: 'Gestión de Proyectos',
      info_materias_ter_3: 'Desarrollo de sistemas Web',
      info_materias_ter_4: 'Ingeniería de Software',
      info_materias_ter_5: 'Metodología de pruebas de sistemas',
      info_materias_ter_6: 'Prácticas Profesionalizantes III'
    }
  ]

}
