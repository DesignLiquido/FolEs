import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class InsercaoEmBlocoFim extends Modificador {
    static nomeFolEs: string[] = ["insercao-em-bloco-fim", "inserção-em-bloco-fim"];
    static nomeCss: string = "inset-block-end";
    static descricao: string = 'Define as estilizações do fim da inserção em bloco de um elemento.';
    static documentacao: string = '# `insercao-em-bloco-fim`\nEsta propriedade define o deslocamento final do bloco de um elemento, que é mapeado para uma inserção física, dependendo do modo de gravação, direcionalidade e orientação do texto do elemento.';
    static exemploCodigo: string = 'divisao {\n  insercao-em-bloco-fim: 2.4em;\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        auto: "auto",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(
            InsercaoEmBlocoFim.nomeFolEs,
            InsercaoEmBlocoFim.nomeCss,
            pragmas,
        );

        if (!variavel) {
            validarValorNumerico(
                InsercaoEmBlocoFim.nomeFolEs[1],
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
