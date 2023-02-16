import { listaDeValoresGlobais } from "./atributos/globais";
import { ListaDeQuantificadores } from "./atributos/quantificadores";
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
        if (
            Number.isNaN(parseInt(valor)) &&
            !(valor in this.valoresAceitos) && 
            !(valor in listaDeValoresGlobais)
        ) {
            throw new Error(`Propriedade 'posição-vertical-fundo' com valor ${valor} inválido. Valor deve ser um número ou um dos valores aceitos: 
            ${Object.keys(this.valoresAceitos).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(listaDeValoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`)
        }

        this.valor = valor;
        
        if (Number(parseInt(valor))){   
            if (!(quantificador in ListaDeQuantificadores) || quantificador === undefined) {
                throw new Error(`Propriedade 'posição-vertical-fundo' com quantificador inválido. Valores aceitos: 
                ${Object.keys(ListaDeQuantificadores).reduce((final, atual) => final += `, ${atual}`)}.`);
            }
    
            this.quantificador = quantificador;
        }
    }
}
