import { ListaDeValoresGlobais } from "./atributos/globais";
import { ListaDeQuantificadores, ListaDeValorFlex } from "./atributos/quantificadores";
import { Modificador } from "./superclasse/modificador";

export class TamanhoLinhasEmGrade extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "conteudo-maximo": "max-content",
        "conteúdo-máximo": "max-content",
        "conteudo-minimo": "min-content",
        "conteúdo-mínimo": "min-content",
        "auto": "auto",
    }

    constructor(valor: string, quantificador?: string) {
        super("tamanho-linhas-em-grade", "grid-auto-rows");

        // OBS.: Também pode receber as funções minmax(min, max) e fit-content( [ <length> | <percentage> ] )
        // A lógica abaixo cobre somente o recebimento de UM único valor. 
        if (Number.isNaN(parseInt(valor)) &&
            !(valor in this.valoresAceitos) &&
            !(valor in ListaDeValoresGlobais)
        ) {
            throw new Error(
                `Propriedade 'tamanho-linhas-em-grade' com valor ${valor} inválido. O valor deve ser numérico ou um dos valores:
                ${Object.keys(this.valoresAceitos).reduce((final, atual) => final += `, ${atual}`)},
                ${Object.keys(ListaDeValoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`);
        }

        this.valor = valor;

        // Além dos quantificadores de Comprimento e Percentual, também pode receber a unidade 'fr', do tipo Flex.
        if (Number(parseInt(valor))) {
            if (
                (!(quantificador in ListaDeQuantificadores) && !(quantificador in ListaDeValorFlex))
                || quantificador === undefined
            ) {
                throw new Error(
                    `Propriedade 'tamanho-linhas-em-grade' com quantificador inválido. Valores aceitos:
                    ${Object.keys(ListaDeQuantificadores).reduce((final, atual) => final += `, ${atual}`)},
                    ${Object.keys(ListaDeValorFlex).reduce((final, atual) => final += `, ${atual}`)}.`);
            }

            this.quantificador = quantificador;
        }
    }
}
