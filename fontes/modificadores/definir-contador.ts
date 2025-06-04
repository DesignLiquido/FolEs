import { Modificador, PragmasModificador } from "./superclasse";
import { validarAtribuicaoAbreviada } from "./validacoes/atribuicao-abreviada";
import { validarValorNumerico } from "./validacoes/numerica";

export class DefinirContador extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        nenhum: "none",
    };

    constructor(
        valor: string,
        quantificador?: string,
        pragmas?: PragmasModificador,
        valorVariavel: boolean = false,
    ) {
        super("definir-contador", "counter-set", pragmas);
        
        if (!valorVariavel) {
            if (valor.includes(" ")) {
                validarAtribuicaoAbreviada("numérica", "definir-contador", valor, this.valoresAceitos, undefined, false, true);
            } else {
                validarValorNumerico("definir-contador", valor, this.valoresAceitos);
            }
        }

        this.valor = valor;
    }
}
