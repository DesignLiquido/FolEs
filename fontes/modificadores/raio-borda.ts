import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarAtribuicaoAbreviada } from "./validacoes/atribuicao-abreviada";
import { validarValorNumerico } from "./validacoes/numerica";

export class RaioBorda extends Modificador {
    static nomeFolEs: string = "raio-borda";
    static nomeCss: string = "border-radius";
    static descricao: string = 'Arredonda os cantos da borda externa de um elemento.';
    static documentacao: string = '# `raio-borda`\nVocê pode utilizar esta propriedade para definir um único raio para fazer cantos circulares ou dois raios para fazer cantos elípticos.';
    static exemploCodigo: string = 'imagem {\n  raio-borda: 10px 5%;\n}';

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(RaioBorda.nomeFolEs, RaioBorda.nomeCss, pragmas);

        if (!variavel) {
            if (valores.length > 1) {
                validarAtribuicaoAbreviada(
                    "numérica",
                    RaioBorda.nomeFolEs,
                    valores,
                    null,
                    null,
                    unidadesMedida
                );
            } else {
                validarValorNumerico(
                    RaioBorda.nomeFolEs,
                    valores,
                    null,
                    null,
                    unidadesMedida
                );
            }
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
