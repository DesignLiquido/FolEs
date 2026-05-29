import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class InsercaoEmLinhaFim extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        auto: "auto",
    };

    static nomeCss: string = "inset-inline-end";

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(
            ["insercao-em-linha-fim", "inserção-em-linha-fim"],
            InsercaoEmLinhaFim.nomeCss,
            pragmas,
        );

        if (!variavel) {
            validarValorNumerico(
                "inserção-em-linha-fim",
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
