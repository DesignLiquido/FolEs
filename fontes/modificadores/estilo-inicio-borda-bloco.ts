import { Modificador } from "./superclasse/modificador";

export class EstiloInicioBordaBloco extends Modificador {
    nomesFoles: string[];
    propriedadeCss: string;
    valor: string;
    quantificador: string;

    constructor(valor: string, quantificador: string) {
        super(
            ["estilo-inicio-borda-bloco", "estilo-início-borda-bloco"], 
            "border-block-start-style"
        );
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
