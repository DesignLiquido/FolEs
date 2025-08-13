import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class LarguraMaxima extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "conteudo-maximo": "max-content",
        "conteúdo-máximo": "max-content",
        "conteudo-minimo": "min-content",
        "conteúdo-mínimo": "min-content",
        nenhuma: "none",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
    ) {
        super(["largura-maxima", "largura-máxima"], "max-width", pragmas);

        const valoresExtra = ["fit-content"];

        validarValorNumerico(
            "largura-máxima",
            valores,
            this.valoresAceitos,
            valoresExtra,
            unidadesMedida
        );

        this.valores = valores;
    }
}
