import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class FluxoEmGrade extends Modificador {
    static nomeFolEs: string = "fluxo-em-grade";
    static nomeCss: string = "grid-auto-flow";
    static descricao: string = 'Controla como o algoritmo de posicionamento automático funciona.';
    static documentacao: string = '# `fluxo-em-grade`\nEsta propriedade especifica exatamente como os itens posicionados automaticamente fluem na grade.';
    static exemploCodigo: string = 'divisão {\n  fluxo-em-grade: coluna;\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        linha: "row",
        coluna: "column",
        denso: "dense",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(FluxoEmGrade.nomeFolEs, FluxoEmGrade.nomeCss, pragmas);

        if (!variavel) validarValores(FluxoEmGrade.nomeFolEs, valores, this.valoresAceitos);

        this.valores = valores;
        this.variavel = variavel;
    }
}
