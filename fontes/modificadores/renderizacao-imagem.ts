import { Modificador } from "./superclasse/modificador";

export class RenderizacaoImagem extends Modificador {
    constructor(valor: string, quantificador: string) {
        super(
            ["renderizacao-imagem", "renderização-imagem"], 
            "imagem-rendering"
        );
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
