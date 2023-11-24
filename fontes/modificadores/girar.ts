import { angulos } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";
import { validarQuantificador } from "./validacoes/quantificador";

export class Girar extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "nenhum": "none",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super("girar", "rotate", pragmas);
        
        validarValorNumerico('girar', valor, this.valoresAceitos);

        this.valor = valor;

        // Quantificador deve ser do tipo ângulo (<angle>)
        if (Number(parseInt(valor))) {
            validarQuantificador('girar', quantificador, angulos);

            this.quantificador = quantificador;
        }
    }
}
