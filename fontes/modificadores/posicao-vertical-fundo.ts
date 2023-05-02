import { valoresGlobais } from "./atributos/globais";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador } from "./superclasse/modificador";

export class PosicaoVerticalFundo extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "superior": "top",
        "inferior": "bottom",
        "esquerda": "left",
        "direita": "right",
        "centro": "center",
    }

    constructor(valor: string, quantificador?: string) {
        super(
            ["posicao-vertical-fundo", "posição-vertical-fundo"],
            "background-position-y"
        );

        // Aceita valores listados e valores numéricos
        // Também pode receber dois valores
        // Ex.: posição-vertical-fundo: inferior 10%;

        // TODO: Adaptar lógica para cobrir todos os casos
        if (
            Number.isNaN(parseInt(valor)) &&
            !(valor in this.valoresAceitos) && 
            !(valor in valoresGlobais)
        ) {
            throw new Error(`Propriedade 'posição-vertical-fundo' com valor ${valor} inválido. Valor deve ser um número ou um dos valores aceitos: 
            ${Object.keys(this.valoresAceitos).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(valoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`)
        }

        this.valor = valor;
        
        if (Number(parseInt(valor))){   
            if (!(quantificador in unidadesMedida) || quantificador === undefined) {
                throw new Error(`Propriedade 'posição-vertical-fundo' com quantificador inválido. Valores aceitos: 
                ${Object.keys(unidadesMedida).reduce((final, atual) => final += `, ${atual}`)}.`);
            }
    
            this.quantificador = quantificador;
        }
    }
}
