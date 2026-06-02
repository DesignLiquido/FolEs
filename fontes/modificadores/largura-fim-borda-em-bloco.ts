import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class LarguraFimBordaEmBloco extends Modificador {
    static nomeFolEs: string = "largura-fim-borda-em-bloco";
    static nomeCss: string = "border-block-end-width";
    static descricao: string = 'Define a largura do fim de uma borda em bloco de um elemento.';
    static documentacao: string = '# `largura-fim-borda-em-bloco`\nEsta propriedade mapeia o valor recebeido para uma largura de borda física dependendo do modo de escrita do elemento, direcionalidade e orientação do texto.';
    static exemploCodigo: string = 'divisão {\n  largura-fim-borda-em-bloco: fina;\n}';

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
        super(LarguraFimBordaEmBloco.nomeFolEs, LarguraFimBordaEmBloco.nomeCss, pragmas);

        if (!variavel) {
            validarValorNumerico(
                LarguraFimBordaEmBloco.nomeFolEs,
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
