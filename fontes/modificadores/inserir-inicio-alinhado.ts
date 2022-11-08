import { Modificador } from "./superclasse/modificador";

export class InserirInicioAlinhado extends Modificador {
    nomesFoles: string[];
    propriedadeCss: string;
    valor: string;
    quantificador: string;

    constructor(valor: string, quantificador: string) {
        super(
            ["inserir-inicio-alinhado", "inserir-início-alinhado"],
            "inset-inline-start"
        );
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
