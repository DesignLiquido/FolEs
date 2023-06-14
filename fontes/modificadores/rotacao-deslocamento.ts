import { angulos } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class RotacaoDeslocamento extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "auto": "auto",
        "inverter": "revert",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super(
            ["rotacao-deslocamento", "rotação-deslocamento"],
            "offset-rotate"
        );
        
        // Também pode receber dois valores
        // Ex.: rotação-deslocamento: auto 45deg;

        // TODO: Adaptar lógica para cobrir todos os casos
        validarValorNumerico('rotação-deslocamento', valor, this.valoresAceitos);

        this.valor = valor;
        
        // Quantificador deve ser do tipo ângulo (<angle>)
        if (Number(parseInt(valor))){
            if (
                !(quantificador in angulos)  ||
                quantificador === undefined
            ) {
                throw new Error(
                `Propriedade 'rotação-deslocamento' com quantificador inválido. Valores aceitos:
                ${Object.keys(angulos).reduce((final, atual) => final += `, ${atual}`)}.`);
            }
    
            this.quantificador = quantificador;
        }
    }
}
