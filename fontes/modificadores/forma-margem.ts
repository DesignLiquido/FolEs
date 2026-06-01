import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class FormaMargem extends Modificador {
    static nomeFolEs: string = "forma-margem";
    static nomeCss: string = "shape-margin";
    static descricao: string = 'Define a forma da margem de um elemento da aplicação.';
    static documentacao: string = '# `forma-margem`\nEsta propriedade define uma margem para uma forma CSS criada usando a propriedade `forma-externa`.';
    static exemploCodigo: string = 'divisao {\n  forma-margem: 20mm;\n}';

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(FormaMargem.nomeFolEs, FormaMargem.nomeCss, pragmas);

        if (!variavel) {
            validarValorNumerico(
                FormaMargem.nomeFolEs,
                valores,
                null,
                null,
                unidadesMedida
            );
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
