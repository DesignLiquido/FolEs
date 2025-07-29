import { Valor } from "../valores";
import { ListaDeValorPercentual } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";
import { validarQuantificador } from "./validacoes/quantificador";

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
        );

        // Aceita somente o valor percentual (%) como quantificador
        // Também pode receber somente o valor numérico, sem quantificador
        // if (Number(parseInt(valor)) && quantificador !== undefined) {
        //     validarQuantificador(
        //         "origem-perspectiva",
        //         quantificador,
        //         ListaDeValorPercentual,
        //     );

        //     this.quantificador = quantificador;
        // }

        this.valores = valores;
    }
}
