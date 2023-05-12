import { valoresGlobais } from "./atributos/globais";
import { Modificador, PragmasModificador } from "./superclasse";

export class StatusAnimacao extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "executando": "running",
        "pausada": "paused"
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super(["status-animacao", "status-animação"], "animation-play-state");

        if (!(valor in this.valoresAceitos) && !(valor in valoresGlobais)) {
            throw new Error(`Valor ${valor} inválido para 'status-animação'. Valores aceitos: 
            ${Object.keys(this.valoresAceitos).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(valoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`);
        }

        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;
    }
}
