import { Modificador } from "./superclasse/modificador";

export class InserirInicioBloco extends Modificador {
    nomesFoles: string[];
    propriedadeCss: string;
    valor: string;
    quantificador: string;

    constructor(valor: string, quantificador: string) {
        super(
            ["inserir-inicio-bloco", "inserir-início-bloco"],
            "inset-block-start"
        );
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
