import { Valor } from "../valores";
import { angulos, unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarAtribuicaoAbreviada } from "./validacoes/atribuicao-abreviada";
import { validarValorNumerico } from "./validacoes/numerica";

export class Deslocamento extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        auto: "auto",
        nenhum: "none",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
    ) {
        super("deslocamento", "offset", pragmas);

        // Também aceita receber a função path()
        const valoresExtra = ["url", "ray"];

        const quantificadoresAceitos: { [valor: string]: string } = {...unidadesMedida, ...angulos};
        if (valores.length > 1) {
            validarAtribuicaoAbreviada(
                "numérica",
                "deslocamento",
                valores,
                this.valoresAceitos,
                valoresExtra,
                quantificadoresAceitos
            );
        } else {
            validarValorNumerico(
                "deslocamento",
                valores,
                this.valoresAceitos,
                valoresExtra,
                quantificadoresAceitos
            );
        }

        this.valores = valores;
    }
}
