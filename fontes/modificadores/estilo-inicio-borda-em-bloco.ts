import { Valor } from "../valores";
import { estilos } from "./atributos/estilo";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValoresAdicionais } from "./validacoes/condicao-extra";

export class EstiloInicioBordaEmBloco extends Modificador {
    static nomeFolEs: string[] = ["estilo-inicio-borda-em-bloco", "estilo-início-borda-em-bloco"];
    static nomeCss: string = "border-block-start-style";
    static descricao: string = 'Define o estilo do início da borda do bloco de um elemento.';
    static documentacao: string = '# `estilo-inicio-borda-em-bloco`\nEsta propriedade mapeia o valor atribuído para um estilo de borda física, dependendo do modo de escrita, direcionalidade e orientação do texto do elemento.';
    static exemploCodigo: string = 'divisao {\n  estilo-inicio-borda-em-bloco: duplicado;\n}';

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(
            EstiloInicioBordaEmBloco.nomeFolEs,
            EstiloInicioBordaEmBloco.nomeCss,
            pragmas,
        );

        if (!variavel) {
            validarValoresAdicionais(
                EstiloInicioBordaEmBloco.nomeFolEs[1],
                valores,
                estilos,
            );
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
