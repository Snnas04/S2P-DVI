function asyncWithErrorHandling() {
    return await = new Promise((resolve, reject) => {
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