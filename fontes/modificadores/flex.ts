import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarAtribuicaoAbreviada } from "./validacoes/atribuicao-abreviada";
import { validarValorNumerico } from "./validacoes/numerica";
import { validarQuantificador } from "./validacoes/quantificador";

export class Flex extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        auto: "auto",
        nenhum: "none",
        inicial: "initial",
        "conteudo-maximo": "max-content",
        "conteúdo-máximo": "max-content",
        "conteudo-minimo": "min-content",
        "conteúdo-mínimo": "min-content",
        conteudo: "content",
        conteúdo: "content",
    };

    constructor(
        valores: Valor[],
        
        pragmas?: PragmasModificador,
        valorVariavel: boolean = false,
    ) {
        super("flex", "flex", pragmas);

        // TODO: Repensar
        // if (!valorVariavel) {
        //     if (valor.includes(" ")) {
        //         validarAtribuicaoAbreviada("numérica", "flex", valores, this.valoresAceitos);
        //     } else {
        //         validarValorNumerico("flex", valores, this.valoresAceitos);
        //     }

        //     if (quantificador !== undefined) {
        //         validarQuantificador("flex", quantificador, unidadesMedida);

        //         this.quantificador = quantificador;
        //     }
        // }

        this.valores = valores;
    }
}
