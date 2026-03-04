# My CLI Tool - Command Line Utility

A TypeScript-based CLI tool built with Object-Oriented Programming principles. Provides mathematical operations and API integrations.

## Installation

```bash
npm install
npx tsc
npm link
```

## Usage

```bash
node dist/cli.js <command> [arguments]
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

### API Integrations

- `github <username>`: Get GitHub user information
- `joke`: Get a random joke
- `pokemon <name>`: Get Pokemon information
- `quote`: Get a random inspirational quote
- `weather <city>`: Get the current weather for a city

### Utility

- `greet <name>`: Greet someone

## Commands in Detail

### Mathematical Operations

**Basic Arithmetic**

```bash
node dist/cli.js add 5 3
node dist/cli.js subtract 10 4
node dist/cli.js multiply 6 7
node dist/cli.js divide 20 4
node dist/cli.js modulo 17 5
```

**Advanced Math**

```bash
node dist/cli.js power 2 8
node dist/cli.js sqrt 144
node dist/cli.js factorial 5
```

**Statistics**

```bash
node dist/cli.js average 10 20 30 40
node dist/cli.js max 5 12 8 20 3
node dist/cli.js min 5 12 8 20 3
```

### API Integrations

**GitHub User Info**

```bash
node dist/cli.js github Himanshu197200
```

**Random Jokes**

```bash
node dist/cli.js joke
```

**Pokemon Information**

```bash
node dist/cli.js pokemon pikachu
```

**Random Quote**

```bash
node dist/cli.js quote
```

**Weather**

```bash
node dist/cli.js weather Mumbai
```

### Utility

**Greet**

```bash
node dist/cli.js greet Himanshu
```

**Help**

```bash
node dist/cli.js --help
```

## Project Structure

```
CLI_TOOL_PROJECT/
├── cli.ts
├── init.ts
├── cli-engine/
│   └── engine.ts
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
├── dist/
├── package.json
├── tsconfig.json
└── .gitignore
```

## Architecture

Each command is a class with three key components:

- `constructor(program)` - Initializes with Commander instance
- `register()` - Registers command with CLI engine
- `action methods` - Implements command logic

The CLI Engine manages command registration and execution using OOP principles.

## Technologies

- **TypeScript** - Language
- **Commander.js** - CLI framework
- **Axios** - HTTP requests
- **Chalk** - Colored terminal output

## Development

```bash
npm install
npx tsc
npm link
```

## General

For getting help and to see all the available commands, run:

```bash
node dist/cli.js --help
```