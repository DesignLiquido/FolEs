import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class RecuoInferior extends Modificador {
    static nomeFolEs: string = "recuo-inferior";
    static nomeCss: string = "padding-bottom";
    static descricao: string = 'Define a largura da área de preenchimento inferior de um elemento.';
    static documentacao: string = '# `recuo-inferior`\nA área de preenchimento de um elemento é o espaço entre seu conteúdo e sua borda.';
    static exemploCodigo: string = 'p {\n  recuo-inferior: 20px;\n}';

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(RecuoInferior.nomeFolEs, RecuoInferior.nomeCss, pragmas);

        if (!variavel) {
            validarValorNumerico(
                RecuoInferior.nomeFolEs,
                valores,
                null,
                null,
                unidadesMedida
            );
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
