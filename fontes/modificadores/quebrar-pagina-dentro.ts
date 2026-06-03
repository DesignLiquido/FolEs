import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class QuebrarPaginaDentro extends Modificador {
    static nomeFolEs: string[] = ["quebrar-pagina-dentro", "quebrar-página-dentro"];
    static nomeCss: string = "page-break-inside";
    static descricao: string = 'Ajusta as quebras de página dentro do elemento atual.';
    static documentacao: string = '# `quebrar-pagina-dentro`\nEsta propriedade se aplica a elementos de bloco que geram uma caixa e não se aplica a uma <divisao> vazia que não gere uma caixa.';
    static exemploCodigo: string = 'divisao {\n  quebrar-pagina-dentro: auto;\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        auto: "auto",
        evitar: "avoid",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(
            QuebrarPaginaDentro.nomeFolEs,
            QuebrarPaginaDentro.nomeCss,
            pragmas,
        );

        if (!variavel) validarValores(QuebrarPaginaDentro.nomeFolEs[1], valores, this.valoresAceitos);

        this.valores = valores;
        this.variavel = variavel;
    }
}
