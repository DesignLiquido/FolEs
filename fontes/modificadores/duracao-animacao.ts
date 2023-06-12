import { valoresTemporais } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class DuracaoAnimacao extends Modificador {
    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super(
            ["duracao-animacao", "duração-animação"],
            "animation-duration"
        );

        // OBS.: Também aceita receber múltiplos valores. 
        // Ex.: duração-animação: 10s, 15s, 230ms;

        // A lógica abaixo cobre somente o recebimento de UM valor. 
        // TODO: Adaptar lógica para cobrir os demais casos. 
        
        validarValorNumerico('duração-animação', valor);

        this.valor = valor;

        if (Number(parseInt(valor))) {
            if (!(quantificador in valoresTemporais) || quantificador === undefined) {
                throw new Error(`Propriedade 'duração-animação' com quantificador inválido. Valores aceitos: 
                ${Object.keys(valoresTemporais).reduce((final, atual) => final += `, ${atual}`)}.`);
            }

            this.quantificador = quantificador;
        }
    }
}
