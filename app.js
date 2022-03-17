const formulario = document.querySelector("#formulario");
const userName = document.querySelector("#userName");
const userEmail = document.querySelector("#userEmail");
const alertName = document.querySelector("#alertName");
const alertEmail = document.querySelector("#alertEmail");
const alertSuccess = document.querySelector("#alertSuccess");

const regExpUserName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/; //solo letras pueden llevar tildes
const regExpUserEmail =
    /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/; //validar email

const pintarMensajeError = (errores) => {
    alertSuccess.style.display = "none";

    errores.forEach((element) => {
        if (element.tipo === "alertName") {
            alertName.textContent = element.msg;
            alertName.classList.remove("d-none");
            alertName.style.display = "block";
        } else if (element.tipo === "alertEmail") {
            alertEmail.textContent = element.msg;
            alertEmail.classList.remove("d-none");
            alertEmail.style.display = "block";
        }
    });

    errores = [];
};

const pintarMensajeExito = () => {
    alertName.style.display = "none";
    alertEmail.style.display = "none";

    alertSuccess.classList.remove("d-none"); //alimina clases
    alertSuccess.style.display = "block"; // en este caso sobra esta linea
    alertSuccess.textContent = "Datos enviados con exito";
};

let errores = [];

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    errores = [];

    alertName.style.display = "none";
    alertEmail.style.display = "none";
    alertSuccess.style.display = "none";

    if (!regExpUserName.test(userName.value) || !userName.value.trim()) {
        errores.push({
            tipo: "alertName",
            msg: "Escriba un nombre valido. Solo letras",
        });
    }
    if (!regExpUserEmail.test(userEmail.value)) {
        errores.push({
            tipo: "alertEmail",
            msg: "Escriba un correo valido",
        });
    }

    if (errores.length !== 0) {
        pintarMensajeError(errores);
        return;
    }

    pintarMensajeExito();
});
