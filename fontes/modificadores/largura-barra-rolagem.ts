import { valoresGlobais } from "./atributos/globais";
import { Modificador } from "./superclasse/modificador";

export class LarguraBarraRolagem extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "auto": "auto",
        "fina": "thin",
        "nenhum": "none",
    }

    constructor(valor: string, quantificador?: string) {
        super("largura-barra-rolagem", "scrollbar-width");

        if (!(valor in this.valoresAceitos) &&
            !(valor in valoresGlobais)) {
            throw new Error(`Propriedade 'largura-barra-rolagem' com valor ${valor} inválido. Valores aceitos: 
            ${Object.keys(this.valoresAceitos).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(valoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`);
        }

        this.valor = valor;

        // Quantificador não é usado aqui.
        // this.quantificador = quantificador;
    }
}
