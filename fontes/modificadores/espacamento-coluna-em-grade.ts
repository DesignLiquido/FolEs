import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";
import { validarQuantificador } from "./validacoes/quantificador";

export class EspacamentoColunaEmGrade extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "normal": "normal",
    }

    constructor(valor: string, quantificador: string, pragmas?: PragmasModificador) {
        super(
            ["espacamento-coluna-em-grade", "espaçamento-coluna-em-grade"],
            "grid-column-gap"
        );

        validarValorNumerico('espaçamento-coluna-em-grade', valor, this.valoresAceitos);

        this.valor = valor;

        if (Number(parseInt(valor))) {
            validarQuantificador('espaçamento-coluna-em-grade', quantificador, unidadesMedida);

            this.quantificador = quantificador;
        }
    }
}
