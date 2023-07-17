import { unidadesMedida, valoresFlex } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";
import { validarQuantificador } from "./validacoes/quantificador";

export class ModeloEmGrade extends Modificador {
    // Seletor de atribuição abreviada, pode receber de 1 a 3 valores
    valoresAceitos: { [valorFoles: string]: string } = {
        "nenhum": "none",
        "auto": "auto",
        "conteudo-maximo": "max-content",
        "conteudo-máximo": "max-content",
        "conteudo-minimo": "min-content",
        "conteudo-mínimo": "min-content",
        "sub-grade": "subgrid",
        "alvenaria": "masonry",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super("modelo-em-grade", "grid-template");

        // OBS.: Também aceita receber o valor do tipo matriz
        // Ex.: grid-template:
        //      "a a a" 20%
        //      "b b b" auto;

        // TODO: Adaptar lógica para cobrir todos os casos de valores
        const valoresExtra = ['fit-content'];
        validarValorNumerico('modelo-em-grade', valor, this.valoresAceitos, valoresExtra);
        this.valor = valor;

        if (quantificador !== undefined) {
            validarQuantificador('modelo-em-grade', quantificador, unidadesMedida, valoresFlex);
            this.quantificador = quantificador;
        }
    }
}
