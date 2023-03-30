import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/core/models/user.model';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-info-usuario',
  templateUrl: './info-usuario.component.html',
  styleUrls: ['./info-usuario.component.scss']
})
export class InfoUsuarioComponent implements OnInit {

  private idUsuario: any;

  public usuario: User;

  constructor(private route: ActivatedRoute, private userService: UserService) {
    this.idUsuario = route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.obtenerDatosUsuario();
  }

  private async obtenerDatosUsuario() {
    const res = await this.userService.getUsuarioById(this.idUsuario);
    this.usuario = res.data;
    console.log(this.usuario);
  }



}
