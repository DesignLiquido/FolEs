import { valoresGlobais } from "./atributos/globais";
import { Modificador, PragmasModificador } from "./superclasse";

export class PosicaoLegenda extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "superior": "top",
        "inferior": "bottom",
        "inicio-bloco": "block-start",
        "início-bloco": "block-start",
        "fim-bloco": "block-end",
        "inicio-em-linha": "inline-start",
        "início-em-linha": "inline-start",
        "fim-em-linha": "inline-end",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super(["posicao-legenda", "posição-legenda"], "caption-side");

        if (!(valor in this.valoresAceitos) && !(valor in valoresGlobais)) {
            throw new Error(`Propriedade 'posição-legenda' com valor ${valor} inválido. Valores aceitos: 
            ${Object.keys(this.valoresAceitos).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(valoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`)
        }

        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;
    }
}
