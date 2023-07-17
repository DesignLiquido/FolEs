import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class Transformar extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "nenhum": "none",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super("transformar", "transform");

        // OBS.: Também aceita receber as funções do tipo <transform-function>
        // Checar documentação: https://developer.mozilla.org/en-US/docs/Web/CSS/transform 
        // TODO: Adaptar lógica

        validarValores('transformar', valor, this.valoresAceitos);
        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;
    }
}
