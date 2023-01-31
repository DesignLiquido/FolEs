import { ListaDeValoresGlobais } from "./atributos/globais";
import { Modificador } from "./superclasse/modificador";

export class VariacaoFonteNumerica extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "normal": "normal",
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
    }

    constructor(valor: string, quantificador?: string) {
        super(
            ["variacao-fonte-numerica", "variação-fonte-numérica"],
            "font-variant-numeric"
        );

        // OBS.: Também aceita receber múltiplos valores, desde que sejam os listados.
        // Ex.: variação-fonte-numérica: numeros-antigos frações-empilhadas;

        // A lógica abaixo cobre somente o recebimento de UM dos valores aceitos listados. 
        // TODO: Adaptar lógica para cobrir os demais casos. 

        if (!(valor in this.valoresAceitos) &&
            !(valor in ListaDeValoresGlobais)) {
            throw new Error(`Propriedade 'variação-fonte-numérica' com valor ${valor} inválido. Valores aceitos: 
            ${Object.keys(this.valoresAceitos).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(ListaDeValoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`);
        }

        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;
    }
}
