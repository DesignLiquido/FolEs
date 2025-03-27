import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";
import { validarQuantificador } from "./validacoes/quantificador";

export class TamanhoMascara extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "auto": "auto",
        "conter": "contain",
        "cobrir": "cover",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador, valorVariavel: boolean = false) {
        super(["tamanho-mascara", "tamanho-máscara"], "mask-size", pragmas);

        if (!valorVariavel) {
            validarValorNumerico('tamanho-máscara', valor, this.valoresAceitos);

            if (Number(parseInt(valor))) {
                validarQuantificador('tamanho-máscara', quantificador, unidadesMedida);

                this.quantificador = quantificador;
            }
        }

        this.valor = valor;
    }
}
