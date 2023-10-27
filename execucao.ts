import { FolEs } from './fontes/foles';
import { Command } from 'commander';

const principal = () => {
    const analisadorArgumentos = new Command();
    let nomeArquivo: string;

    analisadorArgumentos
        .argument('[arquivos...]', 'Nomes dos arquivos (opcional)')
        .option(
            '-a, --aninhamento',
            'Gera CSS com aninhamento. Não recomendado usar se o CSS executar em navegadores antigos.',
            false
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

    const foles = new FolEs();

    if (nomeArquivo.endsWith("foles")) {
        console.log(foles.converterParaCss(nomeArquivo));
        return;
    } 
    
    if (nomeArquivo.endsWith("css")) {
        const retorno = foles.converterParaFolEs(nomeArquivo);
        console.log(retorno);
        return;
    }

    throw new Error("Formato de arquivo não reconhecido.");
}

principal();