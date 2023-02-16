import { listaDeValoresGlobais } from "./atributos/globais";
import { Modificador } from "./superclasse/modificador";

export class RepeticaoBordaMascara extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "esticar": "stretch",
        "repetir": "repeat",
        "arredondar": "round",
        "espacar": "space",
        "espaçar": "space",
    }

    constructor(valor: string, quantificador?: string) {
        super(
            ["repeticao-borda-mascara", "repetição-borda-máscara"],
            "mask-border-repeat"
        );

        // OBS.: Também aceita receber múltiplos valores. 
        // A lógica abaixo cobre somente o recebimento de UM dos valores aceitos listados. 
        // TODO: Adaptar lógica para cobrir os demais casos. 
        if (!(valor in this.valoresAceitos) &&
            !(valor in listaDeValoresGlobais)
        ) {
            throw new Error(`Propriedade 'repetição-borda-máscara' com valor ${valor} inválido. Valores aceitos: 
            ${Object.keys(this.valoresAceitos).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(listaDeValoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`)
        }

        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;
    }
}
