import { Component } from '@angular/core';
import { Tecnicaturas } from '../../../interfaces/tecnicaturas.interface';

@Component({
  selector: 'app-seguridad-higiene-page',
  templateUrl: './seguridad-higiene-page.component.html',
  styles: ``
})
export class SeguridadHigienePageComponent {
  public seguridad_higiene: Tecnicaturas[] = [
    {
      title : 'Tecnicatura Superior en Seguridad e Higiene',
      url: '../assets/seguridad_e_higiene.webp',
      description_one: `El Técnico Superior en Seguridad e Higiene en el trabajo realiza tareas especiales de diseñar planes de Higiene y Seguridad dentro de las empresas productivas y de servicios. 
      Realiza tareas de investigación para prevenir accidentes, desarrolla acciones tendientes para cumplir con las políticas de las organizaciones dentro del marco legal vigente, 
      confecciona estadísticas de accidentes de trabajo y enfermedades profesionales y su análisis, a los efectos de adoptar las medidas correctivas adecuadas, determina y controla los contaminantes ambientales de los lugares de trabajo, 
      capacita al personal y mejora las relaciones comunicativas interpersonales, diseña programas preventivos y contribuye en la creación de normas y participa en auditorias para verificar el cumplimiento de la normativa vigente.
      Su interés esta puesto en las conductas que desarrollan las personas en el contexto laboral, realizando análisis de diversos focos (sociales, grupales e individuales.). La finalidad de la disciplina es lograr mejorar el bienestar de los trabajadores. 
      La psicología laboral se orienta al funcionamiento de las entidades mediante un énfasis sobre los recursos humanos. Al estudiar los vínculos dentro del sistema, puede brindar pautas que mejoren el rendimiento y su efectividad.`,
      title_obt:'Título que se obtiene',
      title_obt_second:'Tecnicatura Superior en Higiene y Seguridad en el Trabajo',
      info_primary:'Esta carrera está aprobada por la resolución Nº 320/13',
      info_second:'Título oficial de validez Nacional.',
      title_perfil: 'Perfil profesional',
      info_perfil:`El Técnico Superior en Seguridad e Higiene en el Trabajo es un profesional competente para la planificación y organización de actividades, el diseño, la gestión de los recursos de 
      los servicios, la evaluación, el  control y la capacitación en todos aquellos aspectos inherentes a la higiene y seguridad en el trabajo. 
      Puede diseñar, inspeccionar y controlar equipos y elementos de protección personal y colectiva, como así también; instalaciones en ambientes de trabajo en 
      los que se desarrollan actividades con riesgos asociados a iluminación, ventilación, radiaciones, carga térmica, ruidos y vibraciones, incendios y/o explosiones, transporte y /o manipulación de 
      materiales, contaminación y afluentes industriales.`,
      title_plan_est:'Plan de Estudios',
      info_plan_est:`Esta carrera se encuentra destinada a todos los interesados en adquirir saberes vinculados al entorno de la Seguridad e Higiene, 
      aportando conceptos teóricos y prácticos en la relación entre el hombre y el mundo laboral para la compresión de la compleja problemática del trabajo.`,
      title_materias:'1º año',
      info_materias_1: 'Administración de las Organizaciones',
      info_materias_2: 'Psicología Laboral',
      info_materias_3: 'Física I',
      info_materias_4: 'Química I',
      info_materias_5: 'Medios de representación',
      info_materias_6: 'Medicina del trabajo I',
      info_materias_7: 'Seguridad I',
      info_materias_8: 'Derecho del trabajo',
      info_materias_9: 'Prácticas Profesionalizantes',
      title_materias_2:'2º año',
      info_materias_seg_1: 'Estadística',
      info_materias_seg_2: 'Física II',
      info_materias_seg_3: 'Química II',
      info_materias_seg_4: 'Inglés Técnico',
      info_materias_seg_5: 'Ergonomía',
      info_materias_seg_6: 'Seguridad II',
      info_materias_seg_7: 'Higiene Laboral y Medio ambiente I',
      info_materias_seg_8: 'Medicina del Trabajo II',
      info_materias_seg_9: 'Prácticas Profesionalizantes',
      title_materias_3:'3º año',
      info_materias_ter_1: 'Comunicación y Administración de medios',
      info_materias_ter_2: 'Capacitación de personal',
      info_materias_ter_3: 'Seguridad III',
      info_materias_ter_4: 'Higiene Laboral y Medio Ambiente II',
      info_materias_ter_5: 'Control de la Comunicación',
      info_materias_ter_6: 'Prácticas Profesionalizantes'
    }
  ]


}
