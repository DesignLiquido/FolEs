import { ListaDeValorPercentual, unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";
import { validarQuantificador } from "./validacoes/quantificador";

export class PosicaoDireita extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "auto": "auto",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super(["posicao-direita", "posição-direita"], "right");

        validarValorNumerico('posição-direita', valor, this.valoresAceitos);

        this.valor = valor;

        // O seletor aceita o número 0.
        // Logo, o código só passa pela validação caso haja um segundo parâmetro 
        // ou caso o primeiro seja diferente de 0.
        if (quantificador !== undefined && valor !== '0') {
            validarQuantificador('posição-direita', quantificador, unidadesMedida, ListaDeValorPercentual);

            this.quantificador = quantificador;
        }
    }
}
