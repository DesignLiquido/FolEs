import { Valor } from "../valores";
import { comprimentos, ListaDeValorPercentual } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarAtribuicaoAbreviada } from "./validacoes/atribuicao-abreviada";
import { validarValorNumerico } from "./validacoes/numerica";

export class Recuo extends Modificador {
    static nomeFolEs: string = "recuo";
    static nomeCss: string = "padding";
    static descricao: string = 'Define o espaçamento ao redor de um elemento.';
    static documentacao: string = '# `recuo`\nPropriedade de atribuição abreviada que define a área de preenchimento em todos os quatro lados de um elemento de uma só vez.';
    static exemploCodigo: string = 'p {\n  recuo: 5px 1em 0 2em;;\n}';

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(Recuo.nomeFolEs, Recuo.nomeCss, pragmas);

        const quantificadoresAceitos: { [nome: string]: string } = { ...comprimentos, ...ListaDeValorPercentual };

        if (!variavel) {
            if (valores.length > 1) {
                validarAtribuicaoAbreviada(
                    "numérica",
                    Recuo.nomeFolEs,
                    valores,
                    null,
                    null,
                    quantificadoresAceitos
                );
            } else {
                validarValorNumerico(
                    Recuo.nomeFolEs,
                    valores,
                    null,
                    null,
                    quantificadoresAceitos
                );
            }
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
