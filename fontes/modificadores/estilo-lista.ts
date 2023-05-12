import { valoresGlobais } from "./atributos/globais";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";

export class EstiloLista extends Modificador {
    // Seletor de Atribuição Abreviada (Shorthand).
    // Pode receber de 1 a 3 valores.

    valoresAceitos: { [valorFoles: string]: string } = {
        "dentro": "inside",
        "fora": "outside",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super("estilo-lista", "list-style");

        // O valor é recebido como objeto, o que impossibilita de utilizar a função includes().
        // A constante abaixo é criada para ser possível fazer as validações.
        const valorString = valor.toString();

        // OBS.: Também pode receber os valores válidos para os seletores:
        // 1. estilo-lista-tipo
        // 2. estilo-lista-imagem

        // TODO: Acrescentar esses valores quando os dois seletores estiverem finalizados.  
        if (!(valor in this.valoresAceitos) &&
            Number.isNaN(parseInt(valor)) &&
            !(valorString.includes('url')) &&
            !(valor in valoresGlobais)) {
            throw new Error(`Propriedade 'estilo-lista' com valor ${valor} inválido. Valores aceitos: 
            número-quantificador, 
            ${Object.keys(this.valoresAceitos).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(valoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`);
        }

        this.valor = valor;

        if (quantificador !== undefined) {
            if (!(quantificador in unidadesMedida)) {
                throw new Error(`Propriedade 'estilo-lista' com quantificador inválido. Valores aceitos:
            ${Object.keys(unidadesMedida).reduce((final, atual) => final += `, ${atual}`)}.`);
            }

            this.quantificador = quantificador;
        }
    }
}
