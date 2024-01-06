import { ErroLexador } from "./erro-lexador";
import { Simbolo } from "./simbolo";

import palavrasReservadas from "./palavras-reservadas/foles";
import tiposDeSimbolos from "../tipos-de-simbolos/foles";
import { LexadorInterface } from "../interfaces";
import { ResultadoLexadorInterface } from "../interfaces/resultado-lexador-interface";

/**
 * O Lexador de FolEs, baseado no Lexador de [Delégua](https://github.com/DesignLiquido/delegua/blob/principal/fontes/lexador/lexador.ts).
 */
export class Lexador implements LexadorInterface {
    codigo: string[];
    simbolos: Simbolo[];
    erros: ErroLexador[];

    linha: number;
    atual: number;
    inicioSimbolo: number;

    constructor() {
        this.codigo = [""];

        this.simbolos = [];
        this.erros = [];

        this.atual = 0;
        this.linha = 0;
        this.inicioSimbolo = 0;
    }

    /**
     * Indica se o código está na última linha.
     * @returns Verdadeiro se contador de linhas está na última linha.
     *          Falso caso contrário.
     */
    eUltimaLinha(): boolean {
        return this.linha >= this.codigo.length - 1;
    }

    eFinalDoCodigo(): boolean {
        return (
            this.eUltimaLinha() &&
            this.codigo[this.codigo.length - 1].length <= this.atual
        );
    }

    eFinalDaLinha(): boolean {
        if (this.codigo.length === this.linha) {
            return true;
        }
        return this.atual >= this.codigo[this.linha].length;
    }

    caractereAtual(): string {
        if (this.eFinalDaLinha()) return "\0";
        return this.codigo[this.linha].charAt(this.atual);
    }

    proximoSimbolo(): string {
        return this.codigo[this.linha].charAt(this.atual + 1);
    }

    eAlfabeto(caractere: string): boolean {
        const acentuacoes = [
            "á",
            "Á",
            "ã",
            "Ã",
            "â",
            "Â",
            "à",
            "À",
            "é",
            "É",
            "ê",
            "Ê",
            "í",
            "Í",
            "ó",
            "Ó",
            "õ",
            "Õ",
            "ô",
            "Ô",
            "ú",
            "Ú",
            "ç",
            "Ç",
            "_",
            "-",
        ];

        return (
            (caractere >= "a" && caractere <= "z") ||
            (caractere >= "A" && caractere <= "Z") ||
            acentuacoes.includes(caractere)
        );
    }

    eDigito(caractere: string): boolean {
        return caractere >= "0" && caractere <= "9";
    }

    eAlfabetoOuDigito(caractere: any): boolean {
        return this.eDigito(caractere) || this.eAlfabeto(caractere);
    }

    avancar(): void {
        this.atual += 1;

        if (this.eFinalDaLinha() && !this.eUltimaLinha()) {
            this.linha++;
            this.atual = 0;
        }
    }

    adicionarSimbolo(
        tipo: any,
        literal: any = null,
        lexema: string = null
    ): void {
        const texto: string = this.codigo[this.linha].substring(
            this.inicioSimbolo,
            this.atual
        );

        this.simbolos.push(
            new Simbolo(
                tipo,
                texto || lexema,
                literal,
                this.linha + 1,
                this.inicioSimbolo + 1,
                this.atual
            )
        );
    }

    analisarNumero(): void {
        while (this.eDigito(this.caractereAtual())) {
            this.avancar();
        }

        if (this.caractereAtual() == "." && this.eDigito(this.proximoSimbolo())) {
            this.avancar();

            while (this.eDigito(this.caractereAtual())) {
                this.avancar();
            }
        }

        const numeroCompleto = this.codigo[this.linha].substring(
            this.inicioSimbolo,
            this.atual
        );
        this.adicionarSimbolo(
            tiposDeSimbolos.NUMERO,
            parseFloat(numeroCompleto)
        );
    }

    analisarDiretiva(): void {
        this.avancar();
        while (this.eAlfabetoOuDigito(this.caractereAtual())) {
            this.avancar();
        }

        const nomeDiretiva: string = this.codigo[this.linha].substring(
            this.inicioSimbolo + 1,
            this.atual
        );

        switch (nomeDiretiva) {
            case 'importar':
                this.avancar(); // Espaço esperado entre @importar e o texto do arquivo
                this.adicionarSimbolo(tiposDeSimbolos.IMPORTAR, null, null);
                break;
            default:
                throw new Error(`Diretiva não reconhecida: ${nomeDiretiva}`);
        }        
    }

    analisarTexto(delimitador = '"'): void {
        while (this.caractereAtual() !== delimitador && !this.eFinalDoCodigo()) {
            this.avancar();
        }

        if (this.eFinalDoCodigo()) {
            this.erros.push({
                linha: this.linha + 1,
                caractere: this.codigo[this.linha].charAt(this.atual - 1),
                mensagem: "Texto não finalizado.",
            } as ErroLexador);
            return;
        }

        const valor = this.codigo[this.linha].substring(
            this.inicioSimbolo + 1,
            this.atual
        );
        this.adicionarSimbolo(tiposDeSimbolos.TEXTO, valor);
    }

    identificarPalavraChave(): void {
        while (this.eAlfabetoOuDigito(this.caractereAtual())) {
            this.avancar();
        }

        const codigo: string = this.codigo[this.linha].substring(
            this.inicioSimbolo,
            this.atual
        );
        const tipo: string =
            codigo in palavrasReservadas
                ? palavrasReservadas[codigo]
                : tiposDeSimbolos.IDENTIFICADOR;

        this.adicionarSimbolo(tipo);
    }

    avancarParaProximaLinha(): void {
        this.linha++;
        this.atual = 0;
    }

    encontrarFimComentarioAsterisco(): void {
        while (!this.eFinalDoCodigo()) {
            this.avancar();
            if (this.caractereAtual() === "*" && this.proximoSimbolo() === "/") {
                this.avancar();
                this.avancar();
                break;
            }
        }
    }

    analisarToken(): void {
        const caractere = this.caractereAtual();

        switch (caractere) {
            case "{":
                this.adicionarSimbolo(tiposDeSimbolos.CHAVE_ESQUERDA);
                this.avancar();
                break;
            case "}":
                this.adicionarSimbolo(tiposDeSimbolos.CHAVE_DIREITA);
                this.avancar();
                break;
            case "(":
                this.adicionarSimbolo(tiposDeSimbolos.PARENTESE_ESQUERDO);
                this.avancar();
                break;
            case ")":
                this.adicionarSimbolo(tiposDeSimbolos.PARENTESE_DIREITO);
                this.avancar();
                break;
            case ":":
                this.adicionarSimbolo(tiposDeSimbolos.DOIS_PONTOS);
                this.avancar();
                break;
            case ";":
                this.adicionarSimbolo(tiposDeSimbolos.PONTO_E_VIRGULA);
                this.avancar();
                break;
            case ",":
                this.adicionarSimbolo(tiposDeSimbolos.VIRGULA);
                this.avancar();
                break;
            case "%":
                if (this.atual === 0) {
                    this.adicionarSimbolo(
                        tiposDeSimbolos.PERCENTUAL,
                        null,
                        "%"
                    );
                } else {
                    this.adicionarSimbolo(
                        tiposDeSimbolos.QUANTIFICADOR,
                        null,
                        "%"
                    );
                }
                this.avancar();
                break;
            case ".":
                this.adicionarSimbolo(
                    tiposDeSimbolos.PONTO,
                    null,
                    "."
                );
                this.avancar();
                break;
            case "#":
                if (this.atual === 0) {
                    this.adicionarSimbolo(
                        tiposDeSimbolos.ID_DO_ELEMENTO,
                        null,
                        "#"
                    );
                } else {
                    this.adicionarSimbolo(tiposDeSimbolos.METODO, null, "#");
                }
                this.avancar();
                break;
            case " ":
            case "\0":
            case "\r":
            case "\t":
            case ";":
                this.avancar();
                break;
            case "/":
                // Se houver um dois-pontos antes da primeira barra, pode ser uma url.
                if (
                    this.atual > 0 &&
                    this.codigo[this.linha].charAt(this.atual - 1) === ":"
                ) {
                    this.avancar();
                    this.adicionarSimbolo(tiposDeSimbolos.BARRA, null, "/");
                    break;
                } else {
                    this.avancar();
                    switch (this.caractereAtual()) {
                        case "/":
                            this.avancarParaProximaLinha();
                            break;
                        case "*":
                            this.encontrarFimComentarioAsterisco();
                            break;
                        default:
                            this.adicionarSimbolo(
                                tiposDeSimbolos.BARRA,
                                null,
                                "/"
                            );
                            break;
                    }
                }

                break;
            case '"':
                this.avancar();
                this.analisarTexto('"');
                this.avancar();
                break;

            case "'":
                this.avancar();
                this.analisarTexto("'");
                this.avancar();
                break;
            case "@":
                this.analisarDiretiva();
                break;
            default:
                if (this.eDigito(caractere)) this.analisarNumero();
                else if (this.eAlfabeto(caractere))
                    this.identificarPalavraChave();
                else {
                    this.erros.push({
                        linha: this.linha + 1,
                        caractere: caractere,
                        mensagem: "Caractere inesperado.",
                    } as ErroLexador);
                    this.avancar();
                }
        }
    }

    mapear(codigo: string[]): ResultadoLexadorInterface {
        this.atual = 0;
        this.linha = 0;
        this.inicioSimbolo = 0;

        this.erros = [];
        this.simbolos = [];

        this.codigo = codigo || [""];

        while (!this.eFinalDoCodigo()) {
            this.inicioSimbolo = this.atual;
            this.analisarToken();
        }

        return {
            simbolos: this.simbolos,
            erros: this.erros,
        };
    }
}
