import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarAtribuicaoAbreviada } from "./validacoes/atribuicao-abreviada";
import { validarValorNumerico } from "./validacoes/numerica";

export class Insercao extends Modificador {
    static nomeFolEs: string[] = ["insercao", "inserção"];
    static nomeCss: string = "inset";
    static descricao: string = 'Define as estilizações de inserção de um elemento.';
    static documentacao: string = '# `inserção\nPropriedade de atribuição abreviada que corresponde às propriedades `posição-superior`, `posição-direita`, `posição-inferior` e `posição-esquerda`.';
    static exemploCodigo: string = 'divisao {\n  inserção: 2.4em 3em 3em 3em;\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        auto: "auto",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(Insercao.nomeFolEs, Insercao.nomeCss, pragmas);

        if (!variavel) {
            if (valores.length > 1) {
                validarAtribuicaoAbreviada(
                    "numérica",
                    Insercao.nomeFolEs[1],
                    valores,
                    this.valoresAceitos,
                    null,
                    unidadesMedida
                );
            } else {
                validarValorNumerico(
                    Insercao.nomeFolEs[1],
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
