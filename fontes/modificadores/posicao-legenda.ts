import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class PosicaoLegenda extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        superior: "top",
        inferior: "bottom",
        "inicio-bloco": "block-start",
        "início-bloco": "block-start",
        "fim-bloco": "block-end",
        "inicio-em-linha": "inline-start",
        "início-em-linha": "inline-start",
        "fim-em-linha": "inline-end",
    };

    constructor(
        valores: Valor[],
        
        pragmas?: PragmasModificador,
        valorVariavel: boolean = false,
    ) {
        super(["posicao-legenda", "posição-legenda"], "caption-side", pragmas);

        if (!valorVariavel)
            validarValores("posição-legenda", valores, this.valoresAceitos);

        this.valores = valores;
    }
}
