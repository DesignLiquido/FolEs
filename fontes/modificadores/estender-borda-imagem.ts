import { comprimentos } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";
import { validarQuantificador } from "./validacoes/quantificador";

export class EstenderBordaImagem extends Modificador {
    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super("estender-borda-imagem", "border-image-outset");

        // Pode receber também mais de um valor número-quantificador
        // Ex.: estender-borda-imagem: 7px 12px 14px 5px;

        // A lógica abaixo cobre apenas o recebimento de UM único valor
        // TODO: Adaptar lógica para cobrir todos os casos.
        
        validarValorNumerico('estender-borda-imagem', valor);

        this.valor = valor;

        if (Number(parseInt(valor))) {
            validarQuantificador('estender-borda-imagem', quantificador, comprimentos);

            this.quantificador = quantificador;
        }
    }
}
