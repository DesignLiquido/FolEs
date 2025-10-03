import { Valor } from "../valores";
import { ListaDeValorPercentual } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class OrigemPerspectiva extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        esquerda: "left",
        centro: "center",
        direita: "right",
        superior: "top",
        inferior: "bottom",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super("origem-perspectiva", "perspective-origin", pragmas);

        if (!variavel) {
            validarValorNumerico(
                "origem-perspectiva",
                valores,
                this.valoresAceitos,
                null,
                ListaDeValorPercentual
            );
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
