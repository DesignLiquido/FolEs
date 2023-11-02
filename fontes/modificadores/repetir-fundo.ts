import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class RepetirFundo extends Modificador {
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
        super("repetir-fundo", "background-repeat", pragmas);

        // Também pode aceitar dois valores
        // Ex.: repetir-fundo: repetir espaçar;

        // TODO: Implementar lógica para cobrir todos os casos.
        validarValores('repetir-fundo', valor, this.valoresAceitos);

        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;
    }
}
