import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class RenderizacaoTexto extends Modificador {
    // Valores são em camelCase mesmo.
    // https://developer.mozilla.org/en-US/docs/Web/CSS/text-rendering
    valoresAceitos: { [valorFoles: string]: string } = {
        auto: "auto",
        otimizarVelocidade: "optimizeSpeed",
        otimizarLegibilidade: "optimizeLegibility",
        precisaoGeometrica: "geometricPrecision",
        precisãoGeométrica: "geometricPrecision",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        valorVariavel: boolean = false,
    ) {
        super(
            ["renderizacao-texto", "renderização-texto"],
            "text-rendering",
            pragmas,
        );

        validarValores("renderização-texto", valores, this.valoresAceitos);

        this.valores = valores;
    }
}
