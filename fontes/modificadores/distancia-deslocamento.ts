import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class DistanciaDeslocamento extends Modificador {
    static nomeFolEs: string[] = ["distancia-deslocamento", "distância-deslocamento"];
    static nomeCss: string = "offset-distance";
    static descricao: string = 'Especifica uma posição ao longo do trajeto-deslocamento de um elemento.';
    static documentacao: string = '# `distancia-deslocamento`\nO aspecto de movimento no CSS geralmente vem da animação desta propriedade. Se você quiser animar um elemento ao longo de seu caminho completo, defina-o trajeto-deslocamento, em seguida, configure uma animação que leve o valor desta propridade de 0% a 100%.';
    static exemploCodigo: string = 'p {\n  distancia-deslocamento: 50%;\n}';

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(
            DistanciaDeslocamento.nomeFolEs,
            DistanciaDeslocamento.nomeCss,
            pragmas,
        );

        if (!variavel) {
            validarValorNumerico(
                DistanciaDeslocamento.nomeFolEs[1],
                valores,
                null,
                null,
                unidadesMedida
            );
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
