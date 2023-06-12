import { angulos } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class Girar extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "nenhum": "none",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super("girar", "rotate");

        // OBS.: Também aceita receber múltiplos valores. 
        // Ex.: girar: z 1.57rad;
    
        // A lógica abaixo cobre somente o recebimento de UM valor, seja numérico ou o valor listado. 
        // TODO: Adaptar lógica para cobrir os demais casos.
        validarValorNumerico('girar', valor, this.valoresAceitos);

        this.valor = valor;

        // Quantificador deve ser do tipo ângulo (<angle>)
        if (Number(parseInt(valor))) {
            if (
                !(quantificador in angulos) ||
                quantificador === undefined
            ) {
                throw new Error(
                    `Propriedade 'girar' com quantificador inválido. Valores aceitos:
                    ${Object.keys(angulos).reduce((final, atual) => final += `, ${atual}`)}.`);
            }

            this.quantificador = quantificador;
        }
    }
}
