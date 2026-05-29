import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class TextoBidirecional extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        normal: "normal",
        embutir: "embed",
        isolar: "isolate",
        "substituir-bidirecional": "bidi-override",
        "substituir-isolar": "isolate-override",
        "texto-simples": "plaintext",
    };

    static nomeCss: string = "unicode-bidi";

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super("texto-bidirecional", TextoBidirecional.nomeCss, pragmas);

        if (!variavel) validarValores("texto-bidirecional", valores, this.valoresAceitos);

        this.valores = valores;
        this.variavel = variavel;
    }
}
