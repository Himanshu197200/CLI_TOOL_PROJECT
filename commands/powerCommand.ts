class Power_Command {
    program;

    constructor(program) {
        this.program = program;
    }

    register() {
        this.program.command("power <base> <exponent>")
            .description("Calculate base raised to exponent")
            .action((base, exponent) => this.power(base, exponent))
    }

    power(base, exponent) {
        if (isNaN(base) || isNaN(exponent)) {
            console.log("Please enter valid numbers!");
            return;
        }
        const result = Math.pow(Number(base), Number(exponent));
        console.log(`Result: ${result}`);
    }

}

module.exports = Power_Command;
