import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class Transformar extends Modificador {
    static nomeFolEs: string = "transformar";
    static nomeCss: string = "transform";
    static descricao: string = 'Permite girar, dimensionar, inclinar ou traduzir um elemento.';
    static documentacao: string = '# `transformar\nA propriedade modifica o espaço de coordenadas do modelo de formatação visual CSS.';
    static exemploCodigo: string = 'p {\n  transformar: nenhum;\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        nenhum: "none",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(Transformar.nomeFolEs, Transformar.nomeCss, pragmas);

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
                Transformar.nomeFolEs,
                valores,
                this.valoresAceitos,
                valoresExtra,
            );
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
