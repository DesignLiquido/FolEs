import { ErroAvaliadorSintatico } from ".";
import { Declaracao } from "../declaracoes";
import { Simbolo } from "../lexador";
import { Modificador } from "../modificadores";
import { SeletorModificador } from "../modificadores/superclasse";
import { Valor } from "../valores/valor";
import { SeletorValor } from "../valores/seletor-valor";

import tiposDeSimbolos from "../tipos-de-simbolos/foles";
import { Pseudoclasse } from "../pseudoclasses/pseudoclasse";
import { SeletorPseudoclasse } from "../pseudoclasses/seletor-pseudoclasse";
import { Seletor, SeletorClasse, SeletorEstrutura, SeletorId } from "../seletores";
import { SeletorEstruturasLmht } from "../estruturas/seletor-estruturas-lmht";
import { Estrutura } from "../estruturas/estrutura";
import { SeletorEspacoReservado } from "../seletores/seletor-espaco-reservado";
import { AvaliadorSintaticoInterface, ImportadorInterface, SimboloInterface } from "../interfaces";
import { ValorNumerico, ValorNumericoComQuantificador } from "../../testes/listas/valor-numerico";
import { log } from "console";


/**
 * Implementação do avaliador sintático.
 */
export class AvaliadorSintatico implements AvaliadorSintaticoInterface {
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

    resolverMetodo(lexema: string): Valor {
        switch (lexema) {
            case "#":
                const codigoHEX = this.consumir(tiposDeSimbolos.IDENTIFICADOR, "Esperado código HEX válido após #'.");
                return new SeletorValor(
                    'hex',
                    [codigoHEX.lexema],
                );

            case "borrar":
                this.consumir(tiposDeSimbolos.PARENTESE_ESQUERDO, "Esperado parêntese esquerdo após método 'borrar'.");
                const valorBorrar = this.avancarEDevolverAnterior();
                let quantificadorBorrar;
                if (this.simbolos[this.atual].tipo === 'QUANTIFICADOR') {
                    quantificadorBorrar = this.avancarEDevolverAnterior();
                } else {
                    quantificadorBorrar = null;
                }
                this.consumir(tiposDeSimbolos.PARENTESE_DIREITO, "Esperado parêntese direito após método 'borrar'.");
                return new SeletorValor(
                    lexema,
                    [valorBorrar, quantificadorBorrar]
                );

            case "brilho":
                this.consumir(tiposDeSimbolos.PARENTESE_ESQUERDO, "Esperado parêntese esquerdo após método 'brilho'.");
                const valorBrilho = this.avancarEDevolverAnterior();
                let quantificadorBrilho;
                if (this.simbolos[this.atual].tipo === 'QUANTIFICADOR') {
                    quantificadorBrilho = this.avancarEDevolverAnterior();
                } else {
                    quantificadorBrilho = null;
                }
                this.consumir(tiposDeSimbolos.PARENTESE_DIREITO, "Esperado parêntese direito após método 'brilho'.");
                return new SeletorValor(
                    lexema,
                    [valorBrilho, quantificadorBrilho]
                );

            case "calcular":
                this.consumir(tiposDeSimbolos.PARENTESE_ESQUERDO, "Esperado parêntese esquerdo após método 'calcular'.");
                const valorCalc1 = this.avancarEDevolverAnterior();
                const quantificadorCalc1 = this.avancarEDevolverAnterior();
                const operadorCalc = this.avancarEDevolverAnterior();
                const valorCalc2 = this.avancarEDevolverAnterior();
                const quantificadorCalc2 = this.avancarEDevolverAnterior();
                this.consumir(tiposDeSimbolos.PARENTESE_DIREITO, "Esperado parêntese direito após método 'calcular'.");
                return new SeletorValor(
                    lexema,
                    [valorCalc1, quantificadorCalc1, operadorCalc, valorCalc2, quantificadorCalc2]
                );

            case "contraste":
                this.consumir(tiposDeSimbolos.PARENTESE_ESQUERDO, "Esperado parêntese esquerdo após método 'contraste'.");
                const valorContraste = this.avancarEDevolverAnterior();
                let quantificadorContraste;
                if (this.simbolos[this.atual].tipo === 'QUANTIFICADOR') {
                    quantificadorContraste = this.avancarEDevolverAnterior();
                } else {
                    quantificadorContraste = null;
                }
                this.consumir(tiposDeSimbolos.PARENTESE_DIREITO, "Esperado parêntese direito após método 'contraste'.");
                return new SeletorValor(
                    lexema,
                    [valorContraste, quantificadorContraste]
                );

            case "curva-cúbica":
                this.consumir(tiposDeSimbolos.PARENTESE_ESQUERDO, "Esperado parêntese esquerdo após método 'curva-cúbica'.");
                const parametro1 = this.avancarEDevolverAnterior();
                this.consumir(tiposDeSimbolos.VIRGULA, "Esperado vírgula após primeiro argumento do método curva-cúbica.");
                const parametro2 = this.avancarEDevolverAnterior();
                this.consumir(tiposDeSimbolos.VIRGULA, "Esperado vírgula após segundo argumento do método curva-cúbica.");
                const parametro3 = this.avancarEDevolverAnterior();
                this.consumir(tiposDeSimbolos.VIRGULA, "Esperado vírgula após terceiro argumento do método curva-cúbica.");
                const parametro4 = this.avancarEDevolverAnterior();
                this.consumir(tiposDeSimbolos.PARENTESE_DIREITO, "Esperado parêntese direito após quarto argumento do método curva-cúbica.");
                return new SeletorValor(
                    lexema,
                    [parametro1, parametro2, parametro3, parametro4]
                );

            case "curva-cubica":
                this.consumir(tiposDeSimbolos.PARENTESE_ESQUERDO, "Esperado parêntese esquerdo após método 'curva-cúbica'.");
                const parametro1cc = this.avancarEDevolverAnterior();
                this.consumir(tiposDeSimbolos.VIRGULA, "Esperado vírgula após primeiro argumento do método curva-cúbica.");
                const parametro2cc = this.avancarEDevolverAnterior();
                this.consumir(tiposDeSimbolos.VIRGULA, "Esperado vírgula após segundo argumento do método curva-cúbica.");
                const parametro3cc = this.avancarEDevolverAnterior();
                this.consumir(tiposDeSimbolos.VIRGULA, "Esperado vírgula após terceiro argumento do método curva-cúbica.");
                const parametro4cc = this.avancarEDevolverAnterior();
                this.consumir(tiposDeSimbolos.PARENTESE_DIREITO, "Esperado parêntese direito após quarto argumento do método curva-cúbica.");
                return new SeletorValor(
                    lexema,
                    [parametro1cc, parametro2cc, parametro3cc, parametro4cc]
                );

            case "encaixar-conteudo":
                this.consumir(tiposDeSimbolos.PARENTESE_ESQUERDO, "Esperado parêntese esquerdo após método 'encaixar-conteúdo'.");
                const valorFit = this.avancarEDevolverAnterior();
                const quantificadorFit = this.avancarEDevolverAnterior();
                this.consumir(tiposDeSimbolos.PARENTESE_DIREITO, "Esperado parêntese direito após segundo argumento do método encaixar-conteúdo.");
                return new SeletorValor(
                    lexema,
                    [valorFit['lexema'], quantificadorFit['lexema']]
                );

            case "encaixar-conteúdo":
                this.consumir(tiposDeSimbolos.PARENTESE_ESQUERDO, "Esperado parêntese esquerdo após método 'encaixar-conteúdo'.");
                const valorFit1 = this.avancarEDevolverAnterior();
                const quantificadorFit1 = this.avancarEDevolverAnterior();
                this.consumir(tiposDeSimbolos.PARENTESE_DIREITO, "Esperado parêntese direito após segundo argumento do método encaixar-conteúdo.");
                return new SeletorValor(
                    lexema,
                    [valorFit1['lexema'], quantificadorFit1['lexema']]
                );

            case "escala-cinza":
                this.consumir(tiposDeSimbolos.PARENTESE_ESQUERDO, "Esperado parêntese esquerdo após método 'escala-cinza'.");
                const valorEscala = this.avancarEDevolverAnterior();
                let quantificadorEscala;
                if (this.simbolos[this.atual].tipo === 'QUANTIFICADOR') {
                    quantificadorEscala = this.avancarEDevolverAnterior();
                } else {
                    quantificadorEscala = null;
                }
                this.consumir(tiposDeSimbolos.PARENTESE_DIREITO, "Esperado parêntese direito após método 'escala-cinza'.");
                return new SeletorValor(
                    lexema,
                    [valorEscala, quantificadorEscala]
                );

            case "escalamento":
                this.consumir(tiposDeSimbolos.PARENTESE_ESQUERDO, "Esperado parêntese esquerdo após método 'escalamento'.");
                const valorScale1 = this.avancarEDevolverAnterior();

                let valorScale2;
                if (this.simbolos[this.atual].tipo === 'VIRGULA') {
                    this.consumir(tiposDeSimbolos.VIRGULA, "Esperado vírgula após primeiro argumento do método escalamento.");
                    valorScale2 = this.avancarEDevolverAnterior();
                }
                this.consumir(tiposDeSimbolos.PARENTESE_DIREITO, "Esperado parêntese direito após segundo argumento do método escalamento.");
                return new SeletorValor(
                    lexema,
                    [valorScale1, valorScale2]
                );

            case "escalamento-3d":
                this.consumir(tiposDeSimbolos.PARENTESE_ESQUERDO, "Esperado parêntese esquerdo após método 'escalamento-3d'.");
                const valorScale3d1 = this.avancarEDevolverAnterior();
                this.consumir(tiposDeSimbolos.VIRGULA, "Esperado vírgula após primeiro argumento do método escalamento-3d.");
                const valorScale3d2 = this.avancarEDevolverAnterior();
                this.consumir(tiposDeSimbolos.VIRGULA, "Esperado vírgula após segundo argumento do método escalamento-3d.");
                const valorScale3d3 = this.avancarEDevolverAnterior();
                this.consumir(tiposDeSimbolos.PARENTESE_DIREITO, "Esperado parêntese direito após segundo argumento do método escalamento-3d.");
                return new SeletorValor(
                    lexema,
                    [valorScale3d1, valorScale3d2, valorScale3d3]
                );

            case "escalamento-eixo-z":
                this.consumir(tiposDeSimbolos.PARENTESE_ESQUERDO, "Esperado parêntese esquerdo após método 'escalamento-eixo-z'.");
                const valorScaleZ = this.avancarEDevolverAnterior();
                this.consumir(tiposDeSimbolos.PARENTESE_DIREITO, "Esperado parêntese direito após segundo argumento do método escalamento-eixo-z.");
                return new SeletorValor(
                    lexema,
                    [valorScaleZ]
                );

            case "escalamento-horizontal":
                this.consumir(tiposDeSimbolos.PARENTESE_ESQUERDO, "Esperado parêntese esquerdo após método 'escalamento-horizontal'.");
                const valorScaleX = this.avancarEDevolverAnterior();
                this.consumir(tiposDeSimbolos.PARENTESE_DIREITO, "Esperado parêntese direito após segundo argumento do método escalamento-horizontal.");
                return new SeletorValor(
                    lexema,
                    [valorScaleX]
                );

            case "escalamento-vertical":
                this.consumir(tiposDeSimbolos.PARENTESE_ESQUERDO, "Esperado parêntese esquerdo após método 'escalamento-vertical'.");
                const valorScaleY = this.avancarEDevolverAnterior();
                this.consumir(tiposDeSimbolos.PARENTESE_DIREITO, "Esperado parêntese direito após segundo argumento do método escalamento-vertical.");
                return new SeletorValor(
                    lexema,
                    [valorScaleY]
                );

            case "gradiente-linear":
                this.consumir(tiposDeSimbolos.PARENTESE_ESQUERDO, "Esperado parêntese esquerdo após método 'gradiente-linear'.");
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

                this.consumir(tiposDeSimbolos.VIRGULA, "Esperado vírgula após segundo argumento do método gradiente-linear.");
                const cor1 = this.avancarEDevolverAnterior();
                this.consumir(tiposDeSimbolos.VIRGULA, "Esperado vírgula após segundo argumento do método gradiente-linear.");
                const cor2 = this.avancarEDevolverAnterior();
                this.consumir(tiposDeSimbolos.PARENTESE_DIREITO, "Esperado parêntese direito após método 'gradiente-linear'.");
                return new SeletorValor(
                    lexema,
                    [valorAngulo, quantificadorAngulo, cor1, cor2]
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

            case "inclinar":
                this.consumir(tiposDeSimbolos.PARENTESE_ESQUERDO, "Esperado parêntese esquerdo após método 'inclinar'.");

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
                    this.consumir(tiposDeSimbolos.VIRGULA, "Esperado vírgula após primeiro argumento do método 'inclinar'.");
                    valorInclinar2 = this.avancarEDevolverAnterior();
                    quantificadorInclinar2 = this.avancarEDevolverAnterior();
                } else {
                    valorInclinar2 = null;
                    quantificadorInclinar2 = null;
                }

                this.consumir(tiposDeSimbolos.PARENTESE_DIREITO, "Esperado parêntese direito após método 'inclinar'.");
                return new SeletorValor(
                    lexema,
                    [valorInclinar1, quantificadorInclinar1, valorInclinar2, quantificadorInclinar2]
                );

            case "inclinar-horizontal":
                this.consumir(tiposDeSimbolos.PARENTESE_ESQUERDO, "Esperado parêntese esquerdo após método 'inclinar-horizontal'.");
                const valorInclinarX = this.avancarEDevolverAnterior();
                let quantificadorInclinarX;
                if (this.simbolos[this.atual].tipo === 'QUANTIFICADOR') {
                    quantificadorInclinarX = this.avancarEDevolverAnterior();
                } else {
                    quantificadorInclinarX = null;
                }
                this.consumir(tiposDeSimbolos.PARENTESE_DIREITO, "Esperado parêntese direito após método 'inclinar-horizontal'.");
                return new SeletorValor(
                    lexema,
                    [valorInclinarX, quantificadorInclinarX]
                );

            case "inclinar-vertical":
                this.consumir(tiposDeSimbolos.PARENTESE_ESQUERDO, "Esperado parêntese esquerdo após método 'inclinar-vertical'.");
                const valorInclinarY = this.avancarEDevolverAnterior();
                let quantificadorInclinarY;
                if (this.simbolos[this.atual].tipo === 'QUANTIFICADOR') {
                    quantificadorInclinarY = this.avancarEDevolverAnterior();
                } else {
                    quantificadorInclinarY = null;
                }
                this.consumir(tiposDeSimbolos.PARENTESE_DIREITO, "Esperado parêntese direito após método 'inclinar-vertical'.");
                return new SeletorValor(
                    lexema,
                    [valorInclinarY, quantificadorInclinarY]
                );

            case "inverter":
                this.consumir(tiposDeSimbolos.PARENTESE_ESQUERDO, "Esperado parêntese esquerdo após método 'inverter'.");
                const valorInverter = this.avancarEDevolverAnterior();
                let quantificadorInverter;
                if (this.simbolos[this.atual].tipo === 'QUANTIFICADOR') {
                    quantificadorInverter = this.avancarEDevolverAnterior();
                } else {
                    quantificadorInverter = null;
                }
                this.consumir(tiposDeSimbolos.PARENTESE_DIREITO, "Esperado parêntese direito após método 'inverter'.");
                return new SeletorValor(
                    lexema,
                    [valorInverter, quantificadorInverter]
                );

            case "limitar":
                this.consumir(tiposDeSimbolos.PARENTESE_ESQUERDO, "Esperado parêntese esquerdo após método 'limitar'.");
                const valorMin = this.avancarEDevolverAnterior();
                const quantificadorMin = this.avancarEDevolverAnterior();
                this.consumir(tiposDeSimbolos.VIRGULA, "Esperado vírgula após primeiro argumento do método 'limitar'.");
                const valorMed = this.avancarEDevolverAnterior();
                const quantificadorMed = this.avancarEDevolverAnterior();
                this.consumir(tiposDeSimbolos.VIRGULA, "Esperado vírgula após segundo argumento do método 'limitar'.");
                const valorMax = this.avancarEDevolverAnterior();
                const quantificadorMax = this.avancarEDevolverAnterior();
                this.consumir(tiposDeSimbolos.PARENTESE_DIREITO, "Esperado parêntese direito após segundo argumento do método limitar.");
                return new SeletorValor(
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
                return new SeletorValor(
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
                    return new SeletorValor(
                        lexema,
                        [parametro01, valor02['lexema']]
                    );
                } else if (parametro02 !== null) {
                    return new SeletorValor(
                        lexema,
                        [valor01['lexema'], parametro02]
                    );
                }

            case "opacar":
                this.consumir(tiposDeSimbolos.PARENTESE_ESQUERDO, "Esperado parêntese esquerdo após método 'opacar'.");
                const valorOpaco = this.avancarEDevolverAnterior();
                let quantificadorOpaco;
                if (this.simbolos[this.atual].tipo === 'QUANTIFICADOR') {
                    quantificadorOpaco = this.avancarEDevolverAnterior();
                } else {
                    quantificadorOpaco = null;
                }
                this.consumir(tiposDeSimbolos.PARENTESE_DIREITO, "Esperado parêntese direito após método 'opacar'.");
                return new SeletorValor(
                    lexema,
                    [valorOpaco, quantificadorOpaco]
                );

            case "passos":
                this.consumir(tiposDeSimbolos.PARENTESE_ESQUERDO, "Esperado parêntese esquerdo após método 'passos'.");
                const valorNumerico = this.avancarEDevolverAnterior();
                this.consumir(tiposDeSimbolos.VIRGULA, "Esperado vírgula após primeiro argumento do método passos.");
                const termoSalto = this.avancarEDevolverAnterior();
                this.consumir(tiposDeSimbolos.PARENTESE_DIREITO, "Esperado parêntese direito após segundo argumento do método passos.");
                return new SeletorValor(
                    lexema,
                    [valorNumerico, termoSalto]
                );

            case "perspectivar":
                this.consumir(tiposDeSimbolos.PARENTESE_ESQUERDO, "Esperado parêntese esquerdo após método 'perspectivar'.");
                const valorPerspectivar = this.avancarEDevolverAnterior();
                let quantificadorPerspectivar;
                if (this.simbolos[this.atual].tipo === 'QUANTIFICADOR') {
                    quantificadorPerspectivar = this.avancarEDevolverAnterior();
                } else {
                    quantificadorPerspectivar = null;
                }
                this.consumir(tiposDeSimbolos.PARENTESE_DIREITO, "Esperado parêntese direito após método 'perspectivar'.");
                return new SeletorValor(
                    lexema,
                    [valorPerspectivar, quantificadorPerspectivar]
                );

            case "projetar-sombra":
                this.consumir(tiposDeSimbolos.PARENTESE_ESQUERDO, "Esperado parêntese esquerdo após método 'projetar-sombra'.");
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

                this.consumir(tiposDeSimbolos.PARENTESE_DIREITO, "Esperado parêntese direito após método 'projetar-sombra'.");
                return new SeletorValor(
                    lexema,
                    [valorSombra1, quantificadorSombra1, valorSombra2, quantificadorSombra2, valorSombra3, quantificadorSombra3, corSombra]
                );

            case "raio":
                this.consumir(tiposDeSimbolos.PARENTESE_ESQUERDO, "Esperado parêntese esquerdo após método 'raio'.");
                let posicaoRaio;
                if (this.simbolos[this.atual].tipo === 'QUALITATIVO') {
                    posicaoRaio = this.avancarEDevolverAnterior();
                } else {
                    posicaoRaio = null;
                }
                const numeroRaio = this.avancarEDevolverAnterior();
                const quantificadorRaio = this.avancarEDevolverAnterior();
                this.consumir(tiposDeSimbolos.PARENTESE_DIREITO, "Esperado parêntese direito após argumentos de método 'raio'.");
                return new SeletorValor(
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

            case "rotacionar":
                this.consumir(tiposDeSimbolos.PARENTESE_ESQUERDO, "Esperado parêntese esquerdo após método 'rotacionar'.");
                const valorRotacionar = this.avancarEDevolverAnterior();
                let quantificadorRotacionar;
                if (this.simbolos[this.atual].tipo === 'QUANTIFICADOR') {
                    quantificadorRotacionar = this.avancarEDevolverAnterior();
                } else {
                    quantificadorRotacionar = null;
                }
                this.consumir(tiposDeSimbolos.PARENTESE_DIREITO, "Esperado parêntese direito após método 'rotacionar'.");
                return new SeletorValor(
                    lexema,
                    [valorRotacionar, quantificadorRotacionar]
                );

            case "rotacionar-eixo-z":
                this.consumir(tiposDeSimbolos.PARENTESE_ESQUERDO, "Esperado parêntese esquerdo após método 'rotacionar-eixo-z'.");
                const valorRotacionarZ = this.avancarEDevolverAnterior();
                let quantificadorRotacionarZ;
                if (this.simbolos[this.atual].tipo === 'QUANTIFICADOR') {
                    quantificadorRotacionarZ = this.avancarEDevolverAnterior();
                } else {
                    quantificadorRotacionarZ = null;
                }
                this.consumir(tiposDeSimbolos.PARENTESE_DIREITO, "Esperado parêntese direito após método 'rotacionar-eixo-z'.");
                return new SeletorValor(
                    lexema,
                    [valorRotacionarZ, quantificadorRotacionarZ]
                );

            case "rotacionar-horizontal":
                this.consumir(tiposDeSimbolos.PARENTESE_ESQUERDO, "Esperado parêntese esquerdo após método 'rotacionar-horizontal'.");
                const valorRotacionarX = this.avancarEDevolverAnterior();
                let quantificadorRotacionarX;
                if (this.simbolos[this.atual].tipo === 'QUANTIFICADOR') {
                    quantificadorRotacionarX = this.avancarEDevolverAnterior();
                } else {
                    quantificadorRotacionarX = null;
                }
                this.consumir(tiposDeSimbolos.PARENTESE_DIREITO, "Esperado parêntese direito após método 'rotacionar-horizontal'.");
                return new SeletorValor(
                    lexema,
                    [valorRotacionarX, quantificadorRotacionarX]
                );

            case "rotacionar-matiz":
                this.consumir(tiposDeSimbolos.PARENTESE_ESQUERDO, "Esperado parêntese esquerdo após método 'rotacionar-matiz'.");
                const valorRotacao = this.avancarEDevolverAnterior();
                let quantificadorRotacao;
                if (this.simbolos[this.atual].tipo === 'QUANTIFICADOR') {
                    quantificadorRotacao = this.avancarEDevolverAnterior();
                } else {
                    quantificadorRotacao = null;
                }
                this.consumir(tiposDeSimbolos.PARENTESE_DIREITO, "Esperado parêntese direito após método 'rotacionar-matiz'.");
                return new SeletorValor(
                    lexema,
                    [valorRotacao, quantificadorRotacao]
                );

            case "rotacionar-vertical":
                this.consumir(tiposDeSimbolos.PARENTESE_ESQUERDO, "Esperado parêntese esquerdo após método 'rotacionar-vertical'.");
                const valorRotacionarY = this.avancarEDevolverAnterior();
                let quantificadorRotacionarY;
                if (this.simbolos[this.atual].tipo === 'QUANTIFICADOR') {
                    quantificadorRotacionarY = this.avancarEDevolverAnterior();
                } else {
                    quantificadorRotacionarY = null;
                }
                this.consumir(tiposDeSimbolos.PARENTESE_DIREITO, "Esperado parêntese direito após método 'rotacionar-vertical'.");
                return new SeletorValor(
                    lexema,
                    [valorRotacionarY, quantificadorRotacionarY]
                );

            case "saturar":
                this.consumir(tiposDeSimbolos.PARENTESE_ESQUERDO, "Esperado parêntese esquerdo após método 'saturar'.");
                const valorSaturar = this.avancarEDevolverAnterior();
                let quantificadorSaturar;
                if (this.simbolos[this.atual].tipo === 'QUANTIFICADOR') {
                    quantificadorSaturar = this.avancarEDevolverAnterior();
                } else {
                    quantificadorSaturar = null;
                }
                this.consumir(tiposDeSimbolos.PARENTESE_DIREITO, "Esperado parêntese direito após método 'saturar'.");
                return new SeletorValor(
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
                return new SeletorValor(
                    lexema,
                    [valorSepia, quantificadorSepia]
                );

            case "sépia":
                this.consumir(tiposDeSimbolos.PARENTESE_ESQUERDO, "Esperado parêntese esquerdo após método 'sépia'.");
                const valorSépia = this.avancarEDevolverAnterior();
                let quantificadorSépia;
                if (this.simbolos[this.atual].tipo === 'QUANTIFICADOR') {
                    quantificadorSépia = this.avancarEDevolverAnterior();
                } else {
                    quantificadorSépia = null;
                }
                this.consumir(tiposDeSimbolos.PARENTESE_DIREITO, "Esperado parêntese direito após método 'sépia'.");
                return new SeletorValor(
                    lexema,
                    [valorSépia, quantificadorSépia]
                );

            case "translação":
                this.consumir(tiposDeSimbolos.PARENTESE_ESQUERDO, "Esperado parêntese esquerdo após método 'translação'.");

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
                    this.consumir(tiposDeSimbolos.VIRGULA, "Esperado vírgula após primeiro argumento do método 'translação'.");
                    valorTranslacao2 = this.avancarEDevolverAnterior();
                    quantificadorTranlacao2 = this.avancarEDevolverAnterior();
                } else {
                    valorTranslacao2 = null;
                    quantificadorTranlacao2 = null;
                }

                this.consumir(tiposDeSimbolos.PARENTESE_DIREITO, "Esperado parêntese direito após método 'translação'.");
                return new SeletorValor(
                    lexema,
                    [valorTranslacao1, quantificadorTranlacao1, valorTranslacao2, quantificadorTranlacao2]
                );

            case "translacao":
                this.consumir(tiposDeSimbolos.PARENTESE_ESQUERDO, "Esperado parêntese esquerdo após método 'translação'.");

                const valorTranslacao01 = this.avancarEDevolverAnterior();

                let quantificadorTranlacao01;
                if (this.simbolos[this.atual].tipo === 'QUANTIFICADOR') {
                    quantificadorTranlacao01 = this.avancarEDevolverAnterior();
                } else {
                    quantificadorTranlacao01 = null;
                }

                let valorTranslacao02;
                let quantificadorTranlacao02;
                if (this.simbolos[this.atual].tipo === 'VIRGULA') {
                    this.consumir(tiposDeSimbolos.VIRGULA, "Esperado vírgula após primeiro argumento do método 'translação'.");
                    valorTranslacao02 = this.avancarEDevolverAnterior();
                    quantificadorTranlacao02 = this.avancarEDevolverAnterior();
                } else {
                    valorTranslacao02 = null;
                    quantificadorTranlacao02 = null;
                }

                this.consumir(tiposDeSimbolos.PARENTESE_DIREITO, "Esperado parêntese direito após método 'translação'.");
                return new SeletorValor(
                    lexema,
                    [valorTranslacao01, quantificadorTranlacao01, valorTranslacao02, quantificadorTranlacao02]
                );

            case "translação-3d":
                this.consumir(tiposDeSimbolos.PARENTESE_ESQUERDO, "Esperado parêntese esquerdo após método 'translação-3d'.");

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
                    this.consumir(tiposDeSimbolos.VIRGULA, "Esperado vírgula após primeiro argumento do método 'translação-3d'.");
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
                    this.consumir(tiposDeSimbolos.VIRGULA, "Esperado vírgula após primeiro argumento do método 'translação-3d'.");
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

                this.consumir(tiposDeSimbolos.PARENTESE_DIREITO, "Esperado parêntese direito após método 'translação-3d'.");
                return new SeletorValor(
                    lexema,
                    [valorTranslacao3d1, quantificadorTranlacao3d1, valorTranslacao3d2, quantificadorTranlacao3d2, valorTranslacao3d3, quantificadorTranlacao3d3]
                );

            case "translacao-3d":
                this.consumir(tiposDeSimbolos.PARENTESE_ESQUERDO, "Esperado parêntese esquerdo após método 'translação-3d'.");

                const valorTranslacao3d01 = this.avancarEDevolverAnterior();

                let quantificadorTranlacao3d01;
                if (this.simbolos[this.atual].tipo === 'QUANTIFICADOR') {
                    quantificadorTranlacao3d01 = this.avancarEDevolverAnterior();
                } else {
                    quantificadorTranlacao3d01 = null;
                }

                let valorTranslacao3d02;
                let quantificadorTranlacao3d02;
                if (this.simbolos[this.atual].tipo === 'VIRGULA') {
                    this.consumir(tiposDeSimbolos.VIRGULA, "Esperado vírgula após primeiro argumento do método 'translação-3d'.");
                    valorTranslacao3d02 = this.avancarEDevolverAnterior();
                    if (this.simbolos[this.atual].tipo === 'QUANTIFICADOR') {
                        quantificadorTranlacao3d02 = this.avancarEDevolverAnterior();
                    } else {
                        quantificadorTranlacao3d02 = null;
                    }
                } else {
                    valorTranslacao3d02 = null;
                    quantificadorTranlacao3d02 = null;
                }

                let valorTranslacao3d03;
                let quantificadorTranlacao3d03;
                if (this.simbolos[this.atual].tipo === 'VIRGULA') {
                    this.consumir(tiposDeSimbolos.VIRGULA, "Esperado vírgula após primeiro argumento do método 'translação-3d'.");
                    valorTranslacao3d03 = this.avancarEDevolverAnterior();
                    if (this.simbolos[this.atual].tipo === 'QUANTIFICADOR') {
                        quantificadorTranlacao3d03 = this.avancarEDevolverAnterior();
                    } else {
                        quantificadorTranlacao3d03 = null;
                    }
                } else {
                    valorTranslacao3d03 = null;
                    quantificadorTranlacao3d03 = null;
                }

                this.consumir(tiposDeSimbolos.PARENTESE_DIREITO, "Esperado parêntese direito após método 'translação-3d'.");
                return new SeletorValor(
                    lexema,
                    [valorTranslacao3d01, quantificadorTranlacao3d01, valorTranslacao3d02, quantificadorTranlacao3d02, valorTranslacao3d03, quantificadorTranlacao3d03]
                );

            case "translação-eixo-z":
                this.consumir(tiposDeSimbolos.PARENTESE_ESQUERDO, "Esperado parêntese esquerdo após método 'translação-eixo-z'.");
                const valorTranslaçaoZ = this.avancarEDevolverAnterior();
                let quantificadorTranslaçaoZ;
                if (this.simbolos[this.atual].tipo === 'QUANTIFICADOR') {
                    quantificadorTranslaçaoZ = this.avancarEDevolverAnterior();
                } else {
                    quantificadorTranslaçaoZ = null;
                }
                this.consumir(tiposDeSimbolos.PARENTESE_DIREITO, "Esperado parêntese direito após método 'translação-eixo-z'.");
                return new SeletorValor(
                    lexema,
                    [valorTranslaçaoZ, quantificadorTranslaçaoZ]
                );

            case "translacao-eixo-z":
                this.consumir(tiposDeSimbolos.PARENTESE_ESQUERDO, "Esperado parêntese esquerdo após método 'translação-eixo-z'.");
                const valorTranslacaoZ = this.avancarEDevolverAnterior();
                let quantificadorTranslacaoZ;
                if (this.simbolos[this.atual].tipo === 'QUANTIFICADOR') {
                    quantificadorTranslacaoZ = this.avancarEDevolverAnterior();
                } else {
                    quantificadorTranslacaoZ = null;
                }
                this.consumir(tiposDeSimbolos.PARENTESE_DIREITO, "Esperado parêntese direito após método 'translação-eixo-z'.");
                return new SeletorValor(
                    lexema,
                    [valorTranslacaoZ, quantificadorTranslacaoZ]
                );

            case "translação-horizontal":
                this.consumir(tiposDeSimbolos.PARENTESE_ESQUERDO, "Esperado parêntese esquerdo após método 'translação-horizontal'.");
                const valorTranslaçaoX = this.avancarEDevolverAnterior();
                let quantificadorTranslaçaoX;
                if (this.simbolos[this.atual].tipo === 'QUANTIFICADOR') {
                    quantificadorTranslaçaoX = this.avancarEDevolverAnterior();
                } else {
                    quantificadorTranslaçaoX = null;
                }
                this.consumir(tiposDeSimbolos.PARENTESE_DIREITO, "Esperado parêntese direito após método 'translação-horizontal'.");
                return new SeletorValor(
                    lexema,
                    [valorTranslaçaoX, quantificadorTranslaçaoX]
                );

            case "translacao-horizontal":
                this.consumir(tiposDeSimbolos.PARENTESE_ESQUERDO, "Esperado parêntese esquerdo após método 'translação-horizontal'.");
                const valorTranslacaoX = this.avancarEDevolverAnterior();
                let quantificadorTranslacaoX;
                if (this.simbolos[this.atual].tipo === 'QUANTIFICADOR') {
                    quantificadorTranslacaoX = this.avancarEDevolverAnterior();
                } else {
                    quantificadorTranslacaoX = null;
                }
                this.consumir(tiposDeSimbolos.PARENTESE_DIREITO, "Esperado parêntese direito após método 'translação-horizontal'.");
                return new SeletorValor(
                    lexema,
                    [valorTranslacaoX, quantificadorTranslacaoX]
                );

            case "translação-vertical":
                this.consumir(tiposDeSimbolos.PARENTESE_ESQUERDO, "Esperado parêntese esquerdo após método 'translação-vertical'.");
                const valorTranslaçaoY = this.avancarEDevolverAnterior();
                let quantificadorTranslaçaoY;
                if (this.simbolos[this.atual].tipo === 'QUANTIFICADOR') {
                    quantificadorTranslaçaoY = this.avancarEDevolverAnterior();
                } else {
                    quantificadorTranslaçaoY = null;
                }
                this.consumir(tiposDeSimbolos.PARENTESE_DIREITO, "Esperado parêntese direito após método 'translação-vertical'.");
                return new SeletorValor(
                    lexema,
                    [valorTranslaçaoY, quantificadorTranslaçaoY]
                );

            case "translacao-vertical":
                this.consumir(tiposDeSimbolos.PARENTESE_ESQUERDO, "Esperado parêntese esquerdo após método 'translação-vertical'.");
                const valorTranslacaoY = this.avancarEDevolverAnterior();
                let quantificadorTranslacaoY;
                if (this.simbolos[this.atual].tipo === 'QUANTIFICADOR') {
                    quantificadorTranslacaoY = this.avancarEDevolverAnterior();
                } else {
                    quantificadorTranslacaoY = null;
                }
                this.consumir(tiposDeSimbolos.PARENTESE_DIREITO, "Esperado parêntese direito após método 'translação-vertical'.");
                return new SeletorValor(
                    lexema,
                    [valorTranslacaoY, quantificadorTranslacaoY]
                );

            case "url":
                this.consumir(tiposDeSimbolos.PARENTESE_ESQUERDO, "Esperado parêntese esquerdo após método 'url'.");
                const url = this.validacaoUrl();
                this.consumir(tiposDeSimbolos.PARENTESE_DIREITO, "Esperado parêntese direito após argumento do método url.");
                return new SeletorValor(
                    lexema,
                    [url]
                );
        }

        throw new Error(`Método ${lexema} não reconhecido em FolEs.`);
    }

    private validacaoUrl() {
        const primeiroSimbolo = this.avancarEDevolverAnterior();
        switch (primeiroSimbolo.tipo) {
            case tiposDeSimbolos.IDENTIFICADOR:
                return this.validacaoUrlSimbolos(primeiroSimbolo);
            default:
                return this.validacaoUrlTexto(primeiroSimbolo.literal);
        }
    }

    private validacaoUrlSimbolos(primeiroSimbolo: SimboloInterface) {
        if (!['http', 'https'].includes(primeiroSimbolo.lexema.toLowerCase())) {
            throw new Error(`URL inválida. URLs devem começar com 'http' ou 'https'.`);
        }

        this.consumir(tiposDeSimbolos.DOIS_PONTOS, `Esperado dois-pontos após '${primeiroSimbolo.lexema}'.`);
        this.consumir(tiposDeSimbolos.BARRA, `Esperado barra após '${primeiroSimbolo.lexema + ':'}'`);
        this.consumir(tiposDeSimbolos.BARRA, `Esperado segunda barra após '${primeiroSimbolo.lexema + ':/'}'`);

        let url = `${primeiroSimbolo.lexema}://`;

        while (this.simbolos[this.atual].tipo !== tiposDeSimbolos.PARENTESE_DIREITO) {
            let proximoSimbolo = this.avancarEDevolverAnterior();
            url += proximoSimbolo.literal || proximoSimbolo.lexema;
        }

        this.validacaoUrlTexto(url);
        return url;
    }

    private validacaoUrlTexto(textoUrl: string) {
        if (!/^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/gi.test(textoUrl)) {
            throw new Error(`URL ${textoUrl} inválida.`);
        }

        return textoUrl;
    }

    valoresModificador(): Array<any> {
        const modificadores = [];
        // console.log(this.simbolos[this.atual]);
        
        while(this.simbolos[this.atual].hasOwnProperty('tipo') && this.simbolos[this.atual].tipo !== tiposDeSimbolos.PONTO_E_VIRGULA) {
            const valorModificador = this.avancarEDevolverAnterior();

            switch (valorModificador.tipo) {
                case tiposDeSimbolos.METODO:
                    const metodo = this.resolverMetodo(valorModificador.lexema);
                    modificadores.push(metodo);
                default:
                    const modificador = valorModificador;
                    modificadores.push(modificador);
            }
        }

        return modificadores;

        // const valorModificador = this.avancarEDevolverAnterior();

        // switch (valorModificador.tipo) {
        //     case tiposDeSimbolos.METODO:
        //         return this.resolverMetodo(valorModificador.lexema);
        //     default:
        //         return valorModificador;
        // }
    }

    private tratarValorNumerico(modificador: Simbolo): Boolean {
        if (!(ValorNumerico.includes(modificador.lexema))) {
            if (ValorNumericoComQuantificador.includes(modificador.lexema)) {
                if (this.simbolos[this.atual].tipo === 'QUANTIFICADOR') {
                    return true;
                } else {
                    return false;
                }
            } else {
                return true;
            }
        }

        return false;
    }

    protected resolverPseudoclasse(): Pseudoclasse {
        let pseudoclasse: any;

        if (this.verificarTipoSimboloAtual(tiposDeSimbolos.DOIS_PONTOS)) {
            this.avancarEDevolverAnterior();
            pseudoclasse = this.consumir(
                tiposDeSimbolos.IDENTIFICADOR,
                "Esperado nome de pseudoclasse."
            );

            return new SeletorPseudoclasse(
                pseudoclasse.lexema,
                {
                    linha: pseudoclasse.linha,
                    colunaInicial: pseudoclasse.colunaInicial,
                    colunaFinal: pseudoclasse.colunaFinal
                }
            ) as Pseudoclasse;
        }

        return pseudoclasse;
    }

    protected seletorPorEspacoReservado(): Seletor {
        const simboloSeletor = this.avancarEDevolverAnterior();

        // Aqui não tem problema o espaço reservado usar um nome de estrutura.
        if (![
            tiposDeSimbolos.IDENTIFICADOR,
            tiposDeSimbolos.ESTRUTURA
        ].includes(this.simbolos[this.atual].tipo)
        ) {
            throw this.erro(this.simbolos[this.atual], "Esperado identificador válido para espaço reservado.");
        }

        const nomeEspacoReservado = this.avancarEDevolverAnterior();

        return new SeletorEspacoReservado(
            nomeEspacoReservado.lexema,
            {
                linha: simboloSeletor.linha,
                colunaInicial: simboloSeletor.colunaInicial,
                colunaFinal: simboloSeletor.colunaFinal
            }
        );
    }

    protected seletorPorEstrutura(): Seletor {
        const simboloSeletor = this.avancarEDevolverAnterior();
        const pseudoclasse = this.resolverPseudoclasse();
        return new SeletorEstrutura(
            new SeletorEstruturasLmht(
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
     * Resolve os seletores.
     * @param espacoReservado 
     */
    protected resolverSeletores(espacoReservado: string = null): Seletor[] {
        const seletores: Seletor[] = [];

        do {
            switch (this.simbolos[this.atual].tipo) {
                case tiposDeSimbolos.ESTRUTURA:
                    seletores.push(this.seletorPorEstrutura());
                    break;
                case tiposDeSimbolos.PERCENTUAL:
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

    private resolverModificador(): Modificador {
        const modificador = this.consumir(
            tiposDeSimbolos.IDENTIFICADOR,
            "Esperado nome do modificador."
        );

        this.consumir(
            tiposDeSimbolos.DOIS_PONTOS,
            "Esperado ':' após nome do modificador."
        );

        // while(valorModificador.tipo !== tiposDeSimbolos.PONTO_E_VIRGULA) {

        // }
        const valoresModificador = this.valoresModificador();
        
        let quantificador;
        // let quantificadores = [];
        for (const [index, valorModificador] of valoresModificador.entries()) {
            if (valorModificador.hasOwnProperty('tipo') && valorModificador.tipo === tiposDeSimbolos.NUMERO) {
                
                const tratarValorNumerico = this.tratarValorNumerico(valorModificador);
                
                if (tratarValorNumerico) {
                    // quantificador = this.avancarEDevolverAnterior();
                    quantificador = valoresModificador[index + 1];
                    valoresModificador.splice(index + 1, 1);
                    // quantificadores.push(valoresModificador[index + 1]);
                }
            }
        }
        console.log(valoresModificador);
        
        // const valorModificador = this.valorModificador();

        // let quantificador;
        // if (valoresModificador.hasOwnProperty('tipo') && valoresModificador.tipo === tiposDeSimbolos.NUMERO) {
        //     const tratarValorNumerico = this.tratarValorNumerico(modificador);
            
        //     if (tratarValorNumerico) {
        //         quantificador = this.avancarEDevolverAnterior();
        //     }
        // }
        
        // TODO: Pensar num teste melhor pra isso.
        /*if (!(valorModificador instanceof Metodo)) {
            quantificador = this.avancarEDevolverAnterior();
        }*/
        // console.log(quantificadores);
        
        this.consumir(
            tiposDeSimbolos.PONTO_E_VIRGULA,
            `Esperado ';' após declaração de valor de modificador '${modificador.lexema}'.`
        );

        if (valoresModificador.length <= 1 || (valoresModificador.length === 2 && valoresModificador[1].tipo === tiposDeSimbolos.METODO)) {
            const classeModificadora = new SeletorModificador(
                modificador.lexema,
                valoresModificador[0].hasOwnProperty('lexema') ? valoresModificador[0].lexema : valoresModificador,
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
    }

    resolverModificadoresEDeclaracoesAninhadas(): { modificadores: Modificador[], declaracoesAninhadas: Declaracao[] } {
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
        switch (this.simbolos[this.atual].tipo) {
            case tiposDeSimbolos.IMPORTAR:
                this.avancarEDevolverAnterior();
                const caminhoArquivo = this.simbolos[this.atual];
                const resultadoImportacao = this.importador.importar(caminhoArquivo.literal, false);
                this.simbolos.splice(this.atual - 1, 2, ...resultadoImportacao[1].simbolos);
                this.atual -= 1;
                return null;
            default:
                const seletores = this.resolverSeletores();
                const modificadoresEDeclaracoesAninhadas = this.resolverModificadoresEDeclaracoesAninhadas();

                return new Declaracao(
                    seletores,
                    modificadoresEDeclaracoesAninhadas.modificadores,
                    modificadoresEDeclaracoesAninhadas.declaracoesAninhadas
                );
        }
    }

    analisar(simbolos: Simbolo[]): Declaracao[] {
        this.simbolos = simbolos;
        this.erros = [];
        this.atual = 0;

        const declaracoes: Declaracao[] = [];
        while (!this.estaNoFinal()) {
            declaracoes.push(this.declaracao());
        }

        return declaracoes.filter(d => d);
    }
}
