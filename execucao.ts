import { FolEs } from './fontes/foles';
import { Command } from 'commander';

const principal = () => {
    const analisadorArgumentos = new Command();
    let nomeArquivo: string;

    analisadorArgumentos
        .helpOption('-?, --ajuda', 'Exibe a ajuda para o comando.')
        .argument('[arquivos...]', 'Nomes dos arquivos (opcional)')
        .option(
            '-a, --aninhamento',
            'Gera CSS com aninhamento. Não recomendado usar se o CSS executar em navegadores antigos.',
            false
        )
        .option(
            '-m, --mapas',
            'Gera CSS com mapas de fontes.',
            true
        )
        .option(
            '-s, --saida <arquivo-saida>',
            'Escreve a saída da tradução em um arquivo especificado por parâmetro.',
            null
        )
        .action((arquivos) => {
            if (arquivos.length > 0) {
                nomeArquivo = arquivos[0];
            }
        });

    analisadorArgumentos.parse();
    const opcoes = analisadorArgumentos.opts();

    if (!nomeArquivo) {
        console.error('Favor informar nome do arquivo a ser traduzido.', 70);
        return;
    }

    const foles = new FolEs(opcoes.aninhamento);

    if (nomeArquivo.endsWith("foles")) {
        console.log(foles.converterParaCss(nomeArquivo));
        return;
    } 
    
    if (nomeArquivo.endsWith("css")) {
        const retorno = foles.converterParaFolEs(nomeArquivo);
        console.log(retorno);
        return;
    }

    process.exitCode = 70;
    throw new Error("Formato de arquivo não reconhecido.");
}

principal();