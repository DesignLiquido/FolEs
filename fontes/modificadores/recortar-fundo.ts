import { Modificador } from "./superclasse/modificador";

export class RecortarFundo extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "borda": "border-box",
        "preenchimento": "padding-box",
        "conteudo": "content-box",
        "conteúdo": "content-box",
        "texto": "text",
    }

    constructor(valor: string, quantificador: string) {
        super("recortar-fundo", "background-clip");

        if (!(valor in this.valoresAceitos)) {
            throw new Error(`Valor ${valor} inválido para 'recortar-fundo'. Valores aceitos: ${Object.keys(this.valoresAceitos).reduce((final, atual) => final += `, ${atual}`)}.`);
        }

        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;
    }
}
