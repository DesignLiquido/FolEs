import { Valor } from "../valores";
import { comprimentos } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class EspacamentoPalavras extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        normal: "normal",
    };

    static nomeCss: string = "word-spacing";

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(
            ["espacamento-palavras", "espaçamento-palavras"],
            EspacamentoPalavras.nomeCss,
            pragmas,
        );

        if (!variavel) {
            validarValorNumerico(
                "espaçamento-palavras",
                valores,
                this.valoresAceitos,
                null,
                comprimentos
            );
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
