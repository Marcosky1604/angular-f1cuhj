import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Photo } from './photo.interface';

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  apiUrl = 'https://jsonplaceholder.typicode.com/photos';

  constructor(private http: HttpClient) {}

  getPhotoList(): Observable<Photo[]> {
    return this.http.get<Photo[]>(this.apiUrl);
  }
}
