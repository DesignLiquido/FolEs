import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class RaioDireitoBordaSuperior extends Modificador {
    static nomeFolEs: string = "raio-direito-borda-superior";
    static nomeCss: string = "border-top-right-radius";
    static descricao: string = 'Arredonda o canto superior direito de um elemento.';
    static documentacao: string = '# `raio-direito-borda-superior`\nAtravés desta propriedade é possível especificar o raio da elipse e definir a curvatura do canto.';
    static exemploCodigo: string = 'divisão {\n  raio-direito-borda-superior: 5% 5%;\n}';

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(
            RaioDireitoBordaSuperior.nomeFolEs,
            RaioDireitoBordaSuperior.nomeCss,
            pragmas,
        );

        if (!variavel) {
            validarValorNumerico(
                RaioDireitoBordaSuperior.nomeFolEs,
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
