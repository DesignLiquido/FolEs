import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarAtribuicaoAbreviada } from "./validacoes/atribuicao-abreviada";
import { validarValores } from "./validacoes/comum";

export class PropriedadeTransicao extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        nenhuma: "none",
        todas: "all",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
    ) {
        super(
            ["propriedade-transicao", "propriedade-transição"],
            "transition-property",
            pragmas,
        );

        // TODO: Repensar
        //     if (valor.includes(" ")) {
        //         validarAtribuicaoAbreviada("comum", "propriedade-transição", valores, this.valoresAceitos, undefined, false, true);
        //     } else {
        //         validarValores("propriedade-transição", valores, this.valoresAceitos);
        //     }

        this.valores = valores;
    }
}
