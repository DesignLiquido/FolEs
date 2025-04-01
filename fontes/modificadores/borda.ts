import { cores } from "./atributos/cores";
import { estilos } from "./atributos/estilo";
import { valoresGlobais } from "./atributos/globais";
import { Modificador, PragmasModificador } from "./superclasse";
import { unidadesMedida } from "./atributos/quantificadores";
import { validarQuantificador } from "./validacoes/quantificador";

export class Borda extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "fina": "thin",
        "media": "medium",
        "média": "medium",
        "espessa": "thick",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador, valorVariavel: boolean = false) {
        super("borda", "border", pragmas);

        const valorString = valor.toString();

        const validaçõesCor = !(valorString.includes('rgb')) && !(valorString.includes('rgba')) &&
            !(valorString.includes('hsl')) && !(valorString.includes('hsla'));

        const validaçõesHEX = !(valorString.startsWith('#') && valorString.length <= 7);

        if (!valorVariavel) {
            if (!(valor in this.valoresAceitos) &&
                Number.isNaN(parseInt(valor)) &&
                validaçõesCor &&
                validaçõesHEX &&
                !(valor in estilos) &&
                !(valor in cores) &&
                !(valor in valoresGlobais)) {
                throw new Error(`Propriedade 'borda' com valor ${valor} inválido. Valores aceitos: 
                número-quantificador, 
                ${Object.keys(this.valoresAceitos).reduce((final, atual) => final += `, ${atual}`)},
                ${Object.keys(estilos).reduce((final, atual) => final += `, ${atual}`)},
                ${Object.keys(cores).reduce((final, atual) => final += `, ${atual}`)},
                ${Object.keys(valoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`);
            }

            if (Number(parseInt(valor))) {
                validarQuantificador('borda', quantificador, unidadesMedida);

                this.quantificador = quantificador;
            }
        }

        this.valor = valor;
    }
}
