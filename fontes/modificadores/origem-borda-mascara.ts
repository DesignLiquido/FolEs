import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class OrigemBordaMascara extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        nenhuma: "none",
    };

    constructor(
        valor: string,
        quantificador?: string,
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
                valor,
                this.valoresAceitos,
                valoresExtra,
            );

        this.valor = valor;
    }
}
