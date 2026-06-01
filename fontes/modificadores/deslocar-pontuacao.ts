import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class DeslocarPontuacao extends Modificador {
    static nomeFolEs: string[] = ["deslocar-pontuacao", "deslocar-pontuação"];
    static nomeCss: string = "hanging-punctuation";
    static descricao: string = 'Especifica se um sinal de pontuação deve ficar no início ou no final de uma linha de texto.';
    static documentacao: string = '# `deslocar-pontuacao`\nO valor desta propriedade pode ser especificado definindo de 1 a 3 valores. A depender do valor atribuído, a pontuação deslocada pode ser colocada fora da caixa de linha.';
    static exemploCodigo: string = 'p {\n  deslocar-pontuacao: permitir-fim;\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        nenhum: "none",
        primeiro: "first",
        ultimo: "last",
        último: "last",
        "forcar-fim": "force-end",
        "forçar-fim": "force-end",
        "permitir-fim": "allow-end",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(
            DeslocarPontuacao.nomeFolEs,
            DeslocarPontuacao.nomeCss,
            pragmas,
        );

        if (!variavel) validarValores(DeslocarPontuacao.nomeFolEs[1], valores, this.valoresAceitos);

        this.valores = valores;
        this.variavel = variavel;
    }
}
