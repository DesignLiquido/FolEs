import { unidadesMedida, valoresFlex } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

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

        // OBS.: Também pode receber as funções minmax(min, max) e fit-content( [ <length> | <percentage> ] )
        // A lógica abaixo cobre somente o recebimento de UM único valor.
        validarValorNumerico('tamanho-linhas-em-grade', valor, this.valoresAceitos);

        this.valor = valor;

        // Além dos quantificadores de Comprimento e Percentual, também pode receber a unidade 'fr', do tipo Flex.
        if (Number(parseInt(valor))) {
            if (
                (!(quantificador in unidadesMedida) && !(quantificador in valoresFlex))
                || quantificador === undefined
            ) {
                throw new Error(
                    `Propriedade 'tamanho-linhas-em-grade' com quantificador inválido. Valores aceitos:
                    ${Object.keys(unidadesMedida).reduce((final, atual) => final += `, ${atual}`)},
                    ${Object.keys(valoresFlex).reduce((final, atual) => final += `, ${atual}`)}.`);
            }

            this.quantificador = quantificador;
        }
    }
}
