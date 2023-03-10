import { valoresGlobais } from "./atributos/globais";
import { Modificador } from "./superclasse/modificador";

export class VariacaoFonte extends Modificador {
    // Seletor de Atribuição Abreviada (Shorthand).
    // Pode receber de 1 a 7 valores.
    valoresAceitos: { [valorFoles: string]: string } = {
        "normal": "normal",
        "formas-historicas": "historical-forms",
        "formas-históricas": "historical-forms",
        "rubi": "ruby",
        "jis78": "jis78",
        "jis83": "jis83",
        "jis90": "jis90",
        "jis04": "jis04",
        "jis78s": "jis78",
        "simplificada": "simplified",
        "tradicional": "traditional",
        "largura-proporcional": "proportional-width",
        "largura-completa": "full-width",
        "nenhuma": "none",
        "ligacoes-comuns": "common-ligatures",
        "ligações-comuns": "common-ligatures",
        "sem-ligacoes-comuns": "no-common-ligatures",
        "sem-ligações-comuns": "no-common-ligatures",
        "ligacoes-discretas": "discretionary-ligatures",
        "ligações-discretas": "discretionary-ligatures",
        "sem-ligacoes-discretas": "no-discretionary-ligatures",
        "sem-ligações-discretas": "no-discretionary-ligatures",
        "ligacoes-historicas": "historical-ligatures",
        "ligações-históricas": "historical-ligatures",
        "sem-ligacoes-historicas": "no-historical-ligatures",
        "sem-ligações-históricas": "no-historical-ligatures",
        "contextual": "contextual",
        "nao-contextual": "no-contextual",
        "não-contextual": "no-contextual",
        "maiusculas-pequenas": "small-caps",
        "maiúsculas-pequenas": "small-caps",
        "todas-maiusculas-pequenas": "all-small-caps",
        "todas-maiúsculas-pequenas": "all-small-caps",
        "maiusculas-menores": "petite-caps",
        "maiúsculas-menores": "petite-caps",
        "todas-maiusculas-menores": "all-petite-caps",
        "todas-maiúsculas-menores": "all-petite-caps",
        "misturar": "unicase",
        "titulo-maiusculo": "titling-caps",
        "título-maiúsculo": "titling-caps",
        "ordinal": "ordinal",
        "zero-cortado": "slashed-zero",
        "numeros-alinhados": "lining-nums",
        "números-alinhados": "lining-nums",
        "numeros-antigos": "oldstyle-nums",
        "números-antigos": "oldstyle-nums",
        "numeros-proporcionais": "proportional-nums",
        "números-proporcionais": "proportional-nums",
        "numeros-tabulares": "tabular-nums",
        "números-tabulares": "tabular-nums",
        "fracoes-diagonais": "diagonal-fractions",
        "frações-diagonais": "diagonal-fractions",
        "fracoes-empilhadas": "stacked-fractions",
        "frações-empilhadas": "stacked-fractions",
        "subscrito": "sub",
        "sobrescrito": "super",
    }

    constructor(valor: string, quantificador?: string) {
        super(["variacao-fonte", "variação-fonte"], "font-variant");

        if (!(valor in this.valoresAceitos) &&
            !(valor in valoresGlobais)) {
            throw new Error(`Propriedade 'variação-fonte' com valor ${valor} inválido. Valores aceitos: 
            ${Object.keys(this.valoresAceitos).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(valoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`);
        }

        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador
    }
}
