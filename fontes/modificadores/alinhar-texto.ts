import { valoresGlobais } from "./atributos/globais";
import { posicoesBasicas } from "./atributos/posicoes";
import { Modificador, PragmasModificador } from "./superclasse";

export class AlinharTexto extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "justificar": "justify",
        "justificar-tudo": "justify-all",
        "combinar-elemento-pai": "match-parent",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super("alinhar-texto", "text-align");

        if (!(valor in this.valoresAceitos) &&
            !(valor in posicoesBasicas) &&
            !(valor in valoresGlobais)
        ) {
            throw new Error(`Valor ${valor} inválido para 'alinhar-texto'. Valores aceitos:
            ${Object.keys(this.valoresAceitos).reduce((final, atual) => final += `, ${atual}`)}, 
            ${Object.keys(posicoesBasicas).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(valoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`);
        }

        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;
    }
}
