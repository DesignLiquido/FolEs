import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class LarguraBordaInferior extends Modificador {
    static nomeFolEs: string = "largura-borda-inferior";
    static nomeCss: string = "border-bottom-width";
    static descricao: string = 'Define a lagura da borda inferior de um elemento.';
    static documentacao: string = '# `largura-borda-inferior`\nA largura da borda inferior pode ser definida com um valor inteiro não negativo ou com uma palavra-chave.';
    static exemploCodigo: string = 'divisao {\n  largura-borda-inferior: grossa;\n}';

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
        super(LarguraBordaInferior.nomeFolEs, LarguraBordaInferior.nomeCss, pragmas);

        if (!variavel) {
            validarValorNumerico(
                LarguraBordaInferior.nomeFolEs,
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
