import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarAtribuicaoAbreviada } from "./validacoes/atribuicao-abreviada";
import { validarMultiplosQualitativos } from "./validacoes/multiplos-qualitativos";

export class DecoracaoTexto extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        nenhuma: "none",
        sublinhar: "underline",
        "linha-superior": "overline",
        "atraves-linha": "line-through",
        "através-linha": "line-through",
        piscar: "blink",
        auto: "auto",
        "de-frente": "from-font",
    };

    static nomeCss: string = "text-decoration";

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(
            ["decoracao-texto", "decoração-texto"],
            DecoracaoTexto.nomeCss,
            pragmas,
        );

        if (!variavel) {
            if (valores.length > 1) {
                validarAtribuicaoAbreviada(
                    "múltiplos-qualitativos",
                    "decoração-texto",
                    valores,
                    this.valoresAceitos
                );
            } else {
                validarMultiplosQualitativos(
                    "decoração-texto",
                    valores,
                    this.valoresAceitos
                );
            }
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
