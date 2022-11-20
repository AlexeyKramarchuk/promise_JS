/*const promise=new Promise((resolve,reject)=>{
        try {
            setTimeout(() => {
                resolve(10);
            }, 1500);
            
        } catch (error) {
            reject(error)
        }finally{
            console.log("abc")
        }
    })
    const promise2=new Promise((resolve,reject)=>{
            setTimeout(() => {
                resolve(10);
            }, 1500);
            setTimeout(() => {
                reject(error)
            }, 1000);
    })
    promise2.then(result=>console.log(result)).catch(err=>console.log(err)).finally(()=>{
        console.log("end")
    });
                                       -> resolve, state: "fulfilled"
    przez 500ms -> state: "pending"
                                        -> reject, state: "rejected"
    
    async function getData(){
        const response=await fetch("https://jsonplaceholder.typicode.com/users")
        const data=await response.json()
        return data;
    }
    getData().then((data)=>{
        console.log("THEN",data)
    })
    

    let promise = new Promise(function(resolve, reject) {
        setTimeout(() => resolve("Job done!"), 1000);
      });

      promise.then(
        result => alert(result), // wyświetli "done" po 1 sekundzie
        error => alert(error) // nie uruchomi się
      );

      let promise = new Promise(function(resolve, reject) {
        setTimeout(() => reject(new Error("Job failed!")), 1000);
      });
      
      promise.then(
        result => alert(result), // nie uruchomi się
        error => alert(error) // wyświetli "Job failed!" 
      );

    let promise = new Promise(function(resolve, reject) {
        setTimeout(() => reject(new Error("Job failed!")), 1000);
      });
      
      promise.catch(alert);

      function checkMail() {
        return new Promise((resolve, reject) => {
          if (Math.random() > 0.5) {
            resolve('Mail wysłany');
          } else {
            reject(new Error('Nie udało się wysłać maila'));
          }
        });
      }
      
      checkMail()
        .then(console.log)
        .catch(console.error)
        .finally(() => {
          console.log('Operacja zakończona');
        });

        function loadScript(src) {
            return new Promise(function(resolve, reject) {
              let script = document.createElement('script');
              script.src = src;
          
              script.onload = () => resolve(script);
              script.onerror = () => reject(new Error(`Script load error for ${src}`));
          
              document.head.append(script);
            });
          }
          
          
          let promise = loadScript("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js");
          
          promise.then(
            script => alert(`${script.src} is loaded!`),
            error => alert(`Error: ${error.message}`)
          );
          
          alert("Loading basic code (that does not require ajax library)");


          function loadImageAsync(url) {
            return new Promise(function(resolve, reject) {
              let image = new Image();
          
              image.onload = function() {
                resolve(image);
              };
          
              image.onerror = function() {
                reject(new Error('Could not load image at ' + url));
              };
          
              image.src = url;
            });
          }
          
          loadImageAsync('one.png')
            .then(function(image) {
              console.log('Image loaded', image);
            }, function(err) {
              console.error('Error loading image', err);
            });


            new Promise(function(resolve, reject) {

                setTimeout(() => resolve(1), 1000); 
              
              }).then(function(result) {
              
                alert(result); 
                return result * 2;
              
              }).then(function(result) {
              
                alert(result);
                return result * 5;
              
              }).then(function(result) {
              
                alert(result);
                return result * 6;
                
                
              
              });


              fetch('/devs-mentoring-api/courses/students-list.json')
  .then(function(response) {
    return response.text(); // tutaj otrzymujemy odpowiedź, z której wyciągamy JSON-a ...
  })
  .then(function(text) { // ... i przekazujemy tutaj
    alert(text); // {"name": "Jan", "isStudent": true}
  });

  function myPromise(counter){
    return new Promise((resolve, reject) => {
      setTimeout(() => {
          resolve(`MY PROMISE ${counter}`);
        }, 2000);
     })
    }
    
    function callPromise(){
      myPromise(1).then(result => console.log(result));    
      myPromise(2).then(result => console.log(result));
      myPromise(3).then(result => console.log(result));
      console.log('LAST LOG');
    }
    callPromise();





 console.log('Request data ...')   
 
 setTimeout(() => {
    console.log('Preparing data ...')

const backendData = {
    server: 'aws',
    port: 2000,
    status: 'working'
    }

    setTimeout(() => {
        backendData.modified = true
        console.log('Data received', backendData)
    }, 2000)
 }, 2000)
      


 const p = new Promise(function(resolve, reject) {
    setTimeout(() => {
        console.log('Preparing data ...')
        const backendData = {
            server: 'aws',
            port: 2000,
            status: 'working'
        }
        resolve(backendData)
    }, 2000)
 })

 p.then((data) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            data.modified = true
            resolve(data)
        }, 2000)
    })   
}).then(clientData => {
    clientData.fromPromise = true
    return clientData
}).then(data => {
  console.log('Modified', data)
})
.catch(err => console.error('Error: ', err))
.finally(() => console.log('Finally'))



const sleep = ms => {
  return new Promise(resolve => {
    setTimeout(() => resolve(), ms)
  })
}

// sleep(2000).then(() => console.log('After 2 sec'))
// sleep(3000).then(() => console.log('After 3 sec'))

Promise.all([sleep(2000), sleep(5000)]).then(() => {
  console.log('All promises')
})

Promise.race([sleep(2000), sleep(5000)]).then(() => {
  console.log('Race promises')
})


function delay(ms) {
  return new Promise(resolve => {
    setTimeout(() => resolve(), ms)
  })
}


delay(3000).then(() => alert('выполнилось через 3 секунды'));




const delay = ms => {
  return new Promise(r => setTimeout(() => r(), ms))
}

const url = 'https://jsonplaceholder.typicode.com/todos'

function fetchTodos() {
  console.log('Fetch todo started...')
  return delay(2000)
  .then(() =>  fetch(url))
  .then(response => response.json())
}

fetchTodos()
.then(data => {
  console.log('Data:', data)
})
.catch(e => console.error(e))

async function fetchAsyncTodos() {
  console.log('Fetch todo started...')
  try {
    await delay(2000)
    const response = await fetch(url)
    const data = await response.json()
    console.log('Data:', data)
  } catch(e) {
    console.error(e)
  }
}

fetchAsyncTodos()*/