import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";
import { validarQuantificador } from "./validacoes/quantificador";

export class FlexComprimento extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "conteudo-maximo": "max-content",
        "conteúdo-máximo": "max-content",
        "conteudo-minimo": "min-content",
        "conteúdo-mínimo": "min-content",
        "ajustar-conteudo": "fit-content",
        "ajustar-conteúdo": "fit-content",
        "conteudo": "content",
        "conteúdo": "content",
        "auto": "auto",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super("flex-comprimento", "flex-basis", pragmas);

        validarValorNumerico('flex-comprimento', valor, this.valoresAceitos);

        this.valor = valor;

        if (Number(parseInt(valor))) {
            validarQuantificador('flex-comprimento', quantificador, unidadesMedida);

            this.quantificador = quantificador;
        }
    }
}
