import axios from "axios";
const chalk = require('chalk');
class Pokemon_Command {
    program;

    constructor(program) {
        this.program = program;
    }

    register() {
        this.program
            .command("pokemon <name>")
            .description("Get Pokemon information")
            .action((name) => this.getPokemon(name))
    }

    async getPokemon(name) {
        try {
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`)
            const data = res.data

            console.log(chalk.green("Pokemon Details"))
            console.log(chalk.cyan("Name:"), data.name)
            console.log(chalk.cyan("ID:"), data.id)
            console.log(chalk.cyan("Height:"), data.height)
            console.log(chalk.cyan("Weight:"), data.weight)
            console.log(chalk.cyan("Base Experience:"), data.base_experience)

        } catch (err) {
            console.log(chalk.red("Pokemon not found! Please check the spelling."))
        }
    }
}

export = Pokemon_Command;
