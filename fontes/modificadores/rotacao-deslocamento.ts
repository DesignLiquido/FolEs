import { angulos } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";
import { validarQuantificador } from "./validacoes/quantificador";

export class RotacaoDeslocamento extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "auto": "auto",
        "inverter": "revert",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador, valorVariavel: boolean = false) {
        super(
            ["rotacao-deslocamento", "rotação-deslocamento"],
            "offset-rotate",
            pragmas
        );

        if (!valorVariavel) {
            validarValorNumerico('rotação-deslocamento', valor, this.valoresAceitos);

            // Quantificador deve ser do tipo ângulo (<angle>)
            if (Number(parseInt(valor))) {
                validarQuantificador('rotação-deslocamento', quantificador, angulos);

                this.quantificador = quantificador;
            }
        }

        this.valor = valor;
    }
}
