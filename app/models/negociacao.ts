export class Negociacao {
    private _data;
    private _quantidade;
    private _valor;

    constructor(data, quantidade, valor) {
        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;
    }
    get data() {
        return this._data;
    }

    get quantidade() {
        return this._quantidade;
    }

    get valor() {
        return this._valor;
    }

    get volume() {
        return this._quantidade * this._valor;
    }
}

/* NOTES:
    - O export define que esta classe pode ser exportada para um modulo.
    - Isso é uma implementação usando modulos do ECMASCRIPT;
*/