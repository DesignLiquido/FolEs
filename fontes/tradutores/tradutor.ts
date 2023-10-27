import { Declaracao } from "../declaracoes";
import { Seletor, SeletorEstrutura } from "../seletores";

import estruturasHtml from "./estruturas-html";

export class Tradutor {
    linha: number;
    atual: number;

    constructor() {
        this.linha = 1;
        this.atual = 1;
    }

    traduzir(declaracoes: Declaracao[]): Declaracao[] {
        this.linha = 1;
        this.atual = 1;

        for (const declaracao of declaracoes) {
            const seletoresTraduzidos: Seletor[] = [];

            for (const seletor of declaracao.seletores) {
                if (seletor instanceof SeletorEstrutura) {
                    const seletorLmht = seletor.paraTexto();
                    const traducaoSeletor = estruturasHtml[seletorLmht];
                    // prefixo = (textoSeletorAnterior + " " + traducaoSeletor).trimStart();
                } else {
                    // prefixo = (textoSeletorAnterior + " " + seletor.paraTexto()).trimStart();
                }
            }
        }

        return [];
    }
}