import { Valor } from "../valores";
import { estilos } from "./atributos/estilo";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValoresAdicionais } from "./validacoes/condicao-extra";

export class EstiloInicioBordaEmLinha extends Modificador {
    static nomeFolEs: string[] = ["estilo-inicio-borda-em-linha", "estilo-início-borda-em-linha"];
    static nomeCss: string = "border-inline-start-style";
    static descricao: string = 'Define o estilo do início da borda em linha de um elemento.';
    static documentacao: string = '# `estilo-inicio-borda-em-linha`\nEsta propriedade mapeia o valor atribuído para um estilo de borda física, dependendo do modo de escrita, direcionalidade e orientação do texto do elemento.';
    static exemploCodigo: string = 'divisao {\n  estilo-inicio-borda-em-linha: duplicado;\n}';

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(
            EstiloInicioBordaEmLinha.nomeFolEs,
            EstiloInicioBordaEmLinha.nomeCss,
            pragmas,
        );

        if (!variavel) {
            validarValoresAdicionais(
                EstiloInicioBordaEmLinha.nomeFolEs[1],
                valores,
                estilos,
            );
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
