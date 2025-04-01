import { estilos } from "./atributos/estilo";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValoresAdicionais } from "./validacoes/condicao-extra";

export class EstiloFimBordaEmBloco extends Modificador {
    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador, valorVariavel: boolean = false) {
        super(
            "estilo-fim-borda-em-bloco", 
            "border-block-end-style", 
            pragmas
        );
        
        if (!valorVariavel) validarValoresAdicionais('estilo-fim-borda-em-bloco', valor, estilos);

        this.valor = valor;
    }
}
