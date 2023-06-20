

function callback() {
    console.log("Ejecucion callback");
}

function main(callback) {
    console.log("ejecucion de la funcion main");
    callback();  
}
main(callback);