import { unidadesMedida, valoresFlex } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";
import { validarQuantificador } from "./validacoes/quantificador";

export class TamanhoLinhasEmGrade extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "conteudo-maximo": "max-content",
        "conteúdo-máximo": "max-content",
        "conteudo-minimo": "min-content",
        "conteúdo-mínimo": "min-content",
        "auto": "auto",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super("tamanho-linhas-em-grade", "grid-auto-rows");

        const valoresExtra = ['minmax', 'fit-content'];
        validarValorNumerico('tamanho-linhas-em-grade', valor, this.valoresAceitos, valoresExtra);

        this.valor = valor;

        // Além dos quantificadores de Comprimento e Percentual, também pode receber a unidade 'fr', do tipo Flex.
        if (Number(parseInt(valor))) {
            validarQuantificador('tamanho-linhas-em-grade', quantificador, unidadesMedida, valoresFlex);

            this.quantificador = quantificador;
        }
    }
}
