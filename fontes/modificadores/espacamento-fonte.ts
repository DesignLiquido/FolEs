import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class EspacamentoFonte extends Modificador {
    static nomeFolEs: string[] = ["espacamento-fonte", "espaçamento-fonte"];
    static nomeCss: string = "font-kerning";
    static descricao: string = 'Define o uso das informações de kerning armazenadas em uma fonte.';
    static documentacao: string = '# `espacamento-fonte`\nOs recursos de Kerning definem como as letras são espaçadas. Em fontes com kerning, esse recurso torna o espaçamento dos caracteres mais uniforme e agradável de ler.';
    static exemploCodigo: string = 'p {\n  espacamento-fonte: normal;\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        auto: "auto",
        normal: "normal",
        nenhum: "none",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(
            EspacamentoFonte.nomeFolEs,
            EspacamentoFonte.nomeCss,
            pragmas,
        );

        if (!variavel) validarValores(EspacamentoFonte.nomeFolEs[1], valores, this.valoresAceitos);

        this.valores = valores;
        this.variavel = variavel;
    }
}
