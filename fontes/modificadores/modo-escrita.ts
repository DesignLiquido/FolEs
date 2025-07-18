import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class ModoEscrita extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        horizontal: "horizontal-tb",
        "vertical-direita-esquerda": "vertical-rl",
        "vertical-esquerda-direita": "vertical-lr",
    };

    constructor(
        valores: Valor[],
        
        pragmas?: PragmasModificador,
        valorVariavel: boolean = false,
    ) {
        super("modo-escrita", "writing-mode", pragmas);

        if (!valorVariavel)
            validarValores("modo-escrita", valores, this.valoresAceitos);

        this.valores = valores;
    }
}
