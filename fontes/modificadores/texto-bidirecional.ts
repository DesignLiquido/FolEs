import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class TextoBidirecional extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "normal": "normal",
        "embutir": "embed",
        "isolar": "isolate",
        "substituir-bidirecional": "bidi-override",
        "substituir-isolar": "isolate-override",
        "texto-simples": "plaintext",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador, valorVariavel: boolean = false) {
        super("texto-bidirecional", "unicode-bidi", pragmas);

        if (!valorVariavel) validarValores('texto-bidirecional', valor, this.valoresAceitos);

        this.valor = valor;
    }
}
