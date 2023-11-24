import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class VazamentoTexto extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "recortar": "clip",
        "elipse": "ellipsis",
    }

    constructor(valor: string, quantificador: string, pragmas?: PragmasModificador) {
        super("vazamento-texto", "text-overflow", pragmas);

        validarValores('vazamento-texto', valor, this.valoresAceitos);

        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;
    }
}
