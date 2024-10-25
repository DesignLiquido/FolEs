import * as vlq from 'vlq';

import { Declaracao } from "../declaracoes";
import { MapaOrigensInterface } from '../interfaces/mapa-origens-interface';
export class GeradorMapaCss {

    constructor(){}
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