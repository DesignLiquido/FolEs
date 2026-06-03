import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class RecuoEsquerdo extends Modificador {
    static nomeFolEs: string = "recuo-esquerdo";
    static nomeCss: string = "padding-left";
    static descricao: string = 'Define a largura da área de preenchimento à esquerda de um elemento.';
    static documentacao: string = '# `recuo-esquerdo`\nA área de preenchimento de um elemento é o espaço entre seu conteúdo e sua borda.';
    static exemploCodigo: string = 'p {\n  recuo-esquerdo: 20px;\n}';

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(RecuoEsquerdo.nomeFolEs, RecuoEsquerdo.nomeCss, pragmas);

        if (!variavel) {
            validarValorNumerico(
                RecuoEsquerdo.nomeFolEs,
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
