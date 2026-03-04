# My CLI Tool

A fully functional Object-Oriented Command Line Interface (CLI) built with Node.js and TypeScript. 

## Setup Instructions

1. **Install Dependencies:**
   Make sure you have Node.js installed. Then, run:
   ```bash
   npm install
   ```
2. **Compile the TypeScript Code:**
   The CLI runs from the compiled source in the `dist` directory. To compile:
   ```bash
   npm run build
   # Or if you have typescript installed globally:
   # tsc
   ```
3. **Use the CLI:**
   You can either run the compiled code using `node dist/cli.js <command>` (or `npx ts-node cli.ts <command>`), or optionally link it globally (if configured):
   ```bash
   node dist/cli.js --help
   ```

## Available Commands

### Math Operations
* `add <num1> <num2>`: Add two numbers
* `subtract <num1> <num2>`: Subtract second number from first number
* `multiply <num1> <num2>`: Multiply two numbers
* `divide <num1> <num2>`: Divide first number by second number
* `modulo <num1> <num2>`: Get remainder of division
* `power <base> <exponent>`: Calculate base raised to exponent
* `sqrt <num>`: Calculate square root of a number
* `factorial <num>`: Calculate factorial of a number
* `average <numbers...>`: Calculate average of multiple numbers
* `max <numbers...>`: Find maximum from multiple numbers
* `min <numbers...>`: Find minimum from multiple numbers

### Utilities & API Integrations
* `greet <name>`: Greet someone
* `github [options] <username>`: Get GitHub user information. (Option: `-r, --repos` to show user repositories)
* `joke`: Get a random programming joke
* `pokemon <name>`: Get Pokemon information

## Example Usage

**Math Commands:**
```bash
node dist/cli.js add 10 5
node dist/cli.js average 10 20 30
```

**API Commands:**
```bash
node dist/cli.js pokemon pikachu
node dist/cli.js joke
node dist/cli.js github octocat -r
```

**General:**
```bash
node dist/cli.js --version
node dist/cli.js --help
```