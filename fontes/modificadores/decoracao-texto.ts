import { Modificador, PragmasModificador } from "./superclasse";
import { validarAtribuicaoAbreviada } from "./validacoes/atribuicao-abreviada";
import { validarMultiplosQualitativos } from "./validacoes/multiplos-qualitativos";

export class DecoracaoTexto extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        nenhuma: "none",
        sublinhado: "underline",
        "linha-superior": "overline",
        "atraves-linha": "line-through",
        "através-linha": "line-through",
        piscar: "blink",
        auto: "auto",
        "de-frente": "from-font",
    };

    constructor(
        valor: string,
        quantificador?: string,
        pragmas?: PragmasModificador,
        valorVariavel: boolean = false,
    ) {
        super(
            ["decoracao-texto", "decoração-texto"],
            "text-decoration",
            pragmas,
        );

        if (!valorVariavel) {
            if (valor.includes(" ")) {
                validarAtribuicaoAbreviada("múltiplos-qualitativos", "decoração-texto", valor, this.valoresAceitos);
            } else {
                validarMultiplosQualitativos("decoração-texto", valor, this.valoresAceitos);
            }
        }

        this.valor = valor;
    }
}
