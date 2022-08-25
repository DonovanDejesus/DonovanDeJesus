function rand(n){
    // creamos un numero al azar entre 1 y 10 (o cual sea la cantidad de imágenes)
     return(Math.floor(Math.random() * n + 1 ));
    }
    //guardas imagenes en el array
    var cambia_imagen = new Array();
    cambia_imagen[0] = "George_Charles_Devol.webp";
    cambia_imagen[1] = "origin.jpg";
    cambia_imagen[2] = "descarga (1).jpeg";
    cambia_imagen[3] = "descarga.jpeg";
    cambia_imagen[4] = "tirobot.jpg";
    cambia_imagen[5] = "images.jpeg";
   
    //la función para que al clickear establezca el source del tag imagem que tiene id "ia" (Imagen aleatoria)
    //como no son tantas, puede que alguna vez se repita 2 veces la misma
    //incluso, si usamos numeros para las imágenes, la script puede ser más sencilla
    
    
    function cambiar(){
         document.getElementById("ia").src = cambia_imagen[rand(5)-0];
    }


    console.log("¡Hola, mundo!")