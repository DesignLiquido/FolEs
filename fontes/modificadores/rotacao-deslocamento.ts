import { ListaDeValoresGlobais } from "./atributos/globais";
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
            !(valor in ListaDeValoresGlobais)
        ) {
            throw new Error(`Propriedade 'rotação-deslocamento' com valor ${valor} inválido. Valores aceitos: 
            ${Object.keys(this.valoresAceitos).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(ListaDeValoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`)
        }

        this.valor = valor;
        
        // Único quantificador aceito é o 'deg'
        if (Number(parseInt(valor))){
            if (
                quantificador !== 'deg' ||
                quantificador === undefined
            ) {
                throw new Error(
                `Propriedade 'rotação-deslocamento' com quantificador inválido. Valores aceitos:
                deg.`);
            }
    
            this.quantificador = quantificador;
        }
    }
}
