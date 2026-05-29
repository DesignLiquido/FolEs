import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class LarguraMinima extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "conteudo-maximo": "max-content",
        "conteúdo-máximo": "max-content",
        "conteudo-minimo": "min-content",
        "conteúdo-mínimo": "min-content",
        nenhuma: "none",
    };

    static nomeCss: string = "min-width";

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(["largura-minima", "largura-minima"], LarguraMinima.nomeCss, pragmas);

        const valoresExtra = ["fit-content"];

        if (!variavel) {
            validarValorNumerico(
                "largura-minima",
                valores,
                this.valoresAceitos,
                valoresExtra,
                unidadesMedida
            );
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
