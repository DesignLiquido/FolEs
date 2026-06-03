import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class RenderizacaoImagem extends Modificador {
    static nomeFolEs: string[] = ["renderizacao-imagem", "renderização-imagem"];
    static nomeCss: string = "image-rendering";
    static descricao: string = 'Define um algoritmo de dimensionamento de imagem.';
    static documentacao: string = '# `renderizacao-imagem`\nA propriedade se aplica a um elemento em si, a quaisquer imagens definidas em suas outras propriedades e também a seus descendentes.';
    static exemploCodigo: string = 'imagem {\n  renderizacao-imagem: bordas-nítidas;\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        auto: "auto",
        "bordas-nitidas": "crisp-edges",
        "bordas-nítidas": "crisp-edges",
        pixelado: "pixelated",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(
            RenderizacaoImagem.nomeFolEs,
            RenderizacaoImagem.nomeCss,
            pragmas,
        );

        if (!variavel) validarValores(RenderizacaoImagem.nomeFolEs[1], valores, this.valoresAceitos);

        this.valores = valores;
        this.variavel = variavel;
    }
}
