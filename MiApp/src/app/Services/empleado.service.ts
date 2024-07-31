import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { appsettings } from '../Settings/appsettings'; // Asegúrate de que appsettings esté bien configurado
import { Empleado } from '../Models/Empleado';
import { ResponseAPI } from '../Models/ResponseApi';


@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  private http = inject(HttpClient);
  private apiUrl: string = `${appsettings.apiUrl}Empleado`; // Asegúrate de que `apiUrl` tenga una barra al final si es necesario

  constructor() { }

  // Método para obtener la lista de empleados
  lista() {
    return this.http.get<Empleado[]>(this.apiUrl);
  }

  // Método para obtener un empleado por ID
  obtener(id: number) {
    return this.http.get<Empleado>(`${this.apiUrl}/${id}`);
  }

  // Método para crear un nuevo empleado
  crear(objeto: Empleado) {
    return this.http.post<ResponseAPI>(this.apiUrl, objeto);
  }

  // Método para editar un empleado existente
  editar(objeto: Empleado) {
    return this.http.put<ResponseAPI>(`${this.apiUrl}/${objeto.idEmpleado}`, objeto); // Agrega el ID en la URL si es necesario
  }

  // Método para eliminar un empleado por ID
  eliminar(id: number) {
    return this.http.delete<ResponseAPI>(`${this.apiUrl}/${id}`);
  }
}
