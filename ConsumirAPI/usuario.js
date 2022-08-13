const app = document.querySelector(".container");
//ahora se va a trabajar con el id de los usuarios para mostrar la info
const getUrl = new URLSearchParams(window.location.search); //parte la url desde el '?' que serian los parametros que se pasan por la direccion
let id = getUrl.get("id"); //busca el parametro id
//console.log(id);
fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    /*
    const name = document.createElement("p");
    name.innerHTML = data.name;
    const email = document.createElement("p");
    email.innerHTML = data.email;
    const userName = document.createElement("p");
    userName.innerHTML = data.username;
    app.appendChild(name);
    app.appendChild(email);
    app.appendChild(userName);
    */
    //let prueba = 10;//number
    //let prueba2 = [];//objetc
    //let prueba3 = {}; //objetc
    //console.log(typeof prueba3);
    for (const propiedad in data) {
      console.log(typeof propiedad);
      //si la propiedad no es el id, haga... (para que no muestre los ids)
      if (propiedad != "id") {
        //si es un objeto dentro de un objeto recorralo
        if (typeof propiedad === "object") {
          console.log(typeof propiedad);
          /*
          for (const subpropiedad in propiedad) {
            console.log(typeof subpropiedad);
          }*/
        } else {
          const p = document.createElement("p");
          p.innerHTML = data[propiedad];
          app.appendChild(p);
        }
      }
    }
  })
  .catch((err) => console.log(err));
