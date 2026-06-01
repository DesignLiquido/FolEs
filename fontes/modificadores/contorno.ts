import { Valor } from "../valores";
import { comprimentos } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarAtribuicaoAbreviada } from "./validacoes/atribuicao-abreviada";
import { validarMultiplosQualitativos } from "./validacoes/multiplos-qualitativos";

export class Contorno extends Modificador {
    static nomeFolEs: string = "contorno";
    static nomeCss: string = "outline";
    static descricao: string = 'Define as estilizações do contorno de um elemento da aplicação.';
    static documentacao: string = '# `contorno\nPropriedade de atribuição abreviada que define a maioria das propriedades de contorno em uma única declaração.`';
    static exemploCodigo: string = 'p {\n  contorno: verde sólido 3px;\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        fina: "thin",
        media: "medium",
        média: "medium",
        grossa: "thick",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(Contorno.nomeFolEs, Contorno.nomeCss, pragmas);

        if (!variavel) {
            if (valores.length > 1) {
                validarAtribuicaoAbreviada(
                    "múltiplos-qualitativos",
                    Contorno.nomeFolEs,
                    valores,
                    this.valoresAceitos,
                    null,
                    comprimentos
                );
            } else {
                validarMultiplosQualitativos(
                    Contorno.nomeFolEs,
                    valores,
                    this.valoresAceitos,
                    comprimentos
                );
            }
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
