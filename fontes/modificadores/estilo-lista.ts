import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";
import { validarQuantificador } from "./validacoes/quantificador";

export class EstiloLista extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "dentro": "inside",
        "fora": "outside",
        "nenhum": "none",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador, valorVariavel: boolean = false) {
        super("estilo-lista", "list-style", pragmas);

        const valoresExtra = ['url'];

        if (!valorVariavel) {
            validarValorNumerico('estilo-lista', valor, this.valoresAceitos, valoresExtra);
                        
            if (quantificador !== undefined) {
                validarQuantificador('estilo-lista', quantificador, unidadesMedida);
                
                this.quantificador = quantificador;
            }
        }

        this.valor = valor;
    }
}
