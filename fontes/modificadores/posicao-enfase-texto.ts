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
        valor: string,
        quantificador?: string,
        pragmas?: PragmasModificador,
        valorVariavel: boolean = false,
    ) {
        super(
            ["posicao-enfase-texto", "posição-ênfase-texto"],
            "text-emphasis-position",
            pragmas,
        );

        if (!valorVariavel)
            validarValores("posição-ênfase-texto", valor, this.valoresAceitos);

        this.valor = valor;
    }
}
