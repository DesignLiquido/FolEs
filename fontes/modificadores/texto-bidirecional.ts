import { valoresGlobais } from "./atributos/globais";
import { Modificador, PragmasModificador } from "./superclasse";

export class TextoBidirecional extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "normal": "normal",
        "embutir": "embed",
        "isolar": "isolate",
        "substituir-bidirecional": "bidi-override",
        "substituir-isolar": "isolate-override",
        "texto-simples": "plaintext",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super("texto-bidirecional", "unicode-bidi");

        if (!(valor in this.valoresAceitos) &&
            !(valor in valoresGlobais)
        ) {
            throw new Error(`Propriedade 'texto-bidirecional' com valor ${valor} inválido. Valores aceitos: 
            ${Object.keys(this.valoresAceitos).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(valoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`)
        }

        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;
    }
}
