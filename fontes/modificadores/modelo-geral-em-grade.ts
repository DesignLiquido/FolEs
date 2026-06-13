import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class ModeloGeralEmGrade extends Modificador {
    static nomeFolEs: string = "modelo-geral-em-grade";
    static nomeCss: string = "grid-template-areas";
    static descricao: string = 'Especifica as áreas de grade nomeadas.';
    static documentacao: string = '# `modelo-geral-em-grade`\nEsta propriedade define o modelo que estabelece as células na grade e atribui-lhes nomes.';
    static exemploCodigo: string = 'tabela {\n  modelo-geral-em-grade: nenhum;\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        nenhum: "none",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(ModeloGeralEmGrade.nomeFolEs, ModeloGeralEmGrade.nomeCss, pragmas);

        // OBS.: Também aceita receber valores do tipo string e matriz
        // Ex.: grid-template-areas:
        //      "a b b"
        //      "a c d";

        if (!variavel) validarValores(ModeloGeralEmGrade.nomeFolEs, valores, this.valoresAceitos);

        this.valores = valores;
        this.variavel = variavel;
    }
}
