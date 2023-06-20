import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";
import { validarQuantificador } from "./validacoes/quantificador";

export class LarguraMaxima extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "conteudo-maximo": "max-content",
        "conteúdo-máximo": "max-content",
        "conteudo-minimo": "min-content",
        "conteúdo-mínimo": "min-content",
        "nenhuma": "none",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super(["largura-maxima", "largura-máxima"], "max-width");

        // Também pode receber a função fit-content();
        // A lógica abaixo cobre o recebimento de valores próprios ou numéricos
        // TODO: Ajustar lógica para cobrir todos os casos.
        validarValorNumerico('largura-máxima', valor, this.valoresAceitos);

        this.valor = valor;

        if (Number(parseInt(valor))) {
            validarQuantificador('largura-máxima', quantificador, unidadesMedida);

            this.quantificador = quantificador;
        }
    }
}
