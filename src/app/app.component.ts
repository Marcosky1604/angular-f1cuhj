import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  firstname = 'Marc';
  urlSrc =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9CJ5RyMZAhqemlz17j-4fC_1HnTvP1GuLfj7rLNr4BO91xiaReXObWeUwzGXCM6iYS0g&usqp=CAU';
}
