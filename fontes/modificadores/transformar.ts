import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class Transformar extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        nenhum: "none",
    };

    static nomeCss: string = "transform";

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super("transformar", Transformar.nomeCss, pragmas);

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

        if (!variavel) {
            validarValores(
                "transformar",
                valores,
                this.valoresAceitos,
                valoresExtra,
            );
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
