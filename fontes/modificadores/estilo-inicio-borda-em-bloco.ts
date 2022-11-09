import { Modificador } from "./superclasse/modificador";

export class EstiloInicioBordaEmBloco extends Modificador {
    nomesFoles: string[];
    propriedadeCss: string;
    valor: string;
    quantificador: string;

    constructor(valor: string, quantificador: string) {
        super(
            ["estilo-inicio-borda-em-bloco", "estilo-início-borda-em-bloco"], 
            "border-block-start-style"
        );
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
