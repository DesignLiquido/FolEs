import { Declaracao } from "../declaracoes";
import { Simbolo } from "../lexador";
import { ErroAvaliadorSintatico } from "./erro-avaliador-sintatico";

import { Modificador } from "../modificadores";
import { SeletorReversoModificador } from "../modificadores/superclasse/seletor-reverso-modificador";
import { SeletorEstruturasHtml } from "../estruturas/seletor-estruturas-html";

import tiposDeSimbolos from "../tipos-de-simbolos/css";
import { Seletor } from "../seletores";

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

    protected resolverPseudoclasse() {
        let pseudoclasse;

        // TODO: Validar pseudoclasse.
        if (this.verificarTipoSimboloAtual(tiposDeSimbolos.DOIS_PONTOS)) {
            this.avancarEDevolverAnterior();
            pseudoclasse = this.consumir(
                tiposDeSimbolos.IDENTIFICADOR,
                "Esperado nome de pseudoclasse."
            );
        }

        return pseudoclasse;
    }

    protected seletorPorEspacoReservado(): Seletor {
        return undefined;
    }

    protected seletorPorEstrutura(): Seletor {
        const simboloSeletor = this.avancarEDevolverAnterior();
        const pseudoclasse = this.resolverPseudoclasse();
        return new SeletorEstruturasHtml(
            simboloSeletor.lexema,
            { 
                linha: simboloSeletor.linha,
                colunaInicial: simboloSeletor.colunaInicial,
                colunaFinal: simboloSeletor.colunaFinal
            }
        ) as Seletor;
    }

    protected seletorPorId(): Seletor {
        return undefined;
    }

    protected seletorPorNomeDeClasse(): Seletor {
        return undefined;
    }

    /**
     * Resolve os seletores. Por enquanto resolve apenas um seletor por vez.
     * @param espacoReservado 
     */
    protected resolverSeletores(espacoReservado: string = null): Seletor[] {
        const seletores: Seletor[] = [];

        do {
            switch (this.simbolos[this.atual].tipo) {
                case tiposDeSimbolos.TAG:
                    seletores.push(this.seletorPorEstrutura());
                    break;
                case tiposDeSimbolos.IDENTIFICADOR:
                    seletores.push(this.seletorPorEspacoReservado());
                    break;
                case tiposDeSimbolos.PONTO:
                    seletores.push(this.seletorPorNomeDeClasse());
                    break;
                case tiposDeSimbolos.CERQUILHA:
                    seletores.push(this.seletorPorId());
                    break;
            }
        } while (this.simbolos[this.atual].tipo === tiposDeSimbolos.VIRGULA);

        return seletores;
    }

    resolverModificadores(): Modificador[] {
        // const simboloSeletor = this.avancarEDevolverAnterior();

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
        return modificadores;
    }

    declaracao(): any {
        if (this.estaNoFinal()) return null;
        const seletores = this.resolverSeletores();
        const modificadores = this.resolverModificadores();

        return new Declaracao(
            seletores,
            modificadores
        );
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