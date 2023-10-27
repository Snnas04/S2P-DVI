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