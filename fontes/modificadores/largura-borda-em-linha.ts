import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class LarguraBordaEmLinha extends Modificador {
    static nomeFolEs: string = "largura-borda-em-linha";
    static nomeCss: string = "border-inline-width";
    static descricao: string = 'Define a largura das bordas em linha de um elemento.';
    static documentacao: string = '# `largura-borda-em-linha`\nEsta propriedade mapeia o valor recebido para uma largura de borda física dependendo do modo de escrita do elemento, direcionalidade e orientação do texto.';
    static exemploCodigo: string = 'divisão {\n  largura-borda-em-linha: 5px;\n}';

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
        super(LarguraBordaEmLinha.nomeFolEs, LarguraBordaEmLinha.nomeCss, pragmas);

        if (!variavel) {
            validarValorNumerico(
                LarguraBordaEmLinha.nomeFolEs,
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
