import { Valor } from "../valores";
import { estilos } from "./atributos/estilo";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValoresAdicionais } from "./validacoes/condicao-extra";

export class EstiloBordaEmBloco extends Modificador {
    static nomeFolEs: string = "estilo-borda-em-bloco";
    static nomeCss: string = "border-block-style";
    static descricao: string = 'Define o estilo das bordas do bloco de um elemento da aplicação.';
    static documentacao: string = '# `estilo-borda-em-bloco`\nEsta propriedade mapeia o valor atribuído para um estilo de borda física, dependendo do modo de escrita, direcionalidade e orientação do texto do elemento.';
    static exemploCodigo: string = 'divisao {\n  estilo-borda-em-bloco: entalhado;\n}';

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(EstiloBordaEmBloco.nomeFolEs, EstiloBordaEmBloco.nomeCss, pragmas);

        if (!variavel) validarValoresAdicionais(EstiloBordaEmBloco.nomeFolEs, valores, estilos);

        this.valores = valores;
        this.variavel = variavel;
    }
}
