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

        // OBS.: Também aceita receber múltiplos valores. 
        // Ex.: girar: z 1.57rad;
    
        // A lógica abaixo cobre somente o recebimento de UM valor, seja numérico ou o valor listado. 
        // TODO: Adaptar lógica para cobrir os demais casos.
        validarValorNumerico('girar', valor, this.valoresAceitos);

        this.valor = valor;

        // Quantificador deve ser do tipo ângulo (<angle>)
        if (Number(parseInt(valor))) {
            validarQuantificador('girar', quantificador, angulos);

            this.quantificador = quantificador;
        }
    }
}
