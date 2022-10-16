import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { FilterData } from '../interfaces/core/filterData';
import { User } from '../interfaces/user.interface';
import { environment } from 'src/environments/environment';

const API_URL_USER = environment.apiBaseLink + '/api/user/';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private httpClient: HttpClient,
    private router: Router,
  ) { }

  /**
 * getAllUsers()
 */
  getAllUsers(filterData: FilterData, searchQuery?: string) {
    let params = new HttpParams();
    if (searchQuery) {
      params = params.append('q', searchQuery);
    }
    return this.httpClient.post<{ data: User[]; count: number; success: boolean }>(API_URL_USER + '/', filterData, { params });
  }
}
