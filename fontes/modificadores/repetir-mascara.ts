import { valoresGlobais } from "./atributos/globais";
import { Modificador } from "./superclasse/modificador";

export class RepetirMascara extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "repetir-horizontal": "repeat-x",
        "repetir-vertical": "repeat-y",
        "repetir": "repeat",
        "espacar": "space",
        "espaçar": "space",
        "completar": "round",
        "nao-repetir": "no-repeat",
        "não-repetir": "no-repeat",
    }

    constructor(valor: string, quantificador?: string) {
        super(["repetir-mascara", "repetir-máscara"], "mask-repeat");

        // Também pode aceitar dois ou múltiplos valores
        // Ex.: repetir-máscara: repetir espaçar;

        // TODO: Implementar lógica para cobrir todos os casos.
        if (!(valor in this.valoresAceitos) &&
            !(valor in valoresGlobais)) {
            throw new Error(`Propriedade 'repetir-máscara' com valor ${valor} inválido. Valores aceitos: 
            ${Object.keys(this.valoresAceitos).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(valoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`);
        }

        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;
    }
}
