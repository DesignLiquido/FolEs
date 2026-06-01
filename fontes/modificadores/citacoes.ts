import { Valor, ValorTexto } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";
import { validarValorString } from "./validacoes/string";

export class Citacoes extends Modificador {
    static nomeFolEs: string[] = ["citacoes", "citações"];
    static nomeCss: string = "quotes";
    static descricao: string = 'Define como o navegador deve renderizar as citações destacadas entre aspas.';
    static documentacao: string = '# `citacoes`\nPara que as aspas sejam adicionadas, a propriedade `conteúdo` deve possuir um dos valores: abrir-aspas ou fechar-aspas.';
    static exemploCodigo: string = 'p {\n  citacoes: auto;\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        auto: "auto",
        nenhum: "none",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean

    ) {
        super(Citacoes.nomeFolEs, Citacoes.nomeCss, pragmas);

        let validarString: boolean = false;
        valores.forEach((valor) => {
            if (valor instanceof ValorTexto) {
                validarString = validarValorString(valor);
            }
        });


        if (!variavel && !validarString) validarValores(Citacoes.nomeFolEs[1], valores, this.valoresAceitos);

        this.valores = valores;
        this.variavel = variavel;
    }
}
