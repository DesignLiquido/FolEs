import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class EspacamentoColuna extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        normal: "normal",
    };

    static nomeCss: string = "column-gap";

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(
            ["espacamento-coluna", "espaçamento-coluna"],
            EspacamentoColuna.nomeCss,
            pragmas,
        );
        
        if (!variavel) {
            validarValorNumerico(
                "espaçamento-coluna",
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
