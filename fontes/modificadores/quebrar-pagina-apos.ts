import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class QuebrarPaginaApos extends Modificador {
    static nomeFolEs: string[] = ["quebrar-pagina-apos", "quebrar-página-após"];
    static nomeCss: string = "page-break-after";
    static descricao: string = 'Ajusta as quebras de página após do elemento atual.';
    static documentacao: string = '# `quebrar-pagina-apos`\nEsta propriedade se aplica a elementos de bloco que geram uma caixa e não se aplica a uma <divisao> vazia que não gere uma caixa.';
    static exemploCodigo: string = 'divisao {\n  quebrar-pagina-apos: frente;\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        auto: "auto",
        sempre: "always",
        evitar: "avoid",
        esquerda: "left",
        direita: "right",
        frente: "recto",
        verso: "verso",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(
            QuebrarPaginaApos.nomeFolEs,
            QuebrarPaginaApos.nomeCss,
            pragmas,
        );

        if (!variavel) validarValores(QuebrarPaginaApos.nomeFolEs[1], valores, this.valoresAceitos);

        this.valores = valores;
        this.variavel = variavel;
    }
}
