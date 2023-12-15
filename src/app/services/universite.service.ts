import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { universite } from '../model/universite';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class universiteService {
 
  private url: String = 'http://localhost:8089/foyer/universite/';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/Json' }),
  };
 ;
  constructor(private http:HttpClient) { }
  getuniversite():Observable<any> {
    return this.http.get(`${this.url}restieve-all-universites`);
  }
  universiteById(univerite:universite) {
    return this.http.get(this.url+"remove-universite/"+univerite.idUniversite);

  }
  addUniversite(universite: universite): Observable<universite> {
    const addUrl = `${this.url}add-universite`;
    return this.http.post<universite>(addUrl, universite);
  }
  removeUniversite(universite: universite) {
    return this.http.delete(this.url+"remove-universite/"+universite.idUniversite);
  }
 
  updateUniversite(objet:universite): Observable<universite> {
    const updateUrl = `${this.url}update-universite/${objet.idUniversite}`;
    return this.http.put<universite>(updateUrl, universite);
  }
 
}
