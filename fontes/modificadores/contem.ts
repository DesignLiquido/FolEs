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
        super(["contem", "contém"], "contain");

        // OBS.: Também pode receber múltiplos valores.
        // A lógica abaixo cobre somente o recebimento de UM único valor.
        // TODO: Adaptar lógica para cobrir os demais casos. ]

        validarValores('contém', valor, this.valoresAceitos);

        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;
    }
}
