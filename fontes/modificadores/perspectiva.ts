import { comprimentos } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";
import { validarQuantificador } from "./validacoes/quantificador";

export class Perspectiva extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "nenhuma": "none",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super("perspectiva", "perspective", pragmas);

        validarValorNumerico('perspectiva', valor, this.valoresAceitos);

        this.valor = valor;

        if (Number(parseInt(valor))) {
            validarQuantificador('perspectiva', quantificador, comprimentos);

            this.quantificador = quantificador;
        }
    }
}
