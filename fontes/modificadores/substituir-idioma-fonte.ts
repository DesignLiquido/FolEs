import { Valor, ValorTexto } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";
import { validarValorString } from "./validacoes/string";

export class SubstituirIdiomaFonte extends Modificador {
    static nomeFolEs: string = "substituir-idioma-fonte";
    static nomeCss: string = "font-language-override";
    static descricao: string = 'Controla o uso de glifos específicos de um idioma no texto da aplicação.';
    static documentacao: string = '# `substituir-idioma-fonte`\nEsta propriedade permite substituir o comportamento do tipo de letra para um idioma específico. Isso é útil, por exemplo, quando o tipo de letra que você está usando não possui suporte adequado para o idioma.';
    static exemploCodigo: string = 'p {\n  substituir-idioma-fonte: normal;\n}';
 
    valoresAceitos: { [valorFoles: string]: string } = {
        normal: "normal",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(SubstituirIdiomaFonte.nomeFolEs, SubstituirIdiomaFonte.nomeCss, pragmas);

        let validarString: boolean = false;
        valores.forEach((valor) => {
            if (valor instanceof ValorTexto) {
                validarString = validarValorString(valor);
            }
        });

        if (!variavel && !validarString) {
            validarValores(
                SubstituirIdiomaFonte.nomeFolEs,
                valores,
                this.valoresAceitos,
            );
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
