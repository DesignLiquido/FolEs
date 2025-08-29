import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class TamanhoMascara extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        auto: "auto",
        conter: "contain",
        cobrir: "cover",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(["tamanho-mascara", "tamanho-máscara"], "mask-size", pragmas);

        if (!variavel) {
            validarValorNumerico(
                "tamanho-máscara",
                valores,
                this.valoresAceitos,
                unidadesMedida
            );
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
