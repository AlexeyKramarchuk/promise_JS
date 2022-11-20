/*Zad 1.

const countriesAPI = 'https://restcountries.com/v3.1/all';
const catsAPI = 'https://api.thecatapi.com/v1/breeds';

fetch(catsAPI)
.then(response => response.json)
.then()
*/


/*Zad 2.
function job() {
    return new Promise(function(resolve, reject) {
        setTimeout(() => resolve('Hello world!'), 2000)
    }).then(result => alert(result))
}
job();
   
async function job() {
----------------------------------------------------------------
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve("Hello world!"), 2000)
    });
    
    let result = await promise;
    alert(result);
  }
  job();*/

  /*
  Zad 3. */

function job(result, database, errorManager) {
    return result

    .then(function(id) {
        console.log(database.get(id));
    })

    .then(function(info) {
        console.log(info.name);
    })

    .catch(function(error) {
        errorManager.notify(error);
        throw error;
    });
}
job()
 

    