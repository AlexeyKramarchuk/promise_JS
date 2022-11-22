// Zad 1.

// c

// fetch(catsAPI)
// .then(function(response) {
//   return response.json(); 
// })
// .then(function(text) { 
//   text.forEach(((el) => {
//     console.log(el.name)
//   }))
// });




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

// zad 4

// const people = 'https://fakerapi.it/api/v1/persons?_quantity=10'

// fetch(people)
// .then(response => response.json())
// .then(({data})=>{
//   data.forEach((el) => {
    // div
//     const div=document.createElement('div')
    // img
//     const img = document.createElement('img')
//     img.src=el.image
//     console.log(el.image)
    // p
//     const p = document.createElement('p')
//     p.textContent=`${el.firstname} ${el.lastname}`
//     div.appendChild(img)
//     div.appendChild(p)
//     document.body.appendChild(div)
//   })
// })
 
// zad 5


const users = 'https://jsonplaceholder.typicode.com/users'

    fetch(users)
    .then(response => response.json())
    .then((data)=>{
      data.forEach((el) => {
        // console.log(el)

        function createUsersCards() {
          const div = document.createElement('div')
          const p = document.createElement('p')
      
            p.textContent=`${el.name}, ${el.username}, ${el.email}`

            div.appendChild(p)
            document.body.appendChild(div)
            }
        createUsersCards()


        
   })
  })
    