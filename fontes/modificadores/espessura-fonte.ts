import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class EspessuraFonte extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        normal: "normal",
        "em-negrito": "bold",
        "mais-clara": "lighter",
        "mais-escura": "bolder",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super("espessura-fonte", "font-weight", pragmas);

        if (!variavel) {
            validarValorNumerico(
                "espessura-fonte",
                valores,
                this.valoresAceitos,
                null,
                null,
                true,
            );
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
