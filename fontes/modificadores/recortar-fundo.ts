import { valoresGlobais } from "./atributos/globais";
import { Modificador } from "./superclasse/modificador";

export class RecortarFundo extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "borda": "border-box",
        "preenchimento": "padding-box",
        "conteudo-caixa": "content-box",
        "conteúdo-caixa": "content-box",
        "texto": "text",
    }

    constructor(valor: string, quantificador?: string) {
        super("recortar-fundo", "background-clip");

        if (!(valor in this.valoresAceitos) && !(valor in valoresGlobais)) {
            throw new Error(`Valor ${valor} inválido para 'recortar-fundo'. Valores aceitos: 
            ${Object.keys(this.valoresAceitos).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(valoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`);
        }

        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;
    }
}
