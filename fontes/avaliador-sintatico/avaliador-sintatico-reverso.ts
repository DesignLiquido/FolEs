import { BlocoDeclaracao } from "../declaracoes";
import { Simbolo } from "../lexador";
import { ErroAvaliadorSintatico } from "./erro-avaliador-sintatico";

import { Modificador } from "../modificadores";
import { SeletorReversoModificador } from "../modificadores/superclasse/seletor-reverso-modificador";
import { SeletorEstruturasHtml } from "../estruturas/seletor-estruturas-html";

import tiposDeSimbolos from "../tipos-de-simbolos/css";
import {
    Seletor,
    SeletorClasse,
    SeletorEstrutura,
    SeletorId,
} from "../seletores";
import {
    AvaliadorSintaticoInterface,
    ImportadorInterface,
    SimboloInterface,
} from "../interfaces";
import { HexadecimalCor } from "../valores/metodos/foles/hexadecimal-cor";
import { Estrutura } from "../estruturas/estrutura";
import { Valor } from "../valores/valor";
import { SeletorValorReverso } from "../valores/seletor-valor-reverso";
import { Metodo } from "../valores/metodos/foles/metodo";
import { MetodoCss } from "../valores/metodos/css/metodo-css";
import { ValorAbreviacao, ValorNumerico, ValorQualitativo, ValorTexto, ValorVirgula } from "../valores";
import { ReferenciaVariavel } from "../valores/referencia-variavel";
import { valoresGerais } from "../modificadores/atributos/gerais";
import { ModificadoresValorPersonalizado } from "../../testes/listas/valores-personalizados";

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

    declaracaoPorSeletor(): BlocoDeclaracao {
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
                "Esperado nome de pseudoclasse.",
            );
        }

        return pseudoclasse;
    }

    protected seletorPorEstrutura(): Seletor {
        const simboloSeletor = this.avancarEDevolverAnterior();
        const pseudoclasse = this.resolverPseudoclasse();
        return new SeletorEstrutura(
            new SeletorEstruturasHtml(simboloSeletor.lexema, {
                linha: simboloSeletor.linha,
                colunaInicial: simboloSeletor.colunaInicial,
                colunaFinal: simboloSeletor.colunaFinal,
            }) as Estrutura,
            pseudoclasse,
        );
    }

    protected seletorPorId(): Seletor {
        this.atual += 1;
        const simboloSeletor = this.avancarEDevolverAnterior();
        const pseudoclasse = this.resolverPseudoclasse();
        return new SeletorId(simboloSeletor.lexema, pseudoclasse, {
            linha: simboloSeletor.linha,
            colunaInicial: simboloSeletor.colunaInicial,
            colunaFinal: simboloSeletor.colunaFinal,
        });
    }

    protected seletorPorNomeDeClasse(): Seletor {
        this.atual += 1;
        const simboloSeletor = this.avancarEDevolverAnterior();
        const pseudoclasse = this.resolverPseudoclasse();
        return new SeletorClasse(simboloSeletor.lexema, pseudoclasse, {
            linha: simboloSeletor.linha,
            colunaInicial: simboloSeletor.colunaInicial,
            colunaFinal: simboloSeletor.colunaFinal,
        });
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
                case tiposDeSimbolos.PONTO:
                    seletores.push(this.seletorPorNomeDeClasse());
                    break;
                case tiposDeSimbolos.CERQUILHA:
                    seletores.push(this.seletorPorId());
                    break;
                case tiposDeSimbolos.IDENTIFICADOR:
                    throw new Error("Não deveria cair aqui.");
            }
        } while (this.simbolos[this.atual].tipo === tiposDeSimbolos.VIRGULA);

        return seletores;
    }

    private resolverCor(): Metodo {
        const codigoCor = this.avancarEDevolverAnterior();
        return new HexadecimalCor(codigoCor.lexema);
    }

    // TODO: Implementar lógica para resolver método
    private resolverMetodo(lexema: string): Valor {
        switch (lexema) {
            case "annotation":
                this.consumir(
                    tiposDeSimbolos.PARENTESE_ESQUERDO,
                    "Esperado parêntese esquerdo após método 'annotation'.",
                );

                const valorAnotacao = this.avancarEDevolverAnterior();

                this.consumir(
                    tiposDeSimbolos.PARENTESE_DIREITO,
                    "Esperado parêntese direito após argumento do método annotation.",
                );
                return new SeletorValorReverso(lexema, [valorAnotacao]) as MetodoCss;

            case "blur":
                this.consumir(
                    tiposDeSimbolos.PARENTESE_ESQUERDO,
                    "Esperado parêntese esquerdo após método 'blur'.",
                );
                const valorBorrar = this.avancarEDevolverAnterior();
                let quantificadorBorrar;
                if (this.simbolos[this.atual].tipo === "QUANTIFICADOR") {
                    quantificadorBorrar = this.avancarEDevolverAnterior();
                } else {
                    quantificadorBorrar = null;
                }
                this.consumir(
                    tiposDeSimbolos.PARENTESE_DIREITO,
                    "Esperado parêntese direito após método 'blur'.",
                );
                return new SeletorValorReverso(lexema, [valorBorrar, quantificadorBorrar]) as MetodoCss;

            case "brightness":
                this.consumir(
                    tiposDeSimbolos.PARENTESE_ESQUERDO,
                    "Esperado parêntese esquerdo após método 'brightness'.",
                );
                const valorBrilho = this.avancarEDevolverAnterior();
                let quantificadorBrilho;
                if (this.simbolos[this.atual].tipo === "QUANTIFICADOR") {
                    quantificadorBrilho = this.avancarEDevolverAnterior();
                } else {
                    quantificadorBrilho = null;
                }
                this.consumir(
                    tiposDeSimbolos.PARENTESE_DIREITO,
                    "Esperado parêntese direito após método 'brightness'.",
                );
                return new SeletorValorReverso(lexema, [valorBrilho, quantificadorBrilho]) as MetodoCss;

            case "calc":
                this.consumir(
                    tiposDeSimbolos.PARENTESE_ESQUERDO,
                    "Esperado parêntese esquerdo após método 'calc'.",
                );
                const valorCalc1 = this.avancarEDevolverAnterior();
                const quantificadorCalc1 = this.avancarEDevolverAnterior();
                const operadorCalc = this.avancarEDevolverAnterior();
                const valorCalc2 = this.avancarEDevolverAnterior();
                const quantificadorCalc2 = this.avancarEDevolverAnterior();

                this.consumir(
                    tiposDeSimbolos.PARENTESE_DIREITO,
                    "Esperado parêntese direito após método 'calc'.",
                );
                return new SeletorValorReverso(
                    lexema,
                    [
                        valorCalc1,
                        quantificadorCalc1,
                        operadorCalc,
                        valorCalc2,
                        quantificadorCalc2,
                    ]
                ) as MetodoCss;

            case "character-variant":
                this.consumir(
                    tiposDeSimbolos.PARENTESE_ESQUERDO,
                    "Esperado parêntese esquerdo após método 'character-variant'.",
                );

                const valorVariarCaractere = this.avancarEDevolverAnterior();

                this.consumir(
                    tiposDeSimbolos.PARENTESE_DIREITO,
                    "Esperado parêntese direito após argumento do método character-variant.",
                );
                return new SeletorValorReverso(lexema, [valorVariarCaractere]) as MetodoCss;

            case "circle":
                this.consumir(
                    tiposDeSimbolos.PARENTESE_ESQUERDO,
                    "Esperado parêntese esquerdo após método 'circle'.",
                );

                const valorCircular = this.avancarEDevolverAnterior();

                let quantificadorCircular: Simbolo = null;
                if (this.simbolos[this.atual].tipo === 'QUANTIFICADOR') {
                    quantificadorCircular = this.avancarEDevolverAnterior();
                }

                this.consumir(
                    tiposDeSimbolos.PARENTESE_DIREITO,
                    "Esperado parêntese direito após método 'circle'.",
                );

                return new SeletorValorReverso(lexema, [
                    valorCircular,
                    quantificadorCircular,
                ]) as MetodoCss;

            case "clamp": {
                this.consumir(
                    tiposDeSimbolos.PARENTESE_ESQUERDO,
                    "Esperado parêntese esquerdo após método 'clamp'.",
                );
                const valorMin = this.avancarEDevolverAnterior();
                const quantificadorMin = this.avancarEDevolverAnterior();
                this.consumir(
                    tiposDeSimbolos.VIRGULA,
                    "Esperado vírgula após primeiro argumento do método 'clamp'.",
                );
                const valorMed = this.avancarEDevolverAnterior();
                const quantificadorMed = this.avancarEDevolverAnterior();
                this.consumir(
                    tiposDeSimbolos.VIRGULA,
                    "Esperado vírgula após segundo argumento do método 'clamp'.",
                );
                const valorMax = this.avancarEDevolverAnterior();
                const quantificadorMax = this.avancarEDevolverAnterior();
                this.consumir(
                    tiposDeSimbolos.PARENTESE_DIREITO,
                    "Esperado parêntese direito após segundo argumento do método clamp.",
                );
                return new SeletorValorReverso(
                    lexema,
                    [
                        valorMin,
                        quantificadorMin,
                        valorMed,
                        quantificadorMed,
                        valorMax,
                        quantificadorMax,
                    ]
                ) as MetodoCss;
            }

            case "contrast":
                this.consumir(
                    tiposDeSimbolos.PARENTESE_ESQUERDO,
                    "Esperado parêntese esquerdo após método 'contrast'.",
                );
                const valorContraste = this.avancarEDevolverAnterior();
                let quantificadorContraste;

                if (this.simbolos[this.atual].tipo === "QUANTIFICADOR") {
                    quantificadorContraste = this.avancarEDevolverAnterior();
                } else {
                    quantificadorContraste = null;
                }

                this.consumir(
                    tiposDeSimbolos.PARENTESE_DIREITO,
                    "Esperado parêntese direito após método 'contrast'.",
                );
                return new SeletorValorReverso(
                    lexema,
                    [
                        valorContraste,
                        quantificadorContraste,
                    ]
                ) as MetodoCss;

            case "counter":
                this.consumir(
                    tiposDeSimbolos.PARENTESE_ESQUERDO,
                    "Esperado parêntese esquerdo após método 'counter'.",
                );

                const nomeCounter = this.avancarEDevolverAnterior();

                let estiloCounter = null;
                if (this.simbolos[this.atual].tipo === "VIRGULA") {
                    this.consumir(
                        tiposDeSimbolos.VIRGULA,
                        "Esperada vírgula após primeiro parâmetro do método 'counter'.",
                    );

                    estiloCounter = this.avancarEDevolverAnterior();
                }

                this.consumir(
                    tiposDeSimbolos.PARENTESE_DIREITO,
                    "Esperado parêntese direito após método 'counter'.",
                );

                return new SeletorValorReverso(
                    lexema,
                    [
                        nomeCounter,
                        estiloCounter,
                    ]
                ) as MetodoCss;

            case "cubic-bezier":
                this.consumir(
                    tiposDeSimbolos.PARENTESE_ESQUERDO,
                    "Esperado parêntese esquerdo após método 'cubic-bezier'.",
                );
                const parametro1cubic = this.avancarEDevolverAnterior();
                this.consumir(
                    tiposDeSimbolos.VIRGULA,
                    "Esperado vírgula após primeiro argumento do método cubic-bezier.",
                );
                const parametro2cubic = this.avancarEDevolverAnterior();
                this.consumir(
                    tiposDeSimbolos.VIRGULA,
                    "Esperado vírgula após segundo argumento do método cubic-bezier.",
                );
                const parametro3cubic = this.avancarEDevolverAnterior();
                this.consumir(
                    tiposDeSimbolos.VIRGULA,
                    "Esperado vírgula após terceiro argumento do método cubic-bezier.",
                );
                const parametro4cubic = this.avancarEDevolverAnterior();
                this.consumir(
                    tiposDeSimbolos.PARENTESE_DIREITO,
                    "Esperado parêntese direito após quarto argumento do método curva-cúbica.",
                );
                return new SeletorValorReverso(
                    lexema,
                    [
                        parametro1cubic,
                        parametro2cubic,
                        parametro3cubic,
                        parametro4cubic,
                    ]
                ) as MetodoCss;

            case "drop-shadow": {
                this.consumir(
                    tiposDeSimbolos.PARENTESE_ESQUERDO,
                    "Esperado parêntese esquerdo após método 'drop-shadow'.",
                );
                let corSombra = null;
                if (this.simbolos[this.atual].tipo === "QUALITATIVO") {
                    corSombra = this.avancarEDevolverAnterior();
                }

                const valorSombra1 = this.avancarEDevolverAnterior();
                const quantificadorSombra1 = this.avancarEDevolverAnterior();

                const valorSombra2 = this.avancarEDevolverAnterior();
                const quantificadorSombra2 = this.avancarEDevolverAnterior();

                let valorSombra3;
                let quantificadorSombra3;
                if (this.simbolos[this.atual].tipo === "NUMERO") {
                    valorSombra3 = this.avancarEDevolverAnterior();
                    quantificadorSombra3 = this.avancarEDevolverAnterior();
                } else {
                    valorSombra3 = null;
                    quantificadorSombra3 = null;
                }

                if (this.simbolos[this.atual].tipo === "QUALITATIVO") {
                    corSombra = this.avancarEDevolverAnterior();
                }

                this.consumir(
                    tiposDeSimbolos.PARENTESE_DIREITO,
                    "Esperado parêntese direito após método 'drop-shadow'.",
                );
                return new SeletorValorReverso(lexema,
                    [
                        valorSombra1,
                        quantificadorSombra1,
                        valorSombra2,
                        quantificadorSombra2,
                        valorSombra3,
                        quantificadorSombra3,
                        corSombra,
                    ]
                ) as MetodoCss;
            }

            case "element":
                this.consumir(
                    tiposDeSimbolos.PARENTESE_ESQUERDO,
                    "Esperado parêntese esquerdo após método 'element'.",
                );

                const simboloElemento: Simbolo = this.avancarEDevolverAnterior();
                const referenciaElemento: Simbolo = this.avancarEDevolverAnterior();

                this.consumir(
                    tiposDeSimbolos.PARENTESE_DIREITO,
                    "Esperado parêntese direito após método 'element'.",
                );

                return new SeletorValorReverso(lexema, [simboloElemento, referenciaElemento]) as MetodoCss;

            case "ellipse":
                this.consumir(
                    tiposDeSimbolos.PARENTESE_ESQUERDO,
                    "Esperado parêntese esquerdo após método 'ellipse'.",
                );

                const valorElipse: Simbolo = this.avancarEDevolverAnterior();
                const quantificadorElipse: Simbolo = this.avancarEDevolverAnterior();
                const arrayValoresElipse: Array<Simbolo> = [valorElipse, quantificadorElipse];

                while (this.simbolos[this.atual].tipo !== 'PARENTESE_DIREITO') {
                    const proximoValorElipse: Simbolo = this.avancarEDevolverAnterior();
                    arrayValoresElipse.push(proximoValorElipse);
                }

                this.consumir(
                    tiposDeSimbolos.PARENTESE_DIREITO,
                    "Esperado parêntese direito após último argumento do método 'ellipse'.",
                );

                return new SeletorValorReverso(lexema, arrayValoresElipse) as MetodoCss;

            case "fit-content":
                this.consumir(
                    tiposDeSimbolos.PARENTESE_ESQUERDO,
                    "Esperado parêntese esquerdo após método 'fit-content'.",
                );
                const valorFit = this.avancarEDevolverAnterior();
                const quantificadorFit = this.avancarEDevolverAnterior();
                this.consumir(
                    tiposDeSimbolos.PARENTESE_DIREITO,
                    "Esperado parêntese direito após segundo argumento do método fit-content.",
                );
                return new SeletorValorReverso(
                    lexema,
                    [
                        valorFit["lexema"],
                        quantificadorFit["lexema"],
                    ]
                ) as MetodoCss;

            case "grayscale":
                this.consumir(
                    tiposDeSimbolos.PARENTESE_ESQUERDO,
                    "Esperado parêntese esquerdo após método 'grayscale'.",
                );
                const valorEscala = this.avancarEDevolverAnterior();
                let quantificadorEscala;
                if (this.simbolos[this.atual].tipo === "QUANTIFICADOR") {
                    quantificadorEscala = this.avancarEDevolverAnterior();
                } else {
                    quantificadorEscala = null;
                }
                this.consumir(
                    tiposDeSimbolos.PARENTESE_DIREITO,
                    "Esperado parêntese direito após método 'grayscale'.",
                );
                return new SeletorValorReverso(
                    lexema,
                    [
                        valorEscala,
                        quantificadorEscala,
                    ]
                ) as MetodoCss;

            case "hsl": {
                this.consumir(
                    tiposDeSimbolos.PARENTESE_ESQUERDO,
                    "Esperado parêntese esquerdo após método 'hsl'.",
                );
                const HdeHSL = this.avancarEDevolverAnterior();
                const SdeHSL = this.avancarEDevolverAnterior();
                this.consumir(
                    tiposDeSimbolos.QUANTIFICADOR,
                    "Esperado símbolo percentual após argumento de saturação (S) no método 'hsl'.",
                );
                const LdeHSL = this.avancarEDevolverAnterior();
                this.consumir(
                    tiposDeSimbolos.QUANTIFICADOR,
                    "Esperado símbolo percentual após argumento de luminosidade (L) no método 'hsl'.",
                );
                this.consumir(
                    tiposDeSimbolos.PARENTESE_DIREITO,
                    "Esperado parêntese direito após método 'hsl'.",
                );
                return new SeletorValorReverso(
                    lexema,
                    [
                        HdeHSL,
                        SdeHSL,
                        LdeHSL,
                    ]
                ) as MetodoCss;
            }

            case "hsla": {
                this.consumir(
                    tiposDeSimbolos.PARENTESE_ESQUERDO,
                    "Esperado parêntese esquerdo após método 'hsla'.",
                );
                const HdeHSLA = this.avancarEDevolverAnterior();
                const SdeHSLA = this.avancarEDevolverAnterior();
                this.consumir(
                    tiposDeSimbolos.QUANTIFICADOR,
                    "Esperado símbolo percentual após argumento de saturação (S) no método 'hsla'.",
                );
                const LdeHSLA = this.avancarEDevolverAnterior();
                this.consumir(
                    tiposDeSimbolos.QUANTIFICADOR,
                    "Esperado símbolo percentual após argumento de luminosidade (L) no método 'hsla'.",
                );
                this.consumir(
                    tiposDeSimbolos.PARENTESE_DIREITO,
                    "Esperado parêntese direito após argumentos de método 'hsla'.",
                );
                return new SeletorValorReverso(
                    lexema,
                    [
                        HdeHSLA,
                        SdeHSLA,
                        LdeHSLA,
                    ]
                ) as MetodoCss;
            }

            case "hue-rotate": {
                this.consumir(
                    tiposDeSimbolos.PARENTESE_ESQUERDO,
                    "Esperado parêntese esquerdo após método 'hue-rotate'.",
                );
                const valorRotacao = this.avancarEDevolverAnterior();
                let quantificadorRotacao;
                if (this.simbolos[this.atual].tipo === "QUANTIFICADOR") {
                    quantificadorRotacao = this.avancarEDevolverAnterior();
                } else {
                    quantificadorRotacao = null;
                }
                this.consumir(
                    tiposDeSimbolos.PARENTESE_DIREITO,
                    "Esperado parêntese direito após segundo argumento do método scale.",
                );
                return new SeletorValorReverso(
                    lexema,
                    [valorRotacao, quantificadorRotacao]
                ) as MetodoCss;
            }

            case "image-set":
                this.consumir(
                    tiposDeSimbolos.PARENTESE_ESQUERDO,
                    "Esperado parêntese esquerdo após método 'image-set'.",
                );

                const linkImagem: Simbolo = this.avancarEDevolverAnterior();
                const tamanhoImagem: Simbolo = this.avancarEDevolverAnterior();
                const proporcaoImagem: Simbolo = this.avancarEDevolverAnterior();

                this.consumir(
                    tiposDeSimbolos.PARENTESE_DIREITO,
                    "Esperado parêntese direito após argumento do método 'image-set'.",
                );

                return new SeletorValorReverso(lexema, [linkImagem, tamanhoImagem, proporcaoImagem]) as MetodoCss;

            case "inset":
                this.consumir(
                    tiposDeSimbolos.PARENTESE_ESQUERDO,
                    "Esperado parêntese esquerdo após método 'inset'.",
                );

                const valorInserir1: Simbolo = this.avancarEDevolverAnterior();
                const quantificadorInserir1: Simbolo = this.avancarEDevolverAnterior();

                const arrayValoresInserir: Array<Simbolo> = [valorInserir1, quantificadorInserir1];

                while (this.simbolos[this.atual].tipo !== 'PARENTESE_DIREITO') {
                    const proximoValorInserir: Simbolo = this.avancarEDevolverAnterior();
                    arrayValoresInserir.push(proximoValorInserir);
                }

                this.consumir(
                    tiposDeSimbolos.PARENTESE_DIREITO,
                    "Esperado parêntese direito após último argumento do método inset.",
                );

                return new SeletorValorReverso(lexema, arrayValoresInserir) as MetodoCss;

            case "invert": {
                this.consumir(
                    tiposDeSimbolos.PARENTESE_ESQUERDO,
                    "Esperado parêntese esquerdo após método 'invert'.",
                );
                const valorInverter = this.avancarEDevolverAnterior();
                let quantificadorInverter;
                if (this.simbolos[this.atual].tipo === "QUANTIFICADOR") {
                    quantificadorInverter = this.avancarEDevolverAnterior();
                } else {
                    quantificadorInverter = null;
                }
                this.consumir(
                    tiposDeSimbolos.PARENTESE_DIREITO,
                    "Esperado parêntese direito após método 'invert'.",
                );
                return new SeletorValorReverso(lexema, [valorInverter, quantificadorInverter]) as MetodoCss;
            }

            case "linear-gradient":
                this.consumir(
                    tiposDeSimbolos.PARENTESE_ESQUERDO,
                    "Esperado parêntese esquerdo após método 'linear-gradient'.",
                );
                const valorAngulo = this.avancarEDevolverAnterior();
                let quantificadorAngulo;
                if (valorAngulo.tipo === "QUALITATIVO") {
                    switch (valorAngulo.lexema) {
                        case "superior":
                            valorAngulo.lexema = "0";
                            valorAngulo.tipo = "NUMERO";
                            quantificadorAngulo = {
                                tipo: "QUANTIFICADOR",
                                lexema: "deg",
                            };
                            break;
                        case "direita":
                            valorAngulo.lexema = "90";
                            valorAngulo.tipo = "NUMERO";
                            quantificadorAngulo = {
                                tipo: "QUANTIFICADOR",
                                lexema: "deg",
                            };
                            break;
                        case "inferior":
                            valorAngulo.lexema = "180";
                            valorAngulo.tipo = "NUMERO";
                            quantificadorAngulo = {
                                tipo: "QUANTIFICADOR",
                                lexema: "deg",
                            };
                            break;
                        case "esquerda":
                            valorAngulo.lexema = "270";
                            valorAngulo.tipo = "NUMERO";
                            quantificadorAngulo = {
                                tipo: "QUANTIFICADOR",
                                lexema: "deg",
                            };
                            break;
                        default:
                            break;
                    }
                } else {
                    quantificadorAngulo = this.avancarEDevolverAnterior();
                }

                this.consumir(
                    tiposDeSimbolos.VIRGULA,
                    "Esperado vírgula após segundo argumento do método linear-gradient.",
                );
                const cor1 = this.avancarEDevolverAnterior();
                this.consumir(
                    tiposDeSimbolos.VIRGULA,
                    "Esperado vírgula após segundo argumento do método linear-gradient.",
                );
                const cor2 = this.avancarEDevolverAnterior();
                this.consumir(
                    tiposDeSimbolos.PARENTESE_DIREITO,
                    "Esperado parêntese direito após método 'linear-gradient'.",
                );
                return new SeletorValorReverso(
                    lexema,
                    [
                        valorAngulo,
                        quantificadorAngulo,
                        cor1,
                        cor2,
                    ]
                ) as MetodoCss;

            case "path":
                this.consumir(
                    tiposDeSimbolos.PARENTESE_ESQUERDO,
                    "Esperado parêntese esquerdo após método 'path'.",
                );

                const proporcaoCaminho = this.avancarEDevolverAnterior();

                let matrizCaminho = null;
                if (this.simbolos[this.atual].tipo === 'TEXTO') {
                    matrizCaminho = this.avancarEDevolverAnterior();
                }

                const arrayValoresCaminho: Array<Simbolo> = [proporcaoCaminho];
                if (matrizCaminho !== null) {
                    arrayValoresCaminho.push(matrizCaminho);
                }

                this.consumir(
                    tiposDeSimbolos.PARENTESE_DIREITO,
                    "Esperado parêntese direito após argumento do método 'path'.",
                );

                return new SeletorValorReverso(lexema, arrayValoresCaminho) as MetodoCss;

            case "polygon":
                this.consumir(
                    tiposDeSimbolos.PARENTESE_ESQUERDO,
                    "Esperado parêntese esquerdo após método 'polygon'.",
                );

                const valorPoligono: Simbolo = this.avancarEDevolverAnterior();
                const quantificadorPoligono: Simbolo = this.avancarEDevolverAnterior();
                const arrayValoresPoligono: Array<Simbolo> = [valorPoligono, quantificadorPoligono];

                while (this.simbolos[this.atual].tipo !== 'PARENTESE_DIREITO') {
                    if (this.simbolos[this.atual].tipo !== 'VIRGULA') {
                        const proximoValorPoligono: Simbolo = this.avancarEDevolverAnterior();
                        arrayValoresPoligono.push(proximoValorPoligono);
                    } else {
                        this.consumir(
                            tiposDeSimbolos.VIRGULA,
                            "Esperada vírgula após argumento do método 'polygon'.",
                        );
                    }
                }

                this.consumir(
                    tiposDeSimbolos.PARENTESE_DIREITO,
                    "Esperado parêntese direito após último argumento do método 'polygon'.",
                );

                return new SeletorValorReverso(lexema, arrayValoresPoligono) as MetodoCss;

            case "rect":
                this.consumir(
                    tiposDeSimbolos.PARENTESE_ESQUERDO,
                    "Esperado parêntese esquerdo após método 'rect'.",
                );

                const valorRect1: Simbolo = this.avancarEDevolverAnterior();
                const quantificadorRect1: Simbolo = this.avancarEDevolverAnterior();
                const arrayValoresRect: Array<Simbolo> = [valorRect1, quantificadorRect1];

                while (this.simbolos[this.atual].tipo !== 'PARENTESE_DIREITO') {
                    const proximoValorRect: Simbolo = this.avancarEDevolverAnterior();
                    arrayValoresRect.push(proximoValorRect);
                }

                this.consumir(
                    tiposDeSimbolos.PARENTESE_DIREITO,
                    "Esperado parêntese direito após último argumento do método rect.",
                );

                return new SeletorValorReverso(lexema, arrayValoresRect) as MetodoCss;

            case "repeating-conic-gradient":
                this.consumir(
                    tiposDeSimbolos.PARENTESE_ESQUERDO,
                    "Esperado parêntese esquerdo após método 'repeating-conic-gradient'.",
                );

                const valorConico: Simbolo = this.avancarEDevolverAnterior();
                const quantificadorConico: Simbolo = this.avancarEDevolverAnterior();
                const arrayValoresConico: Array<Simbolo> = [valorConico, quantificadorConico];

                while (this.simbolos[this.atual].tipo !== 'PARENTESE_DIREITO') {
                    if (this.simbolos[this.atual].tipo !== 'VIRGULA') {
                        const proximoValorConico: Simbolo = this.avancarEDevolverAnterior();
                        arrayValoresConico.push(proximoValorConico);
                    } else {
                        this.consumir(
                            tiposDeSimbolos.VIRGULA,
                            "Esperada vírgula após argumento do método 'repeating-conic-gradient'.",
                        );
                    }
                }

                this.consumir(
                    tiposDeSimbolos.PARENTESE_DIREITO,
                    "Esperado parêntese direito após último argumento do método 'repeating-conic-gradient'.",
                );

                return new SeletorValorReverso(lexema, arrayValoresConico) as MetodoCss;

            case "repeating-linear-gradient":
                this.consumir(
                    tiposDeSimbolos.PARENTESE_ESQUERDO,
                    "Esperado parêntese esquerdo após método 'repeating-linear-gradient'.",
                );

                const parametroLinear: Simbolo = this.avancarEDevolverAnterior();
                const arrayValoresLinear: Array<Simbolo> = [parametroLinear];

                while (this.simbolos[this.atual].tipo !== 'PARENTESE_DIREITO') {
                    if (this.simbolos[this.atual].tipo !== 'VIRGULA') {
                        const proximoValorLinear: Simbolo = this.avancarEDevolverAnterior();
                        arrayValoresLinear.push(proximoValorLinear);
                    } else {
                        this.consumir(
                            tiposDeSimbolos.VIRGULA,
                            "Esperada vírgula após argumento do método 'repeating-linear-gradient'.",
                        );
                    }
                }

                this.consumir(
                    tiposDeSimbolos.PARENTESE_DIREITO,
                    "Esperado parêntese direito após último argumento do método 'repeating-linear-gradient'.",
                );

                return new SeletorValorReverso(lexema, arrayValoresLinear) as MetodoCss;

            case "repeating-radial-gradient":
                this.consumir(
                    tiposDeSimbolos.PARENTESE_ESQUERDO,
                    "Esperado parêntese esquerdo após método 'repeating-radial-gradient'.",
                );

                const parametroRadial: Simbolo = this.avancarEDevolverAnterior();
                const arrayValoresRadial: Array<Simbolo> = [parametroRadial];

                while (this.simbolos[this.atual].tipo !== 'PARENTESE_DIREITO') {
                    if (this.simbolos[this.atual].tipo !== 'VIRGULA') {
                        const proximoValorRadial: Simbolo = this.avancarEDevolverAnterior();
                        arrayValoresRadial.push(proximoValorRadial);
                    } else {
                        this.consumir(
                            tiposDeSimbolos.VIRGULA,
                            "Esperada vírgula após argumento do método 'repeating-radial-gradient'.",
                        );
                    }
                }

                this.consumir(
                    tiposDeSimbolos.PARENTESE_DIREITO,
                    "Esperado parêntese direito após último argumento do método 'repeating-radial-gradient'.",
                );

                return new SeletorValorReverso(lexema, arrayValoresRadial) as MetodoCss;

            case "scale3d": {
                this.consumir(
                    tiposDeSimbolos.PARENTESE_ESQUERDO,
                    "Esperado parêntese esquerdo após método 'scale3d'.",
                );
                const valorScale3d1 = this.avancarEDevolverAnterior();
                this.consumir(
                    tiposDeSimbolos.VIRGULA,
                    "Esperado vírgula após primeiro argumento do método scale3d.",
                );
                const valorScale3d2 = this.avancarEDevolverAnterior();
                this.consumir(
                    tiposDeSimbolos.VIRGULA,
                    "Esperado vírgula após segundo argumento do método scale3d.",
                );
                const valorScale3d3 = this.avancarEDevolverAnterior();
                this.consumir(
                    tiposDeSimbolos.PARENTESE_DIREITO,
                    "Esperado parêntese direito após segundo argumento do método scale3d.",
                );
                return new SeletorValorReverso(
                    lexema,
                    [
                        valorScale3d1,
                        valorScale3d2,
                        valorScale3d3,
                    ]
                ) as MetodoCss;
            }

            case "scaleX": {
                this.consumir(
                    tiposDeSimbolos.PARENTESE_ESQUERDO,
                    "Esperado parêntese esquerdo após método 'scaleX'.",
                );
                const valorScaleX = this.avancarEDevolverAnterior();
                this.consumir(
                    tiposDeSimbolos.PARENTESE_DIREITO,
                    "Esperado parêntese direito após segundo argumento do método scaleX.",
                );
                return new SeletorValorReverso(lexema, [valorScaleX]) as MetodoCss;
            }

            case "scaleY": {
                this.consumir(
                    tiposDeSimbolos.PARENTESE_ESQUERDO,
                    "Esperado parêntese esquerdo após método 'scaleY'.",
                );
                const valorScaleY = this.avancarEDevolverAnterior();
                this.consumir(
                    tiposDeSimbolos.PARENTESE_DIREITO,
                    "Esperado parêntese direito após segundo argumento do método scaleY.",
                );
                return new SeletorValorReverso(lexema, [valorScaleY]) as MetodoCss;
            }

            case "skew": {
                this.consumir(
                    tiposDeSimbolos.PARENTESE_ESQUERDO,
                    "Esperado parêntese esquerdo após método 'skew'.",
                );

                const valorInclinar1 = this.avancarEDevolverAnterior();

                let quantificadorInclinar1;
                if (this.simbolos[this.atual].tipo === "QUANTIFICADOR") {
                    quantificadorInclinar1 = this.avancarEDevolverAnterior();
                } else {
                    quantificadorInclinar1 = null;
                }

                let valorInclinar2;
                let quantificadorInclinar2;
                if (this.simbolos[this.atual].tipo === "VIRGULA") {
                    this.consumir(
                        tiposDeSimbolos.VIRGULA,
                        "Esperado vírgula após primeiro argumento do método 'skew'.",
                    );
                    valorInclinar2 = this.avancarEDevolverAnterior();
                    quantificadorInclinar2 = this.avancarEDevolverAnterior();
                } else {
                    valorInclinar2 = null;
                    quantificadorInclinar2 = null;
                }

                this.consumir(
                    tiposDeSimbolos.PARENTESE_DIREITO,
                    "Esperado parêntese direito após método 'skew'.",
                );
                return new SeletorValorReverso(
                    lexema,
                    [
                        valorInclinar1,
                        quantificadorInclinar1,
                        valorInclinar2,
                        quantificadorInclinar2,
                    ]
                ) as MetodoCss;
            }

            case "skewX": {
                this.consumir(
                    tiposDeSimbolos.PARENTESE_ESQUERDO,
                    "Esperado parêntese esquerdo após método 'skewX'.",
                );
                const valorInclinarX = this.avancarEDevolverAnterior();
                let quantificadorInclinarX;
                if (this.simbolos[this.atual].tipo === "QUANTIFICADOR") {
                    quantificadorInclinarX = this.avancarEDevolverAnterior();
                } else {
                    quantificadorInclinarX = null;
                }
                this.consumir(
                    tiposDeSimbolos.PARENTESE_DIREITO,
                    "Esperado parêntese direito após método 'skewX'.",
                );
                return new SeletorValorReverso(
                    lexema,
                    [
                        valorInclinarX,
                        quantificadorInclinarX,
                    ]
                ) as MetodoCss;
            }

            case "skewY": {
                this.consumir(
                    tiposDeSimbolos.PARENTESE_ESQUERDO,
                    "Esperado parêntese esquerdo após método 'skewY'.",
                );
                const valorInclinarY = this.avancarEDevolverAnterior();
                let quantificadorInclinarY;
                if (this.simbolos[this.atual].tipo === "QUANTIFICADOR") {
                    quantificadorInclinarY = this.avancarEDevolverAnterior();
                } else {
                    quantificadorInclinarY = null;
                }
                this.consumir(
                    tiposDeSimbolos.PARENTESE_DIREITO,
                    "Esperado parêntese direito após método 'skewY'.",
                );
                return new SeletorValorReverso(
                    lexema,
                    [
                        valorInclinarY,
                        quantificadorInclinarY,
                    ]
                ) as MetodoCss;
            }

            case "invert":
                this.consumir(
                    tiposDeSimbolos.PARENTESE_ESQUERDO,
                    "Esperado parêntese esquerdo após método 'invert'.",
                );
                const valorInverter = this.avancarEDevolverAnterior();
                let quantificadorInverter;
                if (this.simbolos[this.atual].tipo === "QUANTIFICADOR") {
                    quantificadorInverter = this.avancarEDevolverAnterior();
                } else {
                    quantificadorInverter = null;
                }
                this.consumir(
                    tiposDeSimbolos.PARENTESE_DIREITO,
                    "Esperado parêntese direito após método 'invert'.",
                );
                return new SeletorValorReverso(
                    lexema,
                    [
                        valorInverter,
                        quantificadorInverter,
                    ]
                ) as MetodoCss;

            case "clamp":
                this.consumir(
                    tiposDeSimbolos.PARENTESE_ESQUERDO,
                    "Esperado parêntese esquerdo após método 'clamp'.",
                );
                const valorMin = this.avancarEDevolverAnterior();
                const quantificadorMin = this.avancarEDevolverAnterior();
                this.consumir(
                    tiposDeSimbolos.VIRGULA,
                    "Esperado vírgula após primeiro argumento do método 'clamp'.",
                );
                const valorMed = this.avancarEDevolverAnterior();
                const quantificadorMed = this.avancarEDevolverAnterior();
                this.consumir(
                    tiposDeSimbolos.VIRGULA,
                    "Esperado vírgula após segundo argumento do método 'clamp'.",
                );
                const valorMax = this.avancarEDevolverAnterior();
                const quantificadorMax = this.avancarEDevolverAnterior();
                this.consumir(
                    tiposDeSimbolos.PARENTESE_DIREITO,
                    "Esperado parêntese direito após segundo argumento do método clamp.",
                );
                return new SeletorValorReverso(
                    lexema,
                    [
                        valorMin,
                        quantificadorMin,
                        valorMed,
                        quantificadorMed,
                        valorMax,
                        quantificadorMax,
                    ]
                ) as MetodoCss;

            case "linear":
                this.consumir(
                    tiposDeSimbolos.PARENTESE_ESQUERDO,
                    "Esperado parêntese esquerdo após método 'linear'.",
                );
                const valor1 = this.avancarEDevolverAnterior();
                this.consumir(
                    tiposDeSimbolos.VIRGULA,
                    "Esperado vírgula após primeiro argumento do método linear.",
                );
                const valor2 = this.avancarEDevolverAnterior();
                this.consumir(
                    tiposDeSimbolos.VIRGULA,
                    "Esperado vírgula após segundo argumento do método linear.",
                );
                const valor3 = this.avancarEDevolverAnterior();
                this.consumir(
                    tiposDeSimbolos.PARENTESE_DIREITO,
                    "Esperado parêntese direito após terceiro argumento do método linear.",
                );
                return new SeletorValorReverso(
                    lexema,
                    [
                        valor1,
                        valor2,
                        valor3,
                    ]
                ) as MetodoCss;

            case "minmax":
                this.consumir(
                    tiposDeSimbolos.PARENTESE_ESQUERDO,
                    "Esperado parêntese esquerdo após método 'minmax'.",
                );
                const valor01 = this.avancarEDevolverAnterior();
                let parametro01 = null;
                if (Number(valor01["lexema"])) {
                    const quantificador01 = this.avancarEDevolverAnterior();
                    parametro01 = `${valor01["lexema"]}${quantificador01["lexema"]}`;
                }
                this.consumir(
                    tiposDeSimbolos.VIRGULA,
                    "Esperado vírgula após primeiro argumento do método minmax.",
                );
                const valor02 = this.avancarEDevolverAnterior();
                let parametro02 = null;
                if (Number(valor02["lexema"])) {
                    const quantificador02 = this.avancarEDevolverAnterior();
                    parametro02 = `${valor02["lexema"]}${quantificador02["lexema"]}`;
                }
                this.consumir(
                    tiposDeSimbolos.PARENTESE_DIREITO,
                    "Esperado parêntese direito após segundo argumento do método minmax.",
                );

                if (parametro01 !== null) {
                    return new SeletorValorReverso(lexema, [parametro01, valor02["lexema"]]) as MetodoCss;
                }

                if (parametro02 !== null) {
                    return new SeletorValorReverso(lexema, [valor01["lexema"], parametro02]) as MetodoCss;
                }

            case "opacity":
                this.consumir(
                    tiposDeSimbolos.PARENTESE_ESQUERDO,
                    "Esperado parêntese esquerdo após método 'opacity'.",
                );
                const valorOpaco = this.avancarEDevolverAnterior();
                let quantificadorOpaco;
                if (this.simbolos[this.atual].tipo === "QUANTIFICADOR") {
                    quantificadorOpaco = this.avancarEDevolverAnterior();
                } else {
                    quantificadorOpaco = null;
                }
                this.consumir(
                    tiposDeSimbolos.PARENTESE_DIREITO,
                    "Esperado parêntese direito após método 'opacity'.",
                );
                return new SeletorValorReverso(
                    lexema,
                    [valorOpaco, quantificadorOpaco],
                    true
                ) as MetodoCss;

            case "ornaments":
                this.consumir(
                    tiposDeSimbolos.PARENTESE_ESQUERDO,
                    "Esperado parêntese esquerdo após método 'ornaments'.",
                );

                const valorOrnaments = this.avancarEDevolverAnterior();

                this.consumir(
                    tiposDeSimbolos.PARENTESE_DIREITO,
                    "Esperado parêntese direito após argumento do método ornaments.",
                );

                return new SeletorValorReverso(lexema, [valorOrnaments]) as MetodoCss;

            case "perspective":
                this.consumir(
                    tiposDeSimbolos.PARENTESE_ESQUERDO,
                    "Esperado parêntese esquerdo após método 'perspective'.",
                );
                const valorPerspectivar = this.avancarEDevolverAnterior();
                let quantificadorPerspectivar;
                if (this.simbolos[this.atual].tipo === "QUANTIFICADOR") {
                    quantificadorPerspectivar = this.avancarEDevolverAnterior();
                } else {
                    quantificadorPerspectivar = null;
                }
                this.consumir(
                    tiposDeSimbolos.PARENTESE_DIREITO,
                    "Esperado parêntese direito após método 'perspective'.",
                );
                return new SeletorValorReverso(
                    lexema,
                    [valorPerspectivar, quantificadorPerspectivar],
                    true
                ) as MetodoCss;

            case "drop-shadow":
                this.consumir(
                    tiposDeSimbolos.PARENTESE_ESQUERDO,
                    "Esperado parêntese esquerdo após método 'drop-shadow'.",
                );
                let corSombra = null;
                if (this.simbolos[this.atual].tipo === "QUALITATIVO") {
                    corSombra = this.avancarEDevolverAnterior();
                }

                const valorSombra1 = this.avancarEDevolverAnterior();
                const quantificadorSombra1 = this.avancarEDevolverAnterior();

                const valorSombra2 = this.avancarEDevolverAnterior();
                const quantificadorSombra2 = this.avancarEDevolverAnterior();

                let valorSombra3;
                let quantificadorSombra3;
                if (this.simbolos[this.atual].tipo === "NUMERO") {
                    valorSombra3 = this.avancarEDevolverAnterior();
                    quantificadorSombra3 = this.avancarEDevolverAnterior();
                } else {
                    valorSombra3 = null;
                    quantificadorSombra3 = null;
                }

                if (this.simbolos[this.atual].tipo === "QUALITATIVO") {
                    corSombra = this.avancarEDevolverAnterior();
                }

                this.consumir(
                    tiposDeSimbolos.PARENTESE_DIREITO,
                    "Esperado parêntese direito após método 'drop-shadow'.",
                );
                return new SeletorValorReverso(lexema,
                    [
                        valorSombra1,
                        quantificadorSombra1,
                        valorSombra2,
                        quantificadorSombra2,
                        valorSombra3,
                        quantificadorSombra3,
                        corSombra,
                    ]
                ) as MetodoCss;

            case "ray":
                this.consumir(
                    tiposDeSimbolos.PARENTESE_ESQUERDO,
                    "Esperado parêntese esquerdo após método 'ray'.",
                );
                let posicaoRaio;
                if (this.simbolos[this.atual].tipo === "QUALITATIVO") {
                    posicaoRaio = this.avancarEDevolverAnterior();
                } else {
                    posicaoRaio = null;
                }
                const numeroRaio = this.avancarEDevolverAnterior();
                const quantificadorRaio = this.avancarEDevolverAnterior();
                this.consumir(
                    tiposDeSimbolos.PARENTESE_DIREITO,
                    "Esperado parêntese direito após argumentos de método 'ray'.",
                );
                return new SeletorValorReverso(lexema,
                    [
                        posicaoRaio,
                        numeroRaio,
                        quantificadorRaio,
                    ]
                ) as MetodoCss;

            case "rgb":
                this.consumir(
                    tiposDeSimbolos.PARENTESE_ESQUERDO,
                    "Esperado parêntese esquerdo após método 'rgb'.",
                );
                const vermelho = this.avancarEDevolverAnterior();
                this.consumir(
                    tiposDeSimbolos.VIRGULA,
                    "Esperado vírgula após argumento de cor vermelha.",
                );
                const verde = this.avancarEDevolverAnterior();
                this.consumir(
                    tiposDeSimbolos.VIRGULA,
                    "Esperado vírgula após argumento de cor verde.",
                );
                const azul = this.avancarEDevolverAnterior();
                this.consumir(
                    tiposDeSimbolos.PARENTESE_DIREITO,
                    "Esperado parêntese direito após argumentos de método 'rgb'.",
                );
                return new SeletorValorReverso(lexema, [vermelho, verde, azul]) as MetodoCss;

            case "rgba":
                this.consumir(
                    tiposDeSimbolos.PARENTESE_ESQUERDO,
                    "Esperado parêntese esquerdo após método 'rgba'.",
                );
                const vermelhoRgba = this.avancarEDevolverAnterior();
                this.consumir(
                    tiposDeSimbolos.VIRGULA,
                    "Esperado vírgula após argumento de cor vermelha.",
                );
                const verdeRgba = this.avancarEDevolverAnterior();
                this.consumir(
                    tiposDeSimbolos.VIRGULA,
                    "Esperado vírgula após argumento de cor verde.",
                );
                const azulRgba = this.avancarEDevolverAnterior();
                this.consumir(
                    tiposDeSimbolos.PARENTESE_DIREITO,
                    "Esperado parêntese direito após argumentos de método 'rgba'.",
                );
                return new SeletorValorReverso(lexema,
                    [
                        vermelhoRgba,
                        verdeRgba,
                        azulRgba,
                    ]
                ) as MetodoCss;

            case "rotate":
                this.consumir(
                    tiposDeSimbolos.PARENTESE_ESQUERDO,
                    "Esperado parêntese esquerdo após método 'rotate'.",
                );
                const valorRotacionar = this.avancarEDevolverAnterior();
                let quantificadorRotacionar;
                if (this.simbolos[this.atual].tipo === "QUANTIFICADOR") {
                    quantificadorRotacionar = this.avancarEDevolverAnterior();
                } else {
                    quantificadorRotacionar = null;
                }

                this.consumir(
                    tiposDeSimbolos.PARENTESE_DIREITO,
                    "Esperado parêntese direito após método 'rotate'.",
                );
                return new SeletorValorReverso(
                    lexema,
                    [valorRotacionar, quantificadorRotacionar],
                    true
                ) as MetodoCss;

            case "rotate3d":
                this.consumir(
                    tiposDeSimbolos.PARENTESE_ESQUERDO,
                    "Esperado parêntese esquerdo após método 'rotate3d'.",
                );

                const valor1Rotacionar3d = this.avancarEDevolverAnterior();
                this.consumir(
                    tiposDeSimbolos.VIRGULA,
                    "Esperada vírgula após primeiro parâmetro do método 'rotate3d'.",
                );

                const valor2Rotacionar3d = this.avancarEDevolverAnterior();
                this.consumir(
                    tiposDeSimbolos.VIRGULA,
                    "Esperada vírgula após segundo parâmetro do método 'rotate3d'.",
                );

                const valor3Rotacionar3d = this.avancarEDevolverAnterior();
                this.consumir(
                    tiposDeSimbolos.VIRGULA,
                    "Esperada vírgula após terceiro parâmetro do método 'rotate3d'.",
                );

                const valor4Rotacionar3d = this.avancarEDevolverAnterior();

                let quantificadorRotacionar3d;
                if (this.simbolos[this.atual].tipo === "QUANTIFICADOR") {
                    quantificadorRotacionar3d = this.avancarEDevolverAnterior();
                } else {
                    quantificadorRotacionar3d = null;
                }

                this.consumir(
                    tiposDeSimbolos.PARENTESE_DIREITO,
                    "Esperado parêntese direito após método 'rotate3d'.",
                );

                return new SeletorValorReverso(lexema,
                    [
                        valor1Rotacionar3d,
                        valor2Rotacionar3d,
                        valor3Rotacionar3d,
                        valor4Rotacionar3d,
                        quantificadorRotacionar3d,
                    ]
                ) as MetodoCss;

            case "rotateZ":
                this.consumir(
                    tiposDeSimbolos.PARENTESE_ESQUERDO,
                    "Esperado parêntese esquerdo após método 'rotateZ'.",
                );
                const valorRotacionarZ = this.avancarEDevolverAnterior();
                let quantificadorRotacionarZ;
                if (this.simbolos[this.atual].tipo === "QUANTIFICADOR") {
                    quantificadorRotacionarZ = this.avancarEDevolverAnterior();
                } else {
                    quantificadorRotacionarZ = null;
                }

                this.consumir(
                    tiposDeSimbolos.PARENTESE_DIREITO,
                    "Esperado parêntese direito após método 'rotateZ'.",
                );
                return new SeletorValorReverso(
                    lexema,
                    [
                        valorRotacionarZ,
                        quantificadorRotacionarZ,
                    ]
                ) as MetodoCss;

            case "rotateX":
                this.consumir(
                    tiposDeSimbolos.PARENTESE_ESQUERDO,
                    "Esperado parêntese esquerdo após método 'rotateX'.",
                );
                const valorRotacionarX = this.avancarEDevolverAnterior();
                let quantificadorRotacionarX;
                if (this.simbolos[this.atual].tipo === "QUANTIFICADOR") {
                    quantificadorRotacionarX = this.avancarEDevolverAnterior();
                } else {
                    quantificadorRotacionarX = null;
                }
                this.consumir(
                    tiposDeSimbolos.PARENTESE_DIREITO,
                    "Esperado parêntese direito após método 'rotateX'.",
                );
                return new SeletorValorReverso(
                    lexema,
                    [
                        valorRotacionarX,
                        quantificadorRotacionarX,
                    ]
                ) as MetodoCss;

            case "hue-rotate":
                this.consumir(
                    tiposDeSimbolos.PARENTESE_ESQUERDO,
                    "Esperado parêntese esquerdo após método 'hue-rotate'.",
                );
                const valorRotacao = this.avancarEDevolverAnterior();
                let quantificadorRotacao;
                if (this.simbolos[this.atual].tipo === "QUANTIFICADOR") {
                    quantificadorRotacao = this.avancarEDevolverAnterior();
                } else {
                    quantificadorRotacao = null;
                }
                this.consumir(
                    tiposDeSimbolos.PARENTESE_DIREITO,
                    "Esperado parêntese direito após método 'hue-rotate'.",
                );
                return new SeletorValorReverso(
                    lexema,
                    [
                        valorRotacao,
                        quantificadorRotacao,
                    ]
                ) as MetodoCss;

            case "rotateY":
                this.consumir(
                    tiposDeSimbolos.PARENTESE_ESQUERDO,
                    "Esperado parêntese esquerdo após método 'rotateY'.",
                );
                const valorRotacionarY = this.avancarEDevolverAnterior();
                let quantificadorRotacionarY;
                if (this.simbolos[this.atual].tipo === "QUANTIFICADOR") {
                    quantificadorRotacionarY = this.avancarEDevolverAnterior();
                } else {
                    quantificadorRotacionarY = null;
                }
                this.consumir(
                    tiposDeSimbolos.PARENTESE_DIREITO,
                    "Esperado parêntese direito após método 'rotateY'.",
                );
                return new SeletorValorReverso(
                    lexema,
                    [
                        valorRotacionarY,
                        quantificadorRotacionarY,
                    ]
                ) as MetodoCss;

            case "saturate":
                this.consumir(
                    tiposDeSimbolos.PARENTESE_ESQUERDO,
                    "Esperado parêntese esquerdo após método 'saturate'.",
                );
                const valorSaturar = this.avancarEDevolverAnterior();
                let quantificadorSaturar;
                if (this.simbolos[this.atual].tipo === "QUANTIFICADOR") {
                    quantificadorSaturar = this.avancarEDevolverAnterior();
                } else {
                    quantificadorSaturar = null;
                }
                this.consumir(
                    tiposDeSimbolos.PARENTESE_DIREITO,
                    "Esperado parêntese direito após método 'saturate'.",
                );
                return new SeletorValorReverso(
                    lexema,
                    [
                        valorSaturar,
                        quantificadorSaturar,
                    ]
                ) as MetodoCss;

            case "scale":
                this.consumir(
                    tiposDeSimbolos.PARENTESE_ESQUERDO,
                    "Esperado parêntese esquerdo após método 'scale'.",
                );
                const valorScale1 = this.avancarEDevolverAnterior();

                let valorScale2;
                if (this.simbolos[this.atual].tipo === "VIRGULA") {
                    this.consumir(
                        tiposDeSimbolos.VIRGULA,
                        "Esperado vírgula após primeiro argumento do método scale.",
                    );
                    valorScale2 = this.avancarEDevolverAnterior();
                }
                this.consumir(
                    tiposDeSimbolos.PARENTESE_DIREITO,
                    "Esperado parêntese direito após segundo argumento do método scale.",
                );
                return new SeletorValorReverso(
                    lexema,
                    [valorScale1, valorScale2],
                    true
                ) as MetodoCss;

            case "scale3d":
                this.consumir(
                    tiposDeSimbolos.PARENTESE_ESQUERDO,
                    "Esperado parêntese esquerdo após método 'scale3d'.",
                );
                const valorScale3d1 = this.avancarEDevolverAnterior();
                this.consumir(
                    tiposDeSimbolos.VIRGULA,
                    "Esperado vírgula após primeiro argumento do método scale3d.",
                );
                const valorScale3d2 = this.avancarEDevolverAnterior();
                this.consumir(
                    tiposDeSimbolos.VIRGULA,
                    "Esperado vírgula após segundo argumento do método scale3d.",
                );
                const valorScale3d3 = this.avancarEDevolverAnterior();
                this.consumir(
                    tiposDeSimbolos.PARENTESE_DIREITO,
                    "Esperado parêntese direito após segundo argumento do método scale3d.",
                );
                return new SeletorValorReverso(
                    lexema,
                    [
                        valorScale3d1,
                        valorScale3d2,
                        valorScale3d3,
                    ]
                ) as MetodoCss;

            case "scaleZ":
                this.consumir(
                    tiposDeSimbolos.PARENTESE_ESQUERDO,
                    "Esperado parêntese esquerdo após método 'scaleZ'.",
                );
                const valorScaleZ = this.avancarEDevolverAnterior();
                this.consumir(
                    tiposDeSimbolos.PARENTESE_DIREITO,
                    "Esperado parêntese direito após segundo argumento do método scaleZ.",
                );
                return new SeletorValorReverso(lexema, [valorScaleZ]) as MetodoCss;

            case "scaleX":
                this.consumir(
                    tiposDeSimbolos.PARENTESE_ESQUERDO,
                    "Esperado parêntese esquerdo após método 'scaleX'.",
                );
                const valorScaleX = this.avancarEDevolverAnterior();
                this.consumir(
                    tiposDeSimbolos.PARENTESE_DIREITO,
                    "Esperado parêntese direito após segundo argumento do método scaleX.",
                );
                return new SeletorValorReverso(lexema, [valorScaleX]) as MetodoCss;

            case "scaleY":
                this.consumir(
                    tiposDeSimbolos.PARENTESE_ESQUERDO,
                    "Esperado parêntese esquerdo após método 'scaleY'.",
                );
                const valorScaleY = this.avancarEDevolverAnterior();
                this.consumir(
                    tiposDeSimbolos.PARENTESE_DIREITO,
                    "Esperado parêntese direito após segundo argumento do método scaleY.",
                );
                return new SeletorValorReverso(lexema, [valorScaleY]) as MetodoCss;

            case "sepia":
                this.consumir(
                    tiposDeSimbolos.PARENTESE_ESQUERDO,
                    "Esperado parêntese esquerdo após método 'sepia'.",
                );
                const valorSepia = this.avancarEDevolverAnterior();
                let quantificadorSepia;
                if (this.simbolos[this.atual].tipo === "QUANTIFICADOR") {
                    quantificadorSepia = this.avancarEDevolverAnterior();
                } else {
                    quantificadorSepia = null;
                }
                this.consumir(
                    tiposDeSimbolos.PARENTESE_DIREITO,
                    "Esperado parêntese direito após método 'sepia'.",
                );
                return new SeletorValorReverso(
                    lexema,
                    [
                        valorSepia,
                        quantificadorSepia,
                    ]
                ) as MetodoCss;

            case "skew":
                this.consumir(
                    tiposDeSimbolos.PARENTESE_ESQUERDO,
                    "Esperado parêntese esquerdo após método 'skew'.",
                );

                const valorInclinar1 = this.avancarEDevolverAnterior();

                let quantificadorInclinar1;
                if (this.simbolos[this.atual].tipo === "QUANTIFICADOR") {
                    quantificadorInclinar1 = this.avancarEDevolverAnterior();
                } else {
                    quantificadorInclinar1 = null;
                }

                let valorInclinar2;
                let quantificadorInclinar2;
                if (this.simbolos[this.atual].tipo === "VIRGULA") {
                    this.consumir(
                        tiposDeSimbolos.VIRGULA,
                        "Esperado vírgula após primeiro argumento do método 'skew'.",
                    );
                    valorInclinar2 = this.avancarEDevolverAnterior();
                    quantificadorInclinar2 = this.avancarEDevolverAnterior();
                } else {
                    valorInclinar2 = null;
                    quantificadorInclinar2 = null;
                }

                this.consumir(
                    tiposDeSimbolos.PARENTESE_DIREITO,
                    "Esperado parêntese direito após método 'skew'.",
                );
                return new SeletorValorReverso(
                    lexema,
                    [
                        valorInclinar1,
                        quantificadorInclinar1,
                        valorInclinar2,
                        quantificadorInclinar2,
                    ]
                ) as MetodoCss;

            case "skewX":
                this.consumir(
                    tiposDeSimbolos.PARENTESE_ESQUERDO,
                    "Esperado parêntese esquerdo após método 'skewX'.",
                );
                const valorInclinarX = this.avancarEDevolverAnterior();
                let quantificadorInclinarX;
                if (this.simbolos[this.atual].tipo === "QUANTIFICADOR") {
                    quantificadorInclinarX = this.avancarEDevolverAnterior();
                } else {
                    quantificadorInclinarX = null;
                }
                this.consumir(
                    tiposDeSimbolos.PARENTESE_DIREITO,
                    "Esperado parêntese direito após método 'skewX'.",
                );
                return new SeletorValorReverso(
                    lexema,
                    [
                        valorInclinarX,
                        quantificadorInclinarX,
                    ]
                ) as MetodoCss;

            case "skewY":
                this.consumir(
                    tiposDeSimbolos.PARENTESE_ESQUERDO,
                    "Esperado parêntese esquerdo após método 'skewY'.",
                );
                const valorInclinarY = this.avancarEDevolverAnterior();
                let quantificadorInclinarY;
                if (this.simbolos[this.atual].tipo === "QUANTIFICADOR") {
                    quantificadorInclinarY = this.avancarEDevolverAnterior();
                } else {
                    quantificadorInclinarY = null;
                }
                this.consumir(
                    tiposDeSimbolos.PARENTESE_DIREITO,
                    "Esperado parêntese direito após método 'skewY'.",
                );
                return new SeletorValorReverso(
                    lexema,
                    [
                        valorInclinarY,
                        quantificadorInclinarY,
                    ]
                ) as MetodoCss;

            case "steps":
                this.consumir(
                    tiposDeSimbolos.PARENTESE_ESQUERDO,
                    "Esperado parêntese esquerdo após método 'steps'.",
                );
                const valorNumerico = this.avancarEDevolverAnterior();
                this.consumir(
                    tiposDeSimbolos.VIRGULA,
                    "Esperado vírgula após primeiro argumento do método steps.",
                );
                const termoSalto = this.avancarEDevolverAnterior();
                this.consumir(
                    tiposDeSimbolos.PARENTESE_DIREITO,
                    "Esperado parêntese direito após segundo argumento do método steps.",
                );
                return new SeletorValorReverso(
                    lexema,
                    [
                        valorNumerico,
                        termoSalto,
                    ]
                ) as MetodoCss;

            case "styleset":
                this.consumir(
                    tiposDeSimbolos.PARENTESE_ESQUERDO,
                    "Esperado parêntese esquerdo após método 'styleset'.",
                );

                const valor1ConjuntoEstilos = this.avancarEDevolverAnterior();

                let valor2ConjuntoEstilos;
                if (this.simbolos[this.atual].tipo === "VIRGULA") {
                    this.consumir(
                        tiposDeSimbolos.VIRGULA,
                        "Esperado vírgula após primeiro argumento do método styleset.",
                    );
                    valor2ConjuntoEstilos = this.avancarEDevolverAnterior();
                }

                let valor3ConjuntoEstilos;
                if (this.simbolos[this.atual].tipo === "VIRGULA") {
                    this.consumir(
                        tiposDeSimbolos.VIRGULA,
                        "Esperado vírgula após segundo argumento do método styleset.",
                    );
                    valor3ConjuntoEstilos = this.avancarEDevolverAnterior();
                }

                this.consumir(
                    tiposDeSimbolos.PARENTESE_DIREITO,
                    "Esperado parêntese direito após argumento do método styleset.",
                );

                return new SeletorValorReverso(
                    lexema,
                    [
                        valor1ConjuntoEstilos,
                        valor2ConjuntoEstilos,
                        valor3ConjuntoEstilos
                    ]
                ) as MetodoCss;

            case "stylistic":
                this.consumir(
                    tiposDeSimbolos.PARENTESE_ESQUERDO,
                    "Esperado parêntese esquerdo após método 'stylistic'.",
                );

                const valorEstilistico = this.avancarEDevolverAnterior();

                this.consumir(
                    tiposDeSimbolos.PARENTESE_DIREITO,
                    "Esperado parêntese direito após argumento do método stylistic.",
                );

                return new SeletorValorReverso(lexema, [valorEstilistico]) as MetodoCss;

            case "swash":
                this.consumir(
                    tiposDeSimbolos.PARENTESE_ESQUERDO,
                    "Esperado parêntese esquerdo após método 'swash'.",
                );

                const valorEspirrar = this.avancarEDevolverAnterior();

                this.consumir(
                    tiposDeSimbolos.PARENTESE_DIREITO,
                    "Esperado parêntese direito após argumento do método swash.",
                );
                return new SeletorValorReverso(lexema, [valorEspirrar]) as MetodoCss;

            case "translate":
                this.consumir(
                    tiposDeSimbolos.PARENTESE_ESQUERDO,
                    "Esperado parêntese esquerdo após método 'translate'.",
                );

                const valorTranslacao1 = this.avancarEDevolverAnterior();

                let quantificadorTranlacao1;
                if (this.simbolos[this.atual].tipo === "QUANTIFICADOR") {
                    quantificadorTranlacao1 = this.avancarEDevolverAnterior();
                } else {
                    quantificadorTranlacao1 = null;
                }

                let valorTranslacao2;
                let quantificadorTranlacao2;
                if (this.simbolos[this.atual].tipo === "VIRGULA") {
                    this.consumir(
                        tiposDeSimbolos.VIRGULA,
                        "Esperado vírgula após primeiro argumento do método 'translate'.",
                    );
                    valorTranslacao2 = this.avancarEDevolverAnterior();
                    quantificadorTranlacao2 = this.avancarEDevolverAnterior();
                } else {
                    valorTranslacao2 = null;
                    quantificadorTranlacao2 = null;
                }

                this.consumir(
                    tiposDeSimbolos.PARENTESE_DIREITO,
                    "Esperado parêntese direito após método 'translação'.",
                );
                return new SeletorValorReverso(
                    lexema,
                    [
                        valorTranslacao1,
                        quantificadorTranlacao1,
                        valorTranslacao2,
                        quantificadorTranlacao2,
                    ],
                    true
                ) as MetodoCss;

            case "translate3d":
                this.consumir(
                    tiposDeSimbolos.PARENTESE_ESQUERDO,
                    "Esperado parêntese esquerdo após método 'translate3d'.",
                );

                const valorTranslacao3d1 = this.avancarEDevolverAnterior();

                let quantificadorTranlacao3d1;
                if (this.simbolos[this.atual].tipo === "QUANTIFICADOR") {
                    quantificadorTranlacao3d1 = this.avancarEDevolverAnterior();
                } else {
                    quantificadorTranlacao3d1 = null;
                }

                let valorTranslacao3d2;
                let quantificadorTranlacao3d2;
                if (this.simbolos[this.atual].tipo === "VIRGULA") {
                    this.consumir(
                        tiposDeSimbolos.VIRGULA,
                        "Esperado vírgula após primeiro argumento do método 'translate3d'.",
                    );
                    valorTranslacao3d2 = this.avancarEDevolverAnterior();
                    if (this.simbolos[this.atual].tipo === "QUANTIFICADOR") {
                        quantificadorTranlacao3d2 =
                            this.avancarEDevolverAnterior();
                    } else {
                        quantificadorTranlacao3d2 = null;
                    }
                } else {
                    valorTranslacao3d2 = null;
                    quantificadorTranlacao3d2 = null;
                }

                let valorTranslacao3d3;
                let quantificadorTranlacao3d3;
                if (this.simbolos[this.atual].tipo === "VIRGULA") {
                    this.consumir(
                        tiposDeSimbolos.VIRGULA,
                        "Esperado vírgula após primeiro argumento do método 'translate3d'.",
                    );
                    valorTranslacao3d3 = this.avancarEDevolverAnterior();
                    if (this.simbolos[this.atual].tipo === "QUANTIFICADOR") {
                        quantificadorTranlacao3d3 =
                            this.avancarEDevolverAnterior();
                    } else {
                        quantificadorTranlacao3d3 = null;
                    }
                } else {
                    valorTranslacao3d3 = null;
                    quantificadorTranlacao3d3 = null;
                }

                this.consumir(
                    tiposDeSimbolos.PARENTESE_DIREITO,
                    "Esperado parêntese direito após método 'translate3d'.",
                );
                return new SeletorValorReverso(
                    lexema,
                    [
                        valorTranslacao3d1,
                        quantificadorTranlacao3d1,
                        valorTranslacao3d2,
                        quantificadorTranlacao3d2,
                        valorTranslacao3d3,
                        quantificadorTranlacao3d3,
                    ]
                ) as MetodoCss;

            case "translateX":
                this.consumir(
                    tiposDeSimbolos.PARENTESE_ESQUERDO,
                    "Esperado parêntese esquerdo após método 'translateX'.",
                );
                const valorTranslaçaoX = this.avancarEDevolverAnterior();
                let quantificadorTranslaçaoX;
                if (this.simbolos[this.atual].tipo === "QUANTIFICADOR") {
                    quantificadorTranslaçaoX = this.avancarEDevolverAnterior();
                } else {
                    quantificadorTranslaçaoX = null;
                }
                this.consumir(
                    tiposDeSimbolos.PARENTESE_DIREITO,
                    "Esperado parêntese direito após método 'translateX'.",
                );
                return new SeletorValorReverso(
                    lexema,
                    [
                        valorTranslaçaoX,
                        quantificadorTranslaçaoX,
                    ]
                ) as MetodoCss;

            case "translateY":
                this.consumir(
                    tiposDeSimbolos.PARENTESE_ESQUERDO,
                    "Esperado parêntese esquerdo após método 'translateY'.",
                );
                const valorTranslaçaoY = this.avancarEDevolverAnterior();
                let quantificadorTranslaçaoY;
                if (this.simbolos[this.atual].tipo === "QUANTIFICADOR") {
                    quantificadorTranslaçaoY = this.avancarEDevolverAnterior();
                } else {
                    quantificadorTranslaçaoY = null;
                }
                this.consumir(
                    tiposDeSimbolos.PARENTESE_DIREITO,
                    "Esperado parêntese direito após método 'translateY'.",
                );
                return new SeletorValorReverso(
                    lexema,
                    [
                        valorTranslaçaoY,
                        quantificadorTranslaçaoY,
                    ]
                ) as MetodoCss;

            case "translateZ":
                this.consumir(
                    tiposDeSimbolos.PARENTESE_ESQUERDO,
                    "Esperado parêntese esquerdo após método 'translateZ'.",
                );
                const valorTranslaçaoZ = this.avancarEDevolverAnterior();
                let quantificadorTranslaçaoZ;
                if (this.simbolos[this.atual].tipo === "QUANTIFICADOR") {
                    quantificadorTranslaçaoZ = this.avancarEDevolverAnterior();
                } else {
                    quantificadorTranslaçaoZ = null;
                }
                this.consumir(
                    tiposDeSimbolos.PARENTESE_DIREITO,
                    "Esperado parêntese direito após método 'translateZ'.",
                );
                return new SeletorValorReverso(
                    lexema,
                    [
                        valorTranslaçaoZ,
                        quantificadorTranslaçaoZ,
                    ]
                ) as MetodoCss;

            case "xywh":
                this.consumir(
                    tiposDeSimbolos.PARENTESE_ESQUERDO,
                    "Esperado parêntese esquerdo após método 'xywh'.",
                );

                const valorXywh: Simbolo = this.avancarEDevolverAnterior();
                const quantificadorXywh: Simbolo = this.avancarEDevolverAnterior();
                const arrayValoresXywh: Array<Simbolo> = [valorXywh, quantificadorXywh];

                while (this.simbolos[this.atual].tipo !== 'PARENTESE_DIREITO') {
                    const proximoValorXywh: Simbolo = this.avancarEDevolverAnterior();
                    arrayValoresXywh.push(proximoValorXywh);
                }

                this.consumir(
                    tiposDeSimbolos.PARENTESE_DIREITO,
                    "Esperado parêntese direito após último argumento do método xywh.",
                );

                return new SeletorValorReverso(lexema, arrayValoresXywh) as MetodoCss;
        }
    }

    protected valorNumerico(
        nomeModificador: string,
        valorModificador: SimboloInterface,
        ponto: boolean
    ): ValorNumerico {
        let literalNumero = Number(valorModificador.lexema);
        if (ponto) {
            literalNumero = literalNumero / Math.pow(10, valorModificador.lexema.length);
        }

        let quantificadorNumero: string;
        if (this.verificarTipoSimboloAtual(tiposDeSimbolos.QUANTIFICADOR)) {
            const simboloQuantificadorNumero = this.avancarEDevolverAnterior();
            quantificadorNumero = simboloQuantificadorNumero.lexema;
        }

        const valorNumerico = new ValorNumerico(nomeModificador, literalNumero, quantificadorNumero);
        return valorNumerico;
    }


    protected valoresModificador(nomeModificador: string): Array<Valor> {
        const valoresResolvidos = [];
        while (
            this.atual < this.simbolos.length &&
            this.simbolos[this.atual].tipo !== tiposDeSimbolos.PONTO_E_VIRGULA
        ) {
            const valorModificador = this.avancarEDevolverAnterior();

            switch (valorModificador.tipo) {
                case tiposDeSimbolos.BARRA:
                    valoresResolvidos.push(new ValorAbreviacao());
                    break;
                case tiposDeSimbolos.CIFRAO:
                    const nomeVariavel = this.avancarEDevolverAnterior();
                    const referenciaVariavel = new ReferenciaVariavel(nomeVariavel.lexema);
                    valoresResolvidos.push(referenciaVariavel);
                    break;
                case tiposDeSimbolos.METODO:
                    const metodo = this.resolverMetodo(valorModificador.lexema);
                    valoresResolvidos.push(metodo);
                    break;
                case tiposDeSimbolos.NUMERO:
                    const valorNumerico = this.valorNumerico(nomeModificador, valorModificador, false);
                    valoresResolvidos.push(valorNumerico);
                    break;
                case tiposDeSimbolos.PONTO:
                    const simboloNumero = this.consumir(tiposDeSimbolos.NUMERO, "Esperado número após ponto para valor de modificador.");
                    const valorNumericoComecadoPorPonto = this.valorNumerico(nomeModificador, simboloNumero, true);
                    valoresResolvidos.push(valorNumericoComecadoPorPonto);
                    break;
                case tiposDeSimbolos.QUALITATIVO:
                    const valorQualitativo = new ValorQualitativo(valorModificador.lexema);
                    valoresResolvidos.push(valorQualitativo);
                    break;
                case tiposDeSimbolos.TEXTO:
                    const valorTexto = new ValorTexto(valorModificador.lexema);
                    valoresResolvidos.push(valorTexto);
                    break;
                case tiposDeSimbolos.VIRGULA:
                    const valorVirgula = new ValorVirgula();
                    valoresResolvidos.push(valorVirgula);
                    break;
                default:
                    if (valorModificador.lexema in valoresGerais) {
                        valoresResolvidos.push(new ValorQualitativo(valorModificador.lexema));
                        break;
                    }

                    if (ModificadoresValorPersonalizado.includes(nomeModificador)) {
                        valoresResolvidos.push(new ValorQualitativo(valorModificador.lexema));
                        break;
                    }

                    throw new ErroAvaliadorSintatico(valorModificador, `Modificador ou variável '${nomeModificador}' com valor '${valorModificador.lexema || valorModificador.tipo}' inválido.`);
            }
        }

        this.consumir(
            tiposDeSimbolos.PONTO_E_VIRGULA,
            "Esperado ponto-e-vírgula após declaração de valores de modificador.",
        );

        return valoresResolvidos;
    }

    private resolverModificador(): Modificador {
        const modificador = this.consumir(
            tiposDeSimbolos.IDENTIFICADOR,
            "Esperado nome do atributo de identificação.",
        );

        this.consumir(
            tiposDeSimbolos.DOIS_PONTOS,
            `Esperado ':' após declaração de Modificador ou variável '${modificador.lexema}'.`,
        );

        const valoresModificador = this.valoresModificador(modificador.lexema);

        const classeModificadora = new SeletorReversoModificador(
            modificador.lexema,
            valoresModificador,
            {
                linha: modificador.linha,
                colunaInicial: modificador.colunaInicial,
                colunaFinal: modificador.colunaFinal,
            },
        );

        return classeModificadora as Modificador;
    }

    resolverModificadorEDeclaracoesAninhadas(): {
        modificadores: Modificador[];
        declaracoesAninhadas: BlocoDeclaracao[];
    } {
        this.consumir(
            tiposDeSimbolos.CHAVE_ESQUERDA,
            "Esperado '{' após declaração de seletor.",
        );

        const modificadores: Modificador[] = [];
        const declaracoesAninhadas: BlocoDeclaracao[] = [];
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
            declaracoesAninhadas,
        };
    }

    declaracao(): BlocoDeclaracao | null {
        if (this.estaNoFinal()) return null;
        const seletores = this.resolverSeletores();
        const modificadorEDeclaracoesAninhadas =
            this.resolverModificadorEDeclaracoesAninhadas();

        return new BlocoDeclaracao(
            seletores,
            modificadorEDeclaracoesAninhadas.modificadores,
            modificadorEDeclaracoesAninhadas.declaracoesAninhadas,
        );
    }

    analisar(simbolos: Simbolo[]): BlocoDeclaracao[] {
        this.simbolos = simbolos;
        this.erros = [];
        this.atual = 0;

        const declaracoes: BlocoDeclaracao[] = [];
        while (!this.estaNoFinal()) {
            declaracoes.push(this.declaracao());
        }

        return declaracoes;
    }
}
