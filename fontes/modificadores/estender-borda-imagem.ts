import { comprimentos } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";
import { validarQuantificador } from "./validacoes/quantificador";

export class EstenderBordaImagem extends Modificador {
    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super("estender-borda-imagem", "border-image-outset", pragmas);
        
        validarValorNumerico('estender-borda-imagem', valor);

        this.valor = valor;

        if (Number(parseInt(valor))) {
            validarQuantificador('estender-borda-imagem', quantificador, comprimentos);

            this.quantificador = quantificador;
        }
    }
}
