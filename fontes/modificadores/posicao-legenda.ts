import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class PosicaoLegenda extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "superior": "top",
        "inferior": "bottom",
        "inicio-bloco": "block-start",
        "início-bloco": "block-start",
        "fim-bloco": "block-end",
        "inicio-em-linha": "inline-start",
        "início-em-linha": "inline-start",
        "fim-em-linha": "inline-end",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador, valorVariavel: boolean = false) {
        super(["posicao-legenda", "posição-legenda"], "caption-side", pragmas);

        if (!valorVariavel) validarValores('posição-legenda', valor, this.valoresAceitos);

        this.valor = valor;
    }
}
