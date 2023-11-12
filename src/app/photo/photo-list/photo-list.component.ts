import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, map, Observable, of } from 'rxjs';
import { Photo } from '../photo.interface';
import { PhotoService } from '../photo.service';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css'],
})
export class PhotoListComponent implements OnInit {
  // List de users
  photo$: Observable<Photo[]> = of([]);
  private criteriaSubject = new BehaviorSubject<string>('');
  criteria$ = this.criteriaSubject.asObservable();

  constructor(private photoService: PhotoService) {}

  ngOnInit() {
    this.photo$ = this.photoService
      .getPhotoList()
      .pipe(map((pictures) => pictures.slice(0, 20)));
  }

  trackByFn(index: number, photo: Photo) {
    return photo.id;
  }
}
