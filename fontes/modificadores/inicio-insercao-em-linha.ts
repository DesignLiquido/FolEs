import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";
import { validarQuantificador } from "./validacoes/quantificador";

export class InicioInsercaoEmLinha extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "auto": "auto",
    }

    constructor(valor: string, quantificador: string) {
        super(
            ["inicio-insercao-em-linha", "início-inserção-em-linha"],
            "inset-inline-start"
        );
        
        validarValorNumerico('início-inserção-em-linha', valor, this.valoresAceitos);

        this.valor = valor;

        if (Number(parseInt(valor))) {
            validarQuantificador('início-inserção-em-linha', quantificador, unidadesMedida);

            this.quantificador = quantificador;
        }
    }
}
