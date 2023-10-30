// 1 Callback Basics
function delayWithCallback(message, callback) {
  setTimeout(() => callback(console.log(message)), 2000)
}

function printMessage(message) {
  return new String(message)
}

delayWithCallback("delayWithCallback", printMessage)


// 2 Promise Practice
function promiseWithDelay() {
  return new Promise((resolve, reject) => {
      try {
          setTimeout(() => resolve("Success"), 3000)
      } catch (error) {
          reject(error)
      }
  })
}

promiseWithDelay().then((result) => {
    console.log(result)
})


// 3 Chaining Promises
// He posat els setTimeout perque es pugui visualitzar millor el resultat
const myPromise = new Promise((resolve) => {
  setTimeout(() => resolve("First"), 500)
  })
  .then((result) => {
      console.log(result)
      return new Promise((resolve) => {
          setTimeout(() => resolve("Second"), 500)
      })
  })
  .then((result) => {
      console.log(result)
      return new Promise((resolve) => {
          setTimeout(() => resolve("Third"), 500)
      })
  })

myPromise.then((result) => {
  console.log(result)
})


// 4 Promise Error Handling
function simulateNetworkRequest() {
  return new Promise((resolve, reject) => {
      try {
      setTimeout(() => resolve("Data received"), 2000)
      setTimeout(() => reject("Request failed"), 3000)
      } catch (error) {
      reject(error)
      }
  })
}

simulateNetworkRequest()
  .then((result) => {
      console.log(result)
  })
  .catch((error) => {
      console.log(error)
  })


// 5 Parallel Promises
function fetchAll(urls) {
  return Promise.all(urls.map(url => fetch(url)))
      .then(responses => Promise.all(responses.map(response => response.json())))
      .then(data => data)
      .catch(error => console.log(error))
}

const urls = [
  'https://jsonplaceholder.typicode.com/posts/1',
  'https://jsonplaceholder.typicode.com/posts/2',
  'https://jsonplaceholder.typicode.com/posts/3'
];

fetchAll(urls).then((result) => {
console.log(result)
})


// 6 Async-Await Basics
async function asyncWithAwait() {
  await new Promise((resolve) => {
    setTimeout(() => resolve(result = "Hellow World!"), 2000)
  })
  console.log(result)
}

asyncWithAwait()


// 7 Async data request
function fetchDataAndPrint(url) {
  return fetch(url)
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(() => console.log(""))
}

fetchDataAndPrint('https://jsonplaceholder.typicode.com/posts/1') // Success
fetchDataAndPrint('https://jsonplaceholder.typasdfsf') // Error


// 8 Async-Await Error Handling
function asyncWithErrorHandling() {
  return await = new Promise((reject) => {
    try {
      setTimeout(() => reject("Promise rejected"), 2000)
    } catch (error) {
      reject(error)
    }
  })
}

asyncWithErrorHandling()
  .then((result) => {
      console.log(result)
  }).catch((error) => {
      console.log(error)
  })

