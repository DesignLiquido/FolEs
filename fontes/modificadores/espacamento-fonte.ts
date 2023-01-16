import { ListaDeValoresGlobais } from "./atributos/globais";
import { Modificador } from "./superclasse/modificador";

export class EspacamentoFonte extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "auto": "auto",
        "normal": "normal",
        "nenhum": "none",
    }

    constructor(valor: string, quantificador?: string) {
        super(["espacamento-fonte", "espaçamento-fonte"], "font-kerning");

        if (!(valor in this.valoresAceitos) &&
            !(valor in ListaDeValoresGlobais)) {
            throw new Error(`Propriedade 'espaçamento-fonte' com valor ${valor} inválido. Valores aceitos: 
            ${Object.keys(this.valoresAceitos).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(ListaDeValoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`);
        }

        this.valor = valor;

        // Quantificador não é usado aqui.
        // this.quantificador = quantificador;        ;
    }
}
