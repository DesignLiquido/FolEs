import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class IndiceZ extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "auto": "auto",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super(["indice-z", "índice-z"], "z-index", pragmas);
        
        validarValorNumerico('índice-z', valor, this.valoresAceitos);
        
        this.valor = valor;

        // Não recebe quantificador, apenas o valor numérico.
        // this.quantificador = quantificador;
    }
}
