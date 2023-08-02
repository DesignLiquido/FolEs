import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";
import { validarQuantificador } from "./validacoes/quantificador";

export class EspacamentoEmGrade extends Modificador {
    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super(
            ["espacamento-em-grade", "espaçamento-em-grade"],
            "grid-gap"
        );

        validarValorNumerico('espaçamento-em-grade', valor)
        this.valor = valor;

        if (quantificador !== undefined) {
            validarQuantificador('espaçamento-em-grade', quantificador, unidadesMedida);
            this.quantificador = quantificador;
        }
    }
}
