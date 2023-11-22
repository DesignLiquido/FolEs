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

        validarValorNumerico('espaçamento-letras', valor, this.valoresAceitos);

        this.valor = valor;

        if (Number(parseInt(valor))) {
            validarQuantificador('espaçamento-letras', quantificador, unidadesMedida);

            this.quantificador = quantificador;
        }
    }
}
