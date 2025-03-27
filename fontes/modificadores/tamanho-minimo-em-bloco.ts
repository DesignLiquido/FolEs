import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";
import { validarQuantificador } from "./validacoes/quantificador";

export class TamanhoMinimoEmBloco extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "conteudo-maximo": "max-content",
        "conteúdo-máximo": "max-content",
        "conteudo-minimo": "min-content",
        "conteúdo-mínimo": "min-content",
        "nenhum": "none",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador, valorVariavel: boolean = false) {
        super(
            ["tamanho-minimo-em-bloco", "tamanho-mínimo-em-bloco"],
            "min-block-size",
            pragmas
        );

        const valoresExtra = ['fit-content'];

        if (!valorVariavel) {
            validarValorNumerico('tamanho-mínimo-em-bloco', valor, this.valoresAceitos, valoresExtra);

            if (Number(parseInt(valor))) {
                validarQuantificador('tamanho-mínimo-em-bloco', quantificador, unidadesMedida);

                this.quantificador = quantificador;
            }
        }

        this.valor = valor;
    }
}
