import { valoresGlobais } from "./atributos/globais";
import { posicoesBasicas } from "./atributos/posicoes";
import { Modificador, PragmasModificador } from "./superclasse";

export class AlinharUltimoItem extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "justificar": "justify",
        "auto": "auto",
        "inicio": "start",
        "início": "start",
        "fim": "end",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super(
            ["alinhar-ultimo-item", "alinhar-último-item"],
            "text-align-last"
        );

        // O modificador não aceita os valores posicionais 'superior' e 'inferior'
        const posicoesAceitas = Object.keys(posicoesBasicas).filter(
            (posicao) => posicao !== 'superior' && posicao !== 'inferior'
        );

        if (!(valor in this.valoresAceitos) &&
            !(valor in posicoesAceitas) &&
            !(valor in valoresGlobais)
        ) {
            throw new Error(`Valor ${valor} inválido para 'alinhar-último-item'. Valores aceitos:
            ${Object.keys(this.valoresAceitos).reduce((final, atual) => final += `, ${atual}`)}, 
            ${Object.keys(posicoesAceitas).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(valoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`);
        }

        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;
    }
}
