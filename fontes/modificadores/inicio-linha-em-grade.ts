import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";
import { proibirQuantificador } from "./validacoes/proibir-quantificador";

export class InicioLinhaEmGrade extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "auto": "auto",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador, valorVariavel: boolean = false) {
        super(
            ["inicio-linha-em-grade", "início-linha-em-grade"],
            "grid-row-start", 
            pragmas
        );

        if (!valorVariavel) {
            validarValorNumerico('início-linha-em-grade', valor, this.valoresAceitos);
                        
            // Não recebe quantificador, apenas o valor numérico.
            proibirQuantificador('início-linha-em-grade', quantificador);
        }

        this.valor = valor;
    }
}
