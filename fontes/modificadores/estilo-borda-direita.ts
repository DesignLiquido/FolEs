import { estilos } from "./atributos/estilo";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValoresAdicionais } from "./validacoes/condicao-extra";

export class EstiloBordaDireita extends Modificador {
    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador, valorVariavel: boolean = false) {
        super("estilo-borda-direita", "border-right-style", pragmas);

        if (!valorVariavel) validarValoresAdicionais('estilo-borda-direita', valor, estilos);

        this.valor = valor;
    }
}
