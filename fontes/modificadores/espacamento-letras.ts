import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";
import { validarQuantificador } from "./validacoes/quantificador";

export class EspacamentoLetras extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        normal: "normal",
    };

    constructor(
        valores: Valor[],
        
        pragmas?: PragmasModificador,
        valorVariavel: boolean = false,
    ) {
        super(
            ["espacamento-letras", "espaçamento-letras"],
            "letter-spacing",
            pragmas,
        );

        // Também pode receber valores numéricos com ponto (.) na frente
        // Ex.: espaçamento-letras: .2rem;
        // TODO: Repensar
        // let valorComPonto = false;

        // if (!valorVariavel) {
        //     if (valor.includes('.')) {
        //         valorComPonto = true;
        //         valor = valor.replace('.', '');
        //     }

        //     validarValorNumerico(
        //         "espaçamento-letras",
        //         valor,
        //         this.valoresAceitos,
        //     );

        //     if (Number(parseInt(valor))) {
        //         validarQuantificador(
        //             "espaçamento-letras",
        //             quantificador,
        //             unidadesMedida,
        //         );

        //         this.quantificador = quantificador;
        //     }
        // }

        // if (valorComPonto) valor = `.${valor}`;
        this.valores = valores;
    }
}
