import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class StatusAnimacao extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "executando": "running",
        "pausada": "paused"
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador, valorVariavel: boolean = false) {
        super(["status-animacao", "status-animação"], "animation-play-state", pragmas);

        if (!valorVariavel) validarValores('status-animação', valor, this.valoresAceitos);

        this.valor = valor;
    }
}
