import { ErroAvaliadorSintatico } from ".";
import { Declaracao } from "../declaracoes";
import { Simbolo } from "../lexador";
import { Modificador } from "../modificadores";
import { SeletorModificador } from "../modificadores/superclasse";
import { Metodo } from "../valores/metodos/metodo";
import { Valor } from "../valores/valor";
import { SeletorValor } from "../valores/seletor-valor";

import tiposDeSimbolos from "../tipos-de-simbolos/foles";
import { Seletor } from "../seletores/seletor";
import { SeletorEstrutura } from "../seletores/seletor-estrutura";

export class AvaliadorSintatico {
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

    resolverMetodo(lexema: string): Valor {
        switch (lexema) {
            case "rgb":
                this.consumir(tiposDeSimbolos.PARENTESE_ESQUERDO, "Esperado parêntese esquerdo após método 'rgb'.");
                const vermelho = this.avancarEDevolverAnterior();
                this.consumir(tiposDeSimbolos.VIRGULA, "Esperado vírgula após argumento de cor vermelha.");
                const verde = this.avancarEDevolverAnterior();
                this.consumir(tiposDeSimbolos.VIRGULA, "Esperado vírgula após argumento de cor verde.");
                const azul = this.avancarEDevolverAnterior();
                this.consumir(tiposDeSimbolos.PARENTESE_DIREITO, "Esperado parêntese direito após argumentos de método 'rgb'.");
                return new SeletorValor(
                    lexema,
                    [vermelho, verde, azul]
                );

            case "rgba":
                this.consumir(tiposDeSimbolos.PARENTESE_ESQUERDO, "Esperado parêntese esquerdo após método 'rgba'.");
                const vermelhoRgba = this.avancarEDevolverAnterior();
                this.consumir(tiposDeSimbolos.VIRGULA, "Esperado vírgula após argumento de cor vermelha.");
                const verdeRgba = this.avancarEDevolverAnterior();
                this.consumir(tiposDeSimbolos.VIRGULA, "Esperado vírgula após argumento de cor verde.");
                const azulRgba = this.avancarEDevolverAnterior();
                this.consumir(tiposDeSimbolos.PARENTESE_DIREITO, "Esperado parêntese direito após argumentos de método 'rgba'.");
                return new SeletorValor(
                    lexema,
                    [vermelhoRgba, verdeRgba, azulRgba]
                );

            case "hsl":
                this.consumir(tiposDeSimbolos.PARENTESE_ESQUERDO, "Esperado parêntese esquerdo após método 'hsl'.");
                const HdeHSL = this.avancarEDevolverAnterior();
                this.consumir(tiposDeSimbolos.VIRGULA, "Esperado vírgula após argumento de matiz (H) no método 'hsl'.");
                const SdeHSL = this.avancarEDevolverAnterior();
                this.consumir(tiposDeSimbolos.QUANTIFICADOR, "Esperado símbolo percentual após argumento de saturação (S) no método 'hsl'.");
                this.consumir(tiposDeSimbolos.VIRGULA, "Esperado vírgula após argumento de saturação (S) no método 'hsl'.");
                const LdeHSL = this.avancarEDevolverAnterior();
                this.consumir(tiposDeSimbolos.QUANTIFICADOR, "Esperado símbolo percentual após argumento de luminosidade (L) no método 'hsl'.");
                this.consumir(tiposDeSimbolos.PARENTESE_DIREITO, "Esperado parêntese direito após argumentos de método 'hsl'.");
                return new SeletorValor(
                    lexema,
                    [HdeHSL, SdeHSL, LdeHSL]
                );

            case "hsla":
                this.consumir(tiposDeSimbolos.PARENTESE_ESQUERDO, "Esperado parêntese esquerdo após método 'hsla'.");
                const HdeHSLA = this.avancarEDevolverAnterior();
                this.consumir(tiposDeSimbolos.VIRGULA, "Esperado vírgula após argumento de matiz (H) no método 'hsla'.");
                const SdeHSLA = this.avancarEDevolverAnterior();
                this.consumir(tiposDeSimbolos.QUANTIFICADOR, "Esperado símbolo percentual após argumento de saturação (S) no método 'hsla'.");
                this.consumir(tiposDeSimbolos.VIRGULA, "Esperado vírgula após argumento de saturação (S) no método 'hsla'.");
                const LdeHSLA = this.avancarEDevolverAnterior();
                this.consumir(tiposDeSimbolos.QUANTIFICADOR, "Esperado símbolo percentual após argumento de luminosidade (L) no método 'hsla'.");
                this.consumir(tiposDeSimbolos.PARENTESE_DIREITO, "Esperado parêntese direito após argumentos de método 'hsla'.");
                return new SeletorValor(
                    lexema,
                    [HdeHSLA, SdeHSLA, LdeHSLA]
                );

            case "#":
                const codigoHEX =  this.consumir(tiposDeSimbolos.IDENTIFICADOR, "Esperado código HEX válido após #'.");
                return new SeletorValor(
                    'hex',
                    [codigoHEX.lexema],
                );
        }
        return null;
    }

    valorModificador(): any {
        const valorModificador = this.avancarEDevolverAnterior();

        switch (valorModificador.tipo) {
            case tiposDeSimbolos.METODO:
                return this.resolverMetodo(valorModificador.lexema);
            default:
                return valorModificador;
        }
    }

    protected seletorPorEspacoReservado(): Seletor {
        return undefined;
    }

    protected seletorPorEstrutura(): Seletor {
        return new SeletorEstrutura();
    }

    protected seletorPorId(): Seletor {
        return undefined;
    }

    protected seletorPorNomeDeClasse(): Seletor {
        return undefined;
    }

    /**
     * Resolve os seletores. Por enquanto resolve apenas um seletor por vez.
     * @param placeholder 
     */
    protected resolverSeletores(placeholder: string = null): Seletor[] {
        const seletores: Seletor[] = [];

        do {
            switch (this.simbolos[this.atual].tipo) {
                case tiposDeSimbolos.ESTRUTURA:
                    seletores.push(this.seletorPorEstrutura());
                    break;
                case tiposDeSimbolos.PERCENTUAL:
                    seletores.push(this.seletorPorEspacoReservado());
                    break;
                case tiposDeSimbolos.NOME_DE_CLASSE:
                    seletores.push(this.seletorPorNomeDeClasse());
                    break;
                case tiposDeSimbolos.ID_DO_ELEMENTO:
                    seletores.push(this.seletorPorId());
                    break;
            }
        } while (this.simbolos[this.atual].tipo === tiposDeSimbolos.VIRGULA);
        

        let simboloSeletor = this.avancarEDevolverAnterior();
        let pseudoclasse;

        if (placeholder) simboloSeletor = this.avancarEDevolverAnterior();

        // TODO: Validar pseudoclasse.
        if (this.verificarTipoSimboloAtual(tiposDeSimbolos.DOIS_PONTOS)) {
            this.avancarEDevolverAnterior();
            pseudoclasse = this.consumir(
                tiposDeSimbolos.IDENTIFICADOR,
                "Esperado nome de pseudoclasse."
            );
        }

        return seletores;
    }

    declaracaoModificadores(): Modificador[] {
        this.consumir(
            tiposDeSimbolos.CHAVE_ESQUERDA,
            "Esperado '{' após declaração de seletor."
        );

        const modificadores: Modificador[] = [];
        while (!this.verificarTipoSimboloAtual(tiposDeSimbolos.CHAVE_DIREITA)) {
            const modificador = this.consumir(
                tiposDeSimbolos.IDENTIFICADOR,
                "Esperado nome do modificador."
            );

            this.consumir(
                tiposDeSimbolos.DOIS_PONTOS,
                "Esperado ':' após nome do modificador."
            );

            const valorModificador = this.valorModificador();
            let quantificador;
            // TODO: Pensar num teste melhor pra isso.
            /*if (!(valorModificador instanceof Metodo)) {
                quantificador = this.avancarEDevolverAnterior();
            }*/
            if (valorModificador.hasOwnProperty('tipo') && valorModificador.tipo === tiposDeSimbolos.NUMERO) {
                quantificador = this.avancarEDevolverAnterior();
            }

            this.consumir(
                tiposDeSimbolos.PONTO_E_VIRGULA,
                `Esperado ';' após declaração de valor de modificador '${modificador.lexema}'.`
            );

            const classeModificadora = new SeletorModificador(
                modificador.lexema,
                valorModificador.hasOwnProperty('lexema') ? valorModificador.lexema : valorModificador,
                quantificador && quantificador.hasOwnProperty('lexema') ?
                    quantificador.lexema :
                    quantificador,
                { 
                    linha: modificador.linha,
                    colunaInicial: modificador.colunaInicial,
                    colunaFinal: modificador.colunaFinal
                }
            );

            modificadores.push(classeModificadora as Modificador);
        }

        this.avancarEDevolverAnterior(); // chave direita
        return modificadores;
    }

    declaracao(): any {
        if (this.estaNoFinal()) return null;
        const seletores = this.resolverSeletores();
        const modificadores = this.declaracaoModificadores();

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
