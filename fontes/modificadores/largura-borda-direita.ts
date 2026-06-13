import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class LarguraBordaDireita extends Modificador {
    static nomeFolEs: string = "largura-borda-direita";
    static nomeCss: string = "border-right-width";
    static descricao: string = 'Define a lagura da borda direita de um elemento.';
    static documentacao: string = '# `largura-borda-direita`\nA largura da borda direita pode ser definida com um valor inteiro não negativo ou com uma palavra-chave.';
    static exemploCodigo: string = 'divisao {\n  largura-borda-direita: grossa;\n}';

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
        super(LarguraBordaDireita.nomeFolEs, LarguraBordaDireita.nomeCss, pragmas);

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
