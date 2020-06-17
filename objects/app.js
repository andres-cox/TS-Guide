var person = {
    name: 'myname',
    age: 123,
    skills: ['read', 'run']
};
console.log(person.name);
var person1 = {
    name: 'mynameperson1',
    age: 123,
    skills: ['read', 'run'],
    getName: function () {
        return this.name;
    }
};
var person2 = {
    name: 'mynameperson2',
    age: 123,
    skills: ['read', 'run'],
    getName: function () {
        return this.name;
    }
};
function sendMessage(msg) {
    console.log(msg.message);
}
var myMessage = {
    writer: 'Han',
    message: 'this is a request by Han'
};
sendMessage(myMessage);
