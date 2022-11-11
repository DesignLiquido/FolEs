import { Modificador } from "./superclasse/modificador";

export class RenderizacaoTexto extends Modificador {
    constructor(valor: string, quantificador: string) {
        super(
            ["renderizacao-texto", "renderização-texto"], 
            "text-rendering"
        );
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
