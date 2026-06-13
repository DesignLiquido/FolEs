import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class RepetirAnimacao extends Modificador {
    static nomeFolEs: string[] = ["repetir-animacao", "repetir-animação"];
    static nomeCss: string = "animation-iteration-count";
    static descricao: string = 'Define o número de vezes que uma sequência de animação deve ser reproduzida antes de parar.';
    static documentacao: string = '# `repetir-animacao`\nPara definir as demais estilizações de uma animação, é recomendado utilizar a propriedade de atribuição abreviada `animação``.';
    static exemploCodigo: string = 'divisao {\n  repetir-animacao: 3;\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        infinito: "infinite",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(
            RepetirAnimacao.nomeFolEs,
            RepetirAnimacao.nomeCss,
            pragmas,
        );

        if (!variavel) {
            validarValorNumerico(
                RepetirAnimacao.nomeFolEs[1],
                valores,
                this.valoresAceitos,
                null,
                null,
                true
            );
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
