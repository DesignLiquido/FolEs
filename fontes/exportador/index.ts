import sistemaArquivos from "fs";
import caminho from "path";
import { Base64 } from "../utilidades/base64";

/**
 * Classe que exporta traduções em diferentes formatos de arquivos. Como possui dependência
 * direta com Node.js, deve ser transferida futuramente para um projeto próprio.
 */
export class Exportador {
    /**
     * A exportação em si. Exporta para o mesmo diretório onde está o arquivo de origem.
     * @param formato O formato do arquivo traduzido.
     * @param arquivoOrigem O nome do arquivo de origem.
     * @param conteudo O conteúdo da tradução.
     * @param mapa Um mapa de fontes, se disponível (como string JSON).
     * @param inline Se verdadeiro, incorpora o mapa como base64 inline; caso contrário, cria arquivo separado.
     */
    exportar(
        formato: string,
        arquivoOrigem: string,
        conteudo: string,
        mapa?: string,
        inline: boolean = false,
    ) {
        let nomeArquivoSaida: string;
        let nomeArquivoMapa: string;
        let conteudoCompleto = conteudo;

        switch (formato) {
            case "css":
                nomeArquivoSaida = arquivoOrigem.replace(/\.foles$/, ".css");
                
                if (mapa) {
                    if (inline) {
                        // Modo inline: incorpora o mapa como base64
                        const mapaBase64 = new Base64().encode(mapa);
                        conteudoCompleto += `\n/*# sourceMappingURL=data:application/json;base64,${mapaBase64} */\n`;
                    } else {
                        // Modo separado: cria arquivo .map
                        nomeArquivoMapa = nomeArquivoSaida + ".map";
                        sistemaArquivos.writeFileSync(nomeArquivoMapa, mapa);
                        conteudoCompleto += `\n/*# sourceMappingURL=${caminho.basename(nomeArquivoMapa)} */\n`;
                    }
                }
                
                sistemaArquivos.writeFileSync(nomeArquivoSaida, conteudoCompleto);
                break;
            case "foles":
                nomeArquivoSaida = arquivoOrigem.replace(/\.css$/, ".foles");
                
                if (mapa) {
                    if (inline) {
                        // Modo inline: incorpora o mapa como base64
                        const mapaBase64 = new Base64().encode(mapa);
                        conteudoCompleto += `\n/*# sourceMappingURL=data:application/json;base64,${mapaBase64} */\n`;
                    } else {
                        // Modo separado: cria arquivo .map
                        nomeArquivoMapa = nomeArquivoSaida + ".map";
                        sistemaArquivos.writeFileSync(nomeArquivoMapa, mapa);
                        conteudoCompleto += `\n/*# sourceMappingURL=${caminho.basename(nomeArquivoMapa)} */\n`;
                    }
                }
                
                sistemaArquivos.writeFileSync(nomeArquivoSaida, conteudoCompleto);
                break;
            default:
                throw new Error("Formato de arquivo não reconhecido.");
        }
    }
}
