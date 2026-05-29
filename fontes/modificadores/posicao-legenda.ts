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

    static nomeCss: string = "caption-side";

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(["posicao-legenda", "posição-legenda"], PosicaoLegenda.nomeCss, pragmas);

        if (!variavel) validarValores("posição-legenda", valores, this.valoresAceitos);

        this.valores = valores;
        this.variavel = variavel;
    }
}
