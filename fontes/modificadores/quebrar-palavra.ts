import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class QuebrarPalavra extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "normal": "normal",
        "quebrar-tudo": "break-all",
        "manter-tudo": "keep-all",
        "quebrar": "break-word",
    }


    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador, valorVariavel: boolean = false) {
        super("quebrar-palavra", "word-break", pragmas);

        if (!valorVariavel) validarValores('quebrar-palavra', valor, this.valoresAceitos);

        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;
    }
}
