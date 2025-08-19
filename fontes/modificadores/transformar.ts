import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class Transformar extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        nenhum: "none",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
    ) {
        super("transformar", "transform", pragmas);

        const valoresExtra = [
            "perspective",
            "rotate",
            "rotateX",
            "rotateY",
            "rotateZ",
            "rotate3d",
            "scale",
            "scale3d",
            "scaleX",
            "scaleY",
            "scaleZ",
            "skew",
            "skewX",
            "skewY",
            "translate",
            "translate3d",
            "translateX",
            "translateY",
            "translateZ",
        ];

        validarValores(
            "transformar",
            valores,
            this.valoresAceitos,
            valoresExtra,
        );

        this.valores = valores;
    }
}
