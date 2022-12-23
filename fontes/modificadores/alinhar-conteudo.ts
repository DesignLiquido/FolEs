import { ListaDePosições } from "./atributos/posição";
import { Modificador } from "./superclasse/modificador";

export class AlinharConteudo extends Modificador {
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
        "auto-inicio": "self-start",
        "auto-início": "self-start",
        "auto-fim": "self-end",
    }
    
    constructor(valor: string, quantificador?: string) {
        super(["alinhar-conteudo", "alinhar-conteúdo"], "align-content");

        // Pode receber valores próprios ou valores da lista de posições
        if (!(valor in this.valoresAceitos) && !(valor in ListaDePosições)) {
            throw new Error(`Valor ${valor} inválido para 'alinhar-conteúdo'. Valores aceitos:
            ${Object.keys(ListaDePosições).reduce((final, atual) => final += `, ${atual}`)}, 
            ${Object.keys(this.valoresAceitos).reduce((final, atual) => final += `, ${atual}`)}.`);
        }

        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;
    }
}
