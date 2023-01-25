import { ListaDeValoresGlobais } from "./atributos/globais";
import { Modificador } from "./superclasse/modificador";

export class AreaMascara extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "conteudo-caixa": "content-box",
        "conteúdo-caixa": "content-box",
        "preenchimento-caixa": "padding-box",
        "borda-caixa": "border-box",
        "margem-caixa": "margin-box",
        "preencher-caixa": "fill-box",
        "quebrar-caixa": "stroke-box",
        "visualizar-caixa": "view-box",
        "borda": "border",
        "preenchimento": "padding",
        "conteudo": "content",
        "conteúdo": "content",
        "texto": "text",
        "nao-recortar": "no-clip",
        "não-recortar": "no-clip",
    }

    constructor(valor: string, quantificador?: string) {
        super(["area-mascara", "área-máscara"], "mask-clip");

        if (!(valor in this.valoresAceitos) &&
            !(valor in ListaDeValoresGlobais)
        ) {
            throw new Error(`Propriedade 'área-máscara' com valor ${valor} inválido. Valores aceitos: 
            ${Object.keys(this.valoresAceitos).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(ListaDeValoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`)
        }

        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;
    }
}
