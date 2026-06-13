import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class QuebrarPaginaAntes extends Modificador {
    static nomeFolEs: string[] = ["quebrar-pagina-antes", "quebrar-página-antes"];
    static nomeCss: string = "page-break-before";
    static descricao: string = 'Ajusta as quebras de página antes do elemento atual.';
    static documentacao: string = '# `quebrar-pagina-antes`\nEsta propriedade se aplica a elementos de bloco que geram uma caixa e não se aplica a uma <divisao> vazia que não gere uma caixa.';
    static exemploCodigo: string = 'divisao {\n  quebrar-pagina-antes: esquerda;\n}';

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
            QuebrarPaginaAntes.nomeFolEs,
            QuebrarPaginaAntes.nomeCss,
            pragmas,
        );

        if (!variavel) validarValores(QuebrarPaginaAntes.nomeFolEs[1], valores, this.valoresAceitos);

        this.valores = valores;
        this.variavel = variavel;
    }
}
