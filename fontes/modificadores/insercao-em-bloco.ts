import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class InsercaoEmBloco extends Modificador {
    static nomeFolEs: string[] = ["insercao-em-bloco", "inserção-em-bloco"];
    static nomeCss: string = "inset-block";
    static descricao: string = 'Define as estilizações da inserção em bloco de um elemento.';
    static documentacao: string = '# `insercao-em-bloco`\nPropriedade de atribuição abreviada que define os deslocamentos iniciais e finais do bloco de um elemento, que são mapeados para deslocamentos físicos, dependendo do modo de gravação, direcionalidade e orientação do texto do elemento.';
    static exemploCodigo: string = 'divisao {\n  insercao-em-bloco: 2.4em 3em;\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        auto: "auto",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(
            InsercaoEmBloco.nomeFolEs,
            InsercaoEmBloco.nomeCss,
            pragmas,
        );
        
        if (!variavel) {
            validarValorNumerico(
                InsercaoEmBloco.nomeFolEs[1],
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
