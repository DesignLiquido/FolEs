import { cores } from "./atributos/cores";
import { estilos } from "./atributos/estilo";
import { valoresGlobais } from "./atributos/globais";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarQuantificador } from "./validacoes/quantificador";

export class SombraCaixa extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "nenhuma": "none",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador, valorVariavel: boolean = false) {
        super("sombra-caixa", "box-shadow", pragmas);

        const valorString = valor.toString();

        const validaçõesCor = !(valorString.includes('rgb')) && !(valorString.includes('rgba')) &&
            !(valorString.includes('hsl')) && !(valorString.includes('hsla'));

        const validaçõesHEX = !(valorString.startsWith('#') && valorString.length <= 7);

        if (!valorVariavel) {
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

            if (Number(parseInt(valor))) {
                validarQuantificador('sombra-caixa', quantificador, unidadesMedida);

                this.quantificador = quantificador;
            }
        }

        this.valor = valor;
    }
}
