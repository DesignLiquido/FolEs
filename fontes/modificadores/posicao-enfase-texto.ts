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

    static nomeCss: string = "text-emphasis-position";

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(
            ["posicao-enfase-texto", "posição-ênfase-texto"],
            PosicaoEnfaseTexto.nomeCss,
            pragmas,
        );

        if (!variavel) validarValores("posição-ênfase-texto", valores, this.valoresAceitos);

        this.valores = valores;
        this.variavel = variavel;
    }
}
