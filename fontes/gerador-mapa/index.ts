import * as vlq from "vlq";

import { BlocoDeclaracao } from "../declaracoes";
import { MapaOrigensInterface } from "../interfaces/mapa-origens-interface";
export class GeradorMapaCss {
    constructor() {}
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
     * @param conteudoArquivoOriginal O conteúdo do arquivo original.
     * @param nomeArquivoOriginal O nome do arquivo original (opcional, padrão "teste.foles").
     * @param nomeArquivoDestino O nome do arquivo de destino (opcional, padrão "teste.css").
     * @returns {MapaOrigensInterface} O mapa de origens pronto.
     */
    gerarMapaFontes(
        declaracoes: BlocoDeclaracao[],
        conteudoArquivoOriginal: string,
        nomeArquivoOriginal: string = "teste.foles",
        nomeArquivoDestino: string = "teste.css",
    ): MapaOrigensInterface {
        const retorno: MapaOrigensInterface = {
            version: 3,
            file: nomeArquivoDestino,
            sourceRoot: "",
            sources: [nomeArquivoOriginal],
            sourcesContent: [conteudoArquivoOriginal],
            mappings: "",
        };

        for (const declaracao of declaracoes) {
            for (const seletor of declaracao.seletores) {
                const pragmasFoles = seletor.pragmas;
                const pragmasCss = seletor.pragmasTraducao;

                retorno.mappings +=
                    vlq.encode([
                        pragmasCss.colunaInicial - 1,
                        0,
                        0,
                        pragmasFoles.colunaInicial - 1,
                    ]) + ",";

                // Pragma de vírgula.
                retorno.mappings +=
                    vlq.encode([
                        pragmasCss.colunaFinal,
                        0,
                        0,
                        pragmasFoles.colunaFinal,
                    ]) + ",";
            }

            retorno.mappings = retorno.mappings.slice(0, -1) + ";";

            for (const modificador of declaracao.modificadores) {
                const pragmasFoles = modificador.pragmas;
                const pragmasCss = modificador.pragmasTraducao;

                // Pragma do modificador em si
                retorno.mappings +=
                    vlq.encode([
                        pragmasCss.colunaInicial - 1,
                        0,
                        1,
                        pragmasFoles.colunaInicial -
                            1 -
                            (pragmasCss.colunaInicial - 1),
                    ]) + ",";

                retorno.mappings +=
                    vlq.encode([
                        pragmasCss.colunaFinal - 4,
                        0,
                        0,
                        pragmasFoles.colunaFinal - 4,
                    ]) + ",";

                // Pragma do dois-pontos.
                retorno.mappings += vlq.encode([2, 0, 0, 2]) + ",";

                let larguraValores = 0;
                for (const valor of modificador.valores) {
                    const valorResolvido = valor.paraTexto();
                    larguraValores += valorResolvido.length;
                }

                // Pragma do valor.
                retorno.mappings +=
                    vlq.encode([larguraValores, 0, 0, larguraValores]) + ";";
            }
        }

        return retorno;
    }
}
