# CLI Tool Project - Command Line Utility

A fully functional Object-Oriented Command Line Interface (CLI) built with Node.js and TypeScript.

## Folder Structure

```
CLI_TOOL_PROJECT/
├── cli.ts                    # Main entry point
├── init.ts                   # Initialization file
├── cli-engine/
│   └── engine.ts             # CLI Engine (registers and runs commands)
├── commands/
│   ├── addCommand.ts
│   ├── subtractCommand.ts
│   ├── multiplyCommand.ts
│   ├── divideCommand.ts
│   ├── moduloCommand.ts
│   ├── powerCommand.ts
│   ├── squarerootCommand.ts
│   ├── factorialCommand.ts
│   ├── averageCommand.ts
│   ├── maxCommand.ts
│   ├── minCommand.ts
│   ├── greetCommand.ts
│   ├── githubCommand.ts
│   ├── jokeCommand.ts
│   ├── pokeCommand.ts
│   ├── quoteCommand.ts
│   └── weatherCommand.ts
├── dist/                     # Compiled JavaScript output
├── package.json
├── tsconfig.json
└── .gitignore
```

## Setup Instructions

**Install Dependencies:** Make sure you have Node.js installed. Then, run:

```bash
npm install
```

**Compile the TypeScript Code:** The CLI runs from the compiled source in the `dist` directory. To compile:

```bash
npx tsc
```

**Use the CLI:** You can run the compiled code using `node dist/cli.js <command>`, or optionally link it globally (if configured):

```bash
node dist/cli.js --help
```

## Available Commands

### Math Operations

- `add <num1> <num2>`: Add two numbers
- `subtract <num1> <num2>`: Subtract second number from first number
- `multiply <num1> <num2>`: Multiply two numbers
- `divide <num1> <num2>`: Divide first number by second number
- `modulo <num1> <num2>`: Get remainder of division
- `power <base> <exponent>`: Calculate base raised to exponent
- `sqrt <num>`: Calculate square root of a number
- `factorial <num>`: Calculate factorial of a number
- `average <numbers...>`: Calculate average of multiple numbers
- `max <numbers...>`: Find maximum from multiple numbers
- `min <numbers...>`: Find minimum from multiple numbers

### Utilities & API Integrations

- `greet <name>`: Greet someone
- `github [options] <username>`: Get GitHub user information. (Option: `-r`, `--repos` to show user repositories)
- `joke`: Get a random joke
- `pokemon <name>`: Get Pokemon information
- `quote`: Get a random inspirational quote
- `weather <city>`: Get the current weather for a city

## Example Usage

**Math Commands:**

```bash
node dist/cli.js add 10 5
node dist/cli.js subtract 20 8
node dist/cli.js average 10 20 30
node dist/cli.js factorial 5
```

**API Commands:**

```bash
node dist/cli.js pokemon bulbasaur
node dist/cli.js joke
node dist/cli.js github Himanshu197200
node dist/cli.js quote
node dist/cli.js weather Mumbai
```

**General:**

```bash
node dist/cli.js --help
```