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


// Activitat 6
class Book {
    constructor(title, author, yearPublished) {
        this.title = title;
        this.author = author;
        this.yearPublished = yearPublished;
    }

    getAge() {
        const currentYear = new Date().getFullYear();
        return currentYear - this.yearPublished;
    }
}

const book = new Book("The Lord of the Rings", "J.R.R. Tolkien", 1954);

console.log("\nBOOK")
console.log("Age of the book: " + book.getAge()); // 69


// Activitat 7
const calculateAverage = (array) => {
    let sum = 0
    for (let i = 0; i < array.length; i++) {
        sum += array[i]
    }
    return sum / array.length
}

var array = [6, 5, 7]

console.log("\nAVERAGE")
console.log("Average of "+ array +": " + calculateAverage(array))


// Activitat 8
const findPrimeNumbers = (n) => {
    let primeNumbers = []
    for (let i = 2; i < n; i++) {
        let isPrime = true
        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                isPrime = false
                break
            }
        }
        if (isPrime) {
            primeNumbers.push(i)
        }
    }
    return primeNumbers
}

var maxNumber = 100

console.log("\nPRIME NUMBERS")
console.log("Prime numbers: " + findPrimeNumbers(maxNumber))


// Activitat 9
const mergeArrays = (array1, array2) => {
    let mergeArrays = []

    for(let i = 0; i < array1.length; i++) {
        mergeArrays.push(array1[i])
    }

    for(let i = 0; i < array2.length; i++) {
        mergeArrays.push(array2[i])
    }

    return mergeArrays
}

var array1 = [1, 2, 3]
var array2 = [10, 11, 12]

console.log("\nMERGE ARRAYS")
console.log("Merge arrays: " + mergeArrays(array1, array2))


// Activitat 10
const findCommonElements = (array1, array2) => {
    let commonElements = []

    for(let i = 0; i < array1.length; i++) {
        for(let j = 0; j < array2.length; j++) {
            if(array1[i] == array2[j]) {
                commonElements.push(array2[j])
            }
        }
    }

    return commonElements
}

var array1 = [8, 9, 10]
var array2 = [7, 8, 9]

console.log("\nCOMMON ELEMENTS")
console.log("Common elements: " + findCommonElements(array1, array2))


// Activitat 11
const countVowels = (str) => {
    let vowels = ["a", "e", "i", "o", "u"]
    let count = 0

    for(let i = 0; i < str.length; i++) {
        for(let j = 0; j < vowels.length; j++) {
            if(str[i] == vowels[j]) {
                count++
            }
        }
    }

    return count
}

var strTest = "Hello World!"

console.log("\nCOUNT VOWELS")
console.log("Count vowels: " + countVowels(strTest))


// Activitat 12
const reverseString = (str) => {
    let reverseString = ""

    for(let i = str.length - 1; i >= 0; i--) {
        reverseString += str[i]
    }

    return reverseString
}

var strTest = "Hello World!"

console.log("\nREVERSE STRING")
console.log("Reverse string: " + reverseString(strTest))


// Activitat 13
const findLongestWord = (str) => {
    let longestWord = ""
    let words = str.split(" ")

    for(let i = 0; i < words.length; i++) {
        if(words[i].length > longestWord.length) {
            longestWord = words[i]
        }
    }

    return longestWord
}

var strTest = "python javascript"

console.log("\nLONGEST WORD")
console.log("Longest word: " + findLongestWord(strTest))


// Activitat 14
const capitalizeWords = (str) => {
    let words = str.split(" ")
    let capitalizeWords = ""

    for(let i = 0; i < words.length; i++) {
        capitalizeWords += words[i].charAt(0).toUpperCase() + words[i].slice(1) + " "
    }

    return capitalizeWords
}

var strTest = "python javascript"

console.log("\nCAPITALIZE WORDS")
console.log("Capitalize words: " + capitalizeWords(strTest))


// Activitat 15
const filterUnique = (array) => {
    let uniqueArray = []

    for(let i = 0; i < array.length; i++) {
        for(let j = 0; j < array.length; j++) {
            if(array[i] == array[j] && i != j) {
                break
            } else if(j == array.length - 1) {
                uniqueArray.push(array[i])
            }
        }
    }

    return uniqueArray
}

var array = [1, 2, 3, 3, 4, 5, 5]

console.log("\nFILTER UNIQUE")
console.log("Filter unique: " + filterUnique(array))


// Activitat 16
const removeDuplicates = (array) => {
    let uniqueArray = []

    for(let i = 0; i < array.length; i++) {
        if(!uniqueArray.includes(array[i])) {
            uniqueArray.push(array[i])
        }
    }

    return uniqueArray
}

var array = [1, 2, 3, 3, 4, 5, 5]

console.log("\nREMOVE DUPLICATES")
console.log("Remove duplicates: " + removeDuplicates(array))


// Activitat 17
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }

    return array;
}

const arrayTest = [1, 2, 3, 4, 5];

console.log("\nSHUFFLE ARRAY")
console.log("Shuffle array: " + shuffleArray(arrayTest))


// Activitat 18
const fibonacci = (n) => {
    let fibonacci = [0, 1]

    for(let i = 2; i < n; i++) {
        fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2])
    }

    return fibonacci
}

var number = 10

console.log("\nFIBONACCI")
console.log("Fibonacci: " + fibonacci(number))
