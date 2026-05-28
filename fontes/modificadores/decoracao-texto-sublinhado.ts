import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class DecoracaoTextoSublinhado extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        auto: "auto",
        nenhum: "none",
        tudo: "all",
    };

    static nomeCss: string = "text-decoration-skip-ink";

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(
            ["decoracao-texto-sublinhado", "decoração-texto-sublinhado"],
            DecoracaoTextoSublinhado.nomeCss,
            pragmas,
        );

        if (!variavel) {
            validarValores(
                "decoração-texto-sublinhado",
                valores,
                this.valoresAceitos,
            );
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
