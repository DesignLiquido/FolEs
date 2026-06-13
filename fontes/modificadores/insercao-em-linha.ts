import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class InsercaoEmLinha extends Modificador {
    static nomeFolEs: string[] = ["insercao-em-linha", "inserção-em-linha"];
    static nomeCss: string = "inset-inline";
    static descricao: string = 'Define as estilizações da inserção em linha de um elemento.';
    static documentacao: string = '# `insercao-em-linha`\nPropriedade de atribuição abreviada que define os deslocamentos iniciais e finais da linha de um elemento, que são mapeados para deslocamentos físicos, dependendo do modo de gravação, direcionalidade e orientação do texto do elemento.';
    static exemploCodigo: string = 'divisao {\n  insercao-em-linha: 2.4em 3em;\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        auto: "auto",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(
            InsercaoEmLinha.nomeFolEs,
            InsercaoEmLinha.nomeCss,
            pragmas,
        );

        if (!variavel) {
            validarValorNumerico(
                InsercaoEmLinha.nomeFolEs[1],
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
