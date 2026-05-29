import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class TamanhoFonte extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "extra-pequeno": "xx-small",
        "muito-pequeno": "x-small",
        pequeno: "small",
        medio: "medium",
        médio: "medium",
        grande: "large",
        "muito-grande": "x-large",
        "extra-grande": "xx-large",
        gigante: "xxx-large",
        maior: "larger",
        menor: "smaller",
    };

    static nomeCss: string = "font-size";

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super("tamanho-fonte", TamanhoFonte.nomeCss, pragmas);

        if (!variavel) {
            validarValorNumerico(
                "tamanho-fonte",
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
