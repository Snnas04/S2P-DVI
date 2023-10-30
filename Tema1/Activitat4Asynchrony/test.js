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
