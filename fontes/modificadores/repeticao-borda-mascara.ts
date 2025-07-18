import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class RepeticaoBordaMascara extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        esticar: "stretch",
        repetir: "repeat",
        arredondar: "round",
        espacar: "space",
        espaçar: "space",
    };

    constructor(
        valores: Valor[],
        
        pragmas?: PragmasModificador,
        valorVariavel: boolean = false,
    ) {
        super(
            ["repeticao-borda-mascara", "repetição-borda-máscara"],
            "mask-border-repeat",
            pragmas,
        );

        if (!valorVariavel)
            validarValores(
                "repetição-borda-máscara",
                valores,
                this.valoresAceitos,
            );

        this.valores = valores;
    }
}
