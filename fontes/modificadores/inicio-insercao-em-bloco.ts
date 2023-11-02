import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";
import { validarQuantificador } from "./validacoes/quantificador";

export class InicioInsercaoEmBloco extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "auto": "auto",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super(
            ["inicio-insercao-em-bloco", "início-inserção-em-bloco"],
            "inset-block-start", 
            pragmas
        );
        
        validarValorNumerico('início-inserção-em-bloco', valor, this.valoresAceitos);

        this.valor = valor;

        if (Number(parseInt(valor))) {
            validarQuantificador('início-inserção-em-bloco', quantificador, unidadesMedida);

            this.quantificador = quantificador;
        }
    }
}
