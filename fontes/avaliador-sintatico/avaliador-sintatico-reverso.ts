import { Declaracao } from "../declaracoes";
import { Simbolo } from "../lexador";
import { ErroAvaliadorSintatico } from "./erro-avaliador-sintatico";

import { Modificador } from "../modificadores";
import { SeletorReversoModificador } from "../modificadores/superclasse/seletor-reverso-modificador";
import { SeletorEstruturasHtml } from "../estruturas/seletor-estruturas-html";

import tiposDeSimbolos from "../tipos-de-simbolos/css";
import { Seletor, SeletorClasse, SeletorEstrutura, SeletorId } from "../seletores";
import { AvaliadorSintaticoInterface, ImportadorInterface } from "../interfaces";
import { HexadecimalCor } from "../valores/metodos/foles/hexadecimal-cor";
import { Estrutura } from "../estruturas/estrutura";
import { Valor } from "../valores/valor";
import { SeletorValorReverso } from "../valores/seletor-valor-reverso";

/**
 * O avaliador sintático reverso avalia símbolos de arquivos CSS, 
 * transformando-os em estruturas de alto nível prontas para
 * serem traduzidas para FolEs.
 */
export class AvaliadorSintaticoReverso implements AvaliadorSintaticoInterface {
    simbolos: Simbolo[];
    erros: ErroAvaliadorSintatico[];
    importador: ImportadorInterface;

    atual: number;

    constructor(importador: ImportadorInterface) {
        this.importador = importador;
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

    protected seletorPorEstrutura(): Seletor {
        const simboloSeletor = this.avancarEDevolverAnterior();
        const pseudoclasse = this.resolverPseudoclasse();
        return new SeletorEstrutura(
            new SeletorEstruturasHtml(
                simboloSeletor.lexema,
                {
                    linha: simboloSeletor.linha,
                    colunaInicial: simboloSeletor.colunaInicial,
                    colunaFinal: simboloSeletor.colunaFinal
                }
            ) as Estrutura,
            pseudoclasse
        );
    }

    protected seletorPorId(): Seletor {
        this.atual += 1;
        const simboloSeletor = this.avancarEDevolverAnterior();
        const pseudoclasse = this.resolverPseudoclasse();
        return new SeletorId(
            simboloSeletor.lexema,
            pseudoclasse,
            {
                linha: simboloSeletor.linha,
                colunaInicial: simboloSeletor.colunaInicial,
                colunaFinal: simboloSeletor.colunaFinal
            }
        );
    }

    protected seletorPorNomeDeClasse(): Seletor {
        this.atual += 1;
        const simboloSeletor = this.avancarEDevolverAnterior();
        const pseudoclasse = this.resolverPseudoclasse();
        return new SeletorClasse(
            simboloSeletor.lexema,
            pseudoclasse,
            {
                linha: simboloSeletor.linha,
                colunaInicial: simboloSeletor.colunaInicial,
                colunaFinal: simboloSeletor.colunaFinal
            }
        );
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
                    throw new Error("Não deveria cair aqui.");
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

    private resolverCor() {
        const codigoCor = this.avancarEDevolverAnterior();
        return new HexadecimalCor(codigoCor.lexema);
    }

    // TODO: Implementar lógica para resolver método
    private resolverMetodo(lexema: string): Valor {
        switch (lexema) {
            case "blur":
                this.consumir(tiposDeSimbolos.PARENTESE_ESQUERDO, "Esperado parêntese esquerdo após método 'blur'.");
                const valorBorrar = this.avancarEDevolverAnterior();
                let quantificadorBorrar;
                if (this.simbolos[this.atual].tipo === 'QUANTIFICADOR') {
                    quantificadorBorrar = this.avancarEDevolverAnterior();
                } else {
                    quantificadorBorrar = null;
                }
                this.consumir(tiposDeSimbolos.PARENTESE_DIREITO, "Esperado parêntese direito após método 'blur'.");
                return new SeletorValorReverso(
                    lexema,
                    [valorBorrar, quantificadorBorrar],
                );

            case "brightness":
                this.consumir(tiposDeSimbolos.PARENTESE_ESQUERDO, "Esperado parêntese esquerdo após método 'brightness'.");
                const valorBrilho = this.avancarEDevolverAnterior();
                let quantificadorBrilho;
                if (this.simbolos[this.atual].tipo === 'QUANTIFICADOR') {
                    quantificadorBrilho = this.avancarEDevolverAnterior();
                } else {
                    quantificadorBrilho = null;
                }
                this.consumir(tiposDeSimbolos.PARENTESE_DIREITO, "Esperado parêntese direito após método 'brightness'.");
                return new SeletorValorReverso(
                    lexema,
                    [valorBrilho, quantificadorBrilho],
                );

            case "calc":
                this.consumir(tiposDeSimbolos.PARENTESE_ESQUERDO, "Esperado parêntese esquerdo após método 'calc'.");
                const valorCalc1 = this.avancarEDevolverAnterior();
                const quantificadorCalc1 = this.avancarEDevolverAnterior();
                const operadorCalc = this.avancarEDevolverAnterior();
                const valorCalc2 = this.avancarEDevolverAnterior();
                const quantificadorCalc2 = this.avancarEDevolverAnterior();
                
                this.consumir(tiposDeSimbolos.PARENTESE_DIREITO, "Esperado parêntese direito após método 'calc'.");
                return new SeletorValorReverso(
                    lexema,
                    [valorCalc1, quantificadorCalc1, operadorCalc, valorCalc2, quantificadorCalc2],
                );


        }
    }

    private valorModificador() {
        const valorModificador = this.avancarEDevolverAnterior();

        switch (valorModificador.tipo) {
            case tiposDeSimbolos.CERQUILHA:
                return this.resolverCor();
            case tiposDeSimbolos.METODO:
                return this.resolverMetodo(valorModificador.lexema);
            default:
                return valorModificador;
        }
    }

    private resolverModificador(): Modificador {
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
        if (valorModificador instanceof Simbolo && valorModificador.tipo === tiposDeSimbolos.NUMERO) {
            quantificador = this.avancarEDevolverAnterior();
        }

        this.consumir(
            tiposDeSimbolos.PONTO_E_VIRGULA,
            `Esperado ';' após declaração de valor de modificador '${modificador.lexema}'.`
        );

        const classeModificadora = new SeletorReversoModificador(
            modificador.lexema,
            valorModificador instanceof Simbolo ? valorModificador.lexema : valorModificador,
            quantificador && quantificador.hasOwnProperty('lexema') ?
                quantificador.lexema :
                quantificador,
            {
                linha: modificador.linha,
                colunaInicial: modificador.colunaInicial,
                colunaFinal: modificador.colunaFinal
            }
        );

        return classeModificadora as Modificador;
    }

    resolverModificadorEDeclaracoesAninhadas(): { modificadores: Modificador[], declaracoesAninhadas: Declaracao[] } {
        this.consumir(
            tiposDeSimbolos.CHAVE_ESQUERDA,
            "Esperado '{' após declaração de seletor."
        );

        const modificadores: Modificador[] = [];
        const declaracoesAninhadas: Declaracao[] = [];
        while (!this.verificarTipoSimboloAtual(tiposDeSimbolos.CHAVE_DIREITA)) {
            switch (this.simbolos[this.atual].tipo) {
                case tiposDeSimbolos.IDENTIFICADOR:
                    const modificador = this.resolverModificador();
                    modificadores.push(modificador);
                    break;
                default:
                    const declaracaoAninhada = this.declaracao();
                    declaracoesAninhadas.push(declaracaoAninhada);
                    break;
            }
        }

        this.avancarEDevolverAnterior(); // chave direita
        return {
            modificadores,
            declaracoesAninhadas
        };
    }

    declaracao(): Declaracao | null {
        if (this.estaNoFinal()) return null;
        const seletores = this.resolverSeletores();
        const modificadorEDeclaracoesAninhadas = this.resolverModificadorEDeclaracoesAninhadas();

        return new Declaracao(
            seletores,
            modificadorEDeclaracoesAninhadas.modificadores,
            modificadorEDeclaracoesAninhadas.declaracoesAninhadas
        );
    }

    analisar(simbolos: Simbolo[]): Declaracao[] {
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