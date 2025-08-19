import { Valor } from "../valores";
import { comprimentos } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class EspacamentoPalavras extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        normal: "normal",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
    ) {
        super(
            ["espacamento-palavras", "espaçamento-palavras"],
            "word-spacing",
            pragmas,
        );

        validarValorNumerico(
            "espaçamento-palavras",
            valores,
            this.valoresAceitos,
            null,
            comprimentos
        );

        this.valores = valores;
    }
}
