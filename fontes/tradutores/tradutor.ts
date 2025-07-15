import * as vlq from "vlq";

import { BlocoDeclaracao, Declaracao } from "../declaracoes";
import { SeletorEstruturasHtml } from "../estruturas/seletor-estruturas-html";
import { Modificador } from "../modificadores";
import {
    PragmasModificador,
    SeletorModificador,
} from "../modificadores/superclasse";
import { PragmasSeletor, Seletor, SeletorEstrutura } from "../seletores";
import { Metodo } from "../valores/metodos/foles/metodo";

import estruturasHtml from "./estruturas-html";
import { Estrutura } from "../estruturas/estrutura";

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
            colunaFinal: this.atual,
        };

        this.atual += traducaoSeletor.length;
        novosPragmasSeletor.colunaFinal = this.atual - 1;
        return novosPragmasSeletor;
    }

    private calcularPragmasModificador(modificador: Modificador) {
        const novosPragmasModificador: PragmasModificador = {
            linha: this.linha,
            colunaInicial: this.atual,
            colunaFinal: this.atual,
        };

        this.atual += modificador.propriedadeCss.length;
        novosPragmasModificador.colunaFinal = this.atual - 1;
        return novosPragmasModificador;
    }

    private traduzirSeletorEstrutura(seletor: SeletorEstrutura): Seletor {
        const seletorLmht: string = String(seletor.estrutura.constructor.name).toLowerCase();
        const traducaoSeletor: string = estruturasHtml[seletorLmht];

        const novosPragmasSeletor =
            this.calcularPragmasSeletor(traducaoSeletor);
        const estruturaTraduzida = new SeletorEstruturasHtml(
            traducaoSeletor,
            seletor.pragmas,
        ) as Estrutura;
        const seletorTraduzido = new SeletorEstrutura(
            estruturaTraduzida,
            seletor.pseudoclasse
        );

        seletorTraduzido.pragmasTraducao = novosPragmasSeletor;
        return seletorTraduzido;
    }

    private traduzirModificador(modificador: Modificador): Modificador {
        this.linha = modificador.pragmas.linha;
        const novosPragmasModificador =
            this.calcularPragmasModificador(modificador);
        const modificadorTraduzido = new SeletorModificador(
            Array.isArray(modificador.nomeFoles)
                ? modificador.nomeFoles[0]
                : modificador.nomeFoles,
            modificador.valor,
            modificador.quantificador,
            modificador.pragmas,
        ) as Modificador;

        modificadorTraduzido.pragmasTraducao = novosPragmasModificador;
        return modificadorTraduzido;
    }

    traduzir(declaracoes: Declaracao[]): BlocoDeclaracao[] {
        this.linha = 1;
        this.atual = 1;

        const declaracoesTraduzidas = [];

        for (const declaracao of declaracoes) {
            const seletoresTraduzidos: Seletor[] = [];
            const modificadoresTraduzidos: Modificador[] = [];

            if (declaracao instanceof BlocoDeclaracao) {
                for (const seletor of declaracao.seletores) {
                    this.linha = seletor.pragmas.linha;

                    if (seletor instanceof SeletorEstrutura) {
                        seletoresTraduzidos.push(
                            this.traduzirSeletorEstrutura(seletor),
                        );
                        continue;
                    }
                }

                for (const modificador of declaracao.modificadores) {
                    modificadoresTraduzidos.push(
                        this.traduzirModificador(modificador),
                    );
                }

                declaracoesTraduzidas.push(
                    new BlocoDeclaracao(
                        seletoresTraduzidos,
                        modificadoresTraduzidos,
                        [],
                    ),
                );
            }

            // TODO: Adicionar caso if (declaracao instanceof DeclaracaoVariavel)
        }

        return declaracoesTraduzidas;
    }
}
