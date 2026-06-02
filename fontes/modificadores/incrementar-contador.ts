import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarAtribuicaoAbreviada } from "./validacoes/atribuicao-abreviada";
import { validarValorNumerico } from "./validacoes/numerica";

export class IncrementarContador extends Modificador {
    static nomeFolEs: string = "incrementar-contador";
    static nomeCss: string = "counter-increment";
    static descricao: string = 'Aumenta ou diminui o valor de um contador.';
    static documentacao: string = '# `incrementar-contador`\nPor padrão, esta propriedade recebe o nome do contador, seguido opcionalmente por um número inteiro. Você pode especificar quantos contadores quiser incrementar, com cada nome ou par nome-número separado por um espaço.';
    static exemploCodigo: string = 'divisao {\n  incrementar-contador: meu-contador -1;\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        nenhum: "none",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(IncrementarContador.nomeFolEs, IncrementarContador.nomeCss, pragmas);

        if (!variavel) {
            if (valores.length > 1) {
                validarAtribuicaoAbreviada(
                    "numérica",
                    IncrementarContador.nomeFolEs,
                    valores,
                    this.valoresAceitos,
                    null,
                    null,
                    true,
                    true
                );
            } else {
                validarValorNumerico(
                    IncrementarContador.nomeFolEs,
                    valores,
                    this.valoresAceitos,
                    null,
                    null,
                    true
                );
            }
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
