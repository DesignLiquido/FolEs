import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class IndiceZ extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        auto: "auto",
    };

    static nomeCss: string = "z-index";

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(["indice-z", "índice-z"], IndiceZ.nomeCss, pragmas);

        if (!variavel) {
            validarValorNumerico(
                "índice-z",
                valores,
                this.valoresAceitos,
                null,
                null,
                true
            );
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
