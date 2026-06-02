import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class Isolamento extends Modificador {
    static nomeFolEs: string = "isolamento";
    static nomeCss: string = "isolation";
    static descricao: string = 'Define o isolamento de um elemento da aplicação.';
    static documentacao: string = '# `isolamento`\nEsta propriedade determina se um elemento deve ou não criar um novo contexto de agrupamento.';
    static exemploCodigo: string = 'p {\n  isolamento: isolar;\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        auto: "auto",
        isolar: "isolate",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(Isolamento.nomeFolEs, Isolamento.nomeCss, pragmas);

        if (!variavel) validarValores(Isolamento.nomeFolEs, valores, this.valoresAceitos);

        this.valores = valores;
        this.variavel = variavel;
    }
}
