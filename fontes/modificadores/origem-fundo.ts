import { valoresGlobais } from "./atributos/globais";
import { Modificador } from "./superclasse/modificador";

export class OrigemFundo extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "borda-caixa": "border-box",
        "preenchimento": "padding-box",
        "conteudo-caixa": "content-box",
        "conteúdo-caixa": "content-box",
    }

    constructor(valor: string, quantificador?: string) {
        super("origem-fundo", "background-origin");

        if (!(valor in this.valoresAceitos) && !(valor in valoresGlobais)) {
            throw new Error(`Valor ${valor} inválido para 'origem-fundo'. Valores aceitos: 
            ${Object.keys(this.valoresAceitos).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(valoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`);
        }

        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;
    }
}
