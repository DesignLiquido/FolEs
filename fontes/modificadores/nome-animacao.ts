import { Modificador } from "./superclasse/modificador";

export class NomeAnimacao extends Modificador {
    constructor(valor: string, quantificador?: string) {
        super(["nome-animacao", "nome-animação"], "animation-name");

        /* 
            nome-animação pode receber qualquer valor correspondente ao <custom-ident>,
            (identidade-personalizada), cuja sintaxe permite a combinação de letras, números e símbolos.

            https://developer.mozilla.org/en-US/docs/Web/CSS/custom-ident

            TODO: Adaptar lógica para cobrir o recebimento correto de valores
        */

        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;
    }
}
