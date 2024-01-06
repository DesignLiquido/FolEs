import sistemaArquivos from 'fs';

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
    exportar(formato: string, arquivoOrigem: string, conteudo: string, mapa?: string) {
        let conteudoCompleto = conteudo;
        if (mapa) {
            conteudoCompleto += `\n/*# sourceMappingURL=data:application/json;base64,`;
            conteudoCompleto += `${mapa} */\n`;
        }

        switch (formato) {
            case 'css':
                sistemaArquivos.writeFile(arquivoOrigem.replace('foles', 'css'), conteudoCompleto, (erro) => {
                    if (erro) throw erro;
                });
                break;
            case 'foles':
                sistemaArquivos.writeFile(arquivoOrigem.replace('css', 'foles'), conteudoCompleto, (erro) => {
                    if (erro) throw erro;
                });
                break;
            default:
                throw new Error('Formato de arquivo não reconhecido.');
        }
    }
}