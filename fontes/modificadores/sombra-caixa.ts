import { cores } from "./atributos/cores";
import { estilos } from "./atributos/estilo";
import { valoresGlobais } from "./atributos/globais";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarQuantificador } from "./validacoes/quantificador";

export class SombraCaixa extends Modificador {
    // Seletor pode receber de 1 a 5 valores.
    valoresAceitos: { [valorFoles: string]: string } = {
        "nenhuma": "none",
    }
    
    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super("sombra-caixa", "box-shadow");

        // O valor é recebido como objeto, o que impossibilita de utilizar a função includes().
        // A constante abaixo é criada para ser possível fazer as validações seguintes.
        const valorString = valor.toString();

        const validaçõesCor = !(valorString.includes('rgb')) && !(valorString.includes('rgba')) &&
            !(valorString.includes('hsl')) && !(valorString.includes('hsla'));

        const validaçõesHEX = !(valorString.startsWith('#') && valorString.length <= 7);

        // Também pode aceitar múltiplos valores
        // Ex.: sombra-caixa: 10px 5px 5px preto;

        // TODO: Implementar lógica para cobrir todos os casos.
        if (!(valor in this.valoresAceitos) &&
            validaçõesCor && validaçõesHEX &&
            Number.isNaN(parseInt(valor)) &&
            !(valor in cores) &&
            !(valor in valoresGlobais)) {
            throw new Error(`Propriedade 'sombra-caixa' com valor ${valor} inválido. Valores aceitos: 
            número-quantificador,
            ${Object.keys(this.valoresAceitos).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(cores).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(valoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`);
        }

        this.valor = valor;

        if (Number(parseInt(valor))) {
            validarQuantificador('sombra-caixa', quantificador, unidadesMedida);

            this.quantificador = quantificador;
        }
    }
}
