import { Command } from 'commander';

import { Exportador } from './fontes/exportador';
import { FolEs } from './fontes/foles';

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
            '-c, --console',
            'Escreve a saída da tradução em console.',
            null
        )
        .option(
            '-m, --mapas',
            'Gera CSS com mapas de fontes.',
            true
        )
        .option(
            '-v, --versao',
            'Imprime o número da versão atual de FolEs',
            false
        )
        .action((arquivos) => {
            if (arquivos.length > 0) {
                nomeArquivo = arquivos[0];
            }
        });

    analisadorArgumentos.parse();
    const opcoes = analisadorArgumentos.opts();

    if (opcoes.versao) {
        const informacoesPacote = require('./package.json');
        const versao = informacoesPacote.version;
        console.log(versao);
        return;
    }

    if (!nomeArquivo) {
        console.error('Favor informar nome do arquivo a ser traduzido.');
        process.exit(70);
    }

    const foles = new FolEs(opcoes.aninhamento);
    let resultadoTraducao: string;

    if (nomeArquivo.endsWith("foles")) {
        resultadoTraducao = foles.converterParaCss(nomeArquivo);
    } else if (nomeArquivo.endsWith("css")) {
        resultadoTraducao = foles.converterParaFolEs(nomeArquivo);
    } else {
        console.error("Formato de arquivo não reconhecido.");
        process.exit(70);
    }

    if (opcoes.console) {
        console.log(resultadoTraducao);
        return;
    }

    if (opcoes.mapas) {
        const resultadoMapas = foles.converterParaCssComMapas(nomeArquivo);
        const exportador = new Exportador();
        if (nomeArquivo.endsWith('foles')) {
            exportador.exportar('css', nomeArquivo, resultadoMapas[0], resultadoMapas[1]);
        } else {
            exportador.exportar('foles', nomeArquivo, resultadoMapas[0], resultadoMapas[1]);
        }
    }
}

principal();