import { ListaDeValoresGlobais } from "./atributos/globais";
import { ListaDePosiçõesBasicas } from "./atributos/posição";
import { Modificador } from "./superclasse/modificador";

export class AlinharTexto extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "justificar": "justify",
        "justificar-tudo": "justify-all",
        "combinar-elemento-pai": "match-parent",
    }

    constructor(valor: string, quantificador?: string) {
        super("alinhar-texto", "text-align");

        if (!(valor in this.valoresAceitos) &&
            !(valor in ListaDePosiçõesBasicas) &&
            !(valor in ListaDeValoresGlobais)
        ) {
            throw new Error(`Valor ${valor} inválido para 'alinhar-texto'. Valores aceitos:
            ${Object.keys(this.valoresAceitos).reduce((final, atual) => final += `, ${atual}`)}, 
            ${Object.keys(ListaDePosiçõesBasicas).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(ListaDeValoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`);
        }

        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;
    }
}
