import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class RecuoSuperior extends Modificador {
    static nomeFolEs: string = "recuo-superior";
    static nomeCss: string = "padding-top";
    static descricao: string = 'Define a largura da área de preenchimento superior de um elemento.';
    static documentacao: string = '# `recuo-superior`\nA área de preenchimento de um elemento é o espaço entre seu conteúdo e sua borda.';
    static exemploCodigo: string = 'p {\n  recuo-superior: 20px;\n}';

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(RecuoSuperior.nomeFolEs, RecuoSuperior.nomeCss, pragmas);

        if (!variavel) {
            validarValorNumerico(
                RecuoSuperior.nomeFolEs,
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
