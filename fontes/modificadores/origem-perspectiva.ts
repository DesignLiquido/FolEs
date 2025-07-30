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
    ) {
        super("origem-perspectiva", "perspective-origin", pragmas);

        validarValorNumerico(
            "origem-perspectiva",
            valores,
            this.valoresAceitos,
            null,
            ListaDeValorPercentual
        );

        // TODO: Também pode receber somente o valor numérico, sem quantificador
        this.valores = valores;
    }
}
