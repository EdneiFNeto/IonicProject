import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Navigation', url: 'navigation', icon: 'paper-plane' },
    { title: 'Botoes', url: 'botoes', icon: 'construct-outline' },
    { title: 'Checkbox', url: 'checkbox', icon: 'construct-outline' },
    { title: 'Api', url: 'api', icon: 'construct-outline' },
  ];
  constructor() {}
}
