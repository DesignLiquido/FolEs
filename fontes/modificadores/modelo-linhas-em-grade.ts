import { unidadesMedida, valoresFlex } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";
import { validarQuantificador } from "./validacoes/quantificador";

export class ModeloLinhasEmGrade extends Modificador {
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
        super("modelo-linhas-em-grade", "grid-template-rows", pragmas);

        // OBS.: Também aceita receber o valor do tipo [linename]
        const valoresExtra = ['minmax', 'fit-content'];
        validarValorNumerico('modelo-linhas-em-grade', valor, this.valoresAceitos, valoresExtra);
        this.valor = valor;

        if (quantificador !== undefined) {
            validarQuantificador('modelo-linhas-em-grade', quantificador, unidadesMedida, valoresFlex);
            this.quantificador = quantificador;
        }
    }
}
