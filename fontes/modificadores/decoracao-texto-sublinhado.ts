import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class DecoracaoTextoSublinhado extends Modificador {
    static nomeFolEs: string[] = ["decoracao-texto-sublinhado", "decoração-texto-sublinhado"];
    static nomeCss: string = "text-decoration-skip-ink";
    static descricao: string = 'Especifica como as linhas sobrepostas e sublinhadas são desenhadas.';
    static documentacao: string = '# `decoracao-texto-sublinhado`\nEspecifica como as linhas sobrepostas e sublinhadas são desenhadas.';
    static exemploCodigo: string = 'p {\n  decoracao-texto-sublinhado: tudo;\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        auto: "auto",
        nenhum: "none",
        tudo: "all",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(
            DecoracaoTextoSublinhado.nomeFolEs,
            DecoracaoTextoSublinhado.nomeCss,
            pragmas,
        );

        if (!variavel) {
            validarValores(
                DecoracaoTextoSublinhado.nomeFolEs[1],
                valores,
                this.valoresAceitos,
            );
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
