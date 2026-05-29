import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class ModoEscrita extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        horizontal: "horizontal-tb",
        "vertical-direita-esquerda": "vertical-rl",
        "vertical-esquerda-direita": "vertical-lr",
    };

    static nomeCss: string = "writing-mode";

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super("modo-escrita", ModoEscrita.nomeCss, pragmas);

        if (!variavel) validarValores("modo-escrita", valores, this.valoresAceitos);

        this.valores = valores;
        this.variavel = variavel;
    }
}
