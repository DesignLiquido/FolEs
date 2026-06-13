import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class LarguraBordaSuperior extends Modificador {
    static nomeFolEs: string = "largura-borda-superior";
    static nomeCss: string = "border-top-width";
    static descricao: string = 'Define a lagura da borda superior de um elemento.';
    static documentacao: string = '# `largura-borda-superior`\nA largura da borda superior pode ser definida com um valor inteiro não negativo ou com uma palavra-chave.';
    static exemploCodigo: string = 'divisao {\n  largura-borda-superior: grossa;\n}';

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
        super(LarguraBordaSuperior.nomeFolEs, LarguraBordaSuperior.nomeCss, pragmas);

        if (!variavel) {
            validarValorNumerico(
                LarguraBordaSuperior.nomeFolEs,
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
