import { AvaliadorSintatico } from "./avaliador-sintatico";
import { AvaliadorSintaticoReverso } from './avaliador-sintatico/avaliador-sintatico-reverso';
import { Lexador } from "./lexador";
import { LexadorReverso } from './lexador/lexador-reverso';
import { Serializador } from "./serializadores";
import { SerializadorReverso } from './serializadores/serializador-reverso';
import { Importador } from './importador';
import { ResultadoLexadorInterface, SimboloInterface } from './interfaces';
import { Tradutor } from "./tradutores/tradutor";
import { TradutorReverso } from "./tradutores/tradutor-reverso";
import { Base64 } from "./utilidades/base64";

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
    tradutor: Tradutor;
    tradutorReverso: TradutorReverso;

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
        this.tradutor = new Tradutor();
        this.tradutorReverso = new TradutorReverso();
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
        const resultadoLexador: [string[], ResultadoLexadorInterface] = 
            this.importador.importar(nomeArquivo, true);
        
        return this.converterParaCssInterno(resultadoLexador[1].simbolos);
    }

    converterParaCssComMapas(nomeArquivo: string): [string, string] {
        const resultadoLexador: [string[], ResultadoLexadorInterface] = 
            this.importador.importar(nomeArquivo, true);
        const resultadoAvaliadorSintatico = this.avaliadorSintatico.analisar(resultadoLexador[1].simbolos);
        const traducao = this.serializador.serializar(resultadoAvaliadorSintatico);
        const resultadoTraducao = this.tradutor.traduzir(resultadoAvaliadorSintatico);
        const mapa = this.tradutor.gerarMapaFontes(resultadoTraducao, resultadoLexador[0].join('\n'));

        return [
            traducao, 
            new Base64().encode(JSON.stringify(mapa))
        ];
    }

    converterParaFolEs(nomeArquivo: string): string {
        const resultadoLexador: [string[], ResultadoLexadorInterface] = 
            this.importadorReverso.importar(nomeArquivo);

        return this.converterParaFolEsInterno(resultadoLexador[1].simbolos);
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

//  const a = new FolEs(false);
//  console.log(a.converterParaCss('../exemplos/exemplo4.foles'));
//  console.log(a.converterParaFolEs('../exemplos/reverso/exemplo-liquido.css'));