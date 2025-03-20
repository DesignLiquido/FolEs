import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class ImagemBorda extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "url": "url",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador, valorVariavel: boolean = false) {
        super("imagem-borda", "border-image", pragmas);

        const valoresExtra = ['url'];

        if (!valorVariavel) validarValores('imagem-máscara', valor, this.valoresAceitos, valoresExtra);

        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;
    }
}
