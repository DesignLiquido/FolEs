import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class EspacamentoColunaEmGrade extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        normal: "normal",
    };

    static nomeCss: string = "grid-column-gap";

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(
            ["espacamento-coluna-em-grade", "espaçamento-coluna-em-grade"],
            EspacamentoColunaEmGrade.nomeCss,
            pragmas,
        );

        if (!variavel) {
            validarValorNumerico(
                "espaçamento-coluna-em-grade",
                valores,
                this.valoresAceitos,
                null,
                unidadesMedida
            );
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
