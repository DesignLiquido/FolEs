import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarAtribuicaoAbreviada } from "./validacoes/atribuicao-abreviada";
import { validarValorNumerico } from "./validacoes/numerica";

export class ImagemBorda extends Modificador {
    static nomeFolEs: string = "imagem-borda";
    static nomeCss: string = "border-image";
    static descricao: string = 'Define uma imagem como a borda de um elemento.';
    static documentacao: string = '# `imagem-borda`\nEsta propriedade desenha uma imagem em torno de um determinado elemento.';
    static exemploCodigo: string = 'divisao {\n  imagem-borda: url("/images/border.png");\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        url: "url",
        nenhum: "none",
        preencher: "fill",
        esticar: "stretch",
        repetir: "repeat",
        arredondar: "round",
        espacar: "space",
        espaçar: "space",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador, variavel?: boolean
    ) {
        super(ImagemBorda.nomeFolEs, ImagemBorda.nomeCss, pragmas);

        const valoresExtra = ["image", "linear-gradient", "url"];

        if (!variavel) {
            if (valores.length > 1) {
                validarAtribuicaoAbreviada(
                    "numérica",
                    ImagemBorda.nomeFolEs,
                    valores,
                    this.valoresAceitos,
                    valoresExtra,
                    unidadesMedida
                );
            } else {
                validarValorNumerico(
                    ImagemBorda.nomeFolEs,
                    valores,
                    this.valoresAceitos,
                    valoresExtra,
                    unidadesMedida
                );
            }
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
