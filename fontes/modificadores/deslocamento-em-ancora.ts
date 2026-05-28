import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class DeslocamentoEmAncora extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        superior: "top",
        inferior: "bottom",
        esquerda: "left",
        direita: "right",
        centro: "center",
        auto: "auto",
    };

    static nomeCss: string = "offset-anchor";

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(
            ["deslocamento-em-ancora", "deslocamento-em-âncora"],
            DeslocamentoEmAncora.nomeCss,
            pragmas,
        );

        if (!variavel) {
            validarValorNumerico(
                "deslocamento-em-âncora",
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
