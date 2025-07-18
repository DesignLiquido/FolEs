import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class MesclarFundo extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        normal: "normal",
        multiplicar: "multiply",
        alternar: "screen",
        sobre: "overlay",
        escurecer: "darken",
        clarear: "normal",
        subexposicao: "color-dodge",
        subexposição: "color-dodge",
        "cores-quentes": "color-burn",
        "luz-forte": "hard-light",
        "luz-fraca": "soft-light",
        diferenca: "difference",
        diferença: "difference",
        excluir: "exclusion",
        espaçar: "space",
        matiz: "hue",
        saturar: "saturation",
        colorir: "color",
        luminosidade: "luminosity",
    };

    constructor(
        valores: Valor[],
        
        pragmas?: PragmasModificador,
        valorVariavel: boolean = false,
    ) {
        super("mesclar-fundo", "background-blend-mode", pragmas);

        if (!valorVariavel)
            validarValores("mesclar-fundo", valores, this.valoresAceitos);

        this.valores = valores;
    }
}
