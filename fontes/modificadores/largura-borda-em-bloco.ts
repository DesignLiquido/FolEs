import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { LarguraBordaDireita } from "./largura-borda-direita";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class LarguraBordaEmBloco extends Modificador {
    static nomeFolEs: string = "largura-borda-em-bloco";
    static nomeCss: string = "border-block-width";
    static descricao: string = 'Define a largura das bordas do bloco de um elemento.';
    static documentacao: string = '# `largura-borda-em-bloco`\nEsta propriedade mapeia o valor recebido para uma largura de borda física dependendo do modo de escrita do elemento, direcionalidade e orientação do texto.';
    static exemploCodigo: string = 'divisão {\n  largura-borda-em-bloco: 5px;\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        fina: "thin",
        media: "medium",
        média: "medium",
        grossa: "thick",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(LarguraBordaDireita.nomeFolEs, LarguraBordaEmBloco.nomeCss, pragmas);

        if (!variavel) {
            validarValorNumerico(
                LarguraBordaDireita.nomeFolEs,
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
