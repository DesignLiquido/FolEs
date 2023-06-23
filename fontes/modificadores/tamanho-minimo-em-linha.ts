import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";
import { validarQuantificador } from "./validacoes/quantificador";

export class TamanhoMinimoEmLinha extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "conteudo-maximo": "max-content",
        "conteúdo-máximo": "max-content",
        "conteudo-minimo": "min-content",
        "conteúdo-mínimo": "min-content",
        "nenhum": "none",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super(
            ["tamanho-minimo-em-linha", "tamanho-mínimo-em-linha"],
            "min-inline-size"
        );

        // Também pode receber a função fit-content(<length-percentage>);
        // A lógica abaixo cobre o recebimento de valores próprios ou numéricos
        // TODO: Adaptar lógica para cobrir todos os casos

        validarValorNumerico('tamanho-mínimo-em-linha', valor, this.valoresAceitos);

        this.valor = valor;

        if (Number(parseInt(valor))) {
            validarQuantificador('tamanho-mínimo-em-linha', quantificador, unidadesMedida);

            this.quantificador = quantificador;
        }
    }
}
