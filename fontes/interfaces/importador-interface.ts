import { ResultadoLexadorInterface } from "./resultado-lexador-interface";

export interface ImportadorInterface {
    importar(caminhoRelativoArquivo: string, importacaoInicial: boolean): ResultadoLexadorInterface
}
