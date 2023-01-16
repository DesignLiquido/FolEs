import { ListaDeValoresGlobais } from "./atributos/globais";
import { Modificador } from "./superclasse/modificador";

export class VazamentoVertical extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "visivel": "visible",
        "visível": "visible",
        "escondido": "hidden",
        "recortar": "clip",
        "barra-rolagem": "scroll",
        "auto": "auto",
    }

    constructor(valor: string, quantificador?: string) {
        super("vazamento-vertical", "overflow-y");

        if (!(valor in this.valoresAceitos) &&
            !(valor in ListaDeValoresGlobais)) {
            throw new Error(`Propriedade 'vazamento-vertical' com valor ${valor} inválido. Valores aceitos: 
            ${Object.keys(this.valoresAceitos).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(ListaDeValoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`);
        }

        this.valor = valor;

        // Quantificador não é usado aqui.
        // this.quantificador = quantificador;
    }
}
