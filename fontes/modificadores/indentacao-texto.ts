import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class IndentacaoTexto extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "cada-linha": "each-line",
        "inverter": "hanging",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super(["indentacao-texto", "indentação-texto"], "text-indent");

        // Também pode receber múltiplos valores
        // Ex.: indentação-texto: 5em inverter cada-linha;

        // TODO: Adaptar lógica para cobrir casos de múltiplos valores atribuídos.
        validarValorNumerico('indentação-texto', valor, this.valoresAceitos);

        this.valor = valor;
    
        if (Number(parseInt(valor))) {
            if (
                !(quantificador in unidadesMedida) ||
                quantificador === undefined
            ) {
                throw new Error(
                    `Propriedade 'indentação-texto' com quantificador inválido. Valores aceitos:
                    ${Object.keys(unidadesMedida).reduce((final, atual) => final += `, ${atual}`)}.`);
            }

            this.quantificador = quantificador;
        }
    }
}
