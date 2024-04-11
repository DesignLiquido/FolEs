import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class Transformar extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "nenhum": "none",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super("transformar", "transform", pragmas);

        const valoresExtra = ['perspective', 'rotate', 'rotateX', 'rotateY', 'rotateZ', 'skew', 'skewX', 'skewY', 'translate', 'translateX', 'translateY', 'translateZ'];
        
        validarValores('transformar', valor, this.valoresAceitos, valoresExtra);
        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;
    }
}
