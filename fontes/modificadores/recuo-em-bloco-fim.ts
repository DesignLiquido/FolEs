import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class RecuoEmBlocoFim extends Modificador {
    static nomeFolEs: string = "recuo-em-bloco-fim";
    static nomeCss: string = "padding-block-end'";
    static descricao: string = 'Define o preenchimento final do bloco de um elemento.';
    static documentacao: string = '# `recuo-em-bloco-fim`\nO valor atribuído é mapeado para as propriedades de preenchimento físico, dependendo do modo de escrita do elemento, direcionalidade e orientação do texto.';
    static exemploCodigo: string = 'p {\n  recuo-em-bloco-fim: 5%;\n}';

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(RecuoEmBlocoFim.nomeFolEs, RecuoEmBlocoFim.nomeCss, pragmas);

        if (!variavel) {
            validarValorNumerico(
                RecuoEmBlocoFim.nomeFolEs,
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
