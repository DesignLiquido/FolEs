import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class DirecaoAnimacao extends Modificador {
    static nomeFolEs: string[] = ["direcao-animacao", "direção-animação"];
    static nomeCss: string = "animation-direction";
    static descricao: string = 'Define a direção da animação aplicada a um elemento da aplicação.';
    static documentacao: string = '# `direcao-animacao`\ndefine se uma animação deve ser reproduzida para frente, para trás ou alternar entre reproduzir a sequência para frente e para trás.';
    static exemploCodigo: string = '.minha-animação {\n  direcao-animacao: reverter;\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        normal: "normal",
        reverter: "reverse",
        alternar: "alternate",
        "alternar-reverter": "alternate-reverse",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(
            DirecaoAnimacao.nomeFolEs,
            DirecaoAnimacao.nomeCss,
            pragmas,
        );

        if (!variavel) validarValores(DirecaoAnimacao.nomeFolEs[1], valores, this.valoresAceitos);

        this.valores = valores;
        this.variavel = variavel;
    }
}
