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

            case "contrast":
                this.consumir(tiposDeSimbolos.PARENTESE_ESQUERDO, "Esperado parêntese esquerdo após método 'contrast'.");
                const valorContraste = this.avancarEDevolverAnterior();
                let quantificadorContraste;

                if (this.simbolos[this.atual].tipo === 'QUANTIFICADOR') {
                    quantificadorContraste = this.avancarEDevolverAnterior();
                } else {
                    quantificadorContraste = null;
                }

                this.consumir(tiposDeSimbolos.PARENTESE_DIREITO, "Esperado parêntese direito após método 'contrast'.");
                return new SeletorValorReverso(
                    lexema,
                    [valorContraste, quantificadorContraste]
                );

            case "cubic-bezier":
                this.consumir(tiposDeSimbolos.PARENTESE_ESQUERDO, "Esperado parêntese esquerdo após método 'cubic-bezier'.");
                const parametro1 = this.avancarEDevolverAnterior();
                this.consumir(tiposDeSimbolos.VIRGULA, "Esperado vírgula após primeiro argumento do método cubic-bezier.");
                const parametro2 = this.avancarEDevolverAnterior();
                this.consumir(tiposDeSimbolos.VIRGULA, "Esperado vírgula após segundo argumento do método cubic-bezier.");
                const parametro3 = this.avancarEDevolverAnterior();
                this.consumir(tiposDeSimbolos.VIRGULA, "Esperado vírgula após terceiro argumento do método cubic-bezier.");
                const parametro4 = this.avancarEDevolverAnterior();
                this.consumir(tiposDeSimbolos.PARENTESE_DIREITO, "Esperado parêntese direito após quarto argumento do método curva-cúbica.");
                return new SeletorValorReverso(
                    lexema,
                    [parametro1, parametro2, parametro3, parametro4]
                );

            case "fit-content":
                this.consumir(tiposDeSimbolos.PARENTESE_ESQUERDO, "Esperado parêntese esquerdo após método 'fit-content'.");
                const valorFit = this.avancarEDevolverAnterior();
                const quantificadorFit = this.avancarEDevolverAnterior();
                this.consumir(tiposDeSimbolos.PARENTESE_DIREITO, "Esperado parêntese direito após segundo argumento do método fit-content.");
                return new SeletorValorReverso(
                    lexema,
                    [valorFit['lexema'], quantificadorFit['lexema']]
                );

            case "grayscale":
                this.consumir(tiposDeSimbolos.PARENTESE_ESQUERDO, "Esperado parêntese esquerdo após método 'grayscale'.");
                const valorEscala = this.avancarEDevolverAnterior();
                let quantificadorEscala;
                if (this.simbolos[this.atual].tipo === 'QUANTIFICADOR') {
                    quantificadorEscala = this.avancarEDevolverAnterior();
                } else {
                    quantificadorEscala = null;
                }
                this.consumir(tiposDeSimbolos.PARENTESE_DIREITO, "Esperado parêntese direito após método 'grayscale'.");
                return new SeletorValorReverso(
                    lexema,
                    [valorEscala, quantificadorEscala]
                );

            case "scale":
                this.consumir(tiposDeSimbolos.PARENTESE_ESQUERDO, "Esperado parêntese esquerdo após método 'scale'.");
                const valorScale1 = this.avancarEDevolverAnterior();

                let valorScale2;
                if (this.simbolos[this.atual].tipo === 'VIRGULA') {
                    this.consumir(tiposDeSimbolos.VIRGULA, "Esperado vírgula após primeiro argumento do método scale.");
                    valorScale2 = this.avancarEDevolverAnterior();
                }
                this.consumir(tiposDeSimbolos.PARENTESE_DIREITO, "Esperado parêntese direito após segundo argumento do método scale.");
                return new SeletorValorReverso(
                    lexema,
                    [valorScale1, valorScale2]
                );

            case "scale3d":
                this.consumir(tiposDeSimbolos.PARENTESE_ESQUERDO, "Esperado parêntese esquerdo após método 'scale3d'.");
                const valorScale3d1 = this.avancarEDevolverAnterior();
                this.consumir(tiposDeSimbolos.VIRGULA, "Esperado vírgula após primeiro argumento do método scale3d.");
                const valorScale3d2 = this.avancarEDevolverAnterior();
                this.consumir(tiposDeSimbolos.VIRGULA, "Esperado vírgula após segundo argumento do método scale3d.");
                const valorScale3d3 = this.avancarEDevolverAnterior();
                this.consumir(tiposDeSimbolos.PARENTESE_DIREITO, "Esperado parêntese direito após segundo argumento do método scale3d.");
                return new SeletorValorReverso(
                    lexema,
                    [valorScale3d1, valorScale3d2, valorScale3d3]
                );

            case "scaleZ":
                this.consumir(tiposDeSimbolos.PARENTESE_ESQUERDO, "Esperado parêntese esquerdo após método 'scaleZ'.");
                const valorScaleZ = this.avancarEDevolverAnterior();
                this.consumir(tiposDeSimbolos.PARENTESE_DIREITO, "Esperado parêntese direito após segundo argumento do método scaleZ.");
                return new SeletorValorReverso(
                    lexema,
                    [valorScaleZ]
                );

            case "scaleX":
                this.consumir(tiposDeSimbolos.PARENTESE_ESQUERDO, "Esperado parêntese esquerdo após método 'scaleX'.");
                const valorScaleX = this.avancarEDevolverAnterior();
                this.consumir(tiposDeSimbolos.PARENTESE_DIREITO, "Esperado parêntese direito após segundo argumento do método scaleX.");
                return new SeletorValorReverso(
                    lexema,
                    [valorScaleX]
                );

            case "scaleY":
                this.consumir(tiposDeSimbolos.PARENTESE_ESQUERDO, "Esperado parêntese esquerdo após método 'scaleY'.");
                const valorScaleY = this.avancarEDevolverAnterior();
                this.consumir(tiposDeSimbolos.PARENTESE_DIREITO, "Esperado parêntese direito após segundo argumento do método scaleY.");
                return new SeletorValorReverso(
                    lexema,
                    [valorScaleY]
                );

            case "linear-gradient":
                this.consumir(tiposDeSimbolos.PARENTESE_ESQUERDO, "Esperado parêntese esquerdo após método 'linear-gradient'.");
                const valorAngulo = this.avancarEDevolverAnterior();
                let quantificadorAngulo;
                if (valorAngulo.tipo === 'QUALITATIVO') {
                    switch (valorAngulo.lexema) {
                        case 'superior':
                            valorAngulo.lexema = '0'
                            valorAngulo.tipo = 'NUMERO'
                            quantificadorAngulo = {
                                tipo: 'QUANTIFICADOR',
                                lexema: 'deg',
                            }
                            break;
                        case 'direita':
                            valorAngulo.lexema = '90'
                            valorAngulo.tipo = 'NUMERO'
                            quantificadorAngulo = {
                                tipo: 'QUANTIFICADOR',
                                lexema: 'deg',
                            }
                            break;
                        case 'inferior':
                            valorAngulo.lexema = '180'
                            valorAngulo.tipo = 'NUMERO'
                            quantificadorAngulo = {
                                tipo: 'QUANTIFICADOR',
                                lexema: 'deg',
                            }
                            break;
                        case 'esquerda':
                            valorAngulo.lexema = '270'
                            valorAngulo.tipo = 'NUMERO'
                            quantificadorAngulo = {
                                tipo: 'QUANTIFICADOR',
                                lexema: 'deg',
                            }
                            break;
                        default:
                            break;
                    }
                } else {
                    quantificadorAngulo = this.avancarEDevolverAnterior();
                }

                this.consumir(tiposDeSimbolos.VIRGULA, "Esperado vírgula após segundo argumento do método linear-gradient.");
                const cor1 = this.avancarEDevolverAnterior();
                this.consumir(tiposDeSimbolos.VIRGULA, "Esperado vírgula após segundo argumento do método linear-gradient.");
                const cor2 = this.avancarEDevolverAnterior();
                this.consumir(tiposDeSimbolos.PARENTESE_DIREITO, "Esperado parêntese direito após método 'linear-gradient'.");
                return new SeletorValorReverso(
                    lexema,
                    [valorAngulo, quantificadorAngulo, cor1, cor2]
                );

            case "hsl":
                this.consumir(tiposDeSimbolos.PARENTESE_ESQUERDO, "Esperado parêntese esquerdo após método 'hsl'.");
                const HdeHSL = this.avancarEDevolverAnterior();
                const SdeHSL = this.avancarEDevolverAnterior();
                this.consumir(tiposDeSimbolos.QUANTIFICADOR, "Esperado símbolo percentual após argumento de saturação (S) no método 'hsl'.");
                const LdeHSL = this.avancarEDevolverAnterior();
                this.consumir(tiposDeSimbolos.QUANTIFICADOR, "Esperado símbolo percentual após argumento de luminosidade (L) no método 'hsl'.");
                this.consumir(tiposDeSimbolos.PARENTESE_DIREITO, "Esperado parêntese direito após método 'hsl'.");
                return new SeletorValorReverso(
                    lexema,
                    [HdeHSL, SdeHSL, LdeHSL]
                );

            case "hsla":
                this.consumir(tiposDeSimbolos.PARENTESE_ESQUERDO, "Esperado parêntese esquerdo após método 'hsla'.");
                const HdeHSLA = this.avancarEDevolverAnterior();
                const SdeHSLA = this.avancarEDevolverAnterior();
                this.consumir(tiposDeSimbolos.QUANTIFICADOR, "Esperado símbolo percentual após argumento de saturação (S) no método 'hsla'.");
                const LdeHSLA = this.avancarEDevolverAnterior();
                this.consumir(tiposDeSimbolos.QUANTIFICADOR, "Esperado símbolo percentual após argumento de luminosidade (L) no método 'hsla'.");
                this.consumir(tiposDeSimbolos.PARENTESE_DIREITO, "Esperado parêntese direito após argumentos de método 'hsla'.");
                return new SeletorValorReverso(
                    lexema,
                    [HdeHSLA, SdeHSLA, LdeHSLA]
                );

            case "skew":
                this.consumir(tiposDeSimbolos.PARENTESE_ESQUERDO, "Esperado parêntese esquerdo após método 'skew'.");

                const valorInclinar1 = this.avancarEDevolverAnterior();

                let quantificadorInclinar1;
                if (this.simbolos[this.atual].tipo === 'QUANTIFICADOR') {
                    quantificadorInclinar1 = this.avancarEDevolverAnterior();
                } else {
                    quantificadorInclinar1 = null;
                }

                let valorInclinar2;
                let quantificadorInclinar2;
                if (this.simbolos[this.atual].tipo === 'VIRGULA') {
                    this.consumir(tiposDeSimbolos.VIRGULA, "Esperado vírgula após primeiro argumento do método 'skew'.");
                    valorInclinar2 = this.avancarEDevolverAnterior();
                    quantificadorInclinar2 = this.avancarEDevolverAnterior();
                } else {
                    valorInclinar2 = null;
                    quantificadorInclinar2 = null;
                }

                this.consumir(tiposDeSimbolos.PARENTESE_DIREITO, "Esperado parêntese direito após método 'skew'.");
                return new SeletorValorReverso(
                    lexema,
                    [valorInclinar1, quantificadorInclinar1, valorInclinar2, quantificadorInclinar2]
                );

            case "skewX":
                this.consumir(tiposDeSimbolos.PARENTESE_ESQUERDO, "Esperado parêntese esquerdo após método 'skewX'.");
                const valorInclinarX = this.avancarEDevolverAnterior();
                let quantificadorInclinarX;
                if (this.simbolos[this.atual].tipo === 'QUANTIFICADOR') {
                    quantificadorInclinarX = this.avancarEDevolverAnterior();
                } else {
                    quantificadorInclinarX = null;
                }
                this.consumir(tiposDeSimbolos.PARENTESE_DIREITO, "Esperado parêntese direito após método 'skewX'.");
                return new SeletorValorReverso(
                    lexema,
                    [valorInclinarX, quantificadorInclinarX]
                );

            case "skewY":
                this.consumir(tiposDeSimbolos.PARENTESE_ESQUERDO, "Esperado parêntese esquerdo após método 'skewY'.");
                const valorInclinarY = this.avancarEDevolverAnterior();
                let quantificadorInclinarY;
                if (this.simbolos[this.atual].tipo === 'QUANTIFICADOR') {
                    quantificadorInclinarY = this.avancarEDevolverAnterior();
                } else {
                    quantificadorInclinarY = null;
                }
                this.consumir(tiposDeSimbolos.PARENTESE_DIREITO, "Esperado parêntese direito após método 'skewY'.");
                return new SeletorValorReverso(
                    lexema,
                    [valorInclinarY, quantificadorInclinarY]
                );

            case "invert":
                this.consumir(tiposDeSimbolos.PARENTESE_ESQUERDO, "Esperado parêntese esquerdo após método 'invert'.");
                const valorInverter = this.avancarEDevolverAnterior();
                let quantificadorInverter;
                if (this.simbolos[this.atual].tipo === 'QUANTIFICADOR') {
                    quantificadorInverter = this.avancarEDevolverAnterior();
                } else {
                    quantificadorInverter = null;
                }
                this.consumir(tiposDeSimbolos.PARENTESE_DIREITO, "Esperado parêntese direito após método 'invert'.");
                return new SeletorValorReverso(
                    lexema,
                    [valorInverter, quantificadorInverter]
                );

            case "clamp":
                this.consumir(tiposDeSimbolos.PARENTESE_ESQUERDO, "Esperado parêntese esquerdo após método 'clamp'.");
                const valorMin = this.avancarEDevolverAnterior();
                const quantificadorMin = this.avancarEDevolverAnterior();
                this.consumir(tiposDeSimbolos.VIRGULA, "Esperado vírgula após primeiro argumento do método 'clamp'.");
                const valorMed = this.avancarEDevolverAnterior();
                const quantificadorMed = this.avancarEDevolverAnterior();
                this.consumir(tiposDeSimbolos.VIRGULA, "Esperado vírgula após segundo argumento do método 'clamp'.");
                const valorMax = this.avancarEDevolverAnterior();
                const quantificadorMax = this.avancarEDevolverAnterior();
                this.consumir(tiposDeSimbolos.PARENTESE_DIREITO, "Esperado parêntese direito após segundo argumento do método clamp.");
                return new SeletorValorReverso(
                    lexema,
                    [valorMin, quantificadorMin, valorMed, quantificadorMed, valorMax, quantificadorMax]
                );

            case "linear":
                this.consumir(tiposDeSimbolos.PARENTESE_ESQUERDO, "Esperado parêntese esquerdo após método 'linear'.");
                const valor1 = this.avancarEDevolverAnterior();
                this.consumir(tiposDeSimbolos.VIRGULA, "Esperado vírgula após primeiro argumento do método linear.");
                const valor2 = this.avancarEDevolverAnterior();
                this.consumir(tiposDeSimbolos.VIRGULA, "Esperado vírgula após segundo argumento do método linear.");
                const valor3 = this.avancarEDevolverAnterior();
                this.consumir(tiposDeSimbolos.PARENTESE_DIREITO, "Esperado parêntese direito após terceiro argumento do método linear.");
                return new SeletorValorReverso(
                    lexema,
                    [valor1, valor2, valor3]
                );

            case "minmax":
                this.consumir(tiposDeSimbolos.PARENTESE_ESQUERDO, "Esperado parêntese esquerdo após método 'minmax'.");
                const valor01 = this.avancarEDevolverAnterior();
                let parametro01 = null;
                if (Number(valor01['lexema'])) {
                    const quantificador01 = this.avancarEDevolverAnterior();
                    parametro01 = `${valor01['lexema']}${quantificador01['lexema']}`
                }
                this.consumir(tiposDeSimbolos.VIRGULA, "Esperado vírgula após primeiro argumento do método minmax.");
                const valor02 = this.avancarEDevolverAnterior();
                let parametro02 = null;
                if (Number(valor02['lexema'])) {
                    const quantificador02 = this.avancarEDevolverAnterior();
                    parametro02 = `${valor02['lexema']}${quantificador02['lexema']}`
                }
                this.consumir(tiposDeSimbolos.PARENTESE_DIREITO, "Esperado parêntese direito após segundo argumento do método minmax.");

                if (parametro01 !== null) {
                    return new SeletorValorReverso(
                        lexema,
                        [parametro01, valor02['lexema']]
                    );
                } else if (parametro02 !== null) {
                    return new SeletorValorReverso(
                        lexema,
                        [valor01['lexema'], parametro02]
                    );
                }

            case "opacity":
                this.consumir(tiposDeSimbolos.PARENTESE_ESQUERDO, "Esperado parêntese esquerdo após método 'opacity'.");
                const valorOpaco = this.avancarEDevolverAnterior();
                let quantificadorOpaco;
                if (this.simbolos[this.atual].tipo === 'QUANTIFICADOR') {
                    quantificadorOpaco = this.avancarEDevolverAnterior();
                } else {
                    quantificadorOpaco = null;
                }
                this.consumir(tiposDeSimbolos.PARENTESE_DIREITO, "Esperado parêntese direito após método 'opacity'.");
                return new SeletorValorReverso(
                    lexema,
                    [valorOpaco, quantificadorOpaco]
                );

            case "steps":
                this.consumir(tiposDeSimbolos.PARENTESE_ESQUERDO, "Esperado parêntese esquerdo após método 'steps'.");
                const valorNumerico = this.avancarEDevolverAnterior();
                this.consumir(tiposDeSimbolos.VIRGULA, "Esperado vírgula após primeiro argumento do método steps.");
                const termoSalto = this.avancarEDevolverAnterior();
                this.consumir(tiposDeSimbolos.PARENTESE_DIREITO, "Esperado parêntese direito após segundo argumento do método steps.");
                return new SeletorValorReverso(
                    lexema,
                    [valorNumerico, termoSalto]
                );

            case "perspective":
                this.consumir(tiposDeSimbolos.PARENTESE_ESQUERDO, "Esperado parêntese esquerdo após método 'perspective'.");
                const valorPerspectivar = this.avancarEDevolverAnterior();
                let quantificadorPerspectivar;
                if (this.simbolos[this.atual].tipo === 'QUANTIFICADOR') {
                    quantificadorPerspectivar = this.avancarEDevolverAnterior();
                } else {
                    quantificadorPerspectivar = null;
                }
                this.consumir(tiposDeSimbolos.PARENTESE_DIREITO, "Esperado parêntese direito após método 'perspective'.");
                return new SeletorValorReverso(
                    lexema,
                    [valorPerspectivar, quantificadorPerspectivar]
                );

            case "drop-shadow":
                this.consumir(tiposDeSimbolos.PARENTESE_ESQUERDO, "Esperado parêntese esquerdo após método 'drop-shadow'.");
                let corSombra = null;
                if (this.simbolos[this.atual].tipo === 'QUALITATIVO') {
                    corSombra = this.avancarEDevolverAnterior();
                }

                const valorSombra1 = this.avancarEDevolverAnterior();
                const quantificadorSombra1 = this.avancarEDevolverAnterior();

                const valorSombra2 = this.avancarEDevolverAnterior();
                const quantificadorSombra2 = this.avancarEDevolverAnterior();

                let valorSombra3;
                let quantificadorSombra3;
                if (this.simbolos[this.atual].tipo === 'NUMERO') {
                    valorSombra3 = this.avancarEDevolverAnterior();
                    quantificadorSombra3 = this.avancarEDevolverAnterior();
                } else {
                    valorSombra3 = null;
                    quantificadorSombra3 = null;
                }

                if (this.simbolos[this.atual].tipo === 'QUALITATIVO') {
                    corSombra = this.avancarEDevolverAnterior();
                }

                this.consumir(tiposDeSimbolos.PARENTESE_DIREITO, "Esperado parêntese direito após método 'drop-shadow'.");
                return new SeletorValorReverso(
                    lexema,
                    [valorSombra1, quantificadorSombra1, valorSombra2, quantificadorSombra2, valorSombra3, quantificadorSombra3, corSombra]
                );

            case "ray":
                this.consumir(tiposDeSimbolos.PARENTESE_ESQUERDO, "Esperado parêntese esquerdo após método 'ray'.");
                let posicaoRaio;
                if (this.simbolos[this.atual].tipo === 'QUALITATIVO') {
                    posicaoRaio = this.avancarEDevolverAnterior();
                } else {
                    posicaoRaio = null;
                }
                const numeroRaio = this.avancarEDevolverAnterior();
                const quantificadorRaio = this.avancarEDevolverAnterior();
                this.consumir(tiposDeSimbolos.PARENTESE_DIREITO, "Esperado parêntese direito após argumentos de método 'ray'.");
                return new SeletorValorReverso(
                    lexema,
                    [posicaoRaio, numeroRaio, quantificadorRaio]
                );

            case "rgb":
                this.consumir(tiposDeSimbolos.PARENTESE_ESQUERDO, "Esperado parêntese esquerdo após método 'rgb'.");
                const vermelho = this.avancarEDevolverAnterior();
                this.consumir(tiposDeSimbolos.VIRGULA, "Esperado vírgula após argumento de cor vermelha.");
                const verde = this.avancarEDevolverAnterior();
                this.consumir(tiposDeSimbolos.VIRGULA, "Esperado vírgula após argumento de cor verde.");
                const azul = this.avancarEDevolverAnterior();
                this.consumir(tiposDeSimbolos.PARENTESE_DIREITO, "Esperado parêntese direito após argumentos de método 'rgb'.");
                return new SeletorValorReverso(
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
                return new SeletorValorReverso(
                    lexema,
                    [vermelhoRgba, verdeRgba, azulRgba]
                );

            case "rotate":
                this.consumir(tiposDeSimbolos.PARENTESE_ESQUERDO, "Esperado parêntese esquerdo após método 'rotate'.");
                const valorRotacionar = this.avancarEDevolverAnterior();
                let quantificadorRotacionar;
                if (this.simbolos[this.atual].tipo === 'QUANTIFICADOR') {
                    quantificadorRotacionar = this.avancarEDevolverAnterior();
                } else {
                    quantificadorRotacionar = null;
                }

                this.consumir(tiposDeSimbolos.PARENTESE_DIREITO, "Esperado parêntese direito após método 'rotate'.");
                return new SeletorValorReverso(
                    lexema,
                    [valorRotacionar, quantificadorRotacionar]
                );

            case "rotateZ":
                this.consumir(tiposDeSimbolos.PARENTESE_ESQUERDO, "Esperado parêntese esquerdo após método 'rotateZ'.");
                const valorRotacionarZ = this.avancarEDevolverAnterior();
                let quantificadorRotacionarZ;
                if (this.simbolos[this.atual].tipo === 'QUANTIFICADOR') {
                    quantificadorRotacionarZ = this.avancarEDevolverAnterior();
                } else {
                    quantificadorRotacionarZ = null;
                }

                this.consumir(tiposDeSimbolos.PARENTESE_DIREITO, "Esperado parêntese direito após método 'rotateZ'.");
                return new SeletorValorReverso(
                    lexema,
                    [valorRotacionarZ, quantificadorRotacionarZ]
                );

            case "rotateX":
                this.consumir(tiposDeSimbolos.PARENTESE_ESQUERDO, "Esperado parêntese esquerdo após método 'rotateX'.");
                const valorRotacionarX = this.avancarEDevolverAnterior();
                let quantificadorRotacionarX;
                if (this.simbolos[this.atual].tipo === 'QUANTIFICADOR') {
                    quantificadorRotacionarX = this.avancarEDevolverAnterior();
                } else {
                    quantificadorRotacionarX = null;
                }
                this.consumir(tiposDeSimbolos.PARENTESE_DIREITO, "Esperado parêntese direito após método 'rotateX'.");
                return new SeletorValorReverso(
                    lexema,
                    [valorRotacionarX, quantificadorRotacionarX]
                );

            case "hue-rotate":
                this.consumir(tiposDeSimbolos.PARENTESE_ESQUERDO, "Esperado parêntese esquerdo após método 'hue-rotate'.");
                const valorRotacao = this.avancarEDevolverAnterior();
                let quantificadorRotacao;
                if (this.simbolos[this.atual].tipo === 'QUANTIFICADOR') {
                    quantificadorRotacao = this.avancarEDevolverAnterior();
                } else {
                    quantificadorRotacao = null;
                }
                this.consumir(tiposDeSimbolos.PARENTESE_DIREITO, "Esperado parêntese direito após método 'hue-rotate'.");
                return new SeletorValorReverso(
                    lexema,
                    [valorRotacao, quantificadorRotacao]
                );

            case "rotateY":
                this.consumir(tiposDeSimbolos.PARENTESE_ESQUERDO, "Esperado parêntese esquerdo após método 'rotateY'.");
                const valorRotacionarY = this.avancarEDevolverAnterior();
                let quantificadorRotacionarY;
                if (this.simbolos[this.atual].tipo === 'QUANTIFICADOR') {
                    quantificadorRotacionarY = this.avancarEDevolverAnterior();
                } else {
                    quantificadorRotacionarY = null;
                }
                this.consumir(tiposDeSimbolos.PARENTESE_DIREITO, "Esperado parêntese direito após método 'rotateY'.");
                return new SeletorValorReverso(
                    lexema,
                    [valorRotacionarY, quantificadorRotacionarY]
                );

            case "saturate":
                this.consumir(tiposDeSimbolos.PARENTESE_ESQUERDO, "Esperado parêntese esquerdo após método 'saturate'.");
                const valorSaturar = this.avancarEDevolverAnterior();
                let quantificadorSaturar;
                if (this.simbolos[this.atual].tipo === 'QUANTIFICADOR') {
                    quantificadorSaturar = this.avancarEDevolverAnterior();
                } else {
                    quantificadorSaturar = null;
                }
                this.consumir(tiposDeSimbolos.PARENTESE_DIREITO, "Esperado parêntese direito após método 'saturate'.");
                return new SeletorValorReverso(
                    lexema,
                    [valorSaturar, quantificadorSaturar]
                );

            case "sepia":
                this.consumir(tiposDeSimbolos.PARENTESE_ESQUERDO, "Esperado parêntese esquerdo após método 'sepia'.");
                const valorSepia = this.avancarEDevolverAnterior();
                let quantificadorSepia;
                if (this.simbolos[this.atual].tipo === 'QUANTIFICADOR') {
                    quantificadorSepia = this.avancarEDevolverAnterior();
                } else {
                    quantificadorSepia = null;
                }
                this.consumir(tiposDeSimbolos.PARENTESE_DIREITO, "Esperado parêntese direito após método 'sepia'.");
                return new SeletorValorReverso(
                    lexema,
                    [valorSepia, quantificadorSepia]
                );

            case "translate":
                this.consumir(tiposDeSimbolos.PARENTESE_ESQUERDO, "Esperado parêntese esquerdo após método 'translate'.");

                const valorTranslacao1 = this.avancarEDevolverAnterior();

                let quantificadorTranlacao1;
                if (this.simbolos[this.atual].tipo === 'QUANTIFICADOR') {
                    quantificadorTranlacao1 = this.avancarEDevolverAnterior();
                } else {
                    quantificadorTranlacao1 = null;
                }

                let valorTranslacao2;
                let quantificadorTranlacao2;
                if (this.simbolos[this.atual].tipo === 'VIRGULA') {
                    this.consumir(tiposDeSimbolos.VIRGULA, "Esperado vírgula após primeiro argumento do método 'translate'.");
                    valorTranslacao2 = this.avancarEDevolverAnterior();
                    quantificadorTranlacao2 = this.avancarEDevolverAnterior();
                } else {
                    valorTranslacao2 = null;
                    quantificadorTranlacao2 = null;
                }

                this.consumir(tiposDeSimbolos.PARENTESE_DIREITO, "Esperado parêntese direito após método 'translação'.");
                return new SeletorValorReverso(
                    lexema,
                    [valorTranslacao1, quantificadorTranlacao1, valorTranslacao2, quantificadorTranlacao2]
                );

            case "translate3d":
                this.consumir(tiposDeSimbolos.PARENTESE_ESQUERDO, "Esperado parêntese esquerdo após método 'translate3d'.");

                const valorTranslacao3d1 = this.avancarEDevolverAnterior();

                let quantificadorTranlacao3d1;
                if (this.simbolos[this.atual].tipo === 'QUANTIFICADOR') {
                    quantificadorTranlacao3d1 = this.avancarEDevolverAnterior();
                } else {
                    quantificadorTranlacao3d1 = null;
                }

                let valorTranslacao3d2;
                let quantificadorTranlacao3d2;
                if (this.simbolos[this.atual].tipo === 'VIRGULA') {
                    this.consumir(tiposDeSimbolos.VIRGULA, "Esperado vírgula após primeiro argumento do método 'translate3d'.");
                    valorTranslacao3d2 = this.avancarEDevolverAnterior();
                    if (this.simbolos[this.atual].tipo === 'QUANTIFICADOR') {
                        quantificadorTranlacao3d2 = this.avancarEDevolverAnterior();
                    } else {
                        quantificadorTranlacao3d2 = null;
                    }
                } else {
                    valorTranslacao3d2 = null;
                    quantificadorTranlacao3d2 = null;
                }

                let valorTranslacao3d3;
                let quantificadorTranlacao3d3;
                if (this.simbolos[this.atual].tipo === 'VIRGULA') {
                    this.consumir(tiposDeSimbolos.VIRGULA, "Esperado vírgula após primeiro argumento do método 'translate3d'.");
                    valorTranslacao3d3 = this.avancarEDevolverAnterior();
                    if (this.simbolos[this.atual].tipo === 'QUANTIFICADOR') {
                        quantificadorTranlacao3d3 = this.avancarEDevolverAnterior();
                    } else {
                        quantificadorTranlacao3d3 = null;
                    }
                } else {
                    valorTranslacao3d3 = null;
                    quantificadorTranlacao3d3 = null;
                }

                this.consumir(tiposDeSimbolos.PARENTESE_DIREITO, "Esperado parêntese direito após método 'translate3d'.");
                return new SeletorValorReverso(
                    lexema,
                    [valorTranslacao3d1, quantificadorTranlacao3d1, valorTranslacao3d2, quantificadorTranlacao3d2, valorTranslacao3d3, quantificadorTranlacao3d3]
                );

            case "translateX":
                this.consumir(tiposDeSimbolos.PARENTESE_ESQUERDO, "Esperado parêntese esquerdo após método 'translateX'.");
                const valorTranslaçaoX = this.avancarEDevolverAnterior();
                let quantificadorTranslaçaoX;
                if (this.simbolos[this.atual].tipo === 'QUANTIFICADOR') {
                    quantificadorTranslaçaoX = this.avancarEDevolverAnterior();
                } else {
                    quantificadorTranslaçaoX = null;
                }
                this.consumir(tiposDeSimbolos.PARENTESE_DIREITO, "Esperado parêntese direito após método 'translateX'.");
                return new SeletorValorReverso(
                    lexema,
                    [valorTranslaçaoX, quantificadorTranslaçaoX]
                );

            case "translateY":
                this.consumir(tiposDeSimbolos.PARENTESE_ESQUERDO, "Esperado parêntese esquerdo após método 'translateY'.");
                const valorTranslaçaoY = this.avancarEDevolverAnterior();
                let quantificadorTranslaçaoY;
                if (this.simbolos[this.atual].tipo === 'QUANTIFICADOR') {
                    quantificadorTranslaçaoY = this.avancarEDevolverAnterior();
                } else {
                    quantificadorTranslaçaoY = null;
                }
                this.consumir(tiposDeSimbolos.PARENTESE_DIREITO, "Esperado parêntese direito após método 'translateY'.");
                return new SeletorValorReverso(
                    lexema,
                    [valorTranslaçaoY, quantificadorTranslaçaoY]
                );

            case "translateZ":
                this.consumir(tiposDeSimbolos.PARENTESE_ESQUERDO, "Esperado parêntese esquerdo após método 'translateZ'.");
                const valorTranslaçaoZ = this.avancarEDevolverAnterior();
                let quantificadorTranslaçaoZ;
                if (this.simbolos[this.atual].tipo === 'QUANTIFICADOR') {
                    quantificadorTranslaçaoZ = this.avancarEDevolverAnterior();
                } else {
                    quantificadorTranslaçaoZ = null;
                }
                this.consumir(tiposDeSimbolos.PARENTESE_DIREITO, "Esperado parêntese direito após método 'translateZ'.");
                return new SeletorValorReverso(
                    lexema,
                    [valorTranslaçaoZ, quantificadorTranslaçaoZ]
                );

            // case "url":
            //     this.consumir(tiposDeSimbolos.PARENTESE_ESQUERDO, "Esperado parêntese esquerdo após método 'url'.");
            //     const url = this.validacaoUrl();
            //     this.consumir(tiposDeSimbolos.PARENTESE_DIREITO, "Esperado parêntese direito após argumento do método url.");
            //     return new SeletorValorReverso(
            //         lexema,
            //         [url]
            //     );
        }
    }

    private valorModificador() {
        const valorModificador = this.avancarEDevolverAnterior();

        switch (valorModificador.tipo) {
            case tiposDeSimbolos.CERQUILHA:
                return this.resolverCor();
            case tiposDeSimbolos.METODO:
                return this.resolverMetodo(valorModificador.lexema);
            // case tiposDeSimbolos.IDENTIFICADOR:
            //     return this.resolverMetodo(valorModificador.lexema);
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