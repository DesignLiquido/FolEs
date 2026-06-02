import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class MargemEsquerda extends Modificador {
    static nomeFolEs: string = "margem-esquerda";
    static nomeCss: string = "margin-left";
    static descricao: string = 'Define a estilização da margem esquerda de um elemento da aplicação.';
    static documentacao: string = '# `margem-esquerda`\nUm valor positivo o coloca mais longe de seus elementos vizinhos, enquanto um valor negativo o aproxima.';
    static exemploCodigo: string = 'p {\n  margem-esquerda: 5%;\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        auto: "auto",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(MargemEsquerda.nomeFolEs, MargemEsquerda.nomeCss, pragmas);

        if (!variavel) {
            validarValorNumerico(
                MargemEsquerda.nomeFolEs,
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
