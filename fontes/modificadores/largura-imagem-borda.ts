import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class LarguraImagemBorda extends Modificador {
    static nomeFolEs: string = "largura-imagem-borda";
    static nomeCss: string = "border-image-width";
    static descricao: string = 'Define a largura da imagem de borda de um elemento.';
    static documentacao: string = '# `largura-imagem-borda`\nSe o valor dessa propriedade for maior que o do elemento `largura-borda`, a imagem da borda se estenderá além da borda do conteúdo.';
    static exemploCodigo: string = 'imagem {\n  largura-imagem-borda: 3px;\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        auto: "auto",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(LarguraImagemBorda.nomeFolEs, LarguraImagemBorda.nomeCss, pragmas);

        if (!variavel) {
            validarValorNumerico(
                LarguraImagemBorda.nomeFolEs,
                valores,
                this.valoresAceitos,
                null,
                unidadesMedida
            );
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
