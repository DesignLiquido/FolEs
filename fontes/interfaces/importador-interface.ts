import { ResultadoLexadorInterface } from "./resultado-lexador-interface";

export interface ImportadorInterface {
    extensaoPadrao?: string;
    importar(
        caminhoRelativoArquivo: string,
        importacaoInicial?: boolean,
    ): [string[], ResultadoLexadorInterface];
}
