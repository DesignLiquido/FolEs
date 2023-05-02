import { valoresGlobais } from "./atributos/globais";
import { posicoes } from "./atributos/posicoes";
import { Modificador } from "./superclasse/modificador";

export class PosicionarItens extends Modificador {
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
        "legado": "legacy",
        "auto-inicio": "self-start",
        "auto-início": "self-start",
        "auto-fim": "self-end",
    }

    constructor(valor: string, quantificador?: string) {
        super("posicionar-itens", "place-items");

        // Também aceita receber múltiplos valores
        // Ex.: posicionar-itens: auto início;

        // TODO: Adaptar lógica para cobrir todos os casos
        if (!(valor in this.valoresAceitos) &&
            !(valor in posicoes) &&
            !(valor in valoresGlobais)
        ) {
            throw new Error(`Propriedade 'posicionar-itens' com valor ${valor} inválido. Valores aceitos:
            ${Object.keys(posicoes).reduce((final, atual) => final += `, ${atual}`)}, 
            ${Object.keys(this.valoresAceitos).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(valoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`);
        }

        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;
    }
}
