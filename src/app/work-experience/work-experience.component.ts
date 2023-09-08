import { Component } from '@angular/core';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent {

  workExperience : Array<any> = [];

  constructor() {}

  ngOnInit(): void {

    let work1 = {
      fecha: "2019 - 2020",
      ubicacion: "Orizaba, Veracruz",
      puesto: "Desarrollador Web",
      empresa: "Sistemas y Servicios de Veracruz",
      logros: [
        { descripcion: "Creación de aplicaciones web con Angular 8 y Angular Material." },
        { descripcion: "Creación de aplicaciones web con ASP.NET Core MVC." },
      ] 
    };

    let work2 = {
      fecha: "2019 - 2020",
      ubicacion: "Orizaba, Veracruz",
      puesto: "Desarrollador Web",
      empresa: "Sistemas y Servicios de Veracruz",
      logros: [
        { descripcion: "Creación de aplicaciones web con Angular 8 y Angular Material." },
        { descripcion: "Creación de aplicaciones web con ASP.NET Core MVC." },
      ] 
    };

    this.workExperience.push(work1);
    this.workExperience.push(work2);


  };
    

