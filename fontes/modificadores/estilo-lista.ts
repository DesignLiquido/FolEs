import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarAtribuicaoAbreviada } from "./validacoes/atribuicao-abreviada";
import { validarValorNumerico } from "./validacoes/numerica";

export class EstiloLista extends Modificador {
    static nomeFolEs: string = "estilo-lista";
    static nomeCss: string = "list-style";
    static descricao: string = 'Define a estilização de uma referida lista da aplicação, seja ordenada ou não-ordenada.';
    static documentacao: string = '# `estilo-lista`\nPropriedade de atribuição abreviada que permite definir todas as propriedades de estilo de lista de uma só vez.';
    static exemploCodigo: string = 'lista-numerada {\n  estilo-lista: dentro;\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        dentro: "inside",
        fora: "outside",
        nenhum: "none",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(EstiloLista.nomeFolEs, EstiloLista.nomeCss, pragmas);

        const valoresExtra = ["url"];

        if (!variavel) {
            if (valores.length > 1) {
                validarAtribuicaoAbreviada(
                    "numérica",
                    EstiloLista.nomeFolEs,
                    valores,
                    this.valoresAceitos,
                    valoresExtra,
                    unidadesMedida,
                    false,
                    true
                );
            } else {
                validarValorNumerico(
                    EstiloLista.nomeFolEs,
                    valores,
                    this.valoresAceitos,
                    valoresExtra,
                    unidadesMedida
                );
            }
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
