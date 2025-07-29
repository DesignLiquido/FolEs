import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class PosicaoTextoSublinhado extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        auto: "auto",
        direita: "right",
        esquerda: "left",
        debaixo: "under",
        "de-frente": "from-front",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
    ) {
        super(
            ["posicao-texto-sublinhado", "posição-texto-sublinhado"],
            "text-underline-position",
            pragmas,
        );

        validarValores(
            "posição-texto-sublinhado",
            valores,
            this.valoresAceitos,
        );

        this.valores = valores;
    }
}
