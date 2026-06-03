import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class RecuoDireito extends Modificador {
    static nomeFolEs: string = "recuo-direito";
    static nomeCss: string = "padding-right";
    static descricao: string = 'Define a largura da área de preenchimento à direita de um elemento.';
    static documentacao: string = '# `recuo-direito`\nA área de preenchimento de um elemento é o espaço entre seu conteúdo e sua borda.';
    static exemploCodigo: string = 'p {\n  recuo-direito: 20px;\n}';

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(RecuoDireito.nomeFolEs, RecuoDireito.nomeCss, pragmas);

        if (!variavel) {
            validarValorNumerico(
                RecuoDireito.nomeFolEs,
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
