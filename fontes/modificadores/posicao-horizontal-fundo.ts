import { listaDeValoresGlobais } from "./atributos/globais";
import { ListaDeQuantificadores } from "./atributos/quantificadores";
import { Modificador } from "./superclasse/modificador";

export class PosicaoHorizontalFundo extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "superior": "top",
        "inferior": "bottom",
        "esquerda": "left",
        "direita": "right",
        "centro": "center",
    }

    constructor(valor: string, quantificador?: string) {
        super(
            ["posicao-horizontal-fundo", "posição-horizontal-fundo"],
            "background-position-x"
        );

        // Aceita valores listados e valores numéricos
        if (
            Number.isNaN(parseInt(valor)) &&
            !(valor in this.valoresAceitos) && 
            !(valor in listaDeValoresGlobais)
        ) {
            throw new Error(`Propriedade 'posição-horizontal-fundo' com valor ${valor} inválido. Valor deve ser um número ou um dos valores: 
            ${Object.keys(this.valoresAceitos).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(listaDeValoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`)
        }

        this.valor = valor;
        
        if (Number(parseInt(valor))){
            if (!(quantificador in ListaDeQuantificadores) || quantificador === undefined) {
                throw new Error(`Propriedade 'posição-horizontal-fundo' com quantificador inválido. Valores aceitos: 
                ${Object.keys(ListaDeQuantificadores).reduce((final, atual) => final += `, ${atual}`)}.`);
            }
    
            this.quantificador = quantificador;
        }
    }
}
