import { Valor } from "../valores";
import { MetodoCss } from "../valores/metodos/css/metodo-css";
import { Metodo } from "../valores/metodos/foles/metodo";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class OrigemBordaMascara extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        nenhuma: "none",
    };

    constructor(
        valores: Valor[],
        
        pragmas?: PragmasModificador,
        valorVariavel: boolean = false,
    ) {
        super(
            ["origem-borda-mascara", "origem-borda-máscara"],
            "mask-border-source",
            pragmas,
        );

        const valoresExtra = ["url"];

        if (!valorVariavel)
            validarValores(
                "origem-borda-máscara",
                valores,
                this.valoresAceitos,
                valoresExtra,
            );

        this.valores = valores;
    }
}
