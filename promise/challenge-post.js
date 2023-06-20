import fetch from "node-fetch";
const API = 'https:/api.escuelajs.co/api/v1';

function PostData(urlApi, data){  //ya no se solicita informarción si no se guardará información
    const response = fetch(urlApi,{
        method: 'POST',  //tiene que ir en mayúscula
        mode: 'cors',//cors es el permiso que va a tener, por defecto va estar siempre en cors
        credentials: 'same-origin', //es opcional
        headers:{
            'content-Type': 'application/json' //necesario indicar que lo que se está enviando es de tipo json
        },
        body: JSON.stringify(data) //el método JSON.stringify() convierte un objeto o valor de JavaScript en una cadena de texto JSON
    });
    return response;
}

const data = {
  "title": "New Product Course",
  "price": 9999,
  "description": "A description",
  "categoryId": 1,
  "images": ["https://placeimg.com/640/480/any"]
}

PostData(`${API}/products`, data)
 .then(response => response.json())
 .then(data=> console.log(data));