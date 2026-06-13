import { Valor } from "../valores";
import { estilos } from "./atributos/estilo";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValoresAdicionais } from "./validacoes/condicao-extra";

export class EstiloBordaEmLinha extends Modificador {
    static nomeFolEs: string = "estilo-borda-em-linha";
    static nomeCss: string = "border-inline-style";
    static descricao: string = 'Define o estilo das bordas em linha de um elemento da aplicação.';
    static documentacao: string = '# `estilo-borda-em-linha`\nEsta propriedade mapeia o valor atribuído para um estilo de borda física, dependendo do modo de escrita, direcionalidade e orientação do texto do elemento.';
    static exemploCodigo: string = 'divisao {\n  estilo-borda-em-linha: entalhado;\n}';

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(EstiloBordaEmLinha.nomeFolEs, EstiloBordaEmLinha.nomeCss, pragmas);

        if (!variavel) validarValoresAdicionais(EstiloBordaEmLinha.nomeFolEs, valores, estilos);

        this.valores = valores;
        this.variavel = variavel;
    }
}
