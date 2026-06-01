import { Valor, ValorNumerico, ValorTexto } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";
import { validarValorString } from "./validacoes/string";

export class ConfiguracoesVariacaoFonte extends Modificador {
    static nomeFolEs: string[] = ["configuracoes-variacao-fonte", "configurações-variação-fonte"];
    static nomeCss: string = "font-variation-settings";
    static descricao: string = 'Fornece controle sobre as características da fonte variável da aplicação.';
    static documentacao: string = '# `configuracoes-variacao-fonte`\nEsta propriedade permite que você especifique os nomes do eixo das características que deseja variar junto com seus valores.';
    static exemploCodigo: string = 'p {\n  configuracoes-variacao-fonte: "XHGT" 0.7;\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        normal: "normal",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(
            ConfiguracoesVariacaoFonte.nomeFolEs,
            ConfiguracoesVariacaoFonte.nomeCss,
            pragmas,
        );

        let validarString: boolean = false;
        valores.forEach((valor) => {
            if (valor instanceof ValorTexto) {
                validarString = validarValorString(valor);
            }
        });

        if (!variavel && !validarString) {
            validarValorNumerico(
                ConfiguracoesVariacaoFonte.nomeFolEs[1],
                valores,
                this.valoresAceitos,
                null,
                null,
                true,
            );
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
