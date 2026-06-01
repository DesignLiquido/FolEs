import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarAtribuicaoAbreviada } from "./validacoes/atribuicao-abreviada";
import { validarMultiplosQualitativos } from "./validacoes/multiplos-qualitativos";

export class DecoracaoTexto extends Modificador {
    static nomeFolEs: string[] = ["decoracao-texto", "decoração-texto"];
    static nomeCss: string = "text-decoration";
    static descricao: string = 'Define define a aparência das linhas decoradas de um texto.';
    static documentacao: string = '# `decoração-texto`\nPropriedade de atribuição abreviada para definir os valores de todas as propriedades de decoração de texto utilizando apenas uma propriedade.';
    static exemploCodigo: string = 'p {\n  decoração-texto: linha-superior vermelho;\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        nenhuma: "none",
        sublinhar: "underline",
        "linha-superior": "overline",
        "atraves-linha": "line-through",
        "através-linha": "line-through",
        piscar: "blink",
        auto: "auto",
        "de-frente": "from-font",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(
            DecoracaoTexto.nomeFolEs,
            DecoracaoTexto.nomeCss,
            pragmas,
        );

        if (!variavel) {
            if (valores.length > 1) {
                validarAtribuicaoAbreviada(
                    "múltiplos-qualitativos",
                    DecoracaoTexto.nomeFolEs[1],
                    valores,
                    this.valoresAceitos
                );
            } else {
                validarMultiplosQualitativos(
                    DecoracaoTexto.nomeFolEs[1],
                    valores,
                    this.valoresAceitos
                );
            }
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
