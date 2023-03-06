import { NegotiationController } from "./src/controllers/negotiation-controller.js";
const controller = new NegotiationController();
const form = document.querySelector('.form');
if (form) {
    form.addEventListener('submit', event => {
        event.preventDefault();
        controller.add();
    });
}
else {
    throw Error('Unable to initialize the application. Check if your form exists!');
}
const importButton = document.querySelector('#botao-importar');
if (importButton) {
    importButton.addEventListener('click', () => {
        controller.importData();
    });
}
else {
    throw Error('Import Button not fount.');
}
//# sourceMappingURL=app.js.map