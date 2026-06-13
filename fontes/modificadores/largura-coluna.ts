import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class LarguraColuna extends Modificador {
    static nomeFolEs: string = "largura-coluna";
    static nomeCss: string = "column-width";
    static descricao: string = 'Define a largura da coluna em um layout de várias colunas.';
    static documentacao: string = '# `largura-coluna`\nO contêiner terá quantas colunas couberem sem que nenhuma delas tenha largura menor que o valor. Se a largura do contêiner for mais estreita que o valor especificado, a largura da coluna única será menor que a largura da coluna declarada.';
    static exemploCodigo: string = 'coluna {\n  largura-coluna: 15.5em;\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        auto: "auto",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(LarguraColuna.nomeFolEs, LarguraColuna.nomeCss, pragmas);

        if (!variavel) {
            validarValorNumerico(
                LarguraColuna.nomeFolEs,
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
