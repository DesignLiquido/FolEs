import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class TamanhoFundo extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        alargar: "contain",
        diminuir: "cover",
        auto: "auto",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super("tamanho-fundo", "background-size", pragmas);

        if (!variavel) {
            validarValorNumerico(
                "tamanho-fundo",
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
