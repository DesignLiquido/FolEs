import { Modificador, PragmasModificador } from "./superclasse";
import { validarAtribuicaoAbreviada } from "./validacoes/atribuicao-abreviada";
import { validarValores } from "./validacoes/comum";

export class ImagemBorda extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        url: "url",
    };

    constructor(
        valor: string,
        quantificador?: string,
        pragmas?: PragmasModificador,
        valorVariavel: boolean = false,
    ) {
        super("imagem-borda", "border-image", pragmas);

        const valoresExtra = ["url"];

        if (!valorVariavel) {
            if (typeof valor === 'string' && valor.includes(" ")) {
                validarAtribuicaoAbreviada("comum", "imagem-borda", valor, this.valoresAceitos, valoresExtra);
            } else {
                validarValores("imagem-borda", valor, this.valoresAceitos, valoresExtra);
            }
        }

        this.valor = valor;
    }
}
