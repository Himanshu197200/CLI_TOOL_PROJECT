#!/usr/bin/env node
const cli_engine = require('./cli-engine/engine');
const add_command = require('./commands/addCommand');
const subtract_command = require('./commands/subtractCommand');
const multiply_command = require('./commands/multiplyCommand');
const divide_command = require('./commands/divideCommand');
const modulo_command = require('./commands/moduloCommand');
const power_command = require('./commands/powerCommand');
const joke_command = require('./commands/jokeCommand');
const pokemon_command = require('./commands/pokeCommand');
const greet_command = require('./commands/greetCommand');
const quote_command = require('./commands/quoteCommand');
const squareroot_command = require('./commands/squarerootCommand');
const factorial_command = require('./commands/factorialCommand');
const average_command = require('./commands/averageCommand');
const max_command = require('./commands/maxCommand');
const min_command = require('./commands/minCommand');
const github_command = require('./commands/githubCommand');

const engine = new cli_engine();
engine.registerCommands([
    add_command,
    subtract_command,
    multiply_command,
    divide_command,
    modulo_command,
    power_command,
    squareroot_command,
    factorial_command,
    average_command,
    max_command,
    min_command,
    github_command,
    joke_command,
    pokemon_command,
    greet_command,
    quote_command,
]);
engine.run();