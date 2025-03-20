import { cores } from "./atributos/cores";
import { estilos } from "./atributos/estilo";
import { valoresGlobais } from "./atributos/globais";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarQuantificador } from "./validacoes/quantificador";

export class FimBordaEmLinha extends Modificador {
    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador, valorVariavel: boolean = false) {
        super("fim-borda-em-linha", "border-inline-end", pragmas);

        const valorString = valor.toString();

        const validaçõesCor = !(valorString.includes('rgb')) && !(valorString.includes('rgba')) &&
            !(valorString.includes('hsl')) && !(valorString.includes('hsla'));

        const validaçõesHEX = !(valorString.startsWith('#') && valorString.length <= 7);

        if (!valorVariavel) {
            if (Number.isNaN(parseInt(valor)) &&
                validaçõesCor &&
                validaçõesHEX &&
                !(valor in estilos) &&
                !(valor in cores) &&
                !(valor in valoresGlobais)) {
                throw new Error(`Propriedade 'fim-borda-em-linha' com valor ${valor} inválido. Valores aceitos: 
                    número-quantificador, 
                    ${Object.keys(estilos).reduce((final, atual) => final += `, ${atual}`)},
                    ${Object.keys(cores).reduce((final, atual) => final += `, ${atual}`)},
                    ${Object.keys(valoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`
                );
            }

            if (Number(parseInt(valor))) {
                validarQuantificador('fim-borda-em-linha', quantificador, unidadesMedida);

                this.quantificador = quantificador;
            }
        }

        this.valor = valor;
    }
}
