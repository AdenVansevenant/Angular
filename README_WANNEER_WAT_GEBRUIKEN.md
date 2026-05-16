# Wanneer gebruik je wat in Angular?

Deze README legt uit wanneer je een component, service, model, interface, pipe of route gebruikt in de Angular-projecten.

## Component

Gebruik een component voor alles wat zichtbaar is op het scherm.

Een component bestaat meestal uit:

```text
component-naam.ts
component-naam.html
component-naam.css
component-naam.spec.ts
```

Gebruik een component voor:

- Een pagina, zoals `movie-list`, `movie-detail`, `customers-list` of `login`.
- Een stukje UI, zoals `filter-textbox`, `toolbar` of `customer-card`.
- Een apart onderdeel met eigen HTML en CSS.
- Iets waar de gebruiker mee kan klikken, typen of interageren.

Voorbeelden:

```bash
ng g c customer
ng g c Features/customers/customers-list
ng g c Features/Movie/Components/movie-detail
ng g c shared/components/toolbar
```

Gebruik geen component voor:

- Data ophalen uit een API.
- Data bewaren of delen tussen componenten.
- Een objectstructuur zoals `Customer`, `Movie` of `Player`.

Daarvoor gebruik je meestal een service of model.

## Service

Gebruik een service voor logica en data die niet rechtstreeks bij de HTML hoort.

Een service gebruik je vooral om code te delen tussen meerdere componenten.

Gebruik een service voor:

- Data ophalen, toevoegen, aanpassen of verwijderen.
- API-calls.
- Een lijst met gegevens beheren.
- Logica die meerdere componenten nodig hebben.
- Een gedeelde teller, status of helperfunctie.

Voorbeelden uit de projecten:

```bash
ng g s Features/customers/Services/customer-service
ng g s Features/Movie/Services/movie-service
ng g s shared/services/count-service
ng g s features/player/services/playerservice
ng g s features/Weather/services/weatherservice
```

Voorbeeldsituatie:

Als `CustomersList` klanten moet tonen, dan zet je de klanten-data niet rechtstreeks vast in de component als die data later hergebruikt wordt. Dan maak je bijvoorbeeld een `CustomerService`.

## Model

Gebruik een model om de vorm van data te beschrijven.

Een model zegt welke eigenschappen een object heeft. Bijvoorbeeld een `Customer`, `Movie`, `Player` of `Position`.

Gebruik een model voor:

- Objecten met vaste eigenschappen.
- Data die je in componenten en services gebruikt.
- Duidelijkheid in je code.

Voorbeelden:

```bash
ng g class Features/customers/Models/customer.model
ng g class Features/Movie/Models/movie.model
ng g class features/Players/models/player.model
ng g class features/position/models/position.model
```

Voorbeeld:

```ts
export class Customer {
  id!: number;
  name!: string;
  city!: string;
}
```

Gebruik een model wanneer je data echt als object wil voorstellen.

## Interface

Gebruik een interface ook om de vorm van data te beschrijven.

Het verschil met een class:

- Een interface beschrijft alleen de structuur.
- Een class kan ook echte code, standaardwaarden of methods bevatten.

Gebruik een interface voor:

- Simpele data uit een API.
- Objecten waar je vooral typecontrole voor wil.
- Data zonder extra logica.

Voorbeeld:

```bash
ng g i Features/Models/movie.model
```

Voorbeeldcode:

```ts
export interface Movie {
  id: number;
  title: string;
  year: number;
}
```

Vuistregel:

- Gebruik `interface` voor simpele data.
- Gebruik `class` als je standaardwaarden, constructor of methods nodig hebt.

## Pipe

Gebruik een pipe om data anders te tonen in HTML.

Een pipe verandert hoe iets eruitziet, zonder de originele data echt te veranderen.

Gebruik een pipe voor:

- Tekst opmaken.
- Hoofdletters/kleine letters aanpassen.
- Datums of getallen tonen in een bepaald formaat.
- Een waarde omzetten voor weergave.

Voorbeeld uit het project:

```bash
ng g pipe Shared/pipes/capitalize
```

Voorbeeldgebruik in HTML:

```html
{{ customer.name | capitalize }}
```

Gebruik geen pipe voor:

- Data ophalen.
- Grote businesslogica.
- Gegevens permanent aanpassen.

## Route

Gebruik routes om te bepalen welke component bij welke URL hoort.

Routes staan in:

```text
src/app/app.routes.ts
```

Gebruik routes voor:

- Navigatie tussen pagina's.
- Detailpagina's met een id.
- Loginpagina's.
- Lijsten en detailschermen.
- Fallbackpagina's met `**`.

Voorbeelden:

```ts
{ path: 'movie-list', component: MovieList },
{ path: 'movie-detail/:Id', component: MovieDetail },
{ path: 'players/details/:id', component: Details },
{ path: '**', component: UnderConstruction },
```

Gebruik een route als de gebruiker via een URL naar een scherm moet kunnen gaan.

## Environment

Gebruik `environment`-bestanden voor instellingen die kunnen verschillen per omgeving.

Bijvoorbeeld:

- Een API-url.
- Een instelling voor development of production.
- Een feature tijdelijk aan- of uitzetten.
- Een externe service-url.

Meestal staan environments hier:

```text
src/environments/environment.ts
src/environments/environment.development.ts
```

Voorbeeld:

```ts
export const environment = {
  production: false,
  apiUrl: 'http://localhost:3000',
};
```

Gebruik een environment wanneer je dezelfde waarde op meerdere plaatsen nodig hebt, maar die waarde later kan veranderen per omgeving.

Voorbeeldsituatie:

Een service haalt data op via een API. Zet de basis-url dan niet hardcoded in de service:

```ts
private apiUrl = environment.apiUrl;
```

Gebruik geen environment voor:

- Gewone componentdata.
- Een lijst klanten, films of spelers.
- Tekst die alleen in een HTML-template staat.
- Geheime wachtwoorden of echte API keys die niet in de frontend mogen staan.

Belangrijk: alles in een Angular frontend kan uiteindelijk zichtbaar worden in de browser. Zet dus geen geheime gegevens in `environment`.

## Shared

Gebruik `Shared` of `shared` voor onderdelen die op meerdere plaatsen gebruikt worden.

Gebruik `Shared/shared` voor:

- Herbruikbare componenten.
- Herbruikbare pipes.
- Algemene services.
- Models die door meerdere features gebruikt worden.

Voorbeelden:

```text
src/app/Shared/Services
src/app/Shared/pipes
src/app/shared/components
src/app/shared/models
src/app/shared/services
```

Voorbeeld:

Een `toolbar` die in heel de app gebruikt wordt, zet je in:

```text
src/app/shared/components/toolbar
```

## Features

Gebruik `Features` of `features` om code per onderdeel van de applicatie te groeperen.

Gebruik een feature-map voor:

- Customers
- Orders
- Movie
- Player
- Weather
- Login
- Admin

Voorbeelden:

```text
src/app/Features/customers
src/app/Features/Movie
src/app/features/player
src/app/features/Weather
```

In een feature-map zet je meestal:

```text
Components
Services
Models
```

Of in kleine letters:

```text
components
services
models
```

Belangrijk: volg altijd de stijl die al in het project gebruikt wordt.

## Snelle keuzehulp

| Wat wil je maken? | Gebruik |
| --- | --- |
| Iets zichtbaar op het scherm | Component |
| Een volledige pagina | Component + Route |
| Data ophalen of delen | Service |
| Object zoals Customer, Movie of Player | Model of Interface |
| Simpele datastructuur zonder logica | Interface |
| Datastructuur met standaardwaarden of methods | Class/model |
| Tekst of data anders tonen in HTML | Pipe |
| Navigatie naar een scherm | Route |
| API-url of instelling per omgeving | Environment |
| Herbruikbaar onderdeel | Shared |
| Onderdeel van een bepaald domein, zoals customers of movies | Feature-map |

## Voorbeeld: customers-feature

Voor een customers-feature kan je dit gebruiken:

```text
src/app/Features/customers
src/app/Features/customers/customers
src/app/Features/customers/customers-list
src/app/Features/customers/filter-textbox
src/app/Features/customers/Services/customer-service.ts
src/app/Features/customers/Models/customer.model.ts
```

Betekenis:

- `customers`: component voor het customers-scherm.
- `customers-list`: component om de lijst te tonen.
- `filter-textbox`: component om te filteren.
- `customer-service`: service om klanten-data te beheren.
- `customer.model`: model dat beschrijft hoe een customer eruitziet.

## Voorbeeld: movie-feature

```text
src/app/Features/Movie/Components/movie-list
src/app/Features/Movie/Components/movie-detail
src/app/Features/Movie/Services/movie-service.ts
src/app/Features/Movie/Models/movie.model.ts
```

Betekenis:

- `movie-list`: component voor de lijst van films.
- `movie-detail`: component voor de details van een film.
- `movie-service`: service voor filmdata.
- `movie.model`: model of interface voor de structuur van een film.
