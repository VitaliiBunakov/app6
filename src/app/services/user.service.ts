import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Users} from '../models/Users';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) {
  }

  getAllUsers(): Observable <Users[]> { return this.httpClient.get <Users[]>('https://jsonplaceholder.typicode.com/users'); }

  getAllUsersPosts(id: number): Observable <any[]> {
    return this.httpClient.get <any[]>(`https://jsonplaceholder.typicode.com/posts?userId=${id}`); }






  }

