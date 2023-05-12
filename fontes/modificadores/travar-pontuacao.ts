import { valoresGlobais } from "./atributos/globais";
import { Modificador, PragmasModificador } from "./superclasse";

export class TravarPontuacao extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "nenhum": "none",
        "primeiro": "first",
        "ultimo": "last",
        "último": "last",
        "forcar-fim": "force-end",
        "forçar-fim": "force-end",
        "permitir-fim": "allow-end",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super(["travar-pontuacao", "travar-pontuação"], "hanging-punctuation");

        // OBS.: Pode receber de 1 a 3 valores;
        // A lógica abaixo cobre apenas o recebimento de UM único valor.
        // TODO: Adaptar lógica para cobrir o recebimento de múltiplos valores. 
        if (!(valor in this.valoresAceitos) &&
            !(valor in valoresGlobais)) {
            throw new Error(`Propriedade 'travar-pontuação' com valor ${valor} inválido. Valores aceitos: 
        ${Object.keys(this.valoresAceitos).reduce((final, atual) => final += `, ${atual}`)},
        ${Object.keys(valoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`);
        }

        this.valor = valor;

        // Quantificador não é usado aqui.
        // this.quantificador = quantificador;   
    }
}
