import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class DecoracaoEspessuraTexto extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "auto": "auto",
        "de-frente": "from-font",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super(
            ["decoracao-espessura-texto", "decoração-espessura-texto"],
            "text-decoration-thickness"
        );
        
        validarValorNumerico('decoração-espessura-texto', valor, this.valoresAceitos);

        this.valor = valor;

        if (Number(parseInt(valor))) {
            if (!(quantificador in unidadesMedida) || quantificador === undefined) {
                throw new Error(
                    `Propriedade 'decoração-espessura-texto' com quantificador inválido. Valores aceitos:
                ${Object.keys(unidadesMedida).reduce((final, atual) => final += `, ${atual}`)}.`);
            }

            this.quantificador = quantificador;
        }
    }
}
