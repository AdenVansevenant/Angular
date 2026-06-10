# Angular oefeningen - overzicht

Deze map bevat verschillende Angular-oefenprojecten. Dit bestand is bedoeld als geheugensteun voor de belangrijkste dingen die we gezien hebben: commando's, mappenstructuur, components, models, services, environments, pipes, routing, databinding, formulieren en API/JSON-data.

## Projecten in deze map

Voorbeelden van oefeningen:

- `hello-world`: eerste Angular-app en eenvoudige component.
- `one-way-databinding`: data tonen vanuit TypeScript naar HTML.
- `event-binding` en `demo event-binding`: reageren op events zoals klikken.
- `Two-waybinding` en `demo two-way-binding`: werken met `ngModel`.
- `attribute-binding` en `color-attribute-binding`: attributes/classes/styles binden.
- `Demo_ParentToChild`: communicatie tussen parent en child componenten.
- `angular-routing26`: navigatie met routes.
- `demo-singleton`: gedeelde service/singleton.
- `ReactiveForm`: reactive forms en validatie.
- `customerapp` en `customerszip`: customers, filters, services, models en pipes.
- `movie26Start` en `MovieOpl26`: movie-list, movie-detail, services, routing en JSON-data.
- `OnThePitch`: grotere structuur met features, shared components, services, models en environments.
- `FrontEnd_ExamenVoorbereiding26-main`: samenvattende examenvoorbereiding met meerdere Angular-onderdelen.

## Basiscommando's

Ga eerst naar het project waarin je wil werken:

```bash
cd /Users/adenvansevenant/Documents/Angular/naam-van-project
```

Nieuw project maken:

```bash
ng new project-naam
cd project-naam
ng serve
```

Project starten:

```bash
ng serve
```

Of via npm:

```bash
npm start
```

Project builden:

```bash
ng build
```

Dependencies installeren als `node_modules` ontbreekt:

```bash
npm install
```

Tests uitvoeren:

```bash
ng test
```

## Angular CLI generate commando's

Component aanmaken:

```bash
ng generate component component-naam
ng g c component-naam
```

Voorbeelden:

```bash
ng g c customer
ng g c child
ng g c register
ng g c Features/customers/customers-list
ng g c Features/Movie/Components/movie-detail
ng g c features/player/components/list
ng g c shared/components/toolbar
```

Service aanmaken:

```bash
ng generate service pad/service-naam
ng g s pad/service-naam
```

Voorbeelden:

```bash
ng g s Shared/Services/customer-service
ng g s Features/Movie/Services/movie-service
ng g s shared/services/count-service
ng g s features/player/services/playerservice
```

Class/model aanmaken:

```bash
ng generate class pad/model-naam
ng g class pad/model-naam
```

Voorbeelden:

```bash
ng g class Features/customers/Models/customer.model
ng g class Features/Movie/Models/movie.model
ng g class shared/models/student
ng g class features/position/models/position.model
```

Interface aanmaken:

```bash
ng generate interface pad/model-naam
ng g i pad/model-naam
```

Pipe aanmaken:

```bash
ng generate pipe Shared/pipes/capitalize
ng g pipe Shared/pipes/capitalize
```

## Belangrijke Angular-bestanden

Een standaard Angular-project bevat meestal:

```text
project-naam/
  angular.json
  package.json
  tsconfig.json
  public/
  src/
    index.html
    main.ts
    styles.css
    environments/
      environment.ts
      environment.development.ts
    app/
      app.ts
      app.html
      app.css
      app.config.ts
      app.routes.ts
```

Betekenis:

- `package.json`: scripts en npm packages.
- `angular.json`: Angular projectconfiguratie.
- `src/main.ts`: startpunt van de Angular-app.
- `src/index.html`: hoofd-HTML-pagina waarin Angular geladen wordt.
- `src/styles.css`: globale CSS.
- `src/app/app.ts`: hoofdcomponent.
- `src/app/app.html`: template van de hoofdcomponent.
- `src/app/app.routes.ts`: routes/navigatie.
- `src/app/app.config.ts`: providers zoals router en `HttpClient`.
- `public/`: statische bestanden zoals afbeeldingen en JSON-bestanden.
- `src/environments/`: instellingen per omgeving.

## Mappenstructuur

Bij kleine oefeningen staan components vaak rechtstreeks onder `src/app`.

```text
src/app/
  app.ts
  app.html
  customer/
    customer.ts
    customer.html
    customer.css
```

Bij grotere projecten gebruikten we een structuur met `Features` en `Shared`.

```text
src/app/
  Features/
    customers/
      customers/
      customers-list/
      filter-textbox/
      Models/
      Services/
    Movie/
      Components/
      Models/
      Services/
  Shared/
    Services/
    pipes/
    components/
```

In sommige projecten wordt lowercase gebruikt:

```text
src/app/
  features/
    player/
      components/
      models/
      services/
    Weather/
      components/
      models/
      services/
  shared/
    components/
    services/
```

Belangrijk: kies per project een consistente schrijfwijze. Meng liever niet te veel `Features` en `features`, of `Shared` en `shared`.

## Components

Een component is een zichtbaar stukje van de applicatie.

Een component bestaat meestal uit:

```text
component-naam.ts
component-naam.html
component-naam.css
component-naam.spec.ts
```

Gebruik een component voor:

- Een pagina, zoals `movie-list`, `login`, `players` of `customers`.
- Een herbruikbaar stukje UI, zoals `toolbar` of `filter-textbox`.
- Een onderdeel met eigen HTML, CSS en gedrag.

Voorbeeld:

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-customer',
  imports: [],
  templateUrl: './customer.html',
  styleUrl: './customer.css'
})
export class Customer {
  name = 'Jan';
}
```

Gebruik in HTML:

```html
<app-customer></app-customer>
```

## Databinding

Databinding is de koppeling tussen TypeScript en HTML.

Interpolatie: data tonen in HTML.

```html
<h1>{{ title }}</h1>
```

Property binding: een eigenschap instellen.

```html
<img [src]="imageUrl" [alt]="description">
```

Event binding: reageren op een event.

```html
<button (click)="increase()">+</button>
```

Two-way binding met `ngModel`: waarde lezen en aanpassen.

```html
<input [(ngModel)]="name">
<p>{{ name }}</p>
```

Voor `ngModel` moet `FormsModule` geimporteerd zijn in de component.

```ts
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule]
})
export class Register {}
```

## Control flow in templates

In de oefeningen komt de nieuwe Angular template syntax voor.

Voorwaarde:

```html
@if (isLoggedIn) {
  <p>Welkom</p>
} @else {
  <p>Gelieve in te loggen</p>
}
```

Lus:

```html
@for (customer of customers; track customer.id) {
  <p>{{ customer.name }}</p>
}
```

Gebruik `track` zodat Angular weet welk item welk object is.

## Parent-child communicatie

Met `@Input()` stuur je data van parent naar child.

Child component:

```ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.html'
})
export class Child {
  @Input() title = '';
}
```

Parent template:

```html
<app-child [title]="parentTitle"></app-child>
```

Met `@Output()` stuur je een event van child naar parent.

Child component:

```ts
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter-textbox',
  templateUrl: './filter-textbox.html'
})
export class FilterTextbox {
  @Output() changed = new EventEmitter<string>();

  onChange(value: string): void {
    this.changed.emit(value);
  }
}
```

Parent template:

```html
<app-filter-textbox (changed)="filter($event)"></app-filter-textbox>
```

## Models en interfaces

Een model of interface beschrijft de vorm van data.

Voorbeeld met `class`:

```ts
export class Customer {
  id!: number;
  name!: string;
  city!: string;
  orderTotal!: number;
}
```

Voorbeeld met `interface`:

```ts
export interface Movie {
  id: number;
  title: string;
  year: number;
  poster: string;
}
```

Vuistregel:

- Gebruik `interface` voor simpele data uit een API of JSON-bestand.
- Gebruik `class` als je standaardwaarden, constructor of methods nodig hebt.

## Services

Een service gebruik je voor logica of data die je wil delen.

Gebruik een service voor:

- Data ophalen uit JSON of API.
- Data delen tussen componenten.
- Filteren, sorteren of berekeningen.
- Gedeelde state, zoals een teller.

Voorbeeld:

```ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from '../Models/customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  constructor(private http: HttpClient) {}

  getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>('/files/customers.json');
  }
}
```

`providedIn: 'root'` betekent dat Angular een gedeelde instantie van de service maakt voor de hele app. Dat is het singleton-principe.

## Singleton

Een singleton betekent: er bestaat maar 1 gedeelde instantie van iets in de applicatie.

In Angular gebruik je een singleton meestal via een service:

```ts
@Injectable({
  providedIn: 'root'
})
export class CountService {
  counter = 0;

  increment(): void {
    this.counter++;
  }
}
```

`providedIn: 'root'` zegt tegen Angular:

- Maak deze service beschikbaar in de hele applicatie.
- Maak maar 1 instantie van deze service.
- Geef diezelfde instantie aan elke component die de service injecteert.

Waar gebruik je een singleton voor?

- Data delen tussen meerdere componenten.
- Een gemeenschappelijke teller of status bewaren.
- Ingelogde gebruiker of sessie-informatie bijhouden.
- Winkelmandje, favorieten of geselecteerde items bewaren.
- Data cachen die je niet telkens opnieuw wil ophalen.
- Centrale logica zoals sorteren, filteren of API-calls hergebruiken.

Voorbeeld uit `demo-singleton`: `ComponentA` en `ComponentB` gebruiken allebei dezelfde `CountService`.

```ts
import { Component } from '@angular/core';
import { CountService } from '../shared/services/count-service';

@Component({
  selector: 'app-component-a',
  templateUrl: './component-a.html'
})
export class ComponentA {
  constructor(private countService: CountService) {}

  get counter(): number {
    return this.countService.counter;
  }

  increment(): void {
    this.countService.increment();
  }
}
```

Als `ComponentB` dezelfde service injecteert, krijgt die dezelfde `counter` te zien. Klik je in component A op `increment`, dan verandert de waarde ook voor component B.

Zo gebruik je een singleton stap voor stap:

1. Maak een service.
2. Zet `providedIn: 'root'` in de `@Injectable`.
3. Bewaar gedeelde data of gedeelde methods in die service.
4. Injecteer de service in elke component die de data nodig heeft.
5. Roep methods van de service aan vanuit de component.

Gebruik geen singleton voor puur visuele details die maar in 1 component nodig zijn. Zet lokale state, zoals een open/dicht-status van een klein menu, gewoon in de component zelf.

## HttpClient en JSON-data

Om data op te halen gebruikten we `HttpClient`.

In `app.config.ts` moet `provideHttpClient()` geregistreerd zijn:

```ts
import { ApplicationConfig } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient()
  ]
};
```

JSON-bestanden staan vaak in `public/`, bijvoorbeeld:

```text
public/files/customers.json
public/json/MockMovies.json
public/data/players.json
```

Ophalen vanuit een service:

```ts
this.http.get<Movie[]>('/json/MockMovies.json');
```

Een `Observable` toon je in HTML vaak met de `async` pipe:

```html
@if (movies$ | async; as movies) {
  @for (movie of movies; track movie.id) {
    <p>{{ movie.title }}</p>
  }
}
```

## Routing

Routes bepalen welke component getoond wordt bij welke URL.

Routes staan in:

```text
src/app/app.routes.ts
```

Voorbeeld:

```ts
import { Routes } from '@angular/router';
import { MovieList } from './Features/Movie/Components/movie-list/movie-list';
import { MovieDetail } from './Features/Movie/Components/movie-detail/movie-detail';

export const routes: Routes = [
  { path: '', redirectTo: 'movies', pathMatch: 'full' },
  { path: 'movies', component: MovieList },
  { path: 'movie-detail/:id', component: MovieDetail },
  { path: '**', redirectTo: 'movies' }
];
```

Navigeren in HTML:

```html
<a routerLink="/movies" routerLinkActive="active">Movies</a>
<button [routerLink]="['/movie-detail', movie.id]">Details</button>
```

Waar de route getoond wordt:

```html
<router-outlet></router-outlet>
```

Routeparameter lezen:

```ts
import { ActivatedRoute } from '@angular/router';

constructor(private route: ActivatedRoute) {}

ngOnInit(): void {
  const id = this.route.snapshot.paramMap.get('id');
}
```

## ngOnInit

`ngOnInit` is een lifecycle hook van Angular.

Een lifecycle hook is een method die Angular automatisch uitvoert op een bepaald moment in het leven van een component. `ngOnInit()` wordt uitgevoerd wanneer de component aangemaakt is en klaar is om te starten.

Je gebruikt `ngOnInit` vooral voor startlogica:

- Data ophalen wanneer een component opent.
- Een service aanspreken om gegevens te laden.
- Routeparameters uitlezen, zoals een `id`.
- Een lijst vullen bij het openen van een pagina.
- Een formulier voorbereiden met bestaande data.

Voorbeeld:

```ts
import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../Services/customer-service';
import { Customer } from '../Models/customer.model';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.html'
})
export class Customers implements OnInit {
  customers: Customer[] = [];

  constructor(private customerService: CustomerService) {}

  ngOnInit(): void {
    this.customerService.getCustomers().subscribe((customers) => {
      this.customers = customers;
    });
  }
}
```

Belangrijk verschil tussen `constructor` en `ngOnInit`:

| Constructor | ngOnInit |
| --- | --- |
| Wordt gebruikt om dependencies te injecteren. | Wordt gebruikt om startlogica uit te voeren. |
| Bijvoorbeeld een service binnenkrijgen. | Bijvoorbeeld data ophalen via die service. |
| Hou je meestal kort. | Hier zet je code die moet lopen bij het starten van de component. |

Voorbeeld met routeparameter:

```ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.html'
})
export class MovieDetail implements OnInit {
  movieId: string | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.movieId = this.route.snapshot.paramMap.get('id');
  }
}
```

Korte vuistregel:

- `constructor`: Angular geeft je wat je nodig hebt, zoals een service.
- `ngOnInit`: jij start je component op, bijvoorbeeld data laden.

## Environments

Environment-bestanden gebruik je voor instellingen die kunnen verschillen per omgeving.

Locatie:

```text
src/environments/environment.ts
src/environments/environment.development.ts
```

Voorbeeld:

```ts
export const environment = {
  production: false,
  apiUrl: 'https://localhost:5001/api'
};
```

Gebruik in een service:

```ts
import { environment } from '../../../environments/environment';

const url = `${environment.apiUrl}/players`;
```

Gebruik environments voor:

- API-url.
- Development/production instellingen.
- Feature flags.
- Externe service urls.

## Pipes

Een pipe gebruik je om data anders te tonen in HTML.

Voorbeelden van ingebouwde pipes:

```html
{{ name | uppercase }}
{{ today | date:'dd/MM/yyyy' }}
{{ total | currency:'EUR':'symbol' }}
{{ studentForm.value | json }}
{{ movies$ | async }}
```

Eigen pipe, zoals `capitalize`:

```ts
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {
  transform(value: string): string {
    if (!value) {
      return '';
    }

    return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
  }
}
```

Gebruik:

```html
{{ customer.name | capitalize }}
```

Gebruik een pipe alleen voor weergave, niet om data definitief te wijzigen of data op te halen.

## Reactive forms

Reactive forms gebruiken `FormGroup`, `FormControl` en `Validators`.

Importeer `ReactiveFormsModule`:

```ts
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  imports: [ReactiveFormsModule]
})
export class ReactiveForm {}
```

Formulier in TypeScript:

```ts
import { FormControl, FormGroup, Validators } from '@angular/forms';

studentForm = new FormGroup({
  voornaam: new FormControl('', [Validators.required, Validators.minLength(2)]),
  achternaam: new FormControl('', [Validators.required]),
  email: new FormControl('', [Validators.required, Validators.email])
});

onSubmit(): void {
  if (this.studentForm.valid) {
    console.log(this.studentForm.value);
  }
}
```

Template:

```html
<form [formGroup]="studentForm" (ngSubmit)="onSubmit()">
  <input formControlName="voornaam">
  <input formControlName="achternaam">
  <input formControlName="email">

  <button type="submit" [disabled]="studentForm.invalid">Opslaan</button>
</form>
```

Validatie tonen:

```html
@if (studentForm.controls.email.invalid && studentForm.controls.email.touched) {
  <p>Email is verplicht en moet geldig zijn.</p>
}
```

## Standalone components en imports

De projecten gebruiken moderne Angular standalone components. Dat betekent dat een component zelf aangeeft welke Angular features of andere components hij nodig heeft.

Voorbeelden:

```ts
import { RouterLink, RouterOutlet } from '@angular/router';
import { AsyncPipe, CurrencyPipe } from '@angular/common';

@Component({
  imports: [RouterOutlet, RouterLink, AsyncPipe, CurrencyPipe]
})
export class App {}
```

Typische imports:

- `RouterOutlet`: plaats waar routecomponenten verschijnen.
- `RouterLink`: navigeren via links/buttons.
- `RouterLinkActive`: actieve navigatielink stylen.
- `FormsModule`: nodig voor `[(ngModel)]`.
- `ReactiveFormsModule`: nodig voor reactive forms.
- `AsyncPipe`: nodig voor `Observable` in HTML met `| async`.
- `CurrencyPipe`, `DatePipe`, `JsonPipe`: data tonen in bepaald formaat.

## Signals

In sommige startbestanden staat een Angular signal:

```ts
import { signal } from '@angular/core';

protected readonly title = signal('movie');
```

Een signal bewaart reactieve state. De waarde lezen in HTML doe je met:

```html
{{ title() }}
```

Voor eenvoudige oefeningen kan een gewone property ook:

```ts
title = 'movie';
```

## Veelgebruikte Angular begrippen

- Component: zichtbaar onderdeel van de app.
- Template: HTML van een component.
- Selector: HTML-tag waarmee je een component gebruikt.
- Service: gedeelde logica of data.
- Singleton: 1 gedeelde instantie, meestal een service met `providedIn: 'root'`.
- Model/interface: beschrijving van de data.
- Pipe: data formatteren voor weergave.
- Route: koppeling tussen URL en component.
- Router outlet: plaats waar routecomponenten verschijnen.
- Input: data van parent naar child.
- Output: event van child naar parent.
- ngOnInit: lifecycle hook die startlogica uitvoert wanneer een component opent.
- Observable: asynchrone datastroom, vaak van `HttpClient`.
- Async pipe: subscriben op een `Observable` vanuit HTML.
- Environment: configuratie per omgeving.

## Snelle keuzehulp

Wanneer gebruik je wat?

| Situatie | Gebruik |
| --- | --- |
| Iets tonen op het scherm | Component |
| Een pagina maken met eigen URL | Component + route |
| Data ophalen uit JSON/API | Service + HttpClient |
| Data delen tussen componenten | Service |
| Gedeelde state bewaren in de hele app | Singleton service |
| Startdata laden wanneer een component opent | `ngOnInit()` |
| Vorm van data beschrijven | Model of interface |
| Data mooier tonen in HTML | Pipe |
| Van pagina wisselen | Routing |
| Parent geeft data aan child | `@Input()` |
| Child stuurt iets terug naar parent | `@Output()` + `EventEmitter` |
| Inputveld koppelen aan property | `[(ngModel)]` |
| Formulier met validatie | Reactive forms |
| API-url bewaren | Environment |

## Veelgemaakte fouten

- Vergeten `FormsModule` te importeren bij `[(ngModel)]`.
- Vergeten `ReactiveFormsModule` te importeren bij reactive forms.
- Vergeten `provideHttpClient()` toe te voegen voor `HttpClient`.
- Vergeten `RouterOutlet` te plaatsen waardoor routes niets tonen.
- Verkeerde bestandsnaam of hoofdletters in imports.
- JSON-bestand verkeerd aanspreken: bestanden in `public/` begin je meestal vanaf `/`.
- Een `Observable` rechtstreeks willen tonen zonder `async` pipe of `subscribe`.
- Te veel logica in een component zetten terwijl een service beter past.

## Handige mini-checklist per nieuwe feature

1. Maak een map voor de feature.
2. Maak een component voor de pagina of UI.
3. Maak een model/interface voor de data.
4. Maak een service als data opgehaald of gedeeld wordt.
5. Voeg een route toe als de gebruiker er via een URL naartoe moet.
6. Voeg imports toe aan de standalone component.
7. Test met `ng serve`.
