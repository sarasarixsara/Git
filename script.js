document.addEventListener("DOMContentLoaded", function () {

    
    const nombreInput = document.getElementById("nombreInput");
    const saludarButton = document.getElementById("saludarButton");
    const saludo = document.getElementById("saludo");

    saludarButton.addEventListener("click", function () {
        const nombre = nombreInput.value;
        if (nombre.trim() !== "") {
            saludo.textContent = `¡Hola, ${nombre}!`;
        } else {
            saludo.textContent = "Por favor, ingresa tu nombre.";
        }
    });
});
