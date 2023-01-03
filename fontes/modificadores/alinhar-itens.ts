import { ListaDeValoresGlobais } from "./atributos/globais";
import { ListaDePosições } from "./atributos/posição";
import { Modificador } from "./superclasse/modificador";

export class AlinharItens extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "inicio-linha-de-base": "first baseline",
        "início-linha-de-base": "first baseline",
        "fim-linha-de-base": "last baseline",
        "espaco-entre": "space-between",
        "espaço-entre": "space-between",
        "espaco-ao-redor": "space-around",
        "espaço-ao-redor": "space-around",
        "espaco-uniforme": "space-evenly",
        "espaço-uniforme": "space-evenly",
        "seguro": "safe",
        "inseguro": "unsafe",
    }

    constructor(valor: string, quantificador?: string) {
        super("alinhar-itens", "align-items");

        // Pode receber valores próprios ou valores da lista de posições
        if (!(valor in this.valoresAceitos) && 
            !(valor in ListaDePosições) && 
            !(valor in ListaDeValoresGlobais)
        ) {
            throw new Error(`Propriedade 'alinhar-itens' com valor ${valor} inválido. Valores aceitos:
            ${Object.keys(ListaDePosições).reduce((final, atual) => final += `, ${atual}`)}, 
            ${Object.keys(this.valoresAceitos).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(ListaDeValoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`);
        }

        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;
    }
}
