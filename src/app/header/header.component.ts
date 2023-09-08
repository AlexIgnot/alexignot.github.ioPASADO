import { Component, OnInit } from '@angular/core';
import { HeaderService } from '..services/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

	constructor(private headerService : HeaderService){

	}

	nombre:String = "fake name";
	titulo:String = "fake PhD";
	objetivo:String = "fake goal";
	foto:String = "fake photo url";
	email:String = "fake email";
	celular:String = "fake phone";
	ubicacion:String = "fake location";
	redsocial:String = "fake social";

	ngOnInit() : void {
		this.headerService.getHeader()
		.subscribe((data : any) => {

			this.nombre = data.nombre;
			this.titulo = data.titulo;
			this.objetivo = data.objetivo;
			this.foto = data.foto;
			this.email = data.email;
			this.celular = data.celular;
			this.ubicacion = data.ubicacion;
			this.redsocial = data.redsocial;

		})
	}
}
