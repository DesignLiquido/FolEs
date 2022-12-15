import { Declaracao } from "../declaracoes";
import { Simbolo } from "../lexador";
import { ErroAvaliadorSintatico } from "./erro-avaliador-sintatico";

import { Modificador } from "../modificadores";
import { SeletorReversoModificador } from "../modificadores/superclasse/seletor-reverso-modificador";

import tiposDeSimbolos from "../tipos-de-simbolos/css";

export class AvaliadorSintaticoReverso {
    simbolos: Simbolo[];
    erros: ErroAvaliadorSintatico[];

    atual: number;
    
    constructor() {
        this.simbolos = [];
    }

    erro(simbolo: Simbolo, mensagemDeErro: string): ErroAvaliadorSintatico {
        const excecao = new ErroAvaliadorSintatico(simbolo, mensagemDeErro);
        this.erros.push(excecao);
        return excecao;
    }

    estaNoFinal(): boolean {
        return this.atual === this.simbolos.length;
    }

    avancarEDevolverAnterior(): Simbolo {
        if (!this.estaNoFinal()) this.atual += 1;
        return this.simbolos[this.atual - 1];
    }

    verificarTipoSimboloAtual(tipo: string): boolean {
        if (this.estaNoFinal()) return false;
        return this.simbolos[this.atual].tipo === tipo;
    }

    consumir(tipo: string, mensagemDeErro: string): Simbolo {
        if (this.verificarTipoSimboloAtual(tipo)) 
            return this.avancarEDevolverAnterior();
        throw this.erro(this.simbolos[this.atual], mensagemDeErro);
    }

    declaracaoPorSeletor(): Declaracao {
        // TODO: Pensar lógica para seletor de classes.
        this.avancarEDevolverAnterior();
        return null;
    }

    declaracaoPorTag(): Declaracao {
        const simboloSeletor = this.avancarEDevolverAnterior();

        this.consumir(
            tiposDeSimbolos.CHAVE_ESQUERDA,
            "Esperado '{' após declaração de seletor."
        );

        const modificadores: Modificador[] = [];
        while (!this.verificarTipoSimboloAtual(tiposDeSimbolos.CHAVE_DIREITA)) {
            const modificador = this.consumir(
                tiposDeSimbolos.IDENTIFICADOR,
                "Esperado nome do atributo de identificação."
            );

            this.consumir(
                tiposDeSimbolos.DOIS_PONTOS,
                `Esperado ':' após declaração de modificador '${modificador.lexema}'.`
            );

            const valorModificador = this.avancarEDevolverAnterior();
            const quantificador = this.avancarEDevolverAnterior();

            this.consumir(
                tiposDeSimbolos.PONTO_E_VIRGULA,
                `Esperado ';' após declaração de valor de modificador '${modificador.lexema}'.`
            );

            const classeModificadora = new SeletorReversoModificador(
                modificador.lexema,
                valorModificador.lexema,
                quantificador.lexema
            );
            modificadores.push(classeModificadora as Modificador);
        }

        this.avancarEDevolverAnterior(); // chave direita
        return new Declaracao(simboloSeletor.lexema, modificadores);
    }

    declaracao(): any {
        if (this.estaNoFinal()) return null;
        const simboloAtual = this.simbolos[this.atual];
        if (!simboloAtual) return null;

        switch (simboloAtual.tipo) {
            case tiposDeSimbolos.TAG:
                return this.declaracaoPorTag();
            case tiposDeSimbolos.IDENTIFICADOR:
                return this.declaracaoPorSeletor();
        }
    }

    analisar(simbolos: Simbolo[]) {
        this.simbolos = simbolos;
        this.erros = [];
        this.atual = 0;

        const declaracoes: Declaracao[] = [];
        while (!this.estaNoFinal()) {
            declaracoes.push(this.declaracao());
        }

        return declaracoes;
    }
}