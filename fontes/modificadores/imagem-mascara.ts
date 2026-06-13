import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class ImagemMascara extends Modificador {
    static nomeFolEs: string[] = ["imagem-mascara", "imagem-máscara"];
    static nomeCss: string = "mask-image";
    static descricao: string = 'Define a imagem que é usada como camada de máscara para um elemento.';
    static documentacao: string = '# `imagem-mascara`\nAo definir a imagem de máscara, por padrão, significa que o canal alfa da imagem da máscara será multiplicado pelo canal alfa do elemento.';
    static exemploCodigo: string = 'p {\n  imagem-mascara: url("/images/border.png");\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        nenhuma: "none",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(ImagemMascara.nomeFolEs, ImagemMascara.nomeCss, pragmas);

        const valoresExtra = ["image", "linear-gradient", "url"];

        if (!variavel) {
            validarValores(
                ImagemMascara.nomeFolEs[1],
                valores,
                this.valoresAceitos,
                valoresExtra,
            );
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
