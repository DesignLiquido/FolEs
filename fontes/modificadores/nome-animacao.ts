import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class NomeAnimacao extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "nenhum": "none",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador, valorVariavel: boolean = false) {
        super(["nome-animacao", "nome-animação"], "animation-name", pragmas);

        if (!valorVariavel) validarValores('nome-animação', valor, this.valoresAceitos);
        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;
    }
}
