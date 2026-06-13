import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class RaioEsquerdoBordaInferior extends Modificador {
    static nomeFolEs: string = "raio-esquerdo-borda-inferior";
    static nomeCss: string = "border-bottom-left-radius";
    static descricao: string = 'Arredonda o canto inferior esquerdo de um elemento.';
    static documentacao: string = '# `raio-esquerdo-borda-inferior`\nAtravés desta propriedade é possível especificar o raio da elipse e definir a curvatura do canto.';
    static exemploCodigo: string = 'divisão {\n  raio-esquerdo-borda-inferior: 20% 20%;\n}';

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(
            RaioEsquerdoBordaInferior.nomeFolEs,
            RaioEsquerdoBordaInferior.nomeCss,
            pragmas,
        );

        if (!variavel) {
            validarValorNumerico(
                RaioEsquerdoBordaInferior.nomeFolEs,
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
