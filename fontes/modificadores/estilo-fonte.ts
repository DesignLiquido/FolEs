import { valoresGlobais } from "./atributos/globais";
import { Modificador } from "./superclasse/modificador";

export class EstiloFonte extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "normal": "normal",
        "italica": "italic",
        "itálica": "italic",
        "obliqua": "oblique",
        "oblíqua": "oblique",
    }

    constructor(valor: string, quantificador?: string) {
        super("estilo-fonte", "font-style");

        // OBS.: O valor 'oblíqua' pode vir acompanhado de um número-quantificador
        // que representa o ÂNGULO de inclinação da fonte.

        // EX.: estilo-fonte: obliqua 10deg;

        // A lógica abaixo cobre somente o recebimento dos valores aceitos listados.
        // TODO: Adaptar lógica para cobrir os demais casos. 
        // Para tal, utilizar lista de ângulos de './atributos/quantificadores.ts'.   

        if (!(valor in this.valoresAceitos) &&
            !(valor in valoresGlobais)) {
            throw new Error(`Propriedade 'estilo-fonte' com valor ${valor} inválido. Valores aceitos: 
            ${Object.keys(this.valoresAceitos).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(valoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`);
        }

        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;
    }
}
