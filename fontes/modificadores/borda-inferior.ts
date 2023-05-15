import { cores } from "./atributos/cores";
import { estilos } from "./atributos/estilo";
import { valoresGlobais } from "./atributos/globais";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";

export class BordaInferior extends Modificador {
    // Seletor de Atribuição Abreviada (Shorthand).
    // Pode receber de 1 a 3 valores.
    valoresAceitos: { [valorFoles: string]: string } = {
        "fina": "thin",
        "media": "medium",
        "média": "medium",
        "espessa": "thick",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super("borda-inferior", "border-bottom");

        // O valor é recebido como objeto, o que impossibilita de utilizar a função includes().
        // A constante abaixo é criada para ser possível fazer as validações seguintes.
        const valorString = valor.toString();

        const validaçõesCor = !(valorString.includes('rgb')) && !(valorString.includes('rgba')) &&
        !(valorString.includes('hsl')) && !(valorString.includes('hsla'));

        const validaçõesHEX =  !(valorString.startsWith('#') && valorString.length <= 7);

        // TODO: Adaptar lógica no futuro para cobrir casos de recebimento de MÚLTIPLOS valores
        if (!(valor in this.valoresAceitos) &&
            validaçõesCor &&
            validaçõesHEX &&
            Number.isNaN(parseInt(valor)) &&
            !(valor in estilos) &&
            !(valor in cores) &&
            !(valor in valoresGlobais)) {
            throw new Error(`Propriedade 'borda-inferior' com valor ${valor} inválido. Valores aceitos: 
            número-quantificador, 
            ${Object.keys(this.valoresAceitos).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(estilos).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(cores).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(valoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`);
        }

        this.valor = valor;

        if (Number(parseInt(valor))) {
            if (!(quantificador in unidadesMedida) || quantificador === undefined) {
                throw new Error(`Propriedade 'borda-inferior' com quantificador inválido. Valores aceitos:
                ${Object.keys(unidadesMedida).reduce((final, atual) => final += `, ${atual}`)}.`);
            }

            this.quantificador = quantificador;
        }
    }
}
