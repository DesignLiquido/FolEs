import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class EspessuraFonte extends Modificador {
    static nomeFolEs: string = "espessura-fonte";
    static nomeCss: string = "font-weight";
    static descricao: string = 'Define a espessura (ou negrito) da fonte de um texto.';
    static documentacao: string = '# `espessura-fonte`\nO valor pode ser especificado com uma palavra-chave ou um valor numérico. As espessuras disponíveis dependem do que está definido no momento.';
    static exemploCodigo: string = 'p {\n  espessura-fonte: mais-escura;\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        normal: "normal",
        "em-negrito": "bold",
        "mais-clara": "lighter",
        "mais-escura": "bolder",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(EspessuraFonte.nomeFolEs, EspessuraFonte.nomeCss, pragmas);

        if (!variavel) {
            validarValorNumerico(
                EspessuraFonte.nomeFolEs,
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
