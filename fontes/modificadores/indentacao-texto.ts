import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class IndentacaoTexto extends Modificador {
    static nomeFolEs: string[] = ["indentacao-texto", "indentação-texto"];
    static nomeCss: string = "text-indent";
    static descricao: string = 'Define a indentação de um elemento de texto da aplicação.';
    static documentacao: string = '# `indentacao-texto`\nEsta propriedade define o comprimento do espaço vazio (recuo) que é colocado antes das linhas de texto em um bloco.';
    static exemploCodigo: string = 'p {\n  indentacao-texto: 40px;\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        "cada-linha": "each-line",
        inverter: "hanging",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(IndentacaoTexto.nomeFolEs, IndentacaoTexto.nomeCss, pragmas);

        if (!variavel) {
            validarValorNumerico(
                IndentacaoTexto.nomeFolEs[1],
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
