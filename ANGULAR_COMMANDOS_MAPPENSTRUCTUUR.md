# Angular commando's die we gebruikt hebben

Dit bestand staat in de overkoepelende Angular-map. Ga eerst naar het project waarin je wil werken:

```bash
cd /Users/adenvansevenant/Documents/Angular/OnThePitch
```

Of bijvoorbeeld:

```bash
cd /Users/adenvansevenant/Documents/Angular/customerapp
```

## Nieuw project

Gebruikt om een nieuw Angular-project te maken:

```bash
ng new project-naam
cd project-naam
ng serve
```

## Component aanmaken

Gebruikt in bijna alle projecten, bijvoorbeeld `customer`, `child`, `register`, `photo-selector`, `movie-list`, `movie-detail`, `component-a`, `component-b`, enzovoort.

Algemeen:

```bash
ng generate component component-naam
```

Korte versie:

```bash
ng g c component-naam
```

Voorbeelden uit de projecten:

```bash
ng g c customer
ng g c child
ng g c register
ng g c photo-selector
ng g c ng-model-voorbeeld
ng g c component-a
ng g c component-b
```

Component in een feature-map:

```bash
ng g c Features/customers/customers
ng g c Features/customers/customers-list
ng g c Features/customers/filter-textbox
ng g c Features/orders/orders
ng g c Features/Movie/Components/movie-list
ng g c Features/Movie/Components/movie-detail
```

Voor `OnThePitch` werd ook deze stijl gebruikt:

```bash
ng g c features/player/components/list
ng g c features/player/components/create
ng g c features/player/components/details
ng g c features/player/components/edit
ng g c features/player/components/about-us
ng g c features/Weather/components/fetch-data
ng g c features/Counter/components/counter
ng g c shared/components/toolbar
```

## Mappen aanmaken

Gebruikt voor de grotere projecten met `Features`, `Shared`, `Components`, `Services` en `Models`.

```bash
mkdir -p src/app/Features
mkdir -p src/app/Shared
```

Feature met componenten, services en models:

```bash
mkdir -p src/app/Features/customers/Services
mkdir -p src/app/Features/customers/Models
mkdir -p src/app/Features/customers/customers
mkdir -p src/app/Features/customers/customers-list
mkdir -p src/app/Features/customers/filter-textbox
```

Movie-structuur zoals in de movie-projecten:

```bash
mkdir -p src/app/Features/Movie/Components
mkdir -p src/app/Features/Movie/Services
mkdir -p src/app/Features/Movie/Models
```

Structuur zoals in `OnThePitch`:

```bash
mkdir -p src/app/features/player/components
mkdir -p src/app/features/player/services
mkdir -p src/app/features/position/models
mkdir -p src/app/features/position/services
mkdir -p src/app/features/Weather/components
mkdir -p src/app/features/Weather/models
mkdir -p src/app/features/Weather/services
mkdir -p src/app/shared/components
```

## Service aanmaken

Gebruikt voor onder andere `customer-service`, `movie-service`, `count-service`, `playerservice`, `positionservice`, `weatherservice` en `sorter-service`.

Algemeen:

```bash
ng generate service pad/naar/service-naam
```

Korte versie:

```bash
ng g s pad/naar/service-naam
```

Voorbeelden uit de projecten:

```bash
ng g s Shared/Services/cusomer-service
ng g s shared/services/count-service
ng g s Features/customers/Services/customer-service
ng g s Features/orders/Services/sorter-service
ng g s Features/Movie/Services/movie-service
ng g s features/player/services/playerservice
ng g s features/position/services/positionservice
ng g s features/Weather/services/weatherservice
```

## Model/class aanmaken

Gebruikt voor onder andere `Customer`, `Movie`, `Student`, `Player`, `Position`, `Country` en `WeatherForeCast`.

Class/model:

```bash
ng generate class pad/naar/model-naam
```

Korte versie:

```bash
ng g class pad/naar/model-naam
```

Voorbeelden:

```bash
ng g class Features/customers/Models/customer.model
ng g class Features/Movie/Models/movie.model
ng g class shared/models/student
ng g class features/Players/models/player.model
ng g class features/position/models/position.model
ng g class features/Weather/models/weather-fore-cast.model
```

## Interface aanmaken

In `movie26Start` werd een `Movie` interface gebruikt.

```bash
ng generate interface Features/Models/movie.model
```

Korte versie:

```bash
ng g i Features/Models/movie.model
```

## Pipe aanmaken

Gebruikt in `customerszip` voor `capitalize.pipe`.

```bash
ng generate pipe Shared/pipes/capitalize
```

Korte versie:

```bash
ng g pipe Shared/pipes/capitalize
```

## Routing

Routes werden aangepast in:

```text
src/app/app.routes.ts
```

Voorbeelden zoals in `angular-routing26`:

```ts
{ path: 'first', component: First },
{ path: 'second', component: Second },
{ path: 'front-end-course', component: FrontEndCourse },
{ path: 'full-stack-course', component: FullStackCourse },
```

Voorbeelden zoals in de movie-projecten:

```ts
{ path: 'movie-list', component: MovieList },
{ path: 'movie-detail/:Id', component: MovieDetail },
{ path: 'login', component: Login },
{ path: 'admin', component: UnderConstruction },
{ path: '**', component: UnderConstruction },
```

Voorbeelden zoals in `OnThePitch`:

```ts
{ path: 'about-us', component: AboutUs },
{ path: 'counter', component: Counter },
{ path: 'fetch-data', component: FetchData },
{ path: 'players', component: List },
{ path: 'players/create', component: Create },
{ path: 'players/details/:id', component: Details },
{ path: 'players/edit/:id', component: Edit },
```

## Project draaien

Gebruikt om de Angular-app lokaal te starten:

```bash
ng serve
```

Of via `package.json`:

```bash
npm start
```

## Build maken

```bash
ng build
```

Of:

```bash
npm run build
```

## Belangrijke opmerking

De projecten gebruiken soms hoofdletters in mappen, zoals `Features`, `Shared`, `Services` en `Models`, en soms kleine letters, zoals `features`, `shared`, `services` en `models`.

Gebruik binnen hetzelfde project altijd dezelfde stijl als die daar al bestaat.
