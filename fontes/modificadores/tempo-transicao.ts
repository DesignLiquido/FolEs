import { ListaDeValoresGlobais } from "./atributos/globais";
import { Modificador } from "./superclasse/modificador";

export class TempoTransicao extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "velocidade-normal": "ease",
        "inicio-lento": "ease-in",
        "início-lento": "ease-in",
        "final-lento": "ease-out",
        "inicio-final-lento": "ease-in-out",
        "início-final-lento": "ease-in-out",
        "linear": "linear",
        "passo-inicial": "step-start",
        "passo-final": "step-end",
    }

    termosSalto: { [valorFoles: string]: string } = {
        "salto-inicial": "jump-start",
        "salto-final": "jump-end",
        "salto-nenhum": "jump-none",
        "salto-conjunto": "jump-both",
        "inicial": "start",
        "final": "end",
        "passo-inicial": "step-start",
        "passo-final": "step-start"
    }

    constructor(valor: string, quantificador?: string) {
        super(
            ["tempo-transicao", "tempo-transição"],
            "transition-timing-function"
        );

        // OBS.: Também aceita receber: 
        // 1. A função cubic-bezier(p1, p2, p3, p4);
        // 2. A função steps(n, <jumpterm>);
        // 3. múltiplos valores. 

        // A lógica abaixo cobre somente o recebimento de UM dos valores aceitos listados. 
        // TODO: Adaptar lógica para cobrir os demais casos. 

        if (!(valor in this.valoresAceitos) &&
            !(valor in ListaDeValoresGlobais)
        ) {
            throw new Error(`Propriedade 'tempo-transição' com valor ${valor} inválido. Valores aceitos: 
            ${Object.keys(this.valoresAceitos).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(ListaDeValoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`)
        }

        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;
    }
}
