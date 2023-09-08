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

	nombre: string = "fake name";
	titulo: string = "fake PhD";
	objetivo: string = "fake goal";
	foto: string = "fake photo";
	email: string = "fake email";
	celular: string = "fake phone";
	ubicacion: string = "fake location";
	redsocial: string = "fake social";

	ngOnInit() : void {
		this.headerService.getHeader()
		.subscribe( (data : any) => {
			console.log(data);
			alert(data);
		}
	}
}
