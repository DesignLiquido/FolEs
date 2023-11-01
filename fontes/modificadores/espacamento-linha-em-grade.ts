import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";
import { validarQuantificador } from "./validacoes/quantificador";

export class EspacamentoLinhaEmGrade extends Modificador {
    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super(
            ["espacamento-linha-em-grade", "espaçamento-linha-em-grade"],
            "grid-row-gap", 
            pragmas
        );

        validarValorNumerico('espaçamento-linha-em-grade', valor)
        this.valor = valor;

        if (quantificador !== undefined) {
            validarQuantificador('espaçamento-linha-em-grade', quantificador, unidadesMedida);
            this.quantificador = quantificador;
        }
    }
}
