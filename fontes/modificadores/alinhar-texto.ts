import { Valor } from "../valores";
import { posicoesBasicas } from "./atributos/posicoes";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValoresAdicionais } from "./validacoes/condicao-extra";

export class AlinharTexto extends Modificador {
    static nomeFolEs: string = "alinhar-texto";
    static nomeCss: string = "text-align";
    static descricao: string = 'Define o alinhamento horizontal do conteúdo dentro de um elemento em bloco ou da célula de uma tabela.';
    static documentacao: string = '# `alinhar-texto`\nEsta propriedade tem o mesmo comportamento da propriedade `alinhar-vertical`, mas operando na direção horizontal.';
    static exemploCodigo: string = 'p {\n  alinhar-texto: fim;\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        justificar: "justify",
        "justificar-tudo": "justify-all",
        "combinar-elemento-pai": "match-parent",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(AlinharTexto.nomeFolEs, AlinharTexto.nomeCss, pragmas);

        if (!variavel) {
            validarValoresAdicionais(
                AlinharTexto.nomeFolEs,
                valores,
                posicoesBasicas,
                this.valoresAceitos,
            );
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
