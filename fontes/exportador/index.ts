import sistemaArquivos from "fs";

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
     * @param mapa Um mapa de fontes, se disponível.
     */
    exportar(
        formato: string,
        arquivoOrigem: string,
        conteudo: string,
        mapa?: string,
    ) {
        let nomeArquivoSaida: string;
        let nomeArquivoMapa: string;
        let conteudoCompleto = conteudo;

        switch (formato) {
            case "css":
                nomeArquivoSaida = arquivoOrigem.replace("foles", "css");
                nomeArquivoMapa = nomeArquivoSaida + ".map";
                
                if (mapa) {
                    // Escrever o arquivo de mapa de fontes separado
                    sistemaArquivos.writeFile(
                        nomeArquivoMapa,
                        mapa,
                        (erro) => {
                            if (erro) throw erro;
                        },
                    );
                    
                    // Adicionar referência ao mapa de fontes no CSS
                    conteudoCompleto += `\n/*# sourceMappingURL=${nomeArquivoMapa.split('/').pop()} */\n`;
                }
                
                sistemaArquivos.writeFile(
                    nomeArquivoSaida,
                    conteudoCompleto,
                    (erro) => {
                        if (erro) throw erro;
                    },
                );
                break;
            case "foles":
                nomeArquivoSaida = arquivoOrigem.replace("css", "foles");
                nomeArquivoMapa = nomeArquivoSaida + ".map";
                
                if (mapa) {
                    // Escrever o arquivo de mapa de fontes separado
                    sistemaArquivos.writeFile(
                        nomeArquivoMapa,
                        mapa,
                        (erro) => {
                            if (erro) throw erro;
                        },
                    );
                    
                    // Adicionar referência ao mapa de fontes no FolEs
                    conteudoCompleto += `\n/*# sourceMappingURL=${nomeArquivoMapa.split('/').pop()} */\n`;
                }
                
                sistemaArquivos.writeFile(
                    nomeArquivoSaida,
                    conteudoCompleto,
                    (erro) => {
                        if (erro) throw erro;
                    },
                );
                break;
            default:
                throw new Error("Formato de arquivo não reconhecido.");
        }
    }
}
