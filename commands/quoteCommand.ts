import axios from "axios";
const chalk = require('chalk');

class Quote_Command {
    program: any;

    constructor(program: any) {
        this.program = program;
    }

    register() {
        this.program
            .command("quote")
            .description("Get a random inspirational quote")
            .action(() => this.getQuote())
    }

    async getQuote() {
        try {
            const res = await axios.get("https://zenquotes.io/api/random")
            const data = res.data[0];

            console.log(chalk.magenta("Random Quote"));
            console.log(chalk.cyan(`"${data.q}"`));
            console.log(chalk.yellow(`- ${data.a}`));

        } catch (err) {
            console.log(chalk.red("Error fetching quote. Please try again later."));
        }
    }
}

export = Quote_Command;
