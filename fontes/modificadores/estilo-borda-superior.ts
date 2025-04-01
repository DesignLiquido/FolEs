import { estilos } from "./atributos/estilo";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValoresAdicionais } from "./validacoes/condicao-extra";

export class EstiloBordaSuperior extends Modificador {
    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador, valorVariavel: boolean = false) {
        super("estilo-borda-superior", "border-top-style", pragmas);

        if (!valorVariavel) validarValoresAdicionais('estilo-borda-superior', valor, estilos);

        this.valor = valor;
    }
}
