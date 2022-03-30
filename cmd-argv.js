const argv = require('minimist')(process.argv.slice(2) , {
    boolean:['help'],
    string:['file'],
    integer:['maxConnection'],
});

// process.stdout.write('Hello World')

// process.stdin.read();

if(argv.help) {
    printHelp();
} else if(argv.file) {
    console.log(argv.file);
} else {
    error('Incorrect usage cmd arguments' , true);
}

function error(message,includeHelp = false) {
    console.error(message);
    if(includeHelp) {
        console.log("");
        printHelp();
    }
}

function printHelp() {
    console.log("ex1 usage:");
    console.log("ex1.js --help");
    console.log("--help");
}

console.log('Something New');
console.error('Oops');

console.log(process.argv);

console.log(argv);