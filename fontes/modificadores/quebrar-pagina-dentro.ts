import { valoresGlobais } from "./atributos/globais";
import { Modificador } from "./superclasse/modificador";

export class QuebrarPaginaDentro extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "auto": "auto",
        "evitar": "avoid",
    }
    constructor(valor: string, quantificador?: string) {
        super(
            ["quebrar-pagina-dentro", "quebrar-página-dentro"],
            "page-break-inside"
        );

        if (!(valor in this.valoresAceitos) &&
            !(valor in valoresGlobais)) {
            throw new Error(`Propriedade 'quebrar-página-dentro' com valor ${valor} inválido. Valores aceitos: 
            ${Object.keys(this.valoresAceitos).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(valoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`);
        }

        this.valor = valor;

        // Quantificador não é usado aqui.
        // this.quantificador = quantificador;
    }
}
