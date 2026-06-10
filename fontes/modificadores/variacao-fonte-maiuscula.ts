import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class VariacaoFonteMaiuscula extends Modificador {
    static nomeFolEs: string[] = ["variacao-fonte-maiuscula", "variação-fonte-maiúscula"];
    static nomeCss: string = "font-variant-caps";
    static descricao: string = 'Controla o uso de glifos alternativos para letras maiúsculas.';
    static documentacao: string = '# `variacao-fonte-maiuscula`\nQuando uma determinada fonte inclui glifos de letras maiúsculas de vários tamanhos diferentes, essa propriedade seleciona os mais apropriados. Se os glifos em maiúsculas pequenas não estiverem disponíveis, eles serão renderizados usando glifos em maiúsculas pequenas. Se não estiverem presentes, o navegador os sintetiza a partir dos glifos maiúsculos.';
    static exemploCodigo: string = 'titulo1 {\n  variacao-fonte-maiuscula: título-maiúsculo;\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        normal: "normal",
        "maiusculas-pequenas": "small-caps",
        "maiúsculas-pequenas": "small-caps",
        "todas-maiusculas-pequenas": "all-small-caps",
        "todas-maiúsculas-pequenas": "all-small-caps",
        "maiusculas-menores": "petite-caps",
        "maiúsculas-menores": "petite-caps",
        "todas-maiusculas-menores": "all-petite-caps",
        "todas-maiúsculas-menores": "all-petite-caps",
        misturar: "unicase",
        "titulo-maiusculo": "titling-caps",
        "título-maiúsculo": "titling-caps",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(
            VariacaoFonteMaiuscula.nomeFolEs,
            VariacaoFonteMaiuscula.nomeCss,
            pragmas,
        );

        if (!variavel) {
            validarValores(
                VariacaoFonteMaiuscula.nomeFolEs[1],
                valores,
                this.valoresAceitos,
            );
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
