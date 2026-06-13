import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class LarguraFimBordaEmLinha extends Modificador {
    static nomeFolEs: string = "largura-fim-borda-em-linha";
    static nomeCss: string = "border-inline-end-width";
    static descricao: string = 'Define a largura do fim de uma borda em linha de um elemento.';
    static documentacao: string = '# `largura-fim-borda-em-linha`\nEsta propriedade mapeia o valor recebeido para uma largura de borda física dependendo do modo de escrita do elemento, direcionalidade e orientação do texto.';
    static exemploCodigo: string = 'divisão {\n  largura-fim-borda-em-linha: fina;\n}';

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
        super(LarguraFimBordaEmLinha.nomeFolEs, LarguraFimBordaEmLinha.nomeCss, pragmas);

        if (!variavel) {
            validarValorNumerico(
                LarguraFimBordaEmLinha.nomeFolEs,
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
