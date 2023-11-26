class Temperature {
    constructor(celsius) {
        this.celsius = celsius;
    }
    toFahrenheit() {
        return (this.celsius * 9 / 5) + 32;
    }
    toKelvin() {
        return this.celsius + 273.15;
    }
}
let Teamperature1 = new Temperature(25)
console.log(`Temperature in Celsius: ${Teamperature1.celsius}°C`);
console.log(`Temperature in Fahrenheit: ${Teamperature1.toFahrenheit()}°F`);
console.log(`Temperature in Kelvin: ${Teamperature1.toKelvin()} K`);