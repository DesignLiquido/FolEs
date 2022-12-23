import { ListaDeValoresGlobais } from "./atributos/globais";
import { Modificador } from "./superclasse/modificador";

export class AlinharEncaixeRolagemMouse extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "nenhum": "none",
        "inicio": "start",
        "início": "start",
        "fim": "end",
        "centro": "center",
    }

    constructor(valor: string, quantificador?: string) {
        super("alinhar-encaixe-rolagem-mouse", "scroll-snap-align");

        if (!(valor in this.valoresAceitos) &&
            !(valor in ListaDeValoresGlobais)
        ) {
            throw new Error(`Valor ${valor} inválido para 'alinhar-encaixe-rolagem-mouse'. Valores aceitos:
            ${Object.keys(this.valoresAceitos).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(ListaDeValoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`);
        }

        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;
    }
}
