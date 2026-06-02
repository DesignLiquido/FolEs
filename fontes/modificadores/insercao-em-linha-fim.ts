import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class InsercaoEmLinhaFim extends Modificador {
    static nomeFolEs: string[] = ["insercao-em-linha-fim", "inserção-em-linha-fim"];
    static nomeCss: string = "inset-inline-end";
    static descricao: string = 'Define as estilizações do fim da inserção em linha de um elemento.';
    static documentacao: string = '# `insercao-em-linha-fim`\nEsta propriedade define o deslocamento final da linha de um elemento, que é mapeado para uma inserção física, dependendo do modo de gravação, direcionalidade e orientação do texto do elemento.';
    static exemploCodigo: string = 'divisao {\n  insercao-em-linha-fim: 2.4em;\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        auto: "auto",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(
            InsercaoEmLinhaFim.nomeFolEs,
            InsercaoEmLinhaFim.nomeCss,
            pragmas,
        );

        if (!variavel) {
            validarValorNumerico(
                InsercaoEmLinhaFim.nomeFolEs[1],
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
