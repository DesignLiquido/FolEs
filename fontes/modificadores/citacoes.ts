import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";
import { validarValorString } from "./validacoes/string";

export class Citacoes extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        auto: "auto",
        nenhum: "none",
    };

    constructor(
        valores: Valor[],
        
        pragmas?: PragmasModificador
    ) {
        super(["citacoes", "citações"], "quotes", pragmas);

        // if (!valorVariavel) {
        //     const validacaoString = validarValorString(valor);

        //     if (validacaoString) {
        //         this.valoresAceitos[valor] = valor;
        //     }

        //     validarValores("citações", valores, this.valoresAceitos);
        // }

        this.valores = valores;
    }
}
