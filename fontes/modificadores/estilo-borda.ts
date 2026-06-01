import { Valor } from "../valores";
import { estilos } from "./atributos/estilo";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarAtribuicaoAbreviada } from "./validacoes/atribuicao-abreviada";
import { validarValores } from "./validacoes/comum";

export class EstiloBorda extends Modificador {
    static nomeFolEs: string = "estilo-borda";
    static nomeCss: string = "border-style";
    static descricao: string = 'Define o estilo de linha para todos os quatro lados da borda de um elemento.';
    static documentacao: string = '# `estilo-borda`\nPropriedade de atribuição abreviada para definir os valores de estilo de todas as bordas de um elemento utilizando apenas uma propriedade.';
    static exemploCodigo: string = 'divisao {\n  estilo-borda: nenhum sólido pontilhado tracejado;\n}';

    valoresAceitos = estilos;

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(EstiloBorda.nomeFolEs, EstiloBorda.nomeCss, pragmas);

        if (!variavel) {
            if (valores.length > 1) {
                validarAtribuicaoAbreviada(
                    "comum",
                    EstiloBorda.nomeFolEs,
                    valores,
                    this.valoresAceitos
                );
            } else {
                validarValores(
                    EstiloBorda.nomeFolEs,
                    valores,
                    this.valoresAceitos
                );
            }
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
