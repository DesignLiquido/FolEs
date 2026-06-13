import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class VelocidadeAnimacao extends Modificador {
    static nomeFolEs: string[] = ["velocidade-animacao", "velocidade-animação"];
    static nomeCss: string = "animation-timing-function";
    static descricao: string = 'Define como uma animação progride na duração de cada ciclo.';
    static documentacao: string = '# `velocidade-animacao`\nMuitas vezes é conveniente usar a propriedade abreviada animationpara definir todas as propriedades da animação de uma só vez.';
    static exemploCodigo: string = 'imagem {\n  velocidade-animacao: inicio-lento;\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        "velocidade-normal": "ease",
        linear: "linear",
        "inicio-lento": "ease-in",
        "início-lento": "ease-in",
        "final-lento": "ease-out",
        "inicio-final-lento": "ease-in-out",
        "início-final-lento": "ease-in-out",
        "passo-inicial": "step-start",
        "passo-final": "step-start",
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
            VelocidadeAnimacao.nomeFolEs,
            VelocidadeAnimacao.nomeCss,
            pragmas,
        );

        const valoresExtra = ["cubic-bezier", "steps"];

        if (!variavel) {
            validarValores(
                VelocidadeAnimacao.nomeFolEs[1],
                valores,
                this.valoresAceitos,
                valoresExtra,
            );
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
