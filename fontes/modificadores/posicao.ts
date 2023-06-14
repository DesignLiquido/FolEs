import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class Posicao extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "dentro": "static",
        "relativa": "relative",
        "absoluta": "absolute",
        "fixa": "fixed",
        "colada": "sticky",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super(["posicao", "posição"], "position");

        validarValores('posição', valor, this.valoresAceitos);

        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;
    }
}
