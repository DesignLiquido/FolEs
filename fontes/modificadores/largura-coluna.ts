import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class LarguraColuna extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        auto: "auto",
    };

    static nomeCss: string = "column-width";

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super("largura-coluna", LarguraColuna.nomeCss, pragmas);

        if (!variavel) {
            validarValorNumerico(
                "largura-coluna",
                valores,
                this.valoresAceitos,
                null,
                unidadesMedida
            );
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
