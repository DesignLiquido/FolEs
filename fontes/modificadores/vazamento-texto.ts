import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";
import { validarValorString } from "./validacoes/string";

export class VazamentoTexto extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "recortar": "clip",
        "elipse": "ellipsis",
    }

    constructor(valor: string, quantificador: string, pragmas?: PragmasModificador, valorVariavel: boolean = false) {
        super("vazamento-texto", "text-overflow", pragmas);

        const validacaoString = validarValorString(valor);

        if (validacaoString) {
            this.valoresAceitos[valor] = valor;
        }

        if (!valorVariavel) validarValores('vazamento-texto', valor, this.valoresAceitos);

        this.valor = valor;
    }
}
