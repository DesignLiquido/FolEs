import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class EspacoEmBranco extends Modificador {
    static nomeFolEs: string[] = ["espaco-em-branco", "espaço-em-branco"];
    static nomeCss: string = "white-space";
    static descricao: string = 'Define como o espaço em branco dentro de um elemento é tratado.';
    static documentacao: string = '# `espaco-em-branco`\nOs valores desta propriedade podem ser especificados como uma única palavra-chave ou com dois valores que representam, respectivamente, a taxa de recolhimento dos espaços em branco e o agrupamento do texto.';
    static exemploCodigo: string = 'p {\n  espaco-em-branco: preservar-linha;\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        normal: "normal",
        "nao-quebrar": "nowrap",
        "não-quebrar": "nowrap",
        preservar: "pre",
        "preservar-quebra": "pre-wrap",
        "preservar-linha": "pre-line",
        "quebrar-espacos": "break-spaces",
        "quebrar-espaços": "break-spaces",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(EspacoEmBranco.nomeFolEs, EspacoEmBranco.nomeCss, pragmas);

        if (!variavel) validarValores(EspacoEmBranco.nomeFolEs[1], valores, this.valoresAceitos);

        this.valores = valores;
        this.variavel = variavel;
    }
}
