import { Valor } from "../valores";
import { estilos } from "./atributos/estilo";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValoresAdicionais } from "./validacoes/condicao-extra";

export class EstiloFimBordaEmLinha extends Modificador {
    static nomeFolEs: string = "estilo-fim-borda-em-linha";
    static nomeCss: string = "border-inline-end-style";
    static descricao: string = 'Define o estilo do final da borda em linha de um elemento.';
    static documentacao: string = '# `estilo-fim-borda-em-linha`\nEsta propriedade mapeia o valor atribuído para um estilo de borda física, dependendo do modo de escrita, direcionalidade e orientação do texto do elemento.';
    static exemploCodigo: string = 'divisao {\n  estilo-fim-borda-em-linha: escondido;\n}';

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(EstiloFimBordaEmLinha.nomeFolEs, EstiloFimBordaEmLinha.nomeCss, pragmas);

        if (!variavel) {
            validarValoresAdicionais(
                EstiloFimBordaEmLinha.nomeFolEs,
                valores,
                estilos,
            );
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
