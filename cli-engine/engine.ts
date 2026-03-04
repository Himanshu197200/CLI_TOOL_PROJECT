const { Command } = require("commander");

class CliEngine {
    program;

    constructor() {
        this.program = new Command();
        this.program.version("1.0.0", "-V, --version");
    }

    registerCommands(commands) {
        commands.forEach((commandClass) => {
            const commandInstance = new commandClass(this.program)
            commandInstance.register()
        })
    }

    run() {
        this.program.parse()
    }
}

module.exports = CliEngine;