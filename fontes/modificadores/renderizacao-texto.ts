import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class RenderizacaoTexto extends Modificador {
    static nomeFolEs: string[] = ["renderizacao-texto", "renderização-texto"];
    static nomeCss: string = "text-rendering";
    static descricao: string = 'Fornece informações ao mecanismo de renderização sobre o que otimizar ao renderizar texto.';
    static documentacao: string = '# `renderizacao-texto`\nAo utilizar esta propriedade, é importante saber que o navegador faz compensações entre velocidade, legibilidade e precisão geométrica.';
    static exemploCodigo: string = 'p {\n  renderizacao-texto: otimizarVelocidade;\n}';

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
        variavel?: boolean
    ) {
        super(
            RenderizacaoTexto.nomeFolEs,
            RenderizacaoTexto.nomeCss,
            pragmas,
        );

        if (!variavel) validarValores(RenderizacaoTexto.nomeFolEs[1], valores, this.valoresAceitos);

        this.valores = valores;
        this.variavel = variavel;
    }
}
