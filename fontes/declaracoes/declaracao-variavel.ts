import { Metodo } from "../valores/metodos/foles/metodo";
import { Declaracao } from "./declaracao";

export class DeclaracaoVariavel extends Declaracao {
    nome: string;
    valor: Metodo | string;

    constructor(
        nome: string, 
        valor: Metodo | string 
    ) {
        super();
        this.nome = nome;
        this.valor = valor;
    }
}