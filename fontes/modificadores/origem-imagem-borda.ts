import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class OrigemImagemBorda extends Modificador {
    static nomeFolEs: string = "origem-imagem-borda";
    static nomeCss: string = "border-image-source";
    static descricao: string = 'Define a imagem de origem usada para criar a imagem de borda de um elemento.';
    static documentacao: string = '# `origem-imagem-borda`\nUma propriedade relacionada é a propriedade fatiar-imagem-borda, usada para dividir a imagem de origem em regiões, que são então aplicadas dinamicamente à imagem de borda final.';
    static exemploCodigo: string = 'divisão {\n  origem-imagem-borda: url(image.jpg);\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        nenhuma: "none",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(OrigemImagemBorda.nomeFolEs, OrigemImagemBorda.nomeCss, pragmas);

        const valoresExtra = ["cross-fade", "image", "image-set", "linear-gradient", "url"];

        if (!variavel) {
            validarValores(
                OrigemImagemBorda.nomeFolEs,
                valores,
                this.valoresAceitos,
                valoresExtra,
            );
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
