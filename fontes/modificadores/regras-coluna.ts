import { Valor } from "../valores";
import { comprimentos } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarAtribuicaoAbreviada } from "./validacoes/atribuicao-abreviada";
import { validarMultiplosQualitativos } from "./validacoes/multiplos-qualitativos";

export class RegrasColuna extends Modificador {
    static nomeFolEs: string = "regras-coluna";
    static nomeCss: string = "column-rule";
    static descricao: string = 'Define as estilizações a serem aplicadas sobre uma referida coluna.';
    static documentacao: string = '# `regras-coluna`\nPropriedade de atribuição abreviada que define a largura, o estilo e a cor da linha desenhada entre as colunas em um layout de várias colunas.';
    static exemploCodigo: string = 'coluna {\n  regras-coluna: grossa embutido azul;\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        fina: "thin",
        media: "medium",
        média: "medium",
        grossa: "thick",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(RegrasColuna.nomeFolEs, RegrasColuna.nomeCss, pragmas);

        if (!variavel) {
            if (valores.length > 1) {
                validarAtribuicaoAbreviada(
                    "múltiplos-qualitativos",
                    RegrasColuna.nomeFolEs,
                    valores,
                    this.valoresAceitos
                );
            } else {
                validarMultiplosQualitativos(
                    RegrasColuna.nomeFolEs,
                    valores,
                    this.valoresAceitos,
                    comprimentos
                );
            }
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
