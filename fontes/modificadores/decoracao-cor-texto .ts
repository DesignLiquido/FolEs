import { cores } from "./atributos/cores";
import { valoresGlobais } from "./atributos/globais";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorCor } from "./validacoes/cor";

export class DecoracaoCorTexto extends Modificador {
    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super(
            ["decoracao-cor-texto", "decoração-cor-texto"],
            "text-decoration-color", 
            pragmas
        );
        
        validarValorCor('decoração-cor-texto', valor)

        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;
        
    }
}
