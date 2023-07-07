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

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super("tamanho-colunas-em-grade", "grid-auto-columns");

        const valoresExtra = ['minmax', 'fit-content'];
        validarValorNumerico('tamanho-colunas-em-grade', valor, this.valoresAceitos, valoresExtra);

        this.valor = valor;

        // Além dos quantificadores de Comprimento e Percentual, também pode receber a unidade 'fr', do tipo Flex.
        if (Number(parseInt(valor))) {
            validarQuantificador('tamanho-colunas-em-grade', quantificador, unidadesMedida, valoresFlex);

            this.quantificador = quantificador;
        }
    }
}
