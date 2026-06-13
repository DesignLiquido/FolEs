import { Valor } from "../valores";
import { valoresTemporais } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class DuracaoTransicao extends Modificador {
    static nomeFolEs: string[] = ["duracao-transicao", "duração-transição"];
    static nomeCss: string = "transition-duration";
    static descricao: string = 'Define o tempo que uma animação de transição deve levar para ser concluída.';
    static documentacao: string = '# `duracao-transicao`\nPor padrão, o valor desta propriedade é 0s, o que significa que nenhuma animação ocorrerá enquanto nenhum valor diferente de 0 for atribuído.';
    static exemploCodigo: string = 'p {\n  duracao-transicao: 120ms;\n}';

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(
            DuracaoTransicao.nomeFolEs,
            DuracaoTransicao.nomeCss,
            pragmas,
        );

        if (!variavel) {
            validarValorNumerico(
                DuracaoTransicao.nomeFolEs[1],
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
