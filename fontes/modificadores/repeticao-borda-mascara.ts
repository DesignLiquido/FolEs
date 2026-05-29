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

    static nomeCss: string = "mask-border-repeat";

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(
            ["repeticao-borda-mascara", "repetição-borda-máscara"],
            RepeticaoBordaMascara.nomeCss,
            pragmas,
        );

        if (!variavel) {
            validarValores(
                "repetição-borda-máscara",
                valores,
                this.valoresAceitos,
            );
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
