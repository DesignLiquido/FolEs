import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";
import { validarQuantificador } from "./validacoes/quantificador";

export class LarguraBorda extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "fina": "thin",
        "media": "medium",
        "média": "medium",
        "espessa": "thick",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super("largura-borda", "border-width", pragmas);

        validarValorNumerico('largura-borda', valor, this.valoresAceitos);
        this.valor = valor;

        if(quantificador !== undefined) {
            validarQuantificador('largura-borda', quantificador, unidadesMedida);
            this.quantificador = quantificador;
        }
    }
}
