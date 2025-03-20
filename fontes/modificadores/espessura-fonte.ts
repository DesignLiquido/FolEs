import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";
import { proibirQuantificador } from "./validacoes/proibir-quantificador";

export class EspessuraFonte extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "normal": "normal",
        "negrito": "bold",
        "mais-clara": "lighter",
        "mais-escura": "bolder",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador, valorVariavel: boolean = false) {
        super("espessura-fonte", "font-weight", pragmas);

        if (!valorVariavel) {
            validarValorNumerico('espessura-fonte', valor, this.valoresAceitos);
            
            // Não recebe quantificador, apenas o valor numérico.
            proibirQuantificador('espessura-fonte', quantificador);
        }

        this.valor = valor;
    }
}
