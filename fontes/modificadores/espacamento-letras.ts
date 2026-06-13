import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class EspacamentoLetras extends Modificador {
    static nomeFolEs: string[] = ["espacamento-letras", "espaçamento-letras"];
    static nomeCss: string = "letter-spacing";
    static descricao: string = 'Define o comportamento do espaçamento horizontal entre os caracteres de um texto.';
    static documentacao: string = '# `espacamento-letras`\nO valor atribuído é adicionado ao espaçamento natural entre os caracteres durante a renderização do texto. Valores positivos de fazem com que os caracteres se espalhem mais, enquanto valores negativos aproximam os caracteres.';
    static exemploCodigo: string = 'titulo1 {\n  espacamento-letras: 5px;\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        normal: "normal",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(
            EspacamentoLetras.nomeFolEs,
            EspacamentoLetras.nomeCss,
            pragmas,
        );

        if (!variavel) {
            validarValorNumerico(
                EspacamentoLetras.nomeFolEs[1],
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
