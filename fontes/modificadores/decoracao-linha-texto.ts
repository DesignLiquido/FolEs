import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class DecoracaoLinhaTexto extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "nenhuma": "none",
        "sublinhado": "underline",
        "linha-superior": "overline",
        "atraves-linha": "line-through",
        "através-linha": "line-through",
        "piscar": "blink",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador, valorVariavel: boolean = false) {
        super(
            ["decoracao-linha-texto", "decoração-linha-texto"],
            "text-decoration-line", 
            pragmas
        );

        if (!valorVariavel) validarValores('decoração-linha-texto', valor, this.valoresAceitos);

        this.valor = valor;
    }
}
