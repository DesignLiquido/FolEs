import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";
import { validarQuantificador } from "./validacoes/quantificador";

export class InsercaoEmLinhaFim extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "auto": "auto",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super(
            ["insercao-em-linha-fim", "inserção-em-linha-fim"],
            "inset-inline-end", 
            pragmas
        );

        validarValorNumerico('inserção-em-linha-fim', valor, this.valoresAceitos);

        this.valor = valor;

        if (Number(parseInt(valor))) {
            validarQuantificador('inserção-em-linha-fim', quantificador, unidadesMedida);

            this.quantificador = quantificador;
        }
    }
}
