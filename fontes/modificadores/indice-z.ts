import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class IndiceZ extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "auto": "auto",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador, valorVariavel: boolean = false) {
        super(["indice-z", "índice-z"], "z-index", pragmas);

        if (!valorVariavel) validarValorNumerico('índice-z', valor, this.valoresAceitos);
        
        this.valor = valor;
    }
}
