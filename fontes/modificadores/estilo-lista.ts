import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarAtribuicaoAbreviada } from "./validacoes/atribuicao-abreviada";
import { validarValorNumerico } from "./validacoes/numerica";
import { validarQuantificador } from "./validacoes/quantificador";

export class EstiloLista extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        dentro: "inside",
        fora: "outside",
        nenhum: "none",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
    ) {
        super("estilo-lista", "list-style", pragmas);

        const valoresExtra = ["url"];

        // TODO: Repensar
        //     if (typeof valor === 'string' && valor.includes(" ")) {
        //         validarAtribuicaoAbreviada("numérica", "estilo-lista", valores, this.valoresAceitos, valoresExtra, false, true);
        //     } else {
        //         validarValorNumerico("estilo-lista", valores, this.valoresAceitos, valoresExtra);
        //     }

        //     if (quantificador !== undefined) {
        //         validarQuantificador(
        //             "estilo-lista",
        //             quantificador,
        //             unidadesMedida,
        //         );

        //         this.quantificador = quantificador;
        //     }

        this.valores = valores;
    }
}
