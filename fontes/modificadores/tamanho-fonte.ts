import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class TamanhoFonte extends Modificador {
    static nomeFolEs: string = "tamanho-fonte";
    static nomeCss: string = "font-size";
    static descricao: string = 'Define o tamanho da fonte do texto de uma aplicação.';
    static documentacao: string = '# `tamanho-fonte`\nO valor pode ser definido com uma palavra-chave ou com um valor numérico acompanhado de quantificador. Alterar o tamanho da fonte também atualiza os tamanhos das unidades relativas ao tamanho da fonte, como os quantificadores de comprimento em, ex e assim por diante.';
    static exemploCodigo: string = 'título1 {\n  tamanho-fonte: muito-grande;\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        "extra-pequeno": "xx-small",
        "muito-pequeno": "x-small",
        pequeno: "small",
        medio: "medium",
        médio: "medium",
        grande: "large",
        "muito-grande": "x-large",
        "extra-grande": "xx-large",
        gigante: "xxx-large",
        maior: "larger",
        menor: "smaller",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(TamanhoFonte.nomeFolEs, TamanhoFonte.nomeCss, pragmas);

        if (!variavel) {
            validarValorNumerico(
                TamanhoFonte.nomeFolEs,
                valores,
                this.valoresAceitos,
                null,
                unidadesMedida
            );
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
