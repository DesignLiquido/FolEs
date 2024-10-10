import { estilos } from "./atributos/estilo";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValoresAdicionais } from "./validacoes/condicao-extra";

export class EstiloBorda extends Modificador {
    // Seletor de Atribuição Abreviada (Shorthand).
    // Pode receber de 1 a 4 valores.
    valoresAceitos = estilos;
    constructor(valor: string, quantificador: string, pragmas?: PragmasModificador) {
        super("estilo-borda", "border-style", pragmas);

        validarValoresAdicionais('estilo-borda', valor, estilos);

        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;
    }
}
