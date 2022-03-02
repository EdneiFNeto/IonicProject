# IONIC Developer
Passo a passo simples para iniciar dev em IONC

- [IONIC](https://ionicframework.com/docs/intro/cli) - Documetação para iniciar Ionic
- npm install -g @ionic/cli
- ionic start (templetes: Blank, TABS, Side Menu)
- ionic serve (Start)

## Android Development

[Doc-Android](https://ionicframework.com/docs/developing/android) Este guia aborda como executar e depurar aplicativos Ionic em emuladores e dispositivos Android usando Capacitor. 
- ionic capacitor add android
- ionic capacitor copy android

## Capacitor

[Doc-Capacitor](https://capacitorjs.com/docs/getting-started)

- npm install @capacitor/core
- npm install @capacitor/cli --save-dev
- npx cap init (Em projeto Ionic v5 ou superior já vem configurado)
- npm install @capacitor/android
- npx cap add android
- npx cap open android
- npx cap sync android

## App Root

Dentro da pasta src/index existe um arquivo index com uma tag: 
- <app-root></app-root>

Esta TAG [Selector] é encontrada dentro do arquivo src/app/app/app.component.ts

```TypeScript 
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
```

## Rotas 

As rotas fica localizadas dentro do arquivo src/app/app-routing.module.

```TypeScript
const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  }
];
```

### Criando Paginas

- [Criar pagina](https://ionicframework.com/docs/cli/commands/generate) ionic g page pages/name_path


## Navegacao

```html
<ion-content>
  <ion-button (click)="showPageNagivation2()">Navggation page  2</ion-button>
</ion-content>
```

```typescript
export class NavigationPage implements OnInit {
  constructor(private navCtrl: NavController) { }
  showPageNagivation2() {
    this.navCtrl.navigateForward('navigation2'); //nome da rota (arquivo app.routing.module)
  }
}
```

## Check box

```html
<ion-content>
  <ion-list>
    <ion-item *ngFor="let month of months">
      <ion-label>{{month.name}}</ion-label>
      <ion-checkbox checked="{{month.status}}" [(ngModel)]="month.status"></ion-checkbox>
    </ion-item>
  </ion-list>
</ion-content>
```

```typescript
interface Month {
    name: string;
    value: number;
    status: boolean;
  }

  months: Month[] = [
    {
      name: 'JAN',
      value: 1,
      status: true
    },
    {
      name: 'FEV',
      value: 2,
      status: false
    },
    {
      name: 'MAR',
      value: 3,
      status: false
    }
  ];

  showMonthSelected(month: Month){
    if(month.status===true)
    {console.log('month', month);}
  }
```

[(ngModel)]="month.status" utilizado para alterar o estado ou valor da variavel


## API

- Criar service => ionic g service API
- Criar a funcao para recuperar os dados dentro do aqruivo src/app/service
```typescript
  import { Injectable } from '@angular/core';
  import { HttpClient} from '@angular/common/http';
  @Injectable({
    providedIn: 'root'
  })
  export class APIService {

    constructor(private http: HttpClient) { }

    getApi(){
      const url = 'http://localhost:3000/teste';
      return this.http.get(url).toPromise();
    }
  }
```
- Chamar a funcao no arquivo app/page/api
```typescript
  import { APIService } from './../../service/api.service';
  import { Component, OnInit } from '@angular/core';

  interface Itens {
    name: string;
  }
  @Component({
    selector: 'app-api',
    templateUrl: './api.page.html',
    styleUrls: ['./api.page.scss'],
  })
  export class ApiPage implements OnInit {
    constructor(private service: APIService) { }
    ngOnInit() {
      this.service.getApi().then(data => {
        console.log(data);
      }).catch(error => console.error(error));
    }
  }

```

- Adicionar HttpClientModule in app.module.ts
```typescript
  import { NgModule } from '@angular/core';
  import { BrowserModule } from '@angular/platform-browser';
  import { RouteReuseStrategy } from '@angular/router';

  import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

  import { AppComponent } from './app.component';
  import { AppRoutingModule } from './app-routing.module';
  import { HttpClientModule } from '@angular/common/http';

  @NgModule({
    declarations: [AppComponent],
    entryComponents: [],
    imports: [
      ...
      HttpClientModule //<= Adicionar essa linha>
    ],
    providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
    bootstrap: [AppComponent],
  })
  export class AppModule {}
```
- Adicionar o for no HTML para recuperar os dados
```html
<ion-content>
<ion-item *ngFor="let item of itens">
  <ion-label>{{ item.name }}</ion-label>
</ion-item>
</ion-content>
```

- [mockoon](https://mockoon.com/) - Criar API moks
- [CROS-Plugin](https://www.youtube.com/watch?v=KruSUqLdxQA) - Plugin para trabalhar com CROS



