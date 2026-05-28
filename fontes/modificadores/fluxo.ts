import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class Fluxo extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        nenhum: "none",
        esquerda: "left",
        direita: "right",
        ambos: "both",
        "inicio-em-linha": "inline-start",
        "início-em-linha": "inline-start",
        "fim-em-linha": "inline-end",
    };

    static nomeCss: string = "clear";

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super("fluxo", Fluxo.nomeCss, pragmas);

        if (!variavel) validarValores("fluxo", valores, this.valoresAceitos);

        this.valores = valores;
        this.variavel = variavel;
    }
}
