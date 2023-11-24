import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class Contem extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "nenhum": "none",
        "estrito": "strict",
        "modo-conteudo": "content",
        "modo-conteúdo": "content",
        "tamanho": "size",
        "tamanho-alinhado": "inline-size",
        "layout": "layout",
        "estilo": "style",
        "pintar": "paint",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super(["contem", "contém"], "contain", pragmas);

        validarValores('contém', valor, this.valoresAceitos);

        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;
    }
}
