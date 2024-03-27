import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class OrigemImagemBorda extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "nenhuma": "none",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super("origem-imagem-borda", "border-image-source", pragmas);

        const valoresExtra = ['url', 'linear-gradient'];
        validarValores('origem-imagem-borda', valor, this.valoresAceitos, valoresExtra);
        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;
    }
}
