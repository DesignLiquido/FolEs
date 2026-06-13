import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class DecoracaoLinhaTexto extends Modificador {
    static nomeFolEs: string[] = ["decoracao-linha-texto", "decoração-linha-texto"];
    static nomeCss: string = "text-decoration-line";
    static descricao: string = 'Define o tipo de decoração que é usado no texto de um elemento.';
    static documentacao: string = '# `decoracao-linha-texto`\nAo definir várias propriedades de decoração de linha de uma só vez, pode ser mais conveniente usar a propriedade `decoração-texto`.';
    static exemploCodigo: string = 'p {\n  decoracao-linha-texto: sublinhado;\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        nenhuma: "none",
        sublinhado: "underline",
        "linha-superior": "overline",
        "atraves-linha": "line-through",
        "através-linha": "line-through",
        piscar: "blink",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(
            DecoracaoLinhaTexto.nomeFolEs,
            DecoracaoLinhaTexto.nomeCss,
            pragmas,
        );

        if (!variavel) validarValores(DecoracaoLinhaTexto.nomeFolEs[1], valores, this.valoresAceitos);

        this.valores = valores;
        this.variavel = variavel;
    }
}
