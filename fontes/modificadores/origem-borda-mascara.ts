import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class OrigemBordaMascara extends Modificador {
    static nomeFolEs: string[] = ["origem-borda-mascara", "origem-borda-máscara"];
    static nomeCss: string = "mask-border-source";
    static descricao: string = 'Define a imagem de origem usada para criar a borda da máscara de um elemento.';
    static documentacao: string = '# `origem-borda-mascara`\nUma propriedade relacionada para este tipo de estilização é a propriedade `fatiar-borda-máscara`, usada para dividir a imagem de origem em regiões, que são aplicadas dinamicamente à borda da máscara.';
    static exemploCodigo: string = 'imagem {\n  origem-borda-mascara: url("image.png");\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        nenhuma: "none",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(
            OrigemBordaMascara.nomeFolEs,
            OrigemBordaMascara.nomeCss,
            pragmas,
        );

        const valoresExtra = ["image", "url"];

        if (!variavel) {
            validarValores(
                OrigemBordaMascara.nomeFolEs[1],
                valores,
                this.valoresAceitos,
                valoresExtra,
            );
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
