import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {}

  public getUsuarios(): Observable<any> {
    return this.http.get<any>("https://reqres.in/api/users?page=2");
  }

  public async getUsuariosAsync(): Promise<any>  {
    return this.http.get<any>("https://reqres.in/api/users?page=2").toPromise();
  }

  public async getUsuarioById(id: number): Promise<any> {
    return this.http.get<any>("https://reqres.in/api/users/"+id).toPromise();
  }
}
