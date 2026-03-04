import axios from "axios";
const chalk = require('chalk');

class Joke_Command {
    program;

    constructor(program) {
        this.program = program;
    }

    register() {
        this.program.command("joke")
            .description("Get a random joke")
            .action(() => this.joke())
    }

    async joke() {
        try {
            const res = await axios.get("https://official-joke-api.appspot.com/random_joke")
            const data = res.data
            console.log(chalk.yellow(data.setup))
            console.log(chalk.cyan.bold(data.punchline))
        } catch (err) {
            console.log(chalk.red("Error: " + err.message))
        }
    }

}

export = Joke_Command;