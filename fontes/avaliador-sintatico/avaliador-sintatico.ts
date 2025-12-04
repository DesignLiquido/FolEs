import { ErroAvaliadorSintatico } from ".";
import { BlocoDeclaracao, Declaracao } from "../declaracoes";
import { Simbolo } from "../lexador";
import { Modificador } from "../modificadores";
import { SeletorModificador } from "../modificadores/superclasse";
import { ValorAbreviacao, Valor, ValorNumerico, ValorQualitativo, ValorTexto, ValorVirgula } from "../valores";
import { SeletorValor } from "../valores/seletor-valor";

import tiposDeSimbolos from "../tipos-de-simbolos/foles";
import { Pseudoclasse } from "../pseudoclasses/pseudoclasse";
import { SeletorPseudoclasse } from "../pseudoclasses/seletor-pseudoclasse";
import {
    Seletor,
    SeletorClasse,
    SeletorEstrutura,
    SeletorId,
} from "../seletores";
import { SeletorEstruturasLmht } from "../estruturas/seletor-estruturas-lmht";
import { Estrutura } from "../estruturas/estrutura";
import { SeletorEspacoReservado } from "../seletores/seletor-espaco-reservado";
import {
    AvaliadorSintaticoInterface,
    ImportadorInterface,
    SimboloInterface,
} from "../interfaces";
import {
    ModificadoresDeValorNumerico,
    ModificadoresDeValorNumericoComQuantificador,
} from "../../testes/listas/valores-numericos";
import { DeclaracaoVariavel } from "../declaracoes/declaracao-variavel";
import { ReferenciaVariavel } from "../valores/referencia-variavel";
import { Metodo } from "../valores/metodos/foles/metodo";
import { valoresGerais } from "../modificadores/atributos/gerais";
import { ModificadoresValorPersonalizado } from "../../testes/listas/valores-personalizados";

/**
 * Implementação do avaliador sintático.
 */
export class AvaliadorSintatico implements AvaliadorSintaticoInterface {
    simbolos: Simbolo[];
    erros: ErroAvaliadorSintatico[];
    importador: ImportadorInterface;

    atual: number;
    referenciaDeclaracoes: Declaracao[] = [];

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

    resolverMetodo(lexema: string): Metodo {
        switch (lexema) {
            case "#":
                const codigoHEX = this.consumir(
                    tiposDeSimbolos.IDENTIFICADOR,
                    "Esperado código HEX válido após #'.",
                );
                return new SeletorValor("hex", [codigoHEX.lexema]) as Metodo;

            case "anotacao":
                this.consumir(
                    tiposDeSimbolos.PARENTESE_ESQUERDO,
                    "Esperado parêntese esquerdo após método 'anotação'.",
                );

                const valorAnotacao = this.avancarEDevolverAnterior();

                this.consumir(
                    tiposDeSimbolos.PARENTESE_DIREITO,
                    "Esperado parêntese direito após argumento do método anotação.",
                );
                return new SeletorValor(lexema, [valorAnotacao]) as Metodo;

            case "anotação":
                this.consumir(
                    tiposDeSimbolos.PARENTESE_ESQUERDO,
                    "Esperado parêntese esquerdo após método 'anotação'.",
                );

                const valorAnotaçao = this.avancarEDevolverAnterior();

                this.consumir(
                    tiposDeSimbolos.PARENTESE_DIREITO,
                    "Esperado parêntese direito após argumento do método anotação.",
                );
                return new SeletorValor(lexema, [valorAnotaçao]) as Metodo;

            case "borrar":
                this.consumir(
                    tiposDeSimbolos.PARENTESE_ESQUERDO,
                    "Esperado parêntese esquerdo após método 'borrar'.",
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
                    "Esperado parêntese direito após método 'borrar'.",
                );

                return new SeletorValor(lexema, [
                    valorBorrar,
                    quantificadorBorrar,
                ]) as Metodo;

            case "brilho":
                this.consumir(
                    tiposDeSimbolos.PARENTESE_ESQUERDO,
                    "Esperado parêntese esquerdo após método 'brilho'.",
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
                    "Esperado parêntese direito após método 'brilho'.",
                );
                return new SeletorValor(lexema, [
                    valorBrilho,
                    quantificadorBrilho,
                ]) as Metodo;

            case "calcular":
                this.consumir(
                    tiposDeSimbolos.PARENTESE_ESQUERDO,
                    "Esperado parêntese esquerdo após método 'calcular'.",
                );
                const valorCalc1 = this.avancarEDevolverAnterior();
                const quantificadorCalc1 = this.avancarEDevolverAnterior();
                const operadorCalc = this.avancarEDevolverAnterior();
                const valorCalc2 = this.avancarEDevolverAnterior();
                const quantificadorCalc2 = this.avancarEDevolverAnterior();
                this.consumir(
                    tiposDeSimbolos.PARENTESE_DIREITO,
                    "Esperado parêntese direito após método 'calcular'.",
                );
                return new SeletorValor(lexema, [
                    valorCalc1,
                    quantificadorCalc1,
                    operadorCalc,
                    valorCalc2,
                    quantificadorCalc2,
                ]) as Metodo;

            case "circular":
                this.consumir(
                    tiposDeSimbolos.PARENTESE_ESQUERDO,
                    "Esperado parêntese esquerdo após método 'circular'.",
                );
                const valorCircular = this.avancarEDevolverAnterior();

                let quantificadorCircular: Simbolo = null;
                if (this.simbolos[this.atual].tipo === 'QUANTIFICADOR') {
                    quantificadorCircular = this.avancarEDevolverAnterior();
                }

                this.consumir(
                    tiposDeSimbolos.PARENTESE_DIREITO,
                    "Esperado parêntese direito após método 'circular'.",
                );

                return new SeletorValor(lexema, [
                    valorCircular,
                    quantificadorCircular,
                ]) as Metodo;

            case "conjunto-estilos":
                this.consumir(
                    tiposDeSimbolos.PARENTESE_ESQUERDO,
                    "Esperado parêntese esquerdo após método 'conjunto-estilos'.",
                );

                const valor1ConjuntoEstilos = this.avancarEDevolverAnterior();

                let valor2ConjuntoEstilos;
                if (this.simbolos[this.atual].tipo === "VIRGULA") {
                    this.consumir(
                        tiposDeSimbolos.VIRGULA,
                        "Esperado vírgula após primeiro argumento do método conjunto-estilos.",
                    );
                    valor2ConjuntoEstilos = this.avancarEDevolverAnterior();
                }

                let valor3ConjuntoEstilos;
                if (this.simbolos[this.atual].tipo === "VIRGULA") {
                    this.consumir(
                        tiposDeSimbolos.VIRGULA,
                        "Esperado vírgula após segundo argumento do método conjunto-estilos.",
                    );
                    valor3ConjuntoEstilos = this.avancarEDevolverAnterior();
                }

                this.consumir(
                    tiposDeSimbolos.PARENTESE_DIREITO,
                    "Esperado parêntese direito após argumento do método conjunto-estilos.",
                );
                return new SeletorValor(lexema, [valor1ConjuntoEstilos, valor2ConjuntoEstilos, valor3ConjuntoEstilos]) as Metodo;

            case "contador":
                this.consumir(
                    tiposDeSimbolos.PARENTESE_ESQUERDO,
                    "Esperado parêntese esquerdo após método 'contador'.",
                );

                const nomeContador = this.avancarEDevolverAnterior();

                let estiloContador = null;
                if (this.simbolos[this.atual].tipo === 'VIRGULA') {

                    this.consumir(
                        tiposDeSimbolos.VIRGULA,
                        "Esperada vírgula após primeiro parâmetro do método 'contador'.",
                    );

                    estiloContador = this.avancarEDevolverAnterior();
                }

                this.consumir(
                    tiposDeSimbolos.PARENTESE_DIREITO,
                    "Esperado parêntese direito após método 'contador'.",
                );

                return new SeletorValor(lexema, [
                    nomeContador,
                    estiloContador,
                ]) as Metodo;

            case "contraste":
                this.consumir(
                    tiposDeSimbolos.PARENTESE_ESQUERDO,
                    "Esperado parêntese esquerdo após método 'contraste'.",
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
                    "Esperado parêntese direito após método 'contraste'.",
                );
                return new SeletorValor(lexema, [
                    valorContraste,
                    quantificadorContraste,
                ]) as Metodo;

            case "curva-cúbica":
                this.consumir(
                    tiposDeSimbolos.PARENTESE_ESQUERDO,
                    "Esperado parêntese esquerdo após método 'curva-cúbica'.",
                );
                const parametro1 = this.avancarEDevolverAnterior();
                this.consumir(
                    tiposDeSimbolos.VIRGULA,
                    "Esperado vírgula após primeiro argumento do método curva-cúbica.",
                );
                const parametro2 = this.avancarEDevolverAnterior();
                this.consumir(
                    tiposDeSimbolos.VIRGULA,
                    "Esperado vírgula após segundo argumento do método curva-cúbica.",
                );
                const parametro3 = this.avancarEDevolverAnterior();
                this.consumir(
                    tiposDeSimbolos.VIRGULA,
                    "Esperado vírgula após terceiro argumento do método curva-cúbica.",
                );
                const parametro4 = this.avancarEDevolverAnterior();
                this.consumir(
                    tiposDeSimbolos.PARENTESE_DIREITO,
                    "Esperado parêntese direito após quarto argumento do método curva-cúbica.",
                );
                return new SeletorValor(lexema, [
                    parametro1,
                    parametro2,
                    parametro3,
                    parametro4,
                ]) as Metodo;

            case "curva-cubica":
                this.consumir(
                    tiposDeSimbolos.PARENTESE_ESQUERDO,
                    "Esperado parêntese esquerdo após método 'curva-cúbica'.",
                );
                const parametro1cc = this.avancarEDevolverAnterior();
                this.consumir(
                    tiposDeSimbolos.VIRGULA,
                    "Esperado vírgula após primeiro argumento do método curva-cúbica.",
                );
                const parametro2cc = this.avancarEDevolverAnterior();
                this.consumir(
                    tiposDeSimbolos.VIRGULA,
                    "Esperado vírgula após segundo argumento do método curva-cúbica.",
                );
                const parametro3cc = this.avancarEDevolverAnterior();
                this.consumir(
                    tiposDeSimbolos.VIRGULA,
                    "Esperado vírgula após terceiro argumento do método curva-cúbica.",
                );
                const parametro4cc = this.avancarEDevolverAnterior();
                this.consumir(
                    tiposDeSimbolos.PARENTESE_DIREITO,
                    "Esperado parêntese direito após quarto argumento do método curva-cúbica.",
                );
                return new SeletorValor(lexema, [
                    parametro1cc,
                    parametro2cc,
                    parametro3cc,
                    parametro4cc,
                ]) as Metodo;

            case "definir-caminho":
                this.consumir(
                    tiposDeSimbolos.PARENTESE_ESQUERDO,
                    "Esperado parêntese esquerdo após método 'definir-caminho'.",
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
                    "Esperado parêntese direito após argumento do método 'definir-caminho'.",
                );

                return new SeletorValor(lexema, arrayValoresCaminho) as Metodo;

            case "definir-imagem":
                this.consumir(
                    tiposDeSimbolos.PARENTESE_ESQUERDO,
                    "Esperado parêntese esquerdo após método 'definir-imagem'.",
                );

                const linkImagem: Simbolo = this.avancarEDevolverAnterior();
                const tamanhoImagem: Simbolo = this.avancarEDevolverAnterior();
                const proporcaoImagem: Simbolo = this.avancarEDevolverAnterior();

                this.consumir(
                    tiposDeSimbolos.PARENTESE_DIREITO,
                    "Esperado parêntese direito após argumento do método 'definir-imagem'.",
                );

                return new SeletorValor(lexema, [linkImagem, tamanhoImagem, proporcaoImagem]) as Metodo;

            case "elipse":
                this.consumir(
                    tiposDeSimbolos.PARENTESE_ESQUERDO,
                    "Esperado parêntese esquerdo após método 'elipse'.",
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
                    "Esperado parêntese direito após último argumento do método 'elipse'.",
                );

                return new SeletorValor(lexema, arrayValoresElipse) as Metodo;

            case "encaixar-conteudo":
                this.consumir(
                    tiposDeSimbolos.PARENTESE_ESQUERDO,
                    "Esperado parêntese esquerdo após método 'encaixar-conteúdo'.",
                );
                const valorFit = this.avancarEDevolverAnterior();
                const quantificadorFit = this.avancarEDevolverAnterior();
                this.consumir(
                    tiposDeSimbolos.PARENTESE_DIREITO,
                    "Esperado parêntese direito após segundo argumento do método encaixar-conteúdo.",
                );
                return new SeletorValor(lexema, [
                    valorFit["lexema"],
                    quantificadorFit["lexema"],
                ]) as Metodo;

            case "encaixar-conteúdo":
                this.consumir(
                    tiposDeSimbolos.PARENTESE_ESQUERDO,
                    "Esperado parêntese esquerdo após método 'encaixar-conteúdo'.",
                );
                const valorFit1 = this.avancarEDevolverAnterior();
                const quantificadorFit1 = this.avancarEDevolverAnterior();
                this.consumir(
                    tiposDeSimbolos.PARENTESE_DIREITO,
                    "Esperado parêntese direito após segundo argumento do método encaixar-conteúdo.",
                );
                return new SeletorValor(lexema, [
                    valorFit1["lexema"],
                    quantificadorFit1["lexema"],
                ]) as Metodo;

            case "escala-cinza":
                this.consumir(
                    tiposDeSimbolos.PARENTESE_ESQUERDO,
                    "Esperado parêntese esquerdo após método 'escala-cinza'.",
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
                    "Esperado parêntese direito após método 'escala-cinza'.",
                );
                return new SeletorValor(lexema, [
                    valorEscala,
                    quantificadorEscala,
                ]) as Metodo;

            case "escalamento":
                this.consumir(
                    tiposDeSimbolos.PARENTESE_ESQUERDO,
                    "Esperado parêntese esquerdo após método 'escalamento'.",
                );
                const valorScale1 = this.avancarEDevolverAnterior();

                let valorScale2;
                if (this.simbolos[this.atual].tipo === "VIRGULA") {
                    this.consumir(
                        tiposDeSimbolos.VIRGULA,
                        "Esperado vírgula após primeiro argumento do método escalamento.",
                    );
                    valorScale2 = this.avancarEDevolverAnterior();
                }
                this.consumir(
                    tiposDeSimbolos.PARENTESE_DIREITO,
                    "Esperado parêntese direito após segundo argumento do método escalamento.",
                );
                return new SeletorValor(lexema, [valorScale1, valorScale2]) as Metodo;

            case "escalamento-3d":
                this.consumir(
                    tiposDeSimbolos.PARENTESE_ESQUERDO,
                    "Esperado parêntese esquerdo após método 'escalamento-3d'.",
                );
                const valorScale3d1 = this.avancarEDevolverAnterior();
                this.consumir(
                    tiposDeSimbolos.VIRGULA,
                    "Esperado vírgula após primeiro argumento do método escalamento-3d.",
                );
                const valorScale3d2 = this.avancarEDevolverAnterior();
                this.consumir(
                    tiposDeSimbolos.VIRGULA,
                    "Esperado vírgula após segundo argumento do método escalamento-3d.",
                );
                const valorScale3d3 = this.avancarEDevolverAnterior();
                this.consumir(
                    tiposDeSimbolos.PARENTESE_DIREITO,
                    "Esperado parêntese direito após segundo argumento do método escalamento-3d.",
                );
                return new SeletorValor(lexema, [
                    valorScale3d1,
                    valorScale3d2,
                    valorScale3d3,
                ]) as Metodo;

            case "escalamento-eixo-z":
                this.consumir(
                    tiposDeSimbolos.PARENTESE_ESQUERDO,
                    "Esperado parêntese esquerdo após método 'escalamento-eixo-z'.",
                );
                const valorScaleZ = this.avancarEDevolverAnterior();
                this.consumir(
                    tiposDeSimbolos.PARENTESE_DIREITO,
                    "Esperado parêntese direito após segundo argumento do método escalamento-eixo-z.",
                );
                return new SeletorValor(lexema, [valorScaleZ]) as Metodo;

            case "escalamento-horizontal":
                this.consumir(
                    tiposDeSimbolos.PARENTESE_ESQUERDO,
                    "Esperado parêntese esquerdo após método 'escalamento-horizontal'.",
                );
                const valorScaleX = this.avancarEDevolverAnterior();
                this.consumir(
                    tiposDeSimbolos.PARENTESE_DIREITO,
                    "Esperado parêntese direito após segundo argumento do método escalamento-horizontal.",
                );
                return new SeletorValor(lexema, [valorScaleX]) as Metodo;

            case "escalamento-vertical":
                this.consumir(
                    tiposDeSimbolos.PARENTESE_ESQUERDO,
                    "Esperado parêntese esquerdo após método 'escalamento-vertical'.",
                );
                const valorScaleY = this.avancarEDevolverAnterior();
                this.consumir(
                    tiposDeSimbolos.PARENTESE_DIREITO,
                    "Esperado parêntese direito após segundo argumento do método escalamento-vertical.",
                );
                return new SeletorValor(lexema, [valorScaleY]) as Metodo;

            case "espirrar":
                this.consumir(
                    tiposDeSimbolos.PARENTESE_ESQUERDO,
                    "Esperado parêntese esquerdo após método 'espirrar'.",
                );

                const valorEspirrar = this.avancarEDevolverAnterior();

                this.consumir(
                    tiposDeSimbolos.PARENTESE_DIREITO,
                    "Esperado parêntese direito após argumento do método espirrar.",
                );
                return new SeletorValor(lexema, [valorEspirrar]) as Metodo;

            case "estilistico":
                this.consumir(
                    tiposDeSimbolos.PARENTESE_ESQUERDO,
                    "Esperado parêntese esquerdo após método 'estilístico'.",
                );

                const valorEstilistico = this.avancarEDevolverAnterior();

                this.consumir(
                    tiposDeSimbolos.PARENTESE_DIREITO,
                    "Esperado parêntese direito após argumento do método estilístico.",
                );
                return new SeletorValor(lexema, [valorEstilistico]) as Metodo;

            case "estilístico":
                this.consumir(
                    tiposDeSimbolos.PARENTESE_ESQUERDO,
                    "Esperado parêntese esquerdo após método 'estilístico'.",
                );

                const valorEstilistico1 = this.avancarEDevolverAnterior();

                this.consumir(
                    tiposDeSimbolos.PARENTESE_DIREITO,
                    "Esperado parêntese direito após argumento do método estilístico.",
                );
                return new SeletorValor(lexema, [valorEstilistico1]) as Metodo;

            case "gradiente-linear":
                this.consumir(
                    tiposDeSimbolos.PARENTESE_ESQUERDO,
                    "Esperado parêntese esquerdo após método 'gradiente-linear'.",
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
                    "Esperado vírgula após segundo argumento do método gradiente-linear.",
                );
                const cor1 = this.avancarEDevolverAnterior();
                this.consumir(
                    tiposDeSimbolos.VIRGULA,
                    "Esperado vírgula após segundo argumento do método gradiente-linear.",
                );
                const cor2 = this.avancarEDevolverAnterior();
                this.consumir(
                    tiposDeSimbolos.PARENTESE_DIREITO,
                    "Esperado parêntese direito após método 'gradiente-linear'.",
                );
                return new SeletorValor(lexema, [
                    valorAngulo,
                    quantificadorAngulo,
                    cor1,
                    cor2,
                ]) as Metodo;

            case "hsl":
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
                    "Esperado parêntese direito após argumentos de método 'hsl'.",
                );
                return new SeletorValor(lexema, [HdeHSL, SdeHSL, LdeHSL]) as Metodo;

            case "hsla":
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
                return new SeletorValor(lexema, [HdeHSLA, SdeHSLA, LdeHSLA]) as Metodo;

            case "inclinar":
                this.consumir(
                    tiposDeSimbolos.PARENTESE_ESQUERDO,
                    "Esperado parêntese esquerdo após método 'inclinar'.",
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
                        "Esperado vírgula após primeiro argumento do método 'inclinar'.",
                    );
                    valorInclinar2 = this.avancarEDevolverAnterior();
                    quantificadorInclinar2 = this.avancarEDevolverAnterior();
                } else {
                    valorInclinar2 = null;
                    quantificadorInclinar2 = null;
                }

                this.consumir(
                    tiposDeSimbolos.PARENTESE_DIREITO,
                    "Esperado parêntese direito após método 'inclinar'.",
                );
                return new SeletorValor(lexema, [
                    valorInclinar1,
                    quantificadorInclinar1,
                    valorInclinar2,
                    quantificadorInclinar2,
                ]) as Metodo;

            case "inclinar-horizontal":
                this.consumir(
                    tiposDeSimbolos.PARENTESE_ESQUERDO,
                    "Esperado parêntese esquerdo após método 'inclinar-horizontal'.",
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
                    "Esperado parêntese direito após método 'inclinar-horizontal'.",
                );
                return new SeletorValor(lexema, [
                    valorInclinarX,
                    quantificadorInclinarX,
                ]) as Metodo;

            case "inclinar-vertical":
                this.consumir(
                    tiposDeSimbolos.PARENTESE_ESQUERDO,
                    "Esperado parêntese esquerdo após método 'inclinar-vertical'.",
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
                    "Esperado parêntese direito após método 'inclinar-vertical'.",
                );
                return new SeletorValor(lexema, [
                    valorInclinarY,
                    quantificadorInclinarY,
                ]) as Metodo;

            case "inserir":
                this.consumir(
                    tiposDeSimbolos.PARENTESE_ESQUERDO,
                    "Esperado parêntese esquerdo após método 'inserir'.",
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
                    "Esperado parêntese direito após último argumento do método inserir.",
                );

                return new SeletorValor(lexema, arrayValoresInserir) as Metodo;

            case "inverter":
                this.consumir(
                    tiposDeSimbolos.PARENTESE_ESQUERDO,
                    "Esperado parêntese esquerdo após método 'inverter'.",
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
                    "Esperado parêntese direito após método 'inverter'.",
                );
                return new SeletorValor(lexema, [
                    valorInverter,
                    quantificadorInverter,
                ]) as Metodo;

            case "limitar":
                this.consumir(
                    tiposDeSimbolos.PARENTESE_ESQUERDO,
                    "Esperado parêntese esquerdo após método 'limitar'.",
                );
                const valorMin = this.avancarEDevolverAnterior();
                const quantificadorMin = this.avancarEDevolverAnterior();
                this.consumir(
                    tiposDeSimbolos.VIRGULA,
                    "Esperado vírgula após primeiro argumento do método 'limitar'.",
                );
                const valorMed = this.avancarEDevolverAnterior();
                const quantificadorMed = this.avancarEDevolverAnterior();
                this.consumir(
                    tiposDeSimbolos.VIRGULA,
                    "Esperado vírgula após segundo argumento do método 'limitar'.",
                );
                const valorMax = this.avancarEDevolverAnterior();
                const quantificadorMax = this.avancarEDevolverAnterior();
                this.consumir(
                    tiposDeSimbolos.PARENTESE_DIREITO,
                    "Esperado parêntese direito após segundo argumento do método limitar.",
                );
                return new SeletorValor(lexema, [
                    valorMin,
                    quantificadorMin,
                    valorMed,
                    quantificadorMed,
                    valorMax,
                    quantificadorMax,
                ]) as Metodo;

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
                return new SeletorValor(lexema, [valor1, valor2, valor3]) as Metodo;

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
                    return new SeletorValor(lexema, [
                        parametro01,
                        valor02["lexema"],
                    ]) as Metodo;
                }

                if (parametro02 !== null) {
                    return new SeletorValor(lexema, [
                        valor01["lexema"],
                        parametro02,
                    ]) as Metodo;
                }

            case "opacar":
                this.consumir(
                    tiposDeSimbolos.PARENTESE_ESQUERDO,
                    "Esperado parêntese esquerdo após método 'opacar'.",
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
                    "Esperado parêntese direito após método 'opacar'.",
                );
                return new SeletorValor(lexema, [
                    valorOpaco,
                    quantificadorOpaco,
                ]) as Metodo;

            case "ornamentos":
                this.consumir(
                    tiposDeSimbolos.PARENTESE_ESQUERDO,
                    "Esperado parêntese esquerdo após método 'ornamentos'.",
                );

                const valorOrnamentos = this.avancarEDevolverAnterior();

                this.consumir(
                    tiposDeSimbolos.PARENTESE_DIREITO,
                    "Esperado parêntese direito após argumento do método ornamentos.",
                );

                return new SeletorValor(lexema, [valorOrnamentos]) as Metodo;

            case "passos":
                this.consumir(
                    tiposDeSimbolos.PARENTESE_ESQUERDO,
                    "Esperado parêntese esquerdo após método 'passos'.",
                );
                const valorNumerico = this.avancarEDevolverAnterior();
                this.consumir(
                    tiposDeSimbolos.VIRGULA,
                    "Esperado vírgula após primeiro argumento do método passos.",
                );
                const termoSalto = this.avancarEDevolverAnterior();
                this.consumir(
                    tiposDeSimbolos.PARENTESE_DIREITO,
                    "Esperado parêntese direito após segundo argumento do método passos.",
                );
                return new SeletorValor(lexema, [valorNumerico, termoSalto]) as Metodo;

            case "perspectivar":
                this.consumir(
                    tiposDeSimbolos.PARENTESE_ESQUERDO,
                    "Esperado parêntese esquerdo após método 'perspectivar'.",
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
                    "Esperado parêntese direito após método 'perspectivar'.",
                );
                return new SeletorValor(lexema, [
                    valorPerspectivar,
                    quantificadorPerspectivar,
                ]) as Metodo;

            case "poligono":
                this.consumir(
                    tiposDeSimbolos.PARENTESE_ESQUERDO,
                    "Esperado parêntese esquerdo após método 'poligono'.",
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
                            "Esperada vírgula após argumento do método 'poligono'.",
                        );
                    }
                }

                this.consumir(
                    tiposDeSimbolos.PARENTESE_DIREITO,
                    "Esperado parêntese direito após último argumento do método 'poligono'.",
                );

                return new SeletorValor(lexema, arrayValoresPoligono) as Metodo;

            case "polígono":
                this.consumir(
                    tiposDeSimbolos.PARENTESE_ESQUERDO,
                    "Esperado parêntese esquerdo após método 'polígono'.",
                );

                const valorPoligono1: Simbolo = this.avancarEDevolverAnterior();
                const quantificadorPoligono1: Simbolo = this.avancarEDevolverAnterior();
                const arrayValoresPoligono1: Array<Simbolo> = [valorPoligono1, quantificadorPoligono1];

                while (this.simbolos[this.atual].tipo !== 'PARENTESE_DIREITO') {
                    if (this.simbolos[this.atual].tipo !== 'VIRGULA') {
                        const proximoValorPoligono1: Simbolo = this.avancarEDevolverAnterior();
                        arrayValoresPoligono1.push(proximoValorPoligono1);
                    } else {
                        this.consumir(
                            tiposDeSimbolos.VIRGULA,
                            "Esperada vírgula após argumento do método 'poligono'.",
                        );
                    }
                }

                this.consumir(
                    tiposDeSimbolos.PARENTESE_DIREITO,
                    "Esperado parêntese direito após último argumento do método 'polígono'.",
                );

                return new SeletorValor(lexema, arrayValoresPoligono1) as Metodo;

            case "projetar-sombra":
                this.consumir(
                    tiposDeSimbolos.PARENTESE_ESQUERDO,
                    "Esperado parêntese esquerdo após método 'projetar-sombra'.",
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
                    "Esperado parêntese direito após método 'projetar-sombra'.",
                );
                return new SeletorValor(lexema, [
                    valorSombra1,
                    quantificadorSombra1,
                    valorSombra2,
                    quantificadorSombra2,
                    valorSombra3,
                    quantificadorSombra3,
                    corSombra,
                ]) as Metodo;

            case "raio":
                this.consumir(
                    tiposDeSimbolos.PARENTESE_ESQUERDO,
                    "Esperado parêntese esquerdo após método 'raio'.",
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
                    "Esperado parêntese direito após argumentos de método 'raio'.",
                );
                return new SeletorValor(lexema, [
                    posicaoRaio,
                    numeroRaio,
                    quantificadorRaio,
                ]) as Metodo;

            case "repetir-gradiente-conico":
                this.consumir(
                    tiposDeSimbolos.PARENTESE_ESQUERDO,
                    "Esperado parêntese esquerdo após método 'repetir-gradiente-conico'.",
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
                            "Esperada vírgula após argumento do método 'repetir-gradiente-conico'.",
                        );
                    }
                }

                this.consumir(
                    tiposDeSimbolos.PARENTESE_DIREITO,
                    "Esperado parêntese direito após último argumento do método 'repetir-gradiente-conico'.",
                );

                return new SeletorValor(lexema, arrayValoresConico) as Metodo;

            case "repetir-gradiente-cônico":
                this.consumir(
                    tiposDeSimbolos.PARENTESE_ESQUERDO,
                    "Esperado parêntese esquerdo após método 'repetir-gradiente-cônico'.",
                );

                const valorConico1: Simbolo = this.avancarEDevolverAnterior();
                const quantificadorConico1: Simbolo = this.avancarEDevolverAnterior();
                const arrayValoresConico1: Array<Simbolo> = [valorConico1, quantificadorConico1];

                while (this.simbolos[this.atual].tipo !== 'PARENTESE_DIREITO') {
                    if (this.simbolos[this.atual].tipo !== 'VIRGULA') {
                        const proximoValorConico1: Simbolo = this.avancarEDevolverAnterior();
                        arrayValoresConico1.push(proximoValorConico1);
                    } else {
                        this.consumir(
                            tiposDeSimbolos.VIRGULA,
                            "Esperada vírgula após argumento do método 'repetir-gradiente-cônico'.",
                        );
                    }
                }

                this.consumir(
                    tiposDeSimbolos.PARENTESE_DIREITO,
                    "Esperado parêntese direito após último argumento do método 'repetir-gradiente-cônico'.",
                );

                return new SeletorValor(lexema, arrayValoresConico1) as Metodo;

            case "repetir-gradiente-radial":
                this.consumir(
                    tiposDeSimbolos.PARENTESE_ESQUERDO,
                    "Esperado parêntese esquerdo após método 'repetir-gradiente-radial'.",
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
                            "Esperada vírgula após argumento do método 'repetir-gradiente-radial'.",
                        );
                    }
                }

                this.consumir(
                    tiposDeSimbolos.PARENTESE_DIREITO,
                    "Esperado parêntese direito após último argumento do método 'repetir-gradiente-radial'.",
                );

                return new SeletorValor(lexema, arrayValoresRadial) as Metodo;

            case "retangulo":
                this.consumir(
                    tiposDeSimbolos.PARENTESE_ESQUERDO,
                    "Esperado parêntese esquerdo após método 'retangulo'.",
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
                    "Esperado parêntese direito após último argumento do método retangulo.",
                );

                return new SeletorValor(lexema, arrayValoresRect) as Metodo;

            case "retângulo":
                this.consumir(
                    tiposDeSimbolos.PARENTESE_ESQUERDO,
                    "Esperado parêntese esquerdo após método 'retangulo'.",
                );

                const valorRecta1: Simbolo = this.avancarEDevolverAnterior();
                const quantificadorRecta1: Simbolo = this.avancarEDevolverAnterior();
                const arrayValoresRecta: Array<Simbolo> = [valorRecta1, quantificadorRecta1];

                while (this.simbolos[this.atual].tipo !== 'PARENTESE_DIREITO') {
                    const proximoValorRecta: Simbolo = this.avancarEDevolverAnterior();
                    arrayValoresRecta.push(proximoValorRecta);
                }

                this.consumir(
                    tiposDeSimbolos.PARENTESE_DIREITO,
                    "Esperado parêntese direito após último argumento do método retangulo.",
                );

                return new SeletorValor(lexema, arrayValoresRecta) as Metodo;

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
                return new SeletorValor(lexema, [vermelho, verde, azul]) as Metodo;

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
                return new SeletorValor(lexema, [
                    vermelhoRgba,
                    verdeRgba,
                    azulRgba,
                ]) as Metodo;

            case "rotacionar":
                this.consumir(
                    tiposDeSimbolos.PARENTESE_ESQUERDO,
                    "Esperado parêntese esquerdo após método 'rotacionar'.",
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
                    "Esperado parêntese direito após método 'rotacionar'.",
                );
                return new SeletorValor(lexema, [
                    valorRotacionar,
                    quantificadorRotacionar,
                ]) as Metodo;

            case "rotacionar-3d":
                this.consumir(
                    tiposDeSimbolos.PARENTESE_ESQUERDO,
                    "Esperado parêntese esquerdo após método 'rotacionar-3d'.",
                );

                const valor1Rotacionar3d = this.avancarEDevolverAnterior();
                this.consumir(
                    tiposDeSimbolos.VIRGULA,
                    "Esperada vírgula após primeiro parâmetro do método 'rotacionar-3d'.",
                );

                const valor2Rotacionar3d = this.avancarEDevolverAnterior();
                this.consumir(
                    tiposDeSimbolos.VIRGULA,
                    "Esperada vírgula após segundo parâmetro do método 'rotacionar-3d'.",
                );

                const valor3Rotacionar3d = this.avancarEDevolverAnterior();
                this.consumir(
                    tiposDeSimbolos.VIRGULA,
                    "Esperada vírgula após terceiro parâmetro do método 'rotacionar-3d'.",
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
                    "Esperado parêntese direito após método 'rotacionar-3d'.",
                );

                return new SeletorValor(lexema, [
                    valor1Rotacionar3d,
                    valor2Rotacionar3d,
                    valor3Rotacionar3d,
                    valor4Rotacionar3d,
                    quantificadorRotacionar3d,
                ]) as Metodo;

            case "rotacionar-eixo-z":
                this.consumir(
                    tiposDeSimbolos.PARENTESE_ESQUERDO,
                    "Esperado parêntese esquerdo após método 'rotacionar-eixo-z'.",
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
                    "Esperado parêntese direito após método 'rotacionar-eixo-z'.",
                );
                return new SeletorValor(lexema, [
                    valorRotacionarZ,
                    quantificadorRotacionarZ,
                ]) as Metodo;

            case "rotacionar-horizontal":
                this.consumir(
                    tiposDeSimbolos.PARENTESE_ESQUERDO,
                    "Esperado parêntese esquerdo após método 'rotacionar-horizontal'.",
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
                    "Esperado parêntese direito após método 'rotacionar-horizontal'.",
                );
                return new SeletorValor(lexema, [
                    valorRotacionarX,
                    quantificadorRotacionarX,
                ]) as Metodo;

            case "rotacionar-matiz":
                this.consumir(
                    tiposDeSimbolos.PARENTESE_ESQUERDO,
                    "Esperado parêntese esquerdo após método 'rotacionar-matiz'.",
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
                    "Esperado parêntese direito após método 'rotacionar-matiz'.",
                );
                return new SeletorValor(lexema, [
                    valorRotacao,
                    quantificadorRotacao,
                ]) as Metodo;

            case "rotacionar-vertical":
                this.consumir(
                    tiposDeSimbolos.PARENTESE_ESQUERDO,
                    "Esperado parêntese esquerdo após método 'rotacionar-vertical'.",
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
                    "Esperado parêntese direito após método 'rotacionar-vertical'.",
                );
                return new SeletorValor(lexema, [
                    valorRotacionarY,
                    quantificadorRotacionarY,
                ]) as Metodo;

            case "saturar":
                this.consumir(
                    tiposDeSimbolos.PARENTESE_ESQUERDO,
                    "Esperado parêntese esquerdo após método 'saturar'.",
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
                    "Esperado parêntese direito após método 'saturar'.",
                );
                return new SeletorValor(lexema, [
                    valorSaturar,
                    quantificadorSaturar,
                ]) as Metodo;

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
                return new SeletorValor(lexema, [
                    valorSepia,
                    quantificadorSepia,
                ]) as Metodo;

            case "sépia":
                this.consumir(
                    tiposDeSimbolos.PARENTESE_ESQUERDO,
                    "Esperado parêntese esquerdo após método 'sépia'.",
                );
                const valorSépia = this.avancarEDevolverAnterior();
                let quantificadorSépia;
                if (this.simbolos[this.atual].tipo === "QUANTIFICADOR") {
                    quantificadorSépia = this.avancarEDevolverAnterior();
                } else {
                    quantificadorSépia = null;
                }
                this.consumir(
                    tiposDeSimbolos.PARENTESE_DIREITO,
                    "Esperado parêntese direito após método 'sépia'.",
                );
                return new SeletorValor(lexema, [
                    valorSépia,
                    quantificadorSépia,
                ]) as Metodo;

            case "translação":
                this.consumir(
                    tiposDeSimbolos.PARENTESE_ESQUERDO,
                    "Esperado parêntese esquerdo após método 'translação'.",
                );

                const valorTranslacao1 = this.avancarEDevolverAnterior();

                let quantificadorTranslacao1;
                if (this.simbolos[this.atual].tipo === "QUANTIFICADOR") {
                    quantificadorTranslacao1 = this.avancarEDevolverAnterior();
                } else {
                    quantificadorTranslacao1 = null;
                }

                let valorTranslacao2;
                let quantificadorTranslacao2;
                if (this.simbolos[this.atual].tipo === "VIRGULA") {
                    this.consumir(
                        tiposDeSimbolos.VIRGULA,
                        "Esperado vírgula após primeiro argumento do método 'translação'.",
                    );
                    valorTranslacao2 = this.avancarEDevolverAnterior();
                    quantificadorTranslacao2 = this.avancarEDevolverAnterior();
                } else {
                    valorTranslacao2 = null;
                    quantificadorTranslacao2 = null;
                }

                this.consumir(
                    tiposDeSimbolos.PARENTESE_DIREITO,
                    "Esperado parêntese direito após método 'translação'.",
                );
                return new SeletorValor(lexema, [
                    valorTranslacao1,
                    quantificadorTranslacao1,
                    valorTranslacao2,
                    quantificadorTranslacao2,
                ]) as Metodo;

            case "translacao":
                this.consumir(
                    tiposDeSimbolos.PARENTESE_ESQUERDO,
                    "Esperado parêntese esquerdo após método 'translação'.",
                );

                const valorTranslacao01 = this.avancarEDevolverAnterior();

                let quantificadorTranlacao01;
                if (this.simbolos[this.atual].tipo === "QUANTIFICADOR") {
                    quantificadorTranlacao01 = this.avancarEDevolverAnterior();
                } else {
                    quantificadorTranlacao01 = null;
                }

                let valorTranslacao02;
                let quantificadorTranlacao02;
                if (this.simbolos[this.atual].tipo === "VIRGULA") {
                    this.consumir(
                        tiposDeSimbolos.VIRGULA,
                        "Esperado vírgula após primeiro argumento do método 'translação'.",
                    );
                    valorTranslacao02 = this.avancarEDevolverAnterior();
                    quantificadorTranlacao02 = this.avancarEDevolverAnterior();
                } else {
                    valorTranslacao02 = null;
                    quantificadorTranlacao02 = null;
                }

                this.consumir(
                    tiposDeSimbolos.PARENTESE_DIREITO,
                    "Esperado parêntese direito após método 'translação'.",
                );
                return new SeletorValor(lexema, [
                    valorTranslacao01,
                    quantificadorTranlacao01,
                    valorTranslacao02,
                    quantificadorTranlacao02,
                ]) as Metodo;

            case "translação-3d":
                this.consumir(
                    tiposDeSimbolos.PARENTESE_ESQUERDO,
                    "Esperado parêntese esquerdo após método 'translação-3d'.",
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
                        "Esperado vírgula após primeiro argumento do método 'translação-3d'.",
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
                        "Esperado vírgula após primeiro argumento do método 'translação-3d'.",
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
                    "Esperado parêntese direito após método 'translação-3d'.",
                );
                return new SeletorValor(lexema, [
                    valorTranslacao3d1,
                    quantificadorTranlacao3d1,
                    valorTranslacao3d2,
                    quantificadorTranlacao3d2,
                    valorTranslacao3d3,
                    quantificadorTranlacao3d3,
                ]) as Metodo;

            case "translacao-3d":
                this.consumir(
                    tiposDeSimbolos.PARENTESE_ESQUERDO,
                    "Esperado parêntese esquerdo após método 'translação-3d'.",
                );

                const valorTranslacao3d01 = this.avancarEDevolverAnterior();

                let quantificadorTranlacao3d01;
                if (this.simbolos[this.atual].tipo === "QUANTIFICADOR") {
                    quantificadorTranlacao3d01 =
                        this.avancarEDevolverAnterior();
                } else {
                    quantificadorTranlacao3d01 = null;
                }

                let valorTranslacao3d02;
                let quantificadorTranlacao3d02;
                if (this.simbolos[this.atual].tipo === "VIRGULA") {
                    this.consumir(
                        tiposDeSimbolos.VIRGULA,
                        "Esperado vírgula após primeiro argumento do método 'translação-3d'.",
                    );
                    valorTranslacao3d02 = this.avancarEDevolverAnterior();
                    if (this.simbolos[this.atual].tipo === "QUANTIFICADOR") {
                        quantificadorTranlacao3d02 =
                            this.avancarEDevolverAnterior();
                    } else {
                        quantificadorTranlacao3d02 = null;
                    }
                } else {
                    valorTranslacao3d02 = null;
                    quantificadorTranlacao3d02 = null;
                }

                let valorTranslacao3d03;
                let quantificadorTranlacao3d03;
                if (this.simbolos[this.atual].tipo === "VIRGULA") {
                    this.consumir(
                        tiposDeSimbolos.VIRGULA,
                        "Esperado vírgula após primeiro argumento do método 'translação-3d'.",
                    );
                    valorTranslacao3d03 = this.avancarEDevolverAnterior();
                    if (this.simbolos[this.atual].tipo === "QUANTIFICADOR") {
                        quantificadorTranlacao3d03 =
                            this.avancarEDevolverAnterior();
                    } else {
                        quantificadorTranlacao3d03 = null;
                    }
                } else {
                    valorTranslacao3d03 = null;
                    quantificadorTranlacao3d03 = null;
                }

                this.consumir(
                    tiposDeSimbolos.PARENTESE_DIREITO,
                    "Esperado parêntese direito após método 'translação-3d'.",
                );
                return new SeletorValor(lexema, [
                    valorTranslacao3d01,
                    quantificadorTranlacao3d01,
                    valorTranslacao3d02,
                    quantificadorTranlacao3d02,
                    valorTranslacao3d03,
                    quantificadorTranlacao3d03,
                ]) as Metodo;

            case "translação-eixo-z":
                this.consumir(
                    tiposDeSimbolos.PARENTESE_ESQUERDO,
                    "Esperado parêntese esquerdo após método 'translação-eixo-z'.",
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
                    "Esperado parêntese direito após método 'translação-eixo-z'.",
                );
                return new SeletorValor(lexema, [
                    valorTranslaçaoZ,
                    quantificadorTranslaçaoZ,
                ]) as Metodo;

            case "translacao-eixo-z":
                this.consumir(
                    tiposDeSimbolos.PARENTESE_ESQUERDO,
                    "Esperado parêntese esquerdo após método 'translação-eixo-z'.",
                );
                const valorTranslacaoZ = this.avancarEDevolverAnterior();
                let quantificadorTranslacaoZ;
                if (this.simbolos[this.atual].tipo === "QUANTIFICADOR") {
                    quantificadorTranslacaoZ = this.avancarEDevolverAnterior();
                } else {
                    quantificadorTranslacaoZ = null;
                }
                this.consumir(
                    tiposDeSimbolos.PARENTESE_DIREITO,
                    "Esperado parêntese direito após método 'translação-eixo-z'.",
                );
                return new SeletorValor(lexema, [
                    valorTranslacaoZ,
                    quantificadorTranslacaoZ,
                ]) as Metodo;

            case "translação-horizontal":
                this.consumir(
                    tiposDeSimbolos.PARENTESE_ESQUERDO,
                    "Esperado parêntese esquerdo após método 'translação-horizontal'.",
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
                    "Esperado parêntese direito após método 'translação-horizontal'.",
                );
                return new SeletorValor(lexema, [
                    valorTranslaçaoX,
                    quantificadorTranslaçaoX,
                ]) as Metodo;

            case "translacao-horizontal":
                this.consumir(
                    tiposDeSimbolos.PARENTESE_ESQUERDO,
                    "Esperado parêntese esquerdo após método 'translação-horizontal'.",
                );
                const valorTranslacaoX = this.avancarEDevolverAnterior();
                let quantificadorTranslacaoX;
                if (this.simbolos[this.atual].tipo === "QUANTIFICADOR") {
                    quantificadorTranslacaoX = this.avancarEDevolverAnterior();
                } else {
                    quantificadorTranslacaoX = null;
                }
                this.consumir(
                    tiposDeSimbolos.PARENTESE_DIREITO,
                    "Esperado parêntese direito após método 'translação-horizontal'.",
                );
                return new SeletorValor(lexema, [
                    valorTranslacaoX,
                    quantificadorTranslacaoX,
                ]) as Metodo;

            case "translação-vertical":
                this.consumir(
                    tiposDeSimbolos.PARENTESE_ESQUERDO,
                    "Esperado parêntese esquerdo após método 'translação-vertical'.",
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
                    "Esperado parêntese direito após método 'translação-vertical'.",
                );
                return new SeletorValor(lexema, [
                    valorTranslaçaoY,
                    quantificadorTranslaçaoY,
                ]) as Metodo;

            case "translacao-vertical":
                this.consumir(
                    tiposDeSimbolos.PARENTESE_ESQUERDO,
                    "Esperado parêntese esquerdo após método 'translação-vertical'.",
                );
                const valorTranslacaoY = this.avancarEDevolverAnterior();
                let quantificadorTranslacaoY;
                if (this.simbolos[this.atual].tipo === "QUANTIFICADOR") {
                    quantificadorTranslacaoY = this.avancarEDevolverAnterior();
                } else {
                    quantificadorTranslacaoY = null;
                }
                this.consumir(
                    tiposDeSimbolos.PARENTESE_DIREITO,
                    "Esperado parêntese direito após método 'translação-vertical'.",
                );
                return new SeletorValor(lexema, [
                    valorTranslacaoY,
                    quantificadorTranslacaoY,
                ]) as Metodo;

            case "variar-caractere":
                this.consumir(
                    tiposDeSimbolos.PARENTESE_ESQUERDO,
                    "Esperado parêntese esquerdo após método 'variar-caractere'.",
                );

                const valorVariarCaractere = this.avancarEDevolverAnterior();

                this.consumir(
                    tiposDeSimbolos.PARENTESE_DIREITO,
                    "Esperado parêntese direito após argumento do método variar-caractere.",
                );
                return new SeletorValor(lexema, [valorVariarCaractere]) as Metodo;

            case "url":
                this.consumir(
                    tiposDeSimbolos.PARENTESE_ESQUERDO,
                    "Esperado parêntese esquerdo após método 'url'.",
                );
                const url = this.validacaoUrl();
                this.consumir(
                    tiposDeSimbolos.PARENTESE_DIREITO,
                    "Esperado parêntese direito após argumento do método url.",
                );
                return new SeletorValor(lexema, [url]) as Metodo;

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

                return new SeletorValor(lexema, arrayValoresXywh) as Metodo;
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
        if (!["http", "https"].includes(primeiroSimbolo.lexema.toLowerCase())) {
            throw new Error(
                `URL inválida. URLs devem começar com 'http' ou 'https'.`,
            );
        }

        this.consumir(
            tiposDeSimbolos.DOIS_PONTOS,
            `Esperado dois-pontos após '${primeiroSimbolo.lexema}'.`,
        );
        this.consumir(
            tiposDeSimbolos.BARRA,
            `Esperado barra após '${primeiroSimbolo.lexema + ":"}'`,
        );
        this.consumir(
            tiposDeSimbolos.BARRA,
            `Esperado segunda barra após '${primeiroSimbolo.lexema + ":/"}'`,
        );

        let url = `${primeiroSimbolo.lexema}://`;

        while (
            this.simbolos[this.atual].tipo !== tiposDeSimbolos.PARENTESE_DIREITO
        ) {
            let proximoSimbolo = this.avancarEDevolverAnterior();
            url += proximoSimbolo.literal || proximoSimbolo.lexema;
        }

        this.validacaoUrlTexto(url);
        return url;
    }

    private validacaoUrlTexto(textoUrl: string) {
        if (
            !/^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/gi.test(
                textoUrl,
            )
        ) {
            throw new Error(`URL ${textoUrl} inválida.`);
        }

        return textoUrl;
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
        do {
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
        } while (
            this.atual < this.simbolos.length &&
            this.simbolos[this.atual].tipo !== tiposDeSimbolos.PONTO_E_VIRGULA
        );

        this.consumir(
            tiposDeSimbolos.PONTO_E_VIRGULA,
            "Esperado ponto-e-vírgula após declaração de valores de modificador.",
        );

        return valoresResolvidos;
    }

    private tratarAtribuicaoAbreviada(valoresModificador: Array<any>): string {
        let atribuicaoAbreviada: string = "";

        for (let i = 0; i < valoresModificador.length; i += 1) {
            if (i === 0) {
                atribuicaoAbreviada += `${valoresModificador[i].lexema}`;
            } else {
                switch (valoresModificador[i].tipo) {
                    case tiposDeSimbolos.QUANTIFICADOR:
                        atribuicaoAbreviada += `${valoresModificador[i].lexema}`;
                        break;
                    case tiposDeSimbolos.VIRGULA:
                        atribuicaoAbreviada += ",";
                        break;
                    default:
                        atribuicaoAbreviada += " ";
                        atribuicaoAbreviada += `${valoresModificador[i].lexema}`;
                        break;
                }
            }
        }

        return atribuicaoAbreviada;
    }

    private tratarValorNumerico(modificador: Simbolo): Boolean {
        if (!ModificadoresDeValorNumerico.includes(modificador.lexema)) {
            if (ModificadoresDeValorNumericoComQuantificador.includes(modificador.lexema)) {
                if (this.simbolos[this.atual].tipo === "QUANTIFICADOR") {
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
                tiposDeSimbolos.PSEUDO_CLASSE,
                "Esperado nome de pseudoclasse.",
            );

            return new SeletorPseudoclasse(pseudoclasse.lexema, {
                linha: pseudoclasse.linha,
                colunaInicial: pseudoclasse.colunaInicial,
                colunaFinal: pseudoclasse.colunaFinal,
            }) as Pseudoclasse;
        }

        return pseudoclasse;
    }

    protected seletorPorEspacoReservado(): Seletor {
        const simboloSeletor = this.avancarEDevolverAnterior();

        // Aqui não tem problema o espaço reservado usar um nome de estrutura.
        if (
            ![
                tiposDeSimbolos.IDENTIFICADOR,
                tiposDeSimbolos.ESTRUTURA,
            ].includes(this.simbolos[this.atual].tipo)
        ) {
            throw this.erro(
                this.simbolos[this.atual],
                "Esperado identificador válido para espaço reservado.",
            );
        }

        const nomeEspacoReservado = this.avancarEDevolverAnterior();

        return new SeletorEspacoReservado(nomeEspacoReservado.lexema, {
            linha: simboloSeletor.linha,
            colunaInicial: simboloSeletor.colunaInicial,
            colunaFinal: simboloSeletor.colunaFinal,
        });
    }

    protected seletorPorEstrutura(): Seletor {
        const simboloSeletor = this.avancarEDevolverAnterior();
        const pseudoclasse = this.resolverPseudoclasse();
        return new SeletorEstrutura(
            new SeletorEstruturasLmht(simboloSeletor.lexema, {
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

    protected declaracaoVariavel(): DeclaracaoVariavel {
        let nomeVariavel: string;

        this.consumir(
            tiposDeSimbolos.CIFRAO,
            "Esperado cifrão antes de declaração de variável.",
        );

        const declaracaoVariavel: Simbolo = this.consumir(
            tiposDeSimbolos.VARIAVEL,
            "Esperada nomenclatura para declaração de variável.",
        );

        nomeVariavel = declaracaoVariavel.lexema;

        this.consumir(
            tiposDeSimbolos.DOIS_PONTOS,
            "Esperado ':' após declaração de variável.",
        );

        const valoresVariavel: Valor[] = this.valoresModificador(nomeVariavel);
        return new DeclaracaoVariavel(nomeVariavel, valoresVariavel);
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
            "Esperado nome do modificador.",
        );

        this.consumir(
            tiposDeSimbolos.DOIS_PONTOS,
            "Esperado ':' após nome do modificador.",
        );

        let valoresModificador: Array<any> = this.valoresModificador(modificador.lexema);

        let classeModificadora;
        if (valoresModificador[0] instanceof ReferenciaVariavel) {
            classeModificadora = new SeletorModificador(
                modificador.lexema,
                valoresModificador,
                {
                    linha: modificador.linha,
                    colunaInicial: modificador.colunaInicial,
                    colunaFinal: modificador.colunaFinal,
                },
                true
            );
        } else {
            classeModificadora = new SeletorModificador(
                modificador.lexema,
                valoresModificador,
                {
                    linha: modificador.linha,
                    colunaInicial: modificador.colunaInicial,
                    colunaFinal: modificador.colunaFinal,
                }
            );
        }

        return classeModificadora as Modificador;
    }

    resolverModificadoresEDeclaracoesAninhadas(): {
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
                    declaracoesAninhadas.push(
                        declaracaoAninhada as BlocoDeclaracao,
                    );
                    break;
            }
        }

        this.avancarEDevolverAnterior(); // chave direita
        return {
            modificadores,
            declaracoesAninhadas,
        };
    }

    declaracao(): Declaracao | null {
        if (this.estaNoFinal()) return null;
        switch (this.simbolos[this.atual].tipo) {
            case tiposDeSimbolos.IMPORTAR:
                this.avancarEDevolverAnterior();
                const caminhoArquivo = this.simbolos[this.atual];
                const resultadoImportacao = this.importador.importar(
                    caminhoArquivo.literal,
                    false,
                );
                this.simbolos.splice(
                    this.atual - 1,
                    2,
                    ...resultadoImportacao[1].simbolos,
                );
                this.atual -= 1;
                return null;
            case tiposDeSimbolos.CIFRAO:
                return this.declaracaoVariavel();
            default:
                const seletores = this.resolverSeletores();
                const modificadoresEDeclaracoesAninhadas =
                    this.resolverModificadoresEDeclaracoesAninhadas();

                return new BlocoDeclaracao(
                    seletores,
                    modificadoresEDeclaracoesAninhadas.modificadores,
                    modificadoresEDeclaracoesAninhadas.declaracoesAninhadas,
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
            this.referenciaDeclaracoes = declaracoes;
        }

        return declaracoes.filter((d) => d);
    }
}
