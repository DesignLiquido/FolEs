import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class PosicaoEnfaseTexto extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        sobre: "over",
        abaixo: "under",
        direita: "right",
        esquerda: "left",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
    ) {
        super(
            ["posicao-enfase-texto", "posição-ênfase-texto"],
            "text-emphasis-position",
            pragmas,
        );

        validarValores("posição-ênfase-texto", valores, this.valoresAceitos);

        this.valores = valores;
    }
}
