import { Valor } from "../valores";
import { estilos } from "./atributos/estilo";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValoresAdicionais } from "./validacoes/condicao-extra";

export class EstiloFimBordaEmBloco extends Modificador {
    static nomeFolEs: string = "estilo-fim-borda-em-bloco";
    static nomeCss: string = "border-block-end-style";
    static descricao: string = 'Define o estilo do final da borda do bloco de um elemento.';
    static documentacao: string = '# `estilo-fim-borda-em-bloco`\nEsta propriedade mapeia o valor atribuído para um estilo de borda física, dependendo do modo de escrita, direcionalidade e orientação do texto do elemento.';
    static exemploCodigo: string = 'divisao {\n  estilo-fim-borda-em-bloco: escondido;\n}';

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(EstiloFimBordaEmBloco.nomeFolEs, EstiloFimBordaEmBloco.nomeCss, pragmas);

        if (!variavel) {
            validarValoresAdicionais(
                EstiloFimBordaEmBloco.nomeFolEs,
                valores,
                estilos,
            );
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
