import { listaDeValoresGlobais } from "./atributos/globais";
import { Modificador } from "./superclasse/modificador";

export class QuebrarApos extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "auto": "auto",
        "evitar": "avoid",
        "sempre": "always",
        "tudo": "all",
        "evitar-pagina": "avoid-page",
        "evitar-página": "avoid-page",
        "pagina": "page",
        "página": "page",
        "esquerda": "left",
        "direita": "right",
        "frente": "recto",
        "verso": "verso",
        "evitar-coluna": "avoid-column",
        "coluna": "column",
        "evitar-regiao": "avoid-region",
        "evitar-região": "avoid-region",
        "regiao": "region",
        "região": "region",
    }

    constructor(valor: string, quantificador?: string) {
        super(["quebrar-apos", "quebrar-após"], "break-after");

        if (!(valor in this.valoresAceitos) &&
            !(valor in listaDeValoresGlobais)) {
            throw new Error(`Propriedade 'quebrar-após' com valor ${valor} inválido. Valores aceitos: 
            ${Object.keys(this.valoresAceitos).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(listaDeValoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`);
        }

        this.valor = valor;

        // Quantificador não é usado aqui.
        // this.quantificador = quantificador;
    }
}
