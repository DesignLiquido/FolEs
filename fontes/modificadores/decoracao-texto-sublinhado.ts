import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class DecoracaoTextoSublinhado extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        auto: "auto",
        nenhum: "none",
        tudo: "all",
    };

    constructor(
        valores: Valor[],
        
        pragmas?: PragmasModificador,
        valorVariavel: boolean = false,
    ) {
        super(
            ["decoracao-texto-sublinhado", "decoração-texto-sublinhado"],
            "text-decoration-skip-ink",
            pragmas,
        );

        if (!valorVariavel)
            validarValores(
                "decoração-texto-sublinhado",
                valores,
                this.valoresAceitos,
            );

        this.valores = valores;
    }
}
