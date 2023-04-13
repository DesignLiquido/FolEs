import { valoresGlobais } from "./atributos/globais";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador } from "./superclasse/modificador";

export class IndentacaoTexto extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "cada-linha": "each-line",
        "inverter": "hanging",
    }

    // OBS.: A tradução de 'hanging' para 'inverter' pode parecer estranha,
    // mas a documentação diz que hanging "inverte todas as linhas indentadas".

    constructor(valor: string, quantificador?: string) {
        super(["indentacao-texto", "indentação-texto"], "text-indent");

        // Também pode receber múltiplos valores
        // Ex.: indentação-texto: 5em inverter cada-linha;

        // TODO: Adaptar lógica para cobrir casos de múltiplos valores atribuídos.
        if (Number.isNaN(parseInt(valor)) &&
            !(valor in this.valoresAceitos) &&
            !(valor in valoresGlobais)
        ) {
            throw new Error(
                `Propriedade 'indentação-texto' com valor ${valor} inválido. O valor deve ser numérico ou um dos valores:
                ${Object.keys(this.valoresAceitos).reduce((final, atual) => final += `, ${atual}`)},
                ${Object.keys(valoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`);
        }

        this.valor = valor;
    
        if (Number(parseInt(valor))) {
            if (
                !(quantificador in unidadesMedida) ||
                quantificador === undefined
            ) {
                throw new Error(
                    `Propriedade 'indentação-texto' com quantificador inválido. Valores aceitos:
                    ${Object.keys(unidadesMedida).reduce((final, atual) => final += `, ${atual}`)}.`);
            }

            this.quantificador = quantificador;
        }
    }
}
