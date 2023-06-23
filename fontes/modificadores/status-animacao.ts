import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class StatusAnimacao extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "executando": "running",
        "pausada": "paused"
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super(["status-animacao", "status-animação"], "animation-play-state");

        validarValores('status-animação', valor, this.valoresAceitos);

        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;
    }
}
