import { Declaracao } from "../declaracoes";
import { SeletorEstruturasHtml } from "../estruturas/seletor-estruturas-html";
import { Modificador } from "../modificadores";
import { PragmasModificador, SeletorModificador } from "../modificadores/superclasse";
import { PragmasSeletor, Seletor, SeletorEstrutura } from "../seletores";
import { Metodo } from "../valores/metodos/metodo";

import estruturasHtml from "./estruturas-html";

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

    private traduzirModificador(modificador) {
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
     * Gera o mapa de fontes (source map) de FolEs para CSS.
     * {
        "version": 3,
        "file": "greet.js",
        "sourceRoot": "",
        "sources": [
            "greet.ts"
        ],
        "names": [],
        "mappings": "AAAA,IAAM,KAAK,GAAG,UAAC,IAAY;IACzB,OAAO,WAAS,IAAM,CAAA;AACxB,CAAC,CAAA"
        }
     * @param declaracoes As declarações já traduzidas.
     */
    gerarMapaFontes(declaracoes: Declaracao[]): any {
        const retorno = {
            version: 3,
            file: "teste.css",
            sourceRoot: "",
            sources: [
                "teste.foles"
            ],
            names: [],
            mappings: ""
        };

        for (const declaracao of declaracoes) {

        }

        return retorno;
    }
}