import { valoresGlobais } from "./atributos/globais";
import { Modificador, PragmasModificador } from "./superclasse";

export class PreencherColuna extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "auto": "auto",
        "equilibrar": "balance",
        "equilibrar-tudo": "balance-all",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super("preencher-coluna", "column-fill");

        if (!(valor in this.valoresAceitos) && 
            !(valor in valoresGlobais)
        ) {
            throw new Error(`Propriedade 'preencher-coluna' com valor ${valor} inválido. Valores aceitos: 
            ${Object.keys(this.valoresAceitos).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(valoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`)
        }

        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;
    }
}
