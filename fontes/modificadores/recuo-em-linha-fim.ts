import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class RecuoEmLinhaFim extends Modificador {
    static nomeFolEs: string = "recuo-em-linha-fim";
    static nomeCss: string = "padding-inline-end";
    static descricao: string = 'Define o preenchimento final da linha de um elemento.';
    static documentacao: string = '# `recuo-em-linha-fim`\nO valor atribuído é mapeado para as propriedades de preenchimento físico, dependendo do modo de escrita do elemento, direcionalidade e orientação do texto.';
    static exemploCodigo: string = 'p {\n  recuo-em-linha-fim: 5%;\n}';
 
    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(RecuoEmLinhaFim.nomeFolEs, RecuoEmLinhaFim.nomeCss, pragmas);

        if (!variavel) {
            validarValorNumerico(
                RecuoEmLinhaFim.nomeFolEs,
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
