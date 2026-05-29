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

    static nomeCss: string = "text-rendering";

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(
            ["renderizacao-texto", "renderização-texto"],
            RenderizacaoTexto.nomeCss,
            pragmas,
        );

        if (!variavel) validarValores("renderização-texto", valores, this.valoresAceitos);

        this.valores = valores;
        this.variavel = variavel;
    }
}
