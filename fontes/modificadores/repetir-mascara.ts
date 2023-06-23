import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

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

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super(["repetir-mascara", "repetir-máscara"], "mask-repeat");

        // Também pode aceitar dois ou múltiplos valores
        // Ex.: repetir-máscara: repetir espaçar;

        // TODO: Implementar lógica para cobrir todos os casos.
        validarValores('repetir-máscara', valor, this.valoresAceitos);

        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;
    }
}
