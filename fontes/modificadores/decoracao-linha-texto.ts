import { ListaDeValoresGlobais } from "./atributos/globais";
import { Modificador } from "./superclasse/modificador";

export class DecoracaoLinhaTexto extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "nenhuma": "none",
        "sublinhado": "underline",
        "linha-superior": "overline",
        "atraves-linha": "line-through",
        "através-linha": "line-through",
        "piscar": "blink",
    }

    constructor(valor: string, quantificador?: string) {
        super(
            ["decoracao-linha-texto", "decoração-linha-texto"],
            "text-decoration-line"
        );

        // OBS.: Também aceita receber múltiplos valores. 
        // A lógica abaixo cobre somente o recebimento de UM dos valores aceitos listados. 
        // TODO: Adaptar lógica para cobrir os demais casos. 
        if (!(valor in this.valoresAceitos) &&
            !(valor in ListaDeValoresGlobais)
        ) {
            throw new Error(`Propriedade 'decoração-linha-texto' com valor ${valor} inválido. Valores aceitos: 
            ${Object.keys(this.valoresAceitos).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(ListaDeValoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`)
        }

        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;
    }
}
