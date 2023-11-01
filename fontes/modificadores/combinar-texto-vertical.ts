import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class CombinarTextoVertical extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "nenhum": "none",
        "tudo": "all",
        "digitos": "digits",
        "dígitos": "digits",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super("combinar-texto-vertical", "text-combine-upright", pragmas);

        // OBS.: Também aceita receber valores do tipo dígito (<digit>).
        // Ex.:  combinar-texto-vertical: digits 4; 

        // A lógica abaixo cobre somente o recebimento de UM dos valores aceitos listados. 
        // TODO: Adaptar lógica para cobrir os demais casos. 
        validarValores("combinar-texto-vertical", valor, this.valoresAceitos);

        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;
    }
}
