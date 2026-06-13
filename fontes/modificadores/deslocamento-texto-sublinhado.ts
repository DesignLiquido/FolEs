import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class DeslocamentoTextoSublinhado extends Modificador {
    static nomeFolEs: string = "deslocamento-texto-sublinhado";
    static nomeCss: string = "text-underline-offset";
    static descricao: string = 'Define a distância de deslocamento de uma linha de decoração de texto sublinhada.';
    static documentacao: string = '# `deslocamento-texto-sublinhado`\nA distância definida sempre terá como referência a posição original do elemento. A decoração de texto sublinhada pode ser definida utilizando a propriedade `decoração-texto`.';
    static exemploCodigo: string = 'p {\n  deslocamento-texto-sublinhado: 0.1em;\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        auto: "auto",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(
            DeslocamentoTextoSublinhado.nomeFolEs,
            DeslocamentoTextoSublinhado.nomeCss,
            pragmas,
        );

        if (!variavel) {
            validarValorNumerico(
                DeslocamentoTextoSublinhado.nomeFolEs,
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
