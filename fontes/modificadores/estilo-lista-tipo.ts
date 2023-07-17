import { Modificador, PragmasModificador } from "./superclasse";

export class EstiloListaTipo extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("estilo-lista-tipo", "list-style-type");

        // Modificador recebe uma lista imensa de valores específicos,
        // ze valores do tipo <custom-ident>

        // TODO: Criar lógica de atribuição de valores para modificador
        // de acordo com: https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-type
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
