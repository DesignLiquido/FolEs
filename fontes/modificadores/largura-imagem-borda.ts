import { ListaDeValoresGlobais } from "./atributos/globais";
import { ListaDeQuantificadores } from "./atributos/quantificadores";
import { Modificador } from "./superclasse/modificador";

export class LarguraImagemBorda extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "auto": "auto",
    }

    constructor(valor: string, quantificador?: string) {
        super("largura-imagem-borda", "border-image-width");

        // Pode receber valor 'auto' ou número-quantificador
        // OBS.: Também pode receber também mais de um valor número-quantificador
        // Ex.: largura-imagem-borda: 5% 2em 10% auto;
        if (Number.isNaN(parseInt(valor)) &&
            !(valor in this.valoresAceitos) &&
            !(valor in ListaDeValoresGlobais)
        ) {
            throw new Error(
                `Propriedade 'largura-imagem-borda' com valor ${valor} inválido. O valor deve ser numérico ou um dos valores:
                ${Object.keys(this.valoresAceitos).reduce((final, atual) => final += `, ${atual}`)},
                ${Object.keys(ListaDeValoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`);
        }

        this.valor = valor;

        // A condicional aqui parte do quantificador, e não do valor,
        // pois o modificador aceita receber valores numéricos sem quantificador
        // Exemplo: largura-imagem-borda: 3;
        if (quantificador !== undefined) {
            if (
                !(quantificador in ListaDeQuantificadores)
            ) {
                throw new Error(
                    `Propriedade 'largura-imagem-borda' com quantificador inválido. Valores aceitos:
                ${Object.keys(ListaDeQuantificadores).reduce((final, atual) => final += `, ${atual}`)}.`);
            }

            this.quantificador = quantificador;
        }
    }
}
