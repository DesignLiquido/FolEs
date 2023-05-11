import { valoresGlobais } from "./atributos/globais";
import { Modificador, PragmasModificador } from "./superclasse/modificador";

export class EspacoEmBranco extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "normal": "normal",
        "nao-quebrar": "nowrap",
        "não-quebrar": "nowrap",
        "preservar": "pre",
        "preservar-quebra": "pre-wrap",
        "preservar-linha": "pre-line",
        "quebrar-espacos": "break-spaces",
        "quebrar-espaços": "break-spaces",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super(["espaco-em-branco", "espaço-em-branco"], "white-space");

        if (!(valor in this.valoresAceitos) &&
            !(valor in valoresGlobais)
        ) {
            throw new Error(`Propriedade 'espaço-em-branco' com valor ${valor} inválido. Valores aceitos: 
            ${Object.keys(this.valoresAceitos).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(valoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`)
        }

        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;
    }
}
