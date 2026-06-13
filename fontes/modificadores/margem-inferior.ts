import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class MargemInferior extends Modificador {
    static nomeFolEs: string = "margem-inferior";
    static nomeCss: string = "margin-bottom";
    static descricao: string = 'Define a estilização da margem inferior de um elemento da aplicação.';
    static documentacao: string = '# `margem-inferior`\nUm valor positivo o coloca mais longe de seus elementos vizinhos, enquanto um valor negativo o aproxima.';
    static exemploCodigo: string = 'p {\n  margem-inferior: 5%;\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        auto: "auto",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(MargemInferior.nomeFolEs, MargemInferior.nomeCss, pragmas);

        if (!variavel) {
            validarValorNumerico(
                MargemInferior.nomeFolEs,
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
