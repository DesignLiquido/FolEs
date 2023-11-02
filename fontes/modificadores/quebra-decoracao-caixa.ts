import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class QuebraDecoracaoCaixa extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "quebrar": "slice",
        "clonar": "clone",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super(
            ["quebra-decoracao-caixa", "quebra-decoração-caixa"], 
            "box-decoration-break", 
            pragmas
        );
        
        validarValores('quebra-decoração-caixa', valor, this.valoresAceitos);
    
        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;
    }
}
