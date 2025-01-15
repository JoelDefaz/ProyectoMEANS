import { Injectable } from "@angular/core";
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Global } from "./global";
import { Libro } from '../models/libro';
@Injectable()
export class LibroService {
    public url:string;

    constructor(
        private _http:HttpClient,
    ){
        this.url=Global.url;
    }

    //ver libros
    //http://localhost:3600/libros
    getLibros():Observable<any>{
        let headers=new HttpHeaders().set('Content-Type','applicatio/json');
        return this._http.get(this.url+'libros', {headers:headers});
    }
    //guardar libro
    //http://localhost:3600/guardar-libro
    guardarLibro(libro:Libro):Observable<any>{
        let params=JSON.stringify(libro);
        let headers=new HttpHeaders().set('Content-Type','application/json');
        return this._http.post(this.url+'guardar-libro',params,{headers:headers});
    }
    //ver libro
//http://localhost:3600/libro/:id
getLibro(id:string):Observable<any>{
    let headers=new HttpHeaders().set('Content-Type','application/json');
    return this._http.get(this.url+'libro/'+id,{headers:headers});
}
//editar libro
//http://localhost:3600/libro/:id
//eliminar libro
//http://localhost:3600/libro/:id
}