import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";
import { validarQuantificador } from "./validacoes/quantificador";

export class InsercaoEmBlocoFim extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "auto": "auto",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super(
            ["insercao-em-bloco-fim", "inserção-em-bloco-fim"],
            "inset-block-end"
        );

        validarValorNumerico('inserção-em-bloco-fim', valor, this.valoresAceitos);

        this.valor = valor;

        if (Number(parseInt(valor))) {
            validarQuantificador('inserção-em-bloco-fim', quantificador, unidadesMedida);

            this.quantificador = quantificador;
        }
    }
}
