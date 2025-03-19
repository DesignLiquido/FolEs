import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class DecoracaoEstiloTexto extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "solido": "solid",
        "sólido": "solid",
        "duplicado": "double",
        "tracejado": "dashed",
        "pontilhado": "dotted",
        "ondulado": "wavy",
        "nenhum": "none",
    }
    
    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador, valorVariavel: boolean = false) {
        super(
            ["decoracao-estilo-texto", "decoração-estilo-texto"], 
            "text-decoration-style", 
            pragmas
        );
        
        if (!valorVariavel) validarValores('decoração-estilo-texto', valor, this.valoresAceitos);

        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;
    }
}
