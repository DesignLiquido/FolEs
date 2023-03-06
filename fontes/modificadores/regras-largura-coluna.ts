import { valoresGlobais } from "./atributos/globais";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador } from "./superclasse/modificador";

export class RegrasLarguraColuna extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "fina": "thin",
        "media": "medium",
        "média": "medium",
        "grossa": "thick",
    }

    constructor(valor: string, quantificador?: string) {
        super("regras-largura-coluna", "column-rule-width");

                // Pode receber valores próprios ou número-quantificador
                if (Number.isNaN(parseInt(valor)) &&
                !(valor in this.valoresAceitos) &&
                !(valor in valoresGlobais)
            ) {
                throw new Error(
                    `Propriedade 'regras-largura-coluna' com valor ${valor} inválido. O valor deve ser numérico ou um dos valores:
                    ${Object.keys(this.valoresAceitos).reduce((final, atual) => final += `, ${atual}`)},
                    ${Object.keys(valoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`);
            }
    
            this.valor = valor;
    
            if (Number(parseInt(valor))){
                if (
                    !(quantificador in unidadesMedida) ||
                    quantificador === undefined
                ) {
                    throw new Error(
                    `Propriedade 'regras-largura-coluna' com quantificador inválido. Valores aceitos:
                    ${Object.keys(unidadesMedida).reduce((final, atual) => final += `, ${atual}`)}.`);
                }
        
                this.quantificador = quantificador;
            }
    }
}
