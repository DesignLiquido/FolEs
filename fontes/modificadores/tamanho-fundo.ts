import { ListaDeValoresGlobais } from "./atributos/globais";
import { ListaDeQuantificadores } from "./atributos/quantificadores";
import { Modificador } from "./superclasse/modificador";

export class TamanhoFundo extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "alargar": "contain",
        "diminuir": "cover",
        "auto": "auto",
    }

    constructor(valor: string, quantificador?: string) {
        super("tamanho-fundo", "background-size");

        // Aceita valores listados e número-quantificador
        // OBS.: Também aceita receber DOIS valores. A lógica abaixo cobre o recebimento de UM valor.
        if (
            Number.isNaN(parseInt(valor)) && 
            !(valor in this.valoresAceitos) && 
            !(valor in ListaDeValoresGlobais)
        ) {
            throw new Error(`Propriedade 'tamanho-fundo' com valor ${valor} inválido. Valor deve ser um número ou um dos valores: 
            ${Object.keys(this.valoresAceitos).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(ListaDeValoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`)
        }

        this.valor = valor;

        if (Number(parseInt(valor))){  
            if (!(quantificador in ListaDeQuantificadores) || quantificador === undefined) {
                throw new Error(`Propriedade 'tamanho-fundo' com quantificador inválido. Valores aceitos:
                ${Object.keys(ListaDeQuantificadores).reduce((final, atual) => final += `, ${atual}`)}.`);
            }
    
            this.quantificador = quantificador;
        }
    }
}
