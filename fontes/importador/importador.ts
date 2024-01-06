import * as sistemaArquivos from 'fs';
import * as caminho from 'path';
import * as sistemaOperacional from 'os';

import { LexadorInterface, ResultadoLexadorInterface } from "../interfaces";

/**
 * Importador, baseado no [Importador de Delégua Node](https://github.com/DesignLiquido/delegua-node/blob/principal/fontes/importador/importador.ts),
 * só que o retorno é o resultado do Lexador. 
 */
export class Importador {
    diretorioBase: string = process.cwd();
    lexador: LexadorInterface;
    extensaoPadrao: string;

    constructor(lexador: LexadorInterface) {
        this.lexador = lexador;
        this.extensaoPadrao = '.foles';
    }

    importar(
        caminhoRelativoArquivo: string,
        importacaoInicial: boolean = false
    ): [string[], ResultadoLexadorInterface] {
        if (!caminhoRelativoArquivo.endsWith(this.extensaoPadrao)) {
            caminhoRelativoArquivo += this.extensaoPadrao;
        }

        let caminhoAbsolutoArquivo = caminho.resolve(this.diretorioBase, caminhoRelativoArquivo);
        if (importacaoInicial) {
            this.diretorioBase = caminho.dirname(caminhoRelativoArquivo);
            caminhoAbsolutoArquivo = caminho.resolve(caminhoRelativoArquivo);
        }

        // TODO: Verificar se `hashArquivo` será necessário em algum momento.
        // const hashArquivo = this.cyrb53(caminhoAbsolutoArquivo.toLowerCase());

        if (!sistemaArquivos.existsSync(caminhoAbsolutoArquivo)) {
            throw new Error(
                `Não foi possível encontrar arquivo importado: ${caminhoAbsolutoArquivo}`
            );
        }

        const dadosDoArquivo: Buffer = sistemaArquivos.readFileSync(caminhoAbsolutoArquivo);
        const conteudoDoArquivo: string[] = dadosDoArquivo
            .toString()
            .replace(sistemaOperacional.EOL, '\n')
            .split('\n');

        for (let linha = 0; linha < conteudoDoArquivo.length; linha++) {
            conteudoDoArquivo[linha] += '\0';
        }

        // TODO: Verificar se isso será necessário.
        // this.arquivosAbertos[hashArquivo] = caminho.resolve(caminhoRelativoArquivo);

        return [
            conteudoDoArquivo,
            this.lexador.mapear(conteudoDoArquivo)
        ];
    }
}
