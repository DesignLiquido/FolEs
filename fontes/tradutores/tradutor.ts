import * as vlq from 'vlq';

import { Declaracao } from "../declaracoes";
import { SeletorEstruturasHtml } from "../estruturas/seletor-estruturas-html";
import { Modificador } from "../modificadores";
import { PragmasModificador, SeletorModificador } from "../modificadores/superclasse";
import { PragmasSeletor, Seletor, SeletorEstrutura } from "../seletores";
import { Metodo } from "../valores/metodos/metodo";

import estruturasHtml from "./estruturas-html";
import { MapaOrigensInterface } from '../interfaces/mapa-origens-interface';

export class Tradutor {
    linha: number;
    atual: number;

    constructor() {
        this.linha = 1;
        this.atual = 1;
    }

    private calcularPragmasSeletor(traducaoSeletor: string) {
        const novosPragmasSeletor: PragmasSeletor = {
            linha: this.linha,
            colunaInicial: this.atual,
            colunaFinal: this.atual
        }
        
        this.atual += traducaoSeletor.length;
        novosPragmasSeletor.colunaFinal = this.atual - 1;
        return novosPragmasSeletor;
    }

    private calcularPragmasModificador(modificador: Modificador) {
        const novosPragmasModificador: PragmasModificador = {
            linha: this.linha,
            colunaInicial: this.atual,
            colunaFinal: this.atual
        }

        this.atual += modificador.propriedadeCss.length;
        novosPragmasModificador.colunaFinal = this.atual - 1;
        return novosPragmasModificador;
    }

    private traduzirSeletorEstrutura(seletor: SeletorEstrutura): Seletor {
        const seletorLmht: string = seletor.paraTexto();
        const traducaoSeletor: string = estruturasHtml[seletorLmht];
        const novosPragmasSeletor = this.calcularPragmasSeletor(traducaoSeletor);
        const seletorTraduzido = new SeletorEstruturasHtml(
            traducaoSeletor,
            seletor.pragmas
        ) as Seletor;
        seletorTraduzido.pragmasTraducao = novosPragmasSeletor;
        return seletorTraduzido;
    }

    private traduzirModificador(modificador: Modificador): Modificador {
        this.linha = modificador.pragmas.linha;
        const novosPragmasModificador = this.calcularPragmasModificador(modificador);
        const modificadorTraduzido = 
            new SeletorModificador(
                Array.isArray(modificador.nomeFoles) ? modificador.nomeFoles[0] : modificador.nomeFoles,
                modificador.valor instanceof Metodo ? modificador.valor.paraTexto() : modificador.valor,
                modificador.quantificador,
                modificador.pragmas
            ) as Modificador;
        
            modificadorTraduzido.pragmasTraducao = novosPragmasModificador;
        return modificadorTraduzido;
    }

    traduzir(declaracoes: Declaracao[]): Declaracao[] {
        this.linha = 1;
        this.atual = 1;

        const declaracoesTraduzidas = [];

        for (const declaracao of declaracoes) {
            const seletoresTraduzidos: Seletor[] = [];
            const modificadoresTraduzidos: Modificador[] = [];

            for (const seletor of declaracao.seletores) {
                this.linha = seletor.pragmas.linha;

                if (seletor instanceof SeletorEstrutura) {
                    seletoresTraduzidos.push(this.traduzirSeletorEstrutura(seletor));
                    continue;
                }                
            }

            for (const modificador of declaracao.modificadores) {
                modificadoresTraduzidos.push(this.traduzirModificador(modificador));
            }

            declaracoesTraduzidas.push(
                new Declaracao(
                    seletoresTraduzidos, 
                    modificadoresTraduzidos,
                    []
                )
            )
        }

        return declaracoesTraduzidas;
    }

    /**
     * Gera o mapa de fontes (_source map_) de FolEs para CSS.
     * 
     * Mapeamentos:
     * - Primeiro número: coluna no código gerado;
     * - Segundo número: índice do fonte correspondente listado em "sources" no JSON de mapa;
     * - Terceiro número: quantas linhas pular para determinar o início do símbolo no código original;
     * - Quarto número: coluna no código original.
     * 
     * @param declaracoes As declarações já traduzidas.
     * @returns {MapaOrigensInterface} O mapa de origens pronto.
     */
    gerarMapaFontes(declaracoes: Declaracao[], conteudoArquivoOriginal: string): MapaOrigensInterface {

        const retorno: MapaOrigensInterface = {
            version: 3,
            file: "teste.css",
            sourceRoot: "",
            sources: [
                "teste.foles"
            ],
            sourcesContent: [conteudoArquivoOriginal],
            mappings: ""
        };

        for (const declaracao of declaracoes) {
            for (const seletor of declaracao.seletores) {
                const pragmasFoles = seletor.pragmas;
                const pragmasCss = seletor.pragmasTraducao;

                retorno.mappings += vlq.encode([
                    pragmasCss.colunaInicial - 1, 
                    0, 
                    0, 
                    pragmasFoles.colunaInicial - 1
                ]) + ',';

                // Pragma de vírgula.
                retorno.mappings += vlq.encode([
                    pragmasCss.colunaFinal, 
                    0, 
                    0, 
                    pragmasFoles.colunaFinal
                ]) + ',';
            }

            retorno.mappings = retorno.mappings.slice(0, -1) + ';';

            for (const modificador of declaracao.modificadores) {
                const pragmasFoles = modificador.pragmas;
                const pragmasCss = modificador.pragmasTraducao;

                // Pragma do modificador em si
                retorno.mappings += vlq.encode([
                    pragmasCss.colunaInicial - 1, 
                    0, 
                    1, 
                    (pragmasFoles.colunaInicial - 1) - (pragmasCss.colunaInicial - 1)
                ]) + ',';

                retorno.mappings += vlq.encode([
                    pragmasCss.colunaFinal - 4, 
                    0, 
                    0, 
                    pragmasFoles.colunaFinal - 4
                ]) + ',';

                // Pragma do dois-pontos.
                retorno.mappings += vlq.encode([
                    2, 
                    0, 
                    0, 
                    2
                ]) + ',';

                const larguraValor = modificador.valor.toString().length + modificador.quantificador.length;

                // Pragma do valor.
                retorno.mappings += vlq.encode([
                    larguraValor, 
                    0, 
                    0, 
                    larguraValor
                ]) + ';';
            }
        }

        return retorno;
    }
}