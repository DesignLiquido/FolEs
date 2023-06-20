import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";
import { validarQuantificador } from "./validacoes/quantificador";

export class LarguraBordaMascara extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "auto": "auto",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super(
            ["largura-borda-mascara", "largura-borda-máscara"],
            "mask-border-width"
        );

        // OBS.: Pode receber de 1 a 4 valores
        // A lógica abaixo cobre somente o recebimento de um único valor
        validarValorNumerico('largura-borda-máscara', valor, this.valoresAceitos);

        this.valor = valor;

        // Também pode receber somente o valor numérico, sem quantificador
        if (quantificador !== undefined) {
            validarQuantificador('largura-borda-máscara', quantificador, unidadesMedida);

            this.quantificador = quantificador;
        }
    }
}
