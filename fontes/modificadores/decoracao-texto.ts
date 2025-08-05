import { Valor } from "../valores";
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
        valores: Valor[],
        pragmas?: PragmasModificador,
    ) {
        super(
            ["decoracao-texto", "decoração-texto"],
            "text-decoration",
            pragmas,
        );

        // TODO: Repensar
        //     if (valor.includes(" ")) {
        //         validarAtribuicaoAbreviada("múltiplos-qualitativos", "decoração-texto", valores, this.valoresAceitos);
        //     } 

        validarMultiplosQualitativos("decoração-texto", valores, this.valoresAceitos);

        this.valores = valores;
    }
}
