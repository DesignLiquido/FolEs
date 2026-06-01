import { Valor } from "../valores";
import { angulos, unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarAtribuicaoAbreviada } from "./validacoes/atribuicao-abreviada";
import { validarValorNumerico } from "./validacoes/numerica";

export class Deslocamento extends Modificador {
    static nomeFolEs: string = "deslocamento";
    static nomeCss: string = "offset";
    static descricao: string = 'Define a animação de um elemento ao longo de um caminho definido.';
    static documentacao: string = '# `deslocamento`\nPropriedade de atribuição abreviada para definir os valores de todas as propriedades de deslocamento utilizando apenas uma propriedade.';
    static exemploCodigo: string = 'p {\n  deslocamento: 10px 30px;\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        auto: "auto",
        nenhum: "none",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(Deslocamento.nomeFolEs, Deslocamento.nomeCss, pragmas);

        // TODO: Também aceita receber a função path()
        const valoresExtra = ["url", "ray"];

        const quantificadoresAceitos: { [valor: string]: string } = { ...unidadesMedida, ...angulos };

        if (!variavel) {
            if (valores.length > 1) {
                validarAtribuicaoAbreviada(
                    "numérica",
                    Deslocamento.nomeFolEs,
                    valores,
                    this.valoresAceitos,
                    valoresExtra,
                    quantificadoresAceitos
                );
            } else {
                validarValorNumerico(
                    Deslocamento.nomeFolEs,
                    valores,
                    this.valoresAceitos,
                    valoresExtra,
                    quantificadoresAceitos
                );
            }
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
