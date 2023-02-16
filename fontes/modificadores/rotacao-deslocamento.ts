import { valoresGlobais } from "./atributos/globais";
import { angulos } from "./atributos/quantificadores";
import { Modificador } from "./superclasse/modificador";

export class RotacaoDeslocamento extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "auto": "auto",
        "inverter": "revert",
    }

    constructor(valor: string, quantificador?: string) {
        super(
            ["rotacao-deslocamento", "rotação-deslocamento"],
            "offset-rotate"
        );
        
        // Pode receber valores próprios ou número-quantificador
        if (Number.isNaN(parseInt(valor)) &&
            !(valor in this.valoresAceitos) &&
            !(valor in valoresGlobais)
        ) {
            throw new Error(`Propriedade 'rotação-deslocamento' com valor ${valor} inválido. Valores aceitos: 
            ${Object.keys(this.valoresAceitos).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(valoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`)
        }

        this.valor = valor;
        
        // Quantificador deve ser do tipo ângulo (<angle>)
        if (Number(parseInt(valor))){
            if (
                !(quantificador in angulos)  ||
                quantificador === undefined
            ) {
                throw new Error(
                `Propriedade 'rotação-deslocamento' com quantificador inválido. Valores aceitos:
                ${Object.keys(angulos).reduce((final, atual) => final += `, ${atual}`)}.`);
            }
    
            this.quantificador = quantificador;
        }
    }
}
