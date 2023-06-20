import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";
import { validarQuantificador } from "./validacoes/quantificador";

export class InicioMargemEmBloco extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "auto": "auto",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super(
            ["inicio-margem-em-bloco", "início-margem-em-bloco"],
            "margin-block-start"
        );

        validarValorNumerico('início-margem-em-bloco', valor, this.valoresAceitos);

        this.valor = valor;

        if (Number(parseInt(valor))) {
            validarQuantificador('início-margem-em-bloco', quantificador, unidadesMedida);

            this.quantificador = quantificador;
        }
    }
}
