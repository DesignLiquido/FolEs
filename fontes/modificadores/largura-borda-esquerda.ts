import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class LarguraBordaEsquerda extends Modificador {
    static nomeFolEs: string = "largura-borda-esquerda";
    static nomeCss: string = "border-left-width";
    static descricao: string = 'Define a lagura da borda esquerda de um elemento.';
    static documentacao: string = '# `largura-borda-esquerda`\nA largura da borda esquerda pode ser definida com um valor inteiro não negativo ou com uma palavra-chave.';
    static exemploCodigo: string = 'divisao {\n  largura-borda-esquerda: grossa;\n}';

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
        super(LarguraBordaEsquerda.nomeFolEs, LarguraBordaEsquerda.nomeCss, pragmas);

        if (!variavel) {
            validarValorNumerico(
                LarguraBordaEsquerda.nomeFolEs,
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
