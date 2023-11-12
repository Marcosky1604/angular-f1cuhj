import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  constructor() {}
  afficherMessage(message: string) {
    alert(message);
  }
}
