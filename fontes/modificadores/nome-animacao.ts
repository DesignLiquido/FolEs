import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class NomeAnimacao extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "nenhum": "none",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super(["nome-animacao", "nome-animação"], "animation-name", pragmas);

        /* 
            nome-animação pode receber qualquer valor correspondente ao <custom-ident>,
            (identidade-personalizada), cuja sintaxe permite a combinação de letras, números e símbolos.

            https://developer.mozilla.org/en-US/docs/Web/CSS/custom-ident

            TODO: Adaptar lógica para cobrir o recebimento correto de valores
        */

        validarValores('nome-animação', valor, this.valoresAceitos);
        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;
    }
}
