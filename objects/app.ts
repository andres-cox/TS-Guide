let person: { name: string, age: number, skills: string[] } = {
    name: 'myname',
    age: 123,
    skills: ['read', 'run']
}

console.log(person.name);

//this needs to be rewrite all atributes
// person = {
//     name: 'anothername',
//     skills: ['read', 'run']
// };

//TYPES for TypeScript
type Person = {
    name: string,
    age: number,
    skills: string[],
    getName: () => string
}

let person1: Person = {
    name: 'mynameperson1',
    age: 123,
    skills: ['read', 'run'],
    getName() {
        return this.name;
    }
}

let person2: Person = {
    name: 'mynameperson2',
    age: 123,
    skills: ['read', 'run'],
    getName() {
        return this.name;
    }
}
//console.log(person2.getName())

//INTERFACE
interface Message {
    writer: string,
    message: string
}

function sendMessage(msg: Message) {
    console.log(msg.message);
}

let myMessage: Message = {
    writer: 'Han',
    message: 'this is a request by Han'
}

sendMessage(myMessage);