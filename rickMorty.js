/* *Declaramos las variables para añadir el html */
let characters = document.querySelector("#characters");

/* Llamamos a la appi*/
fetch ("https://rickandmortyapi.com/api/character")
   .then((resp) => resp.json())
   .then((data) => {
      /* Tiene dos objetos princiaples*/
      /* El primero nos va a servir para paginar*/
      console.log (data.info);
      /* El segundo nos va dar los resultados por defecto 20*/
      console.log (data.results);

      data.results.map((item) => {
         const content = document.createElement ("div");
         content.innerHTML = `
         <!-- INICIO de CARTA-->
         <div class="card">
            <div class="card_imagen">
               <img src="${item.image}" alt>
            </div>
            <div class="card_contenido">
               <h3>${item.name}</h3>
         
               <h4>${item.location.name}</h4>
               <h5>${item.species}</h5>
               
            </div>
         </div>
         <!-- FIN de CARTA-->
         `;
         characters.append(content)
      });

   });