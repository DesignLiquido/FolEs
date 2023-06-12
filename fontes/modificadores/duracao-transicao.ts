import { valoresTemporais } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class DuracaoTransicao extends Modificador {
    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super(
            ["duracao-transicao", "duração-transição"],
            "transition-duration"
        );

        // OBS.: Também aceita receber múltiplos valores. 
        // Ex.: duração-transição: 10s, 15s, 230ms;
        
        // A lógica abaixo cobre somente o recebimento de UM dos valores aceitos listados. 
        // TODO: Adaptar lógica para cobrir os demais casos. 
        
        validarValorNumerico('duração-transição', valor);

        this.valor = valor;

        if (Number(parseInt(valor))) {
            if (!(quantificador in valoresTemporais) || quantificador === undefined) {
                throw new Error(`Propriedade 'duração-transição' com quantificador inválido. Valores aceitos:
                ${Object.keys(valoresTemporais).reduce((final, atual) => final += `, ${atual}`)}.`);
            }

            this.quantificador = quantificador;
        }
    }
}
