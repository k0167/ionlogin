import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/folder/home', icon: 'planet' },
    { title: 'Ambiente', url: '/folder/ambiente', icon: 'easel' },
    { title: 'Embarcado', url: '/folder/embarcados', icon: 'hardware-chip' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
