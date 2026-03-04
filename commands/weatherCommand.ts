import axios from "axios";
const chalk = require('chalk');

class Weather_Command {
    program: any;

    constructor(program: any) {
        this.program = program;
    }

    register() {
        this.program
            .command("weather <city>")
            .description("Get the current weather for a city")
            .action((city: string) => this.getWeather(city))
    }

    async getWeather(city: string) {
        try {
            const geoRes = await axios.get(`https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1`);

            if (!geoRes.data.results) {
                console.log(chalk.red("City not found. Please check the spelling."));
                return;
            }

            const location = geoRes.data.results[0];
            const weatherRes = await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${location.latitude}&longitude=${location.longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,wind_speed_10m`);
            const current = weatherRes.data.current;

            console.log(chalk.blue(`\n=== Weather in ${location.name}, ${location.country} ===`));
            console.log(chalk.green("Temperature:"), `${current.temperature_2m}°C`);
            console.log(chalk.cyan("Feels Like:"), `${current.apparent_temperature}°C`);
            console.log(chalk.magenta("Humidity:"), `${current.relative_humidity_2m}%`);
            console.log(chalk.yellow("Wind Speed:"), `${current.wind_speed_10m} km/h\n`);

        } catch (err) {
            console.log(chalk.red("Error fetching weather. Please try again."));
        }
    }
}

export = Weather_Command;
