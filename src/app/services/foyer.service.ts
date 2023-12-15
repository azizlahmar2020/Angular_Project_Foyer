import { foyer } from './../model/foyer';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class foyerService {
  getFoyerById: any;
  getfoyerById(idFoyer: number) {
    throw new Error('Method not implemented.');
  }

  private url = 'http://localhost:8089/foyer/foyer/';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/Json' }),
  };

  constructor(private http: HttpClient) {}
  getfoyer():Observable<any> {
    return this.http.get(`${this.url}restieve-all-foyers`);
  }

  foyerById(foyer:foyer) {
    return this.http.get(this.url+"remove-foyer/"+foyer.idFoyer);

  }


  addFoyer(foyer: foyer): Observable<foyer> {
    return this.http.post<foyer>(`${this.url}add-foyer`, foyer, this.httpOptions);
  }
  removeFoyer(foyer: foyer) {
    return this.http.delete(this.url+"remove-foyer/"+foyer.idFoyer);
  }
  // Angular service method for updating a "Foyer"
  /*update(foyer: foyer): Observable<foyer> {
  return this.http.put<foyer>(this.url + "update-foyer/", foyer.idFoyer);
}*/

updateFoyer(foyer: foyer, id: number): Observable<foyer> {
  const updateUrl = `${this.url}update-foyer/${id}`;
  return this.http.put<foyer>(updateUrl, foyer);
}

  affecterFoyerAUniversite(nomUniversite: String, idFoyer: number): Observable<string> {
    return this.http.post<string>(this.url + 'affecterFoyerAUniversite/' + idFoyer + '/' + nomUniversite, null);
  }

  desaffecterFoyerAUniversite(nomUniversite: String): Observable<string> {
    return this.http.post<string>(this.url + 'desaffecterFoyerAUniversite/' + nomUniversite, null);
  }

}
