import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";
import { validarQuantificador } from "./validacoes/quantificador";

export class LarguraFimBordaEmBloco extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "fina": "thin",
        "media": "medium",
        "média": "medium",
        "grossa": "thick",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super("largura-fim-borda-em-bloco", "border-block-end-width", pragmas);

        validarValorNumerico('largura-fim-borda-em-bloco', valor, this.valoresAceitos);

        this.valor = valor;

        if (Number(parseInt(valor))){
            validarQuantificador('largura-fim-borda-em-bloco', quantificador, unidadesMedida);
    
            this.quantificador = quantificador;
        }
    }
}
