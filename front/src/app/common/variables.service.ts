import { Injectable } from '@angular/core';
import {HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class VariablesService {

  auth_endpoint: string = 'http://nest.smartengo.local:8000/api';
  api_endpoint: string = 'http://api.smartengo.local:8004/api';
  jsonHeader = {headers: new HttpHeaders({'Content-Type':  'application/json'})};
  constructor() { }
}
