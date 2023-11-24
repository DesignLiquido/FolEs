import { angulos, unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";
import { validarQuantificador } from "./validacoes/quantificador";

export class Deslocamento extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "auto": "auto",
        "nenhum": "none",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super("deslocamento", "offset", pragmas);

        // Também aceita receber as funções path() e ray()

        const valoresExtra = ['url'];
        validarValorNumerico('deslocamento', valor, this.valoresAceitos, valoresExtra);
        this.valor = valor;

        validarQuantificador('deslocamento', quantificador, unidadesMedida, angulos);
        this.quantificador = quantificador;
    }
}
