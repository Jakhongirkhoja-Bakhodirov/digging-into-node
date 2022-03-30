const argv = require('minimist')(process.argv.slice(2) , {
    boolean:['help'],
    string:['file'],
    integer:['maxConnection'],
});

// process.stdout.write('Hello World')

// process.stdin.read();

console.log('Something New');
console.error('Oops');

console.log(process.argv);

console.log(argv);