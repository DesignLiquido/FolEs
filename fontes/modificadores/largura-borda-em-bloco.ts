import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";
import { validarQuantificador } from "./validacoes/quantificador";

export class LarguraBordaEmBloco extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "fina": "thin",
        "media": "medium",
        "média": "medium",
        "grossa": "thick",
    }

    constructor(valor: string, quantificador: string, pragmas?: PragmasModificador) {
        super("largura-borda-em-bloco", "border-block-width", pragmas);

        validarValorNumerico('largura-borda-em-bloco', valor, this.valoresAceitos);

        this.valor = valor;

        if (Number(parseInt(valor))){
            validarQuantificador('largura-borda-em-bloco', quantificador, unidadesMedida);
    
            this.quantificador = quantificador;
        }
    }
}
