import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class Fluxo extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "nenhum": "none",
        "esquerda": "left",
        "direita": "right",
        "ambos": "both",
        "inicio-em-linha": "inline-start",
        "início-em-linha": "inline-start",
        "fim-em-linha": "inline-end",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador, valorVariavel: boolean = false) {
        super("fluxo", "clear", pragmas);
        
        if (!valorVariavel) validarValores('fluxo', valor, this.valoresAceitos);

        this.valor = valor;
    }
}
