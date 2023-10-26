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
const myPormise = new Promise((resolve, reject) => {
    try {
        setTimeout(() => {
            resolve('Promise')
        }, 4000)
    } catch (error) {
        reject(error)
    }

})

myPormise
    .then((response) => {
        console.log(response)
    })
    .catch((error) => {
        console.log(error)
    })
    .then((response) => {
        console.log(response),
        (response) => {
            console.log(response)
        }
    })

// ASYNC AWAIT

