import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class RenderizacaoTexto extends Modificador {
    // Valores são em camelCase mesmo.
    // https://developer.mozilla.org/en-US/docs/Web/CSS/text-rendering
    valoresAceitos: { [valorFoles: string]: string } = {
        "auto": "auto",
        "otimizarVelocidade": "optimizeSpeed",
        "otimizarLegibilidade": "optimizeLegibility",
        "precisaoGeometrica": "geometricPrecision",
        "precisãoGeométrica": "geometricPrecision",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super(
            ["renderizacao-texto", "renderização-texto"],
            "text-rendering", 
            pragmas
        );

        validarValores('renderização-texto', valor, this.valoresAceitos);

        this.valor = valor;

        // Quantificador não é usado aqui.
        // this.quantificador = quantificador;
    }
}
