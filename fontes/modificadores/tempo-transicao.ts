import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class TempoTransicao extends Modificador {
    static nomeFolEs: string[] = ["tempo-transicao", "tempo-transição"];
    static nomeCss: string = "transition-timing-function";
    static descricao: string = 'Define como os valores intermediários são calculados para as propriedades afetadas por um efeito de transição.';
    static documentacao: string = '# `tempo-transicao`\nPropriedade que permite estabelecer uma curva de aceleração para que a velocidade da transição possa variar ao longo de sua duração.';
    static exemploCodigo: string = '.minha-animacao {\n  tempo-transicao: início-lento;\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        "velocidade-normal": "ease",
        "inicio-lento": "ease-in",
        "início-lento": "ease-in",
        "final-lento": "ease-out",
        "inicio-final-lento": "ease-in-out",
        "início-final-lento": "ease-in-out",
        linear: "linear",
        "passo-inicial": "step-start",
        "passo-final": "step-end",
        "salto-inicial": "jump-start",
        "salto-final": "jump-end",
        "salto-nenhum": "jump-none",
        "salto-conjunto": "jump-both",
        inicial: "start",
        final: "end",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(
            TempoTransicao.nomeFolEs,
            TempoTransicao.nomeCss,
            pragmas,
        );

        const valoresExtra = ["cubic-bezier", "steps"];

        if (!variavel) {
            validarValores(
                TempoTransicao.nomeFolEs[1],
                valores,
                this.valoresAceitos,
                valoresExtra,
            );
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
