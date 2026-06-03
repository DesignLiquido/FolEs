import { Valor } from "../valores";
import { angulos } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class RotacaoDeslocamento extends Modificador {
    static nomeFolEs: string[] = ["rotacao-deslocamento", "rotação-deslocamento"];
    static nomeCss: string = "offset-rotate";
    static descricao: string = 'Define a orientação/direção do elemento conforme ele é posicionado ao longo do trajeto-deslocamento.';
    static documentacao: string = '# `rotacao-deslocamento`\nA rotação pode ser definida como automática, invertida ou com um valor numérico acompanhado de um quantificador de ângulo, como `deg` ou `turn`.';
    static exemploCodigo: string = ' {\n  rotacao-deslocamento: 90deg;\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        auto: "auto",
        inverter: "revert",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(
            RotacaoDeslocamento.nomeFolEs,
            RotacaoDeslocamento.nomeCss,
            pragmas,
        );

        if (!variavel) {
            validarValorNumerico(
                RotacaoDeslocamento.nomeFolEs[1],
                valores,
                this.valoresAceitos,
                null,
                angulos
            );
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
