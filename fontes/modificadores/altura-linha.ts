import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class AlturaLinha extends Modificador {
    static nomeFolEs: string = "altura-linha";
    static nomeCss: string = "line-height";
    static descricao: string = 'Define a altura das linhas de um elemento.';
    static documentacao: string = '# `altura-linha`\nEsta propriedade é comumente usado para definir a distância entre as linhas de um texto.';
    static exemploCodigo: string = 'p {\n  altura-linha: manter-tudo;\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        normal: "normal",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(AlturaLinha.nomeFolEs, AlturaLinha.nomeCss, pragmas);

        if (!variavel) {
            validarValorNumerico(
                AlturaLinha.nomeFolEs,
                valores,
                this.valoresAceitos,
                null,
                unidadesMedida
            );
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
