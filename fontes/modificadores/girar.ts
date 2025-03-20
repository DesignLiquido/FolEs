import { angulos } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";
import { validarQuantificador } from "./validacoes/quantificador";

export class Girar extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "nenhum": "none",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador, valorVariavel: boolean = false) {
        super("girar", "rotate", pragmas);
        
        if (!valorVariavel) {
            validarValorNumerico('girar', valor, this.valoresAceitos);
                        
            // Quantificador deve ser do tipo ângulo (<angle>)
            if (Number(parseInt(valor))) {
                validarQuantificador('girar', quantificador, angulos);
                
                this.quantificador = quantificador;
            }
        }

        this.valor = valor;
    }
}
