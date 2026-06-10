# Verschil tussen de API-versie en de JSON-versie

## API-versie

Map:

```text
/Users/adenvansevenant/Documents/Angular/OnThePitch
```

Deze versie haalt data uit de online API:

```text
https://player-backend-bqcea8cagredcabg.westeurope-01.azurewebsites.net/api
```

De services gebruiken echte endpoints:

```text
/Players
/Positions
/WeatherForecast
```

Create, edit en delete worden doorgestuurd naar de backend.

## JSON-versie

Map:

```text
/Users/adenvansevenant/Documents/Angular/OnThePitch/OnThePitchJson
```

Deze versie haalt data uit lokale JSON-bestanden:

```text
public/data/players.json
public/data/positions.json
public/data/weatherforecast.json
```

De services gebruiken geen API meer, maar lezen lokaal via:

```ts
environment.dataUrl
```

met:

```ts
dataUrl: '/data'
```

## Belangrijk verschil

In de JSON-versie worden create, edit en delete alleen tijdelijk in het geheugen aangepast.

Dat betekent:

- zolang de app draait, zie je je aanpassingen;
- na refresh of opnieuw starten wordt opnieuw de originele JSON geladen;
- de JSON-bestanden zelf worden niet automatisch aangepast.

## Starten

API-versie:

```bash
cd /Users/adenvansevenant/Documents/Angular/OnThePitch
ng serve -o
```

JSON-versie:

```bash
cd /Users/adenvansevenant/Documents/Angular/OnThePitch/OnThePitchJson
../node_modules/.bin/ng serve -o
```
