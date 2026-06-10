import { Valor } from "../valores";
import { comprimentos } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class Tabulacao extends Modificador {
    static nomeFolEs: string[] = ["tabulacao", "tabulação"];
    static nomeCss: string = "tab-size";
    static descricao: string = 'Personaliza a largura dos caracteres de tabulação (U+0009).';
    static documentacao: string = '# `tabulacao`\nO caractere de tabulação geralmente é exibido como um único caractere de espaço, exceto para alguns elementos LMHT, como <area-texto> e <preformatado>, e o resultado desta propriedade só será visível para esses elementos..';
    static exemploCodigo: string = 'p {\n  tabulacao: 10px;\n}';

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(Tabulacao.nomeFolEs, Tabulacao.nomeCss, pragmas);

        if (!variavel) {
            validarValorNumerico(
                Tabulacao.nomeFolEs[1],
                valores,
                null,
                null,
                comprimentos
            );
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
