const app = document.querySelector(".container");

//1ra parte para entender
const url = "https://jsonplaceholder.typicode.com/users";

fetch(url)
  .then((res) => res.json()) //captura datos y los pasa a json
  .then((data) => {
    //console.log(data); //la informacion que trae la respuesta
    data.forEach((usuario) => {
      //console.log(usuario.name);
      const p = document.createElement("p");
      p.setAttribute("id", usuario.id); //;e da el id a la etiqueta p = id del usuario
      p.innerHTML = usuario.name;
      p.addEventListener("click", () => {
        window.location.href = `./usuario.html?id=${usuario.id}`;
      });
      app.appendChild(p);
    });
  })
  .catch((err) => console.log(err)); //se ejecuta si una de las promesas falla
