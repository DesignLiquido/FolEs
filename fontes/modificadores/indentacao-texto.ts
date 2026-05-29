import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class IndentacaoTexto extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "cada-linha": "each-line",
        inverter: "hanging",
    };

    static nomeCss: string = "text-indent";

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(["indentacao-texto", "indentação-texto"], IndentacaoTexto.nomeCss, pragmas);

        if (!variavel) {
            validarValorNumerico(
                "indentação-texto",
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
