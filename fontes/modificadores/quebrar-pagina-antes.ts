import { valoresGlobais } from "./atributos/globais";
import { Modificador, PragmasModificador } from "./superclasse";

export class QuebrarPaginaAntes extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "auto": "auto",
        "sempre": "always",
        "evitar": "avoid",
        "esquerda": "left",
        "direita": "right",
        "frente": "recto",
        "verso": "verso",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super(
            ["quebrar-pagina-antes", "quebrar-página-antes"], 
            "page-break-before"
        );

        if (!(valor in this.valoresAceitos) &&
            !(valor in valoresGlobais)) {
            throw new Error(`Propriedade 'quebrar-página-antes' com valor ${valor} inválido. Valores aceitos: 
            ${Object.keys(this.valoresAceitos).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(valoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`);
        }

        this.valor = valor;

        // Quantificador não é usado aqui.
        // this.quantificador = quantificador;
    }
}
