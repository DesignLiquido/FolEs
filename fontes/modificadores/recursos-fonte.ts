import { Valor, ValorTexto } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";
import { validarValorString } from "./validacoes/string";

export class RecursosFonte extends Modificador {
    static nomeFolEs: string = "recursos-fonte";
    static nomeCss: string = "font-feature-settings";
    static descricao: string = 'Controla recursos tipográficos avançados em fontes do tipo OpenType.';
    static documentacao: string = '# `recursos-fonte`\nEssa propriedade é especificada como palavra-chave normalou como uma lista de valores separados por vírgula.';
    static exemploCodigo: string = 'p {\n  recursos-fonte: normal;\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        normal: "normal",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(RecursosFonte.nomeFolEs, RecursosFonte.nomeCss, pragmas);

        let validarString: boolean = false;
        let validarTagValue: boolean = false;
        valores.forEach((valor) => {
            if (valor instanceof ValorTexto) {
                validarString = validarValorString(valor);

                validarTagValue = valor.literalTexto.length === 6;
                if (!validarTagValue) {
                    throw new Error(`Modificador ou variável 'recursos-fonte' com valor ${valor.literalTexto} inválido`);
                }
            }
        });

        if (!variavel && !validarString) {
            validarValores(
                RecursosFonte.nomeFolEs,
                valores,
                this.valoresAceitos,
                null
            );
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
