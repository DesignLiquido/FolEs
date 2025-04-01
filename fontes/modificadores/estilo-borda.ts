import { estilos } from "./atributos/estilo";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValoresAdicionais } from "./validacoes/condicao-extra";

export class EstiloBorda extends Modificador {
    valoresAceitos = estilos;
    constructor(valor: string, quantificador: string, pragmas?: PragmasModificador, valorVariavel: boolean = false) {
        super("estilo-borda", "border-style", pragmas);
        
        if (!valorVariavel) validarValoresAdicionais('estilo-borda', valor, estilos);

        this.valor = valor;
    }
}
