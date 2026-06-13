import { Valor } from "../valores";
import { valoresTemporais } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class AtrasoAnimacao extends Modificador {
    static nomeFolEs: string[] = ["atraso-animacao", "atraso-animação"];
    static nomeCss: string = "animation-delay";
    static descricao: string = 'Especifica a quantidade de tempo de espera para um elemento antes de começar a executar uma determinada animação.';
    static documentacao: string = '# `atraso-animacao`\nA partir do valor especificado para esta propriedade, a execução pode começar mais tarde, desde o início ou no meio da animação.';
    static exemploCodigo: string = 'imagem {\n  atraso-animacao: 3s;\n}';

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(
            AtrasoAnimacao.nomeFolEs,
            AtrasoAnimacao.nomeCss,
            pragmas,
        );

        if (!variavel) {
            validarValorNumerico(
                AtrasoAnimacao.nomeFolEs[1],
                valores,
                null,
                null,
                valoresTemporais
            );
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
