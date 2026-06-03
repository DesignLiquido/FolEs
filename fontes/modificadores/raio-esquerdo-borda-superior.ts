import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class RaioEsquerdoBordaSuperior extends Modificador {
    static nomeFolEs: string = "raio-esquerdo-borda-superior";
    static nomeCss: string = "border-top-left-radius";
    static descricao: string = 'Arredonda o canto superior esquerdo de um elemento.';
    static documentacao: string = '# `raio-esquerdo-borda-superior`\nAtravés desta propriedade é possível especificar o raio da elipse e definir a curvatura do canto.';
    static exemploCodigo: string = 'divisão {\n  raio-esquerdo-borda-superior: 5% 5%;\n}';

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(
            RaioEsquerdoBordaSuperior.nomeFolEs,
            RaioEsquerdoBordaSuperior.nomeCss,
            pragmas,
        );

        if (!variavel) {
            validarValorNumerico(
                RaioEsquerdoBordaSuperior.nomeFolEs,
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
