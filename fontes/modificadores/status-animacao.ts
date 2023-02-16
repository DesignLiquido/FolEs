import { valoresGlobais } from "./atributos/globais";
import { Modificador } from "./superclasse/modificador";

export class StatusAnimacao extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "executando": "running",
        "parada": "paused"
    }

    constructor(valor: string, quantificador?: string) {
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
