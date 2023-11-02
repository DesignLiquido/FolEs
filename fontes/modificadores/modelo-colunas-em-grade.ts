import { unidadesMedida, valoresFlex } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";
import { validarQuantificador } from "./validacoes/quantificador";

export class ModeloColunasEmGrade extends Modificador {
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
        super("modelo-colunas-em-grade", "grid-template-columns", pragmas);

        // OBS.: Também aceita receber o valor do tipo [linename]
        // TODO: Adaptar lógica para cobrir todos os casos de valores
        const valoresExtra = ['minmax', 'fit-content'];
        validarValorNumerico('modelo-colunas-em-grade', valor, this.valoresAceitos, valoresExtra);
        this.valor = valor;

        if (quantificador !== undefined) {
            validarQuantificador('modelo-colunas-em-grade', quantificador, unidadesMedida, valoresFlex);
            this.quantificador = quantificador;
        }
    }
}
