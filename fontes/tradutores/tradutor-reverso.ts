import { BlocoDeclaracao } from "../declaracoes";
import { SeletorEstruturasHtml } from "../estruturas/seletor-estruturas-html";
import { Modificador } from "../modificadores";
import {
    PragmasModificador,
    SeletorModificador,
} from "../modificadores/superclasse";
import { PragmasSeletor, Seletor, SeletorEstrutura } from "../seletores";

export class TradutorReverso {
    linha: number;
    atual: number;

    constructor() {
        this.linha = 1;
        this.atual = 1;
    }

    private calcularPragmasModificador(modificador: Modificador) {
        const novosPragmasModificador: PragmasModificador = {
            linha: this.linha,
            colunaInicial: this.atual,
            colunaFinal: this.atual,
        };

        this.atual += modificador.propriedadeCss.length;
        novosPragmasModificador.colunaFinal = this.atual;
        return novosPragmasModificador;
    }

    private calcularPragmasSeletor(traducaoSeletor: string) {
        const novosPragmasSeletor: PragmasSeletor = {
            linha: this.linha,
            colunaInicial: this.atual,
            colunaFinal: this.atual,
        };

        this.atual += traducaoSeletor.length;
        novosPragmasSeletor.colunaFinal = this.atual;
        return novosPragmasSeletor;
    }

    private traduzirSeletorEstrutura(seletor: SeletorEstrutura): Seletor {
        const estruturaHtml = seletor.estrutura.tagHtml;
        const novosPragmasSeletor = this.calcularPragmasSeletor(estruturaHtml);
        return new SeletorEstruturasHtml(
            estruturaHtml,
            novosPragmasSeletor,
        ) as Seletor;
    }

    traduzir(declaracoes: BlocoDeclaracao[]): BlocoDeclaracao[] {
        this.linha = 1;
        this.atual = 1;

        const declaracoesTraduzidas = [];

        for (const declaracao of declaracoes) {
            const seletoresTraduzidos: Seletor[] = [];
            const modificadoresTraduzidos: Modificador[] = [];

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
                this.linha = modificador.pragmas.linha;
                modificadoresTraduzidos.push(
                    new SeletorModificador(
                        Array.isArray(modificador.nomeFoles)
                            ? modificador.nomeFoles[0]
                            : modificador.nomeFoles,
                        modificador.valores,
                        this.calcularPragmasModificador(modificador),
                    ) as Modificador,
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

        return declaracoesTraduzidas;
    }
}
