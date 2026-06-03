import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class PararEncaixeRolagemMouse extends Modificador {
    static nomeFolEs: string = "parar-encaixe-rolagem-mouse";
    static nomeCss: string = "scroll-snap-stop";
    static descricao: string = 'Ajusta as definições de movimentação da barra de rolagem.';
    static documentacao: string = '# `parar-encaixe-rolagem-mouse`\nEsta propriedade especifica se o contêiner de rolagem da página pode ou não "passar por cima" de possíveis posições de encaixe.';
    static exemploCodigo: string = 'corpo {\n  parar-encaixe-rolagem-mouse: sempre;\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        normal: "normal",
        sempre: "always",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(PararEncaixeRolagemMouse.nomeFolEs, PararEncaixeRolagemMouse.nomeCss, pragmas);

        if (!variavel) {
            validarValores(
                PararEncaixeRolagemMouse.nomeFolEs,
                valores,
                this.valoresAceitos,
            );
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
