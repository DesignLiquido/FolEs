import { Valor } from "../valores";
import { comprimentos } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class EspacamentoPalavras extends Modificador {
    static nomeFolEs: string[] = ["espacamento-palavras", "espaçamento-palavras"];
    static nomeCss: string = "word-spacing";
    static descricao: string = 'Define o comprimento do espaço entre as palavras.';
    static documentacao: string = '# `espacamento-palavras`\nO valor deve ser moderado para a estilização ser aplicada de acordo. Para um texto estilizado com um valor positivo muito grande, as palavras ficarão tão distantes que podem não se parecer mais como uma frase. Para um texto estilizado com um grande valor negativo, as palavras se sobrepõem.';
    static exemploCodigo: string = 'p {\n  espacamento-palavras: 0.3em;\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        normal: "normal",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(
            EspacamentoPalavras.nomeFolEs,
            EspacamentoPalavras.nomeCss,
            pragmas,
        );

        if (!variavel) {
            validarValorNumerico(
                EspacamentoPalavras.nomeFolEs[1],
                valores,
                this.valoresAceitos,
                null,
                comprimentos
            );
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
