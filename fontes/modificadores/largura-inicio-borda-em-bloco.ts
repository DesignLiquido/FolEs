import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";
import { validarQuantificador } from "./validacoes/quantificador";

export class LarguraInicioBordaEmBloco extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "fina": "thin",
        "media": "medium",
        "média": "medium",
        "grossa": "thick",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super(
            ["largura-inicio-borda-em-bloco", "largura-início-borda-em-bloco"],
            "border-block-start-width", 
            pragmas
        );

        validarValorNumerico('largura-início-borda-em-bloco', valor, this.valoresAceitos);

        this.valor = valor;

        if (Number(parseInt(valor))){
            validarQuantificador('largura-início-borda-em-bloco', quantificador, unidadesMedida);
    
            this.quantificador = quantificador;
        }
    }
}
