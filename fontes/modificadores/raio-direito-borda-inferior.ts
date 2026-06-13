import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class RaioDireitoBordaInferior extends Modificador {
    static nomeFolEs: string = "raio-direito-borda-inferior";
    static nomeCss: string = "border-bottom-right-radius";
    static descricao: string = 'Arredonda o canto inferior direito de um elemento.';
    static documentacao: string = '# `raio-direito-borda-inferior`\nAtravés desta propriedade é possível especificar o raio da elipse e definir a curvatura do canto.';
    static exemploCodigo: string = 'divisão {\n  raio-direito-borda-inferior: 5% 5%;\n}';
  
    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(
            RaioDireitoBordaInferior.nomeFolEs,
            RaioDireitoBordaInferior.nomeCss,
            pragmas,
        );

        if (!variavel) {
            validarValorNumerico(
                RaioDireitoBordaInferior.nomeFolEs,
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
