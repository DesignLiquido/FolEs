
import { posicoes } from "../atributos/posicoes";
import { Modificador } from "../../modificadores";

export class DirecaoTexto extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {


        "direita": "right",
        "esquerda": "left",
        
    }
    valor: string;
    
    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super(["direção-de-texto", "direção-de-texto"], "dir");

        // Pode receber valores próprios ou valores da lista de posições
        if (!(valor in this.valoresAceitos) && 
            !(valor in posicoes) 
        ) {
            throw new Error(`Propriedade 'alinhar-conteúdo' com valor ${valor} inválido. Valores aceitos:
            ${Object.keys(posicoes).reduce((final, atual) => final += `, ${atual}`)}, 
            ${Object.keys(this.valoresAceitos).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(posicoes).reduce((final, atual) => final += `, ${atual}`)}.`);
        }

        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;
    }
}