import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";
import { validarQuantificador } from "./validacoes/quantificador";

export class TamanhoFonte extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "extra-pequeno": "xx-small",
        "muito-pequeno": "x-small",
        "pequeno": "small",
        "medio": "medium",
        "médio": "medium",
        "grande": "large",
        "muito-grande": "x-large",
        "extra-grande": "xx-large",
        "gigante": "xxx-large",
        "maior": "larger",
        "menor": "smaller",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super("tamanho-fonte", "font-size");

        validarValorNumerico('tamanho-fonte', valor, this.valoresAceitos);

        this.valor = valor;

        if (Number(parseInt(valor))) {
            validarQuantificador('tamanho-fonte', quantificador, unidadesMedida);

            this.quantificador = quantificador;
        }
    }
}
