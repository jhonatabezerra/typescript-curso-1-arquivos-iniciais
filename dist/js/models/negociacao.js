export class Negociacao {
    #data;
    #quantidade;
    #valor;

    constructor(data, quantidade, valor) {
        this.#data = data;
        this.#quantidade = quantidade;
        this.#valor = valor;
    }
}

/* NOTES:
    - O export define que esta classe pode ser exportada para um modulo.
    - Isso é uma implementação usando ECMASCRIPT;
*/