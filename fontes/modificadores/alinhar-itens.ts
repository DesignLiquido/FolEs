import { Modificador } from "./superclasse/modificador";

export class AlinharItens extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "inicio": "start",
        "início": "start",
        "fim": "end",
        "flex-inicio": "flex-start",
        "flex-início": "flex-start",
        "flex-fim": "flex-end",
        "centro": "center",
        "normal": "normal",
        "linha-de-base": "alternate",
        "inicio-linha-de-base": "first baseline",
        "início-linha-de-base": "first baseline",
        "fim-linha-de-base": "last baseline",
        "espaco-entre": "space-between",
        "espaço-entre": "space-between",
        "espaco-ao-redor": "space-around",
        "espaço-ao-redor": "space-around",
        "espaco-uniforme": "space-evenly",
        "espaço-uniforme": "space-evenly",
        "esticar": "stretch",
        "seguro": "safe",
        "inseguro": "unsafe",
    }

    constructor(valor: string, quantificador?: string) {
        super("alinhar-itens", "align-items");

        if (!(valor in this.valoresAceitos)) {
            throw new Error(`Valor ${valor} inválido para 'alinhar-itens'. Valores aceitos: ${Object.keys(this.valoresAceitos).reduce((final, atual) => final += `, ${atual}`)}.`);
        }

        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;
    }
}
