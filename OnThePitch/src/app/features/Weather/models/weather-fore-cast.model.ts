export class WeatherForeCast {
  constructor(
    public date: string,
    public temperatureC: number,
    public temperatureF: number,
    public summary: string
  ) {}
}
