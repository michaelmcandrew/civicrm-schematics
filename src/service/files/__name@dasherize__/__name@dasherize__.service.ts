import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment'
import { <%= classify(entity.name) %> } from './<%= dasherize(name) %>';

@Injectable()
export class ApiService {

  params: HttpParams

  constructor(private http: HttpClient) {
    this.params = new HttpParams()
    .set('json', '1')
    .set('key', environment.siteKey)
    .set('api_key', environment.apiKey)
  }

  getsingle(entity: string, id: number) : Observable<<%= classify(entity.name) %>>{
    let params = this.params
    .set('entity', entity)
    .set('action', 'getsingle')
    .set('id', id.toString())
    return this.http.get<<%= classify(entity.name) %>>(
      environment.restApiBaseUrl,
      {params: params}
    );
  }
}
