import { ErroAvaliadorSintatico } from ".";
import { Declaracao } from "../declaracoes";
import { Simbolo } from "../lexador";
import { Modificador } from "../modificadores";
import { SeletorModificador } from "../modificadores/superclasse";
import { Metodo } from "../valores/metodos/metodo";
import { Valor } from "../valores/valor";
import { SeletorValor } from "../valores/seletor-valor";
import tiposDeSimbolos from "../tipos-de-simbolos/foles";

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
                this.consumir(tiposDeSimbolos.VIRGULA, "Esperado vírgula após argumento de cor vermelha.");
                const azul = this.avancarEDevolverAnterior();
                this.consumir(tiposDeSimbolos.PARENTESE_DIREITO, "Esperado parêntese direito após argumentos de método 'rgb'.");
                return new SeletorValor(
                    lexema,
                    [vermelho, verde, azul]
                );

                case "rgba":
                    this.consumir(tiposDeSimbolos.PARENTESE_ESQUERDO, "Esperado parêntese esquerdo após método 'rgb'.");
                    const vermelhoRgba = this.avancarEDevolverAnterior();
                    this.consumir(tiposDeSimbolos.VIRGULA, "Esperado vírgula após argumento de cor vermelha.");
                    const verdeRgba = this.avancarEDevolverAnterior();
                    this.consumir(tiposDeSimbolos.VIRGULA, "Esperado vírgula após argumento de cor vermelha.");
                    const azulRgba = this.avancarEDevolverAnterior();
                    this.consumir(tiposDeSimbolos.PARENTESE_DIREITO, "Esperado parêntese direito após argumentos de método 'rgb'.");
                    return new SeletorValor(
                        lexema,
                        [vermelhoRgba, verdeRgba, azulRgba]
                    );
        }
        return null;
    }

    valorModificador(): any {
        const modificador = this.avancarEDevolverAnterior();

        if (modificador.tipo === tiposDeSimbolos.METODO) {
            return this.resolverMetodo(modificador.lexema);
        }

        return modificador;
    }

    declaracaoPorSeletor(lexema: string): Declaracao {
        return this.declaracaoDeclaracao(lexema);
    }

    declaracaoPorEstrutura(): Declaracao {
        return this.declaracaoDeclaracao();
    }

    declaracaoDeclaracao(placeholder: string = null): Declaracao {
        let simboloSeletor = this.avancarEDevolverAnterior();

        if (placeholder) simboloSeletor = this.avancarEDevolverAnterior();

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

            const valorModificador = this.valorModificador();
            let quantificador;
            if (!(valorModificador instanceof Metodo)) {
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
                    quantificador
            );

            modificadores.push(classeModificadora as Modificador);
        }

        this.avancarEDevolverAnterior(); // chave direita
        return new Declaracao(
            simboloSeletor.lexema,
            modificadores,
            placeholder
        );
    }

    declaracao(): any {
        if (this.estaNoFinal()) return null;
        const simboloAtual = this.simbolos[this.atual];
        if (!simboloAtual) return null;

        switch (simboloAtual.tipo) {
            case tiposDeSimbolos.ESTRUTURA:
                return this.declaracaoPorEstrutura();
            case tiposDeSimbolos.PERCENTUAL:
                return this.declaracaoPorSeletor(simboloAtual.lexema);
            case tiposDeSimbolos.NOME_DE_CLASSE:
                return this.declaracaoPorSeletor(simboloAtual.lexema);
            case tiposDeSimbolos.ID_DO_ELEMENTO:
                return this.declaracaoPorSeletor(simboloAtual.lexema);
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
