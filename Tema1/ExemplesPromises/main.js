// CALLBACKS
function myFunctionCallback(parametre) {
    setTimeout(parametre, 2000)
    console.log('Start callback')
}

function printOnConsole() {
    console.log('Callback')
}

myFunctionCallback(printOnConsole)

console.log('Middle')

myFunctionCallback(printOnConsole)

console.log('End callback')

// myFunctionCallback(() => {
//     console.log('Hello World')
// })


// PROMISES
function myFunctionPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Promise')
        }, 3000)
    })
}

console.log('Start promise')

myFunctionPromise()
    .then((result) => {
        console.log(result)
    })
    .catch((error) => {
        console.log(error)
    })

console.log('End promise')
