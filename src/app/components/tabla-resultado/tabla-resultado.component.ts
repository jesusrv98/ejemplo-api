import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/core/models/user.model';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-tabla-resultado',
  templateUrl: './tabla-resultado.component.html',
  styleUrls: ['./tabla-resultado.component.scss']
})
export class TablaResultadoComponent implements OnInit {

  public userList: User[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.obtenerListado();
  }

  private async obtenerListado() {

    //FORMA 1 de traer datos
    // console.log("Paso 1");
    // this.userService.getUsuarios().subscribe( object => {
    //   this.userList = object.data;
    //   console.log("Paso 2");
    // });
    // console.log("Paso 3");

    //FORMA 2
    const resultado = await this.userService.getUsuariosAsync();
    this.userList = resultado.data;
  }





}
