const consultarGif = (topic) =>  {
    fetch (`https://api.giphy.com/v1/gifs/search?api_key=BQkm9N6xhIxZ0taxVkJxw0jervr1bM1j&q=${topic}`)
    .then((response) => {
        return response.json();
    })
    .then((datos) => {
        console.log(datos);
        pintarGif(datos)
    })
    .catch((error) => {
        console.log(error);
    });
};


const btn1Generar = () => {
    let tema = document.getElementById("b1").innerHTML;
    consultarGif(tema);
};

btn1Generar()

const btn2Generar = () => {
    let tema = document.getElementById("b2").innerHTML;
    consultarGif(tema);
};

btn2Generar()

const btn3Generar = () => {
    let tema = document.getElementById("b3").innerHTML;
    consultarGif(tema);
};

btn3Generar()

const btn4Generar = () => {
    let tema = document.getElementById("b4").innerHTML;
    consultarGif(tema);
};

btn4Generar()

const btn5Generar = () => {
    let tema = document.getElementById("b5").innerHTML;
    consultarGif(tema);
};

btn5Generar()







const listaGif = document.getElementById("mostrarGif")

const pintarGif = (data) => {

    let item = listaGif.querySelector(`#gif`);
    item.getElementsByTagName("img")[0].setAttribute("src", data.data[Math.round(Math.random() * 10)].user.avatar_url);

};