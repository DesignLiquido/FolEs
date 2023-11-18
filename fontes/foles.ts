import { AvaliadorSintatico } from "./avaliador-sintatico";
import { AvaliadorSintaticoReverso } from './avaliador-sintatico/avaliador-sintatico-reverso';
import { Lexador } from "./lexador";
import { LexadorReverso } from './lexador/lexador-reverso';
import { Serializador } from "./serializadores";
import { SerializadorReverso } from './serializadores/serializador-reverso';
import { Importador } from './importador';
import { ResultadoLexadorInterface, SimboloInterface } from './interfaces';

/**
 * O núcleo da linguagem FolEs.
 */
export class FolEs {
    lexador: Lexador;
    lexadorReverso: LexadorReverso;
    avaliadorSintatico: AvaliadorSintatico;
    avaliadorSintaticoReverso: AvaliadorSintaticoReverso;
    importador: Importador;
    importadorReverso: Importador;
    serializador: Serializador;
    serializadorReverso: SerializadorReverso;

    constructor(traduzirComAninhamentos: boolean) {
        this.lexador = new Lexador();
        this.lexadorReverso = new LexadorReverso();
        this.importador = new Importador(this.lexador);
        this.importadorReverso = new Importador(this.lexadorReverso);
        this.importadorReverso.extensaoPadrao = ".css";
        this.avaliadorSintatico = new AvaliadorSintatico(this.importador);
        this.avaliadorSintaticoReverso = new AvaliadorSintaticoReverso(this.importadorReverso);
        this.serializador = new Serializador(traduzirComAninhamentos);
        this.serializadorReverso = new SerializadorReverso(traduzirComAninhamentos);
    }

    /**
     * Método comum de conversão de texto FolEs para CSS.
     * @param conteudo O conteúdo em FolEs.
     * @returns O resultado da tradução em CSS.
     */
    private converterParaCssInterno(simbolos: SimboloInterface[]): string {
        const resultadoAvaliadorSintatico = this.avaliadorSintatico.analisar(simbolos);
        const traducao = this.serializador.serializar(resultadoAvaliadorSintatico);
        return traducao;
    }

    private converterParaFolEsInterno(simbolos: SimboloInterface[]): string {
        const resultadoAvaliadorSintaticoReverso = this.avaliadorSintaticoReverso.analisar(simbolos);
        const traducaoReversa = this.serializadorReverso.serializar(resultadoAvaliadorSintaticoReverso);
        return traducaoReversa;
    }
    
    converterParaCss(nomeArquivo: string): string {
        const resultadoLexador: ResultadoLexadorInterface = 
            this.importador.importar(nomeArquivo, true);

        return this.converterParaCssInterno(resultadoLexador.simbolos);
    }

    converterParaFolEs(nomeArquivo: string): string {
        const resultadoLexador: ResultadoLexadorInterface = 
            this.importadorReverso.importar(nomeArquivo);

        return this.converterParaFolEsInterno(resultadoLexador.simbolos);
    }

    converterTextoParaCss(texto: string): string {
        const resultadoLexador = this.lexador.mapear(texto.split('\n'));
        return this.converterParaCssInterno(resultadoLexador.simbolos);
    }

    converterTextoParaFolEs(texto: string): string {
        const resultadoLexadorReverso = this.lexadorReverso.mapear(texto.split('\n'));
        return this.converterParaFolEsInterno(resultadoLexadorReverso.simbolos);
    }
}

//  const a = new FolEs();
//  console.log(a.converterParaCss('../exemplos/exemplo2.foles'));