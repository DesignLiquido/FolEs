import { valoresGlobais } from "./atributos/globais";
import { posicoes } from "./atributos/posicoes";
import { Modificador } from "./superclasse/modificador";

export class PosicionarConteudo extends Modificador {
    // Seletor de Atribuição Abreviada (Shorthand).
    // Pode receber de 1 a 2 valores.
    valoresAceitos: { [valorFoles: string]: string } = {
        "inicio-linha-base": "first baseline",
        "início-linha-base": "first baseline",
        "fim-linha-base": "last baseline",
        "espaco-entre": "space-between",
        "espaço-entre": "space-between",
        "espaco-ao-redor": "space-around",
        "espaço-ao-redor": "space-around",
        "espaco-uniforme": "space-evenly",
        "espaço-uniforme": "space-evenly",
        "seguro": "safe",
        "inseguro": "unsafe",
        "auto-inicio": "self-start",
        "auto-início": "self-start",
        "auto-fim": "self-end",
        "primeira-linha-base": "first baseline",
        "ultima-linha-base": "last baseline",
        "última-linha-base": "last baseline",
    }

    constructor(valor: string, quantificador?: string) {
        super(
            ["posicionar-conteudo", "posicionar-conteúdo"],
            "place-content"
        );

        // Pode receber valores próprios ou valores da lista de posições
        // Também aceita receber múltiplos valores
        // Ex.: posicionar-conteúdo: primeira linha-de-base espaço-uniforme;

        // TODO: Adaptar lógica para cobrir todos os casos
        if (!(valor in this.valoresAceitos) &&
            !(valor in posicoes) &&
            !(valor in valoresGlobais)
        ) {
            throw new Error(`Propriedade 'posicionar-conteúdo' com valor ${valor} inválido. Valores aceitos:
            ${Object.keys(posicoes).reduce((final, atual) => final += `, ${atual}`)}, 
            ${Object.keys(this.valoresAceitos).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(valoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`);
        }

        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;
    }
}
