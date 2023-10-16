// Activitat 1
class Rectangle {
    constructor(height, width) {
        this.height = height
        this.width = width
    }

    get area() {
        return this.calcArea()
    }

    get perimeter() {
        return this.calcPerimeter()
    }

    calcArea() {
        return this.height * this.width
    }

    calcPerimeter() {
        return 2 * (this.height + this.width)
    }
}

const rectangle = new Rectangle(10, 20)
console.log("\nRECTANGLE")
console.log("Area: " + rectangle.area)
console.log("Perimeter: " + rectangle.perimeter)


// Activitat 2
class Circle {
    constructor(radius) {
        this.radius = radius
    }

    get area() {
        return this.calcArea()
    }

    get circumference() {
        return this.calcCircumference()
    }

    calcArea() {
        return Math.PI * this.radius * this.radius
    }

    calcCircumference() {
        return 2 * Math.PI * this.radius
    }
}

const circle = new Circle(10)
console.log("\nCERCLE")
console.log("Area: " + circle.area)
console.log("Circumference: " + circle.circumference)


// Activitat 3
class BankAccount {
    constructor(accountNumber, accountHolder, balance) {
        this.accountNumber = accountNumber
        this.accountHolder = accountHolder
        this.balance = balance
    }

    get deposit() {
        return this.deposit()
    }

    get withdraw() {
        return this.withdraw()
    }

    get balance() {
        return this.balance()
    }

    deposit(amount) {
        this.balance += amount
    }

    withdraw(amount) {
        this.balance -= amount
    }

    balance() {
        return this.balance
    }
}

const bankAccount = new BankAccount(123456789, "Marc Sans", 1000)
console.log("\nBANK ACCOUNT")
console.log("Account number: " + bankAccount.accountNumber)
console.log("Account holder: " + bankAccount.accountHolder)
console.log("Balance: " + bankAccount.balance)
bankAccount.deposit(100)
console.log("Balance after deposit: " + bankAccount.balance)
bankAccount.withdraw(200)
console.log("Balance after withdraw: " + bankAccount.balance)


// Activitat 4
class Student {
    constructor(name, age, grades) {
        this.name = name
        this.age = age
        this.grades = grades
    }

    get average() {
        return this.calcAverage()
    }

    calcAverage() {
        let sum = 0
        for (let i = 0; i < this.grades.length; i++) {
            sum += this.grades[i]
        }
        return sum / this.grades.length
    }
}

const student = new Student("Marc Sans", 19, [8, 9, 7])
console.log("\nSTUDENT")
console.log("Name: " + student.name)
console.log("Age: " + student.age)
console.log("Grades: " + student.grades)
console.log("Average: " + student.average)


// Activitat 5
class Person {
    constructor(name, age, gender) {
        this.name = name
        this.age = age
        this.gender = gender
    }

    get details() {
        return this.getDetails()
    }

    getDetails() {
        console.log("Name: " + this.name)
        console.log("Age: " + this.age)
        console.log("Gender: " + this.gender)
    }
}

const person = new Person("Marc Sans", 19, "Male")
console.log("\nPERSON")
console.log(person.details)
