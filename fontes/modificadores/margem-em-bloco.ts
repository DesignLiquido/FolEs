import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarAtribuicaoAbreviada } from "./validacoes/atribuicao-abreviada";
import { validarValorNumerico } from "./validacoes/numerica";

export class MargemEmBloco extends Modificador {
    static nomeFolEs: string = "margem-em-bloco";
    static nomeCss: string = "margin-block";
    static descricao: string = 'Define a estilização da margem em bloco de um elemento.';
    static documentacao: string = '# `margem-em-bloco`\nPropriedade de atribuição abreviada que define as margens de início e fim do bloco de um elemento, que mapeia para as margens físicas, dependendo do modo de escrita do elemento, direcionalidade e orientação do texto.';
    static exemploCodigo: string = 'corpo {\n  margem-em-bloco: 10px;\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        auto: "auto",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(MargemEmBloco.nomeFolEs, MargemEmBloco.nomeCss, pragmas);

        if (!variavel) {
            if (valores.length > 1) {
                validarAtribuicaoAbreviada(
                    "numérica",
                    MargemEmBloco.nomeFolEs,
                    valores,
                    this.valoresAceitos,
                    null,
                    unidadesMedida
                );
            } else {
                validarValorNumerico(
                    MargemEmBloco.nomeFolEs,
                    valores,
                    this.valoresAceitos,
                    null,
                    unidadesMedida
                );
            }
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
