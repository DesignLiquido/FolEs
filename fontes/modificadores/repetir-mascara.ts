import { ListaDeValoresGlobais } from "./atributos/globais";
import { Modificador } from "./superclasse/modificador";

export class RepetirMascara extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "repetir-horizontal": "repeat-x",
        "repetir-vertical": "repeat-y",
        "repetir": "repeat",
        "espacar": "space",
        "espaçar": "space",
        "arredondar": "round",
        "nao-repetir": "no-repeat",
        "não-repetir": "no-repeat",
    }

    constructor(valor: string, quantificador?: string) {
        super(["repetir-mascara", "repetir-máscara"], "mask-repeat");

        if (!(valor in this.valoresAceitos &&
            !(valor in ListaDeValoresGlobais))) {
            throw new Error(`Propriedade 'repetir-máscara' com valor ${valor} inválido. Valores aceitos: 
            ${Object.keys(this.valoresAceitos).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(ListaDeValoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`);
        }

        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;
    }
}
