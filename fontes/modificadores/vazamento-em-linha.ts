import { ListaDeValoresGlobais } from "./atributos/globais";
import { Modificador } from "./superclasse/modificador";

export class VazamentoEmLinha extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "visivel": "visible",
        "visível": "visible",
        "escondido": "hidden",
        "barra-rolagem": "scroll",
        "auto": "auto",
    }

    constructor(valor: string, quantificador?: string) {
        super("vazamento-em-linha", "overflow-inline");

        if (!(valor in this.valoresAceitos) &&
            !(valor in ListaDeValoresGlobais)) {
            throw new Error(`Propriedade 'vazamento-em-linha' com valor ${valor} inválido. Valores aceitos: 
            ${Object.keys(this.valoresAceitos).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(ListaDeValoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`);
        }

        this.valor = valor;

        // Quantificador não é usado aqui.
        // this.quantificador = quantificador;
    }
}
