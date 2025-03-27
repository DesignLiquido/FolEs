import { unidadesMedida, valoresFlex } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";
import { validarQuantificador } from "./validacoes/quantificador";

export class TamanhoColunasEmGrade extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "conteudo-maximo": "max-content",
        "conteúdo-máximo": "max-content",
        "conteudo-minimo": "min-content",
        "conteúdo-mínimo": "min-content",
        "auto": "auto",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador, valorVariavel: boolean = false) {
        super("tamanho-colunas-em-grade", "grid-auto-columns", pragmas);

        const valoresExtra = ['minmax', 'fit-content'];

        if (!valorVariavel) {
            validarValorNumerico('tamanho-colunas-em-grade', valor, this.valoresAceitos, valoresExtra);

            // Além dos quantificadores de Comprimento e Percentual, também pode receber a unidade 'fr', do tipo Flex.
            if (Number(parseInt(valor))) {
                validarQuantificador('tamanho-colunas-em-grade', quantificador, unidadesMedida, valoresFlex);

                this.quantificador = quantificador;
            }
        }

        this.valor = valor;
    }
}
