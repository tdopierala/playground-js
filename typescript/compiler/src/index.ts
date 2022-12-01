interface User {
    firstName: string;
    lastName: string;
    age: number;
    created: Date;
}

class Person {
    private name: string;

    constructor(name: string) {
        this.name = 'null';
        this.setName(name);
    }

    public getName() {
        return this.name;
    }

    public setName(name: string) {
        if(this.validateName(name)) {
            this.name = name;
        } else {
            throw Error('Invalid name length.');
        }
    }

    private validateName(name: string) {
        return name.length > 3;
    }
}

const person1 = new Person('Adam Braskov');
const person2 = new Person('Adam Adam');
person2.setName('Tomasz Grabowski');


console.log(person1.getName());
console.log(person2.getName());

let users: User[];

users = [
    { firstName: 'Tomek', lastName: 'Nowak', age: 32, created: new Date() },
    { firstName: 'Paweł', lastName: 'Kowalski', age: 22, created: new Date() },
    { firstName: 'Piotr', lastName: 'Szulc', age: 44, created: new Date() },
    { firstName: 'Sebastian', lastName: 'Rej', age: 19, created: new Date() },
];

for (const user of users) {
    //console.log(user);
}
