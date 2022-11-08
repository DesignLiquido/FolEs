import { Modificador } from "./superclasse/modificador";

export class EstiloInicioBordaAlinhada extends Modificador {
    nomesFoles: string[];
    propriedadeCss: string;
    valor: string;
    quantificador: string;

    constructor(valor: string, quantificador: string) {
        super(
            ["estilo-inicio-borda-alinhada", "estilo-início-borda-alinhada"], 
            "border-inline-start-style"
        );
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
