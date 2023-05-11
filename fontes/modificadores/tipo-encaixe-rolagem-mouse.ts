import { valoresGlobais } from "./atributos/globais";
import { Modificador, PragmasModificador } from "./superclasse/modificador";

export class TipoEncaixeRolagemMouse extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "nenhum": "none",
        "horizontal": "x",
        "vertical": "y",
        "em-bloco": "block",
        "em-linha": "inline",
        "ambos": "both",
        "obrigatorio": "mandatory",
        "obrigatório": "mandatory",
        "proximidade": "proximity",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super("tipo-encaixe-rolagem-mouse", "scroll-snap-type");

        if (!(valor in this.valoresAceitos) &&
            !(valor in valoresGlobais)) {
            throw new Error(`Propriedade 'tipo-encaixe-rolagem-mouse' com valor ${valor} inválido. Valores aceitos: 
            ${Object.keys(this.valoresAceitos).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(valoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`);
        }

        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;
    }
}
