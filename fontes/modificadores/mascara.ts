import { valoresGlobais } from "./atributos/globais";
import { posicoesBasicas } from "./atributos/posicoes";
import { Modificador } from "./superclasse/modificador";

export class Mascara extends Modificador {
    // Seletor de Atribuição Abreviada (Shorthand).
    // Pode receber de 1 a 8 valores.

    valoresAceitos: { [valorFoles: string]: string } = {
        "alfa": "alpha",
        "luminancia": "luminance",
        "luminância": "luminance",
        "fonte-correspondente": "match-source",
        "auto": "auto",
        "conter": "contain",
        "cobrir": "cover",
        "repetir-horizontal": "repeat-x",
        "repetir-vertical": "repeat-y",
        "repetir": "repeat",
        "espacar": "space",
        "espaçar": "space",
        "arredondar": "round",
        "nao-repetir": "no-repeat",
        "não-repetir": "no-repeat",
        "adicionar": "add",
        "subtrair": "subtract",
        "cruzar": "intersect",
        "excluir": "exclude",
        "conteudo-caixa": "content-box",
        "conteúdo-caixa": "content-box",
        "preenchimento-caixa": "padding-box",
        "borda-caixa": "border-box",
        "margem-caixa": "margin-box",
        "completar-caixa": "fill-box",
        "delimitar-caixa": "stroke-box",
        "visualizar-caixa": "view-box",
        "nao-recortar": "no-clip",
        "não-recortar": "no-clip",
        "borda": "border",
        "preenchimento": "padding",
        "conteudo": "content",
        "conteúdo": "content",
        "texto": "text",
    }

    constructor(valor: string, quantificador?: string) {
        super(["mascara", "máscara"], "mask");

        // O valor é recebido como objeto, o que impossibilita de utilizar a função includes().
        // A constante abaixo é criada para ser possível fazer as validações.
        const valorString = valor.toString();

        if (!(valor in this.valoresAceitos) &&
            !(valor in posicoesBasicas) &&
            !(valorString.includes('url')) &&
            !(valor in valoresGlobais)) {
            throw new Error(`Propriedade 'máscara' com valor ${valor} inválido. Valores aceitos: 
            URL,
            ${Object.keys(this.valoresAceitos).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(posicoesBasicas).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(valoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`);
        }

        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;

    }
}
