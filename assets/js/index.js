console.log("Entro index.js");

(() => {
    // TODO EL CODIGO VA AQUI EN LA FUNCION ANONIMA

    console.log("Console log desde funcion anonima");
    document.getElementById("convertButton").addEventListener("click", convertir);
    document.getElementById("informationButton").addEventListener("click", showInformation);

    const currencyFrom = document.getElementById("currencyFrom");
    const currencyTo = document.getElementById("currencyTo");
    const amountFrom = document.getElementById("amountFrom");
    const amountTo = document.getElementById("amountTo");

    function convertir() {
        console.log("Se realizo un click en el boton convertir.");
        console.log(currencyFrom.Value, "currencyFrom")
        console.log(currencyTo.Value, "currencyTo")
        console.log(currencyFrom.Value, "amountFrom")
        console.log(currencyto.Value, "amountTo")
    }

    function showInformation() {
        console.log("Se realizo un click en el boton informacion");
    }

})()

