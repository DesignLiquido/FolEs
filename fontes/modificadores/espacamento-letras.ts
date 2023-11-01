import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";
import { validarQuantificador } from "./validacoes/quantificador";

export class EspacamentoLetras extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "normal": "normal",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super(
            ["espacamento-letras", "espaçamento-letras"], 
            "letter-spacing", 
            pragmas
        );

        // Também pode receber valores numéricos com ponto (.) na frente
        // Ex.: espaçamento-letras: .2rem;

        // A lógica abaixo cobre somente o recebimento de valores positivos e negativos
        // TODO: Adaptar lógica para cobrir todos os casos.

        validarValorNumerico('espaçamento-letras', valor, this.valoresAceitos);

        this.valor = valor;

        if (Number(parseInt(valor))) {
            validarQuantificador('espaçamento-letras', quantificador, unidadesMedida);

            this.quantificador = quantificador;
        }
    }
}
