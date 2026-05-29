import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class InsercaoEmBlocoFim extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        auto: "auto",
    };

    static nomeCss: string = "inset-block-end";

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(
            ["insercao-em-bloco-fim", "inserção-em-bloco-fim"],
            InsercaoEmBlocoFim.nomeCss,
            pragmas,
        );

        if (!variavel) {
            validarValorNumerico(
                "inserção-em-bloco-fim",
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
