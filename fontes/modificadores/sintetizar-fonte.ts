import { valoresGlobais } from "./atributos/globais";
import { Modificador, PragmasModificador } from "./superclasse/modificador";

export class SintetizarFonte extends Modificador {
    
    // As traduções dos valores parecem estar erradas ou forçadas, mas estão de acordo com a documentação:
    // https://developer.mozilla.org/en-US/docs/Web/CSS/font-synthesis 

    valoresAceitos: { [valorFoles: string]: string } = {
        "nenhuma": "none",
        "negrito": "weight",
        "italico": "style",
        "itálico": "style",
        "maiusculas-pequenas": "small-caps",
        "maiúsculas-pequenas": "small-caps",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super("sintetizar-fonte", "font-synthesis");

        if (!(valor in this.valoresAceitos) &&
            !(valor in valoresGlobais)
        ) {
            throw new Error(`Propriedade 'sintetizar-fonte' com valor ${valor} inválido. Valores aceitos: 
            ${Object.keys(this.valoresAceitos).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(valoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`)
        }

        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;
    }
}
