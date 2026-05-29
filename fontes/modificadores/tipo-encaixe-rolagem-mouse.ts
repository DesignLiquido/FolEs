import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class TipoEncaixeRolagemMouse extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        nenhum: "none",
        horizontal: "x",
        vertical: "y",
        "em-bloco": "block",
        "em-linha": "inline",
        ambos: "both",
        obrigatorio: "mandatory",
        obrigatório: "mandatory",
        proximidade: "proximity",
    };

    static nomeCss: string = "scroll-snap-type";

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super("tipo-encaixe-rolagem-mouse", TipoEncaixeRolagemMouse.nomeCss, pragmas);

        if (!variavel) {
            validarValores(
                "tipo-encaixe-rolagem-mouse",
                valores,
                this.valoresAceitos,
            );
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
