import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";
import { validarQuantificador } from "./validacoes/quantificador";

export class LarguraBordaInferior extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "fina": "thin",
        "media": "medium",
        "média": "medium",
        "grossa": "thick",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super("largura-borda-inferior", "border-bottom-width");

        validarValorNumerico('largura-borda-inferior', valor, this.valoresAceitos);

        this.valor = valor;

        if (Number(parseInt(valor))){
            validarQuantificador('largura-borda-inferior', quantificador, unidadesMedida);
    
            this.quantificador = quantificador;
        }
    }
}
