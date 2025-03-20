import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";
import { validarQuantificador } from "./validacoes/quantificador";

export class EspacamentoEmGrade extends Modificador {
    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador, valorVariavel: boolean = false) {
        super(
            ["espacamento-em-grade", "espaçamento-em-grade"],
            "grid-gap", 
            pragmas
        );

        if (!valorVariavel) {
            validarValorNumerico('espaçamento-em-grade', valor)
            
            if (quantificador !== undefined) {
                validarQuantificador('espaçamento-em-grade', quantificador, unidadesMedida);
                this.quantificador = quantificador;
            }
        }

        this.valor = valor;
    }
}
