import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  message: string = 'coucou';
  constructor(private messageService: MessageService) {}

  //constructor() { }

  ngOnInit() {}
  afficherCoucou() {
    this.messageService.afficherMessage('Coucou');
  }
}
