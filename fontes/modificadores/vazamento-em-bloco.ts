import { valoresGlobais } from "./atributos/globais";
import { Modificador } from "./superclasse/modificador";

export class VazamentoEmBloco extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "visivel": "visible",
        "visível": "visible",
        "escondido": "hidden",
        "recortar": "clip",
        "barra-rolagem": "scroll",
        "auto": "auto",
    }

    constructor(valor: string, quantificador?: string) {
        super("vazamento-em-bloco", "overflow-block");

        if (!(valor in this.valoresAceitos) &&
            !(valor in valoresGlobais)) {
            throw new Error(`Propriedade 'vazamento-em-bloco' com valor ${valor} inválido. Valores aceitos: 
            ${Object.keys(this.valoresAceitos).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(valoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`);
        }

        this.valor = valor;

        // Quantificador não é usado aqui.
        // this.quantificador = quantificador;
    }
}
