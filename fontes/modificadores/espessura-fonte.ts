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

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super("espessura-fonte", "font-weight", pragmas);

        validarValorNumerico('espessura-fonte', valor, this.valoresAceitos);

        this.valor = valor;

        // Não recebe quantificador, apenas o valor numérico.
        proibirQuantificador('espessura-fonte', quantificador);
    }
}
