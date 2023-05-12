import { valoresGlobais } from "./atributos/globais";
import { Modificador, PragmasModificador } from "./superclasse";

export class AlinharEncaixeRolagemMouse extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "nenhum": "none",
        "inicio": "start",
        "início": "start",
        "fim": "end",
        "centro": "center",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super("alinhar-encaixe-rolagem-mouse", "scroll-snap-align");

        if (!(valor in this.valoresAceitos) &&
            !(valor in valoresGlobais)
        ) {
            throw new Error(`Valor ${valor} inválido para 'alinhar-encaixe-rolagem-mouse'. Valores aceitos:
            ${Object.keys(this.valoresAceitos).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(valoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`);
        }

        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;
    }
}
