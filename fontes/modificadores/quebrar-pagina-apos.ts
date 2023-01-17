import { ListaDeValoresGlobais } from "./atributos/globais";
import { Modificador } from "./superclasse/modificador";

export class QuebrarPaginaApos extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "auto": "auto",
        "sempre": "always",
        "evitar": "avoid",
        "esquerda": "left",
        "direita": "right",
        "frente": "recto",
        "verso": "verso",
    }

    constructor(valor: string, quantificador?: string) {
        super(
            ["quebrar-pagina-apos", "quebrar-página-após"],
            "page-break-after"
        );

        if (!(valor in this.valoresAceitos) &&
            !(valor in ListaDeValoresGlobais)) {
            throw new Error(`Propriedade 'quebrar-página-após' com valor ${valor} inválido. Valores aceitos: 
            ${Object.keys(this.valoresAceitos).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(ListaDeValoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`);
        }

        this.valor = valor;

        // Quantificador não é usado aqui.
        // this.quantificador = quantificador;
    }
}
