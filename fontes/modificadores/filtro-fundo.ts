import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class FiltroFundo extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "nenhum": "none",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super("filtro-fundo", "backdrop-filter", pragmas);

        const valoresExtra = ['url'];
        validarValores('filtro-fundo', valor, this.valoresAceitos, valoresExtra);

        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;
    }
}
