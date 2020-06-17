class Greeter {
    greeting: string;

    constructor(message: string) {
        this.greeting = message;
    }

    greet() {
        return this.greeting;
    }
}

let greeter = new Greeter('my message');

console.log(greeter);