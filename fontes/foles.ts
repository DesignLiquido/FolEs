import * as arquivos from 'fs';

import { AvaliadorSintatico } from "./avaliador-sintatico";
import { AvaliadorSintaticoReverso } from './avaliador-sintatico/avaliador-sintatico-reverso';
import { Lexador } from "./lexador";
import { LexadorReverso } from './lexador/lexador-reverso';
import { Tradutor } from "./tradutor";
import { TradutorReverso } from './tradutor/tradutor-reverso';

export class FolEs {
    lexador: Lexador;
    lexadorReverso: LexadorReverso;
    avaliadorSintatico: AvaliadorSintatico;
    avaliadorSintaticoReverso: AvaliadorSintaticoReverso;
    tradutor: Tradutor;
    tradutorReverso: TradutorReverso;

    constructor() {
        this.lexador = new Lexador();
        this.lexadorReverso = new LexadorReverso();
        this.avaliadorSintatico = new AvaliadorSintatico();
        this.avaliadorSintaticoReverso = new AvaliadorSintaticoReverso();
        this.tradutor = new Tradutor();
        this.tradutorReverso = new TradutorReverso();
    }

    //Texto em FolEs
    private converterParaCssInterno(conteudo: string[]) {
        const resultadoLexador = this.lexador.mapear(conteudo);
        const resultadoAvaliadorSintatico = this.avaliadorSintatico.analisar(resultadoLexador.simbolos);
        const traducao = this.tradutor.traduzir(resultadoAvaliadorSintatico);
        return traducao; 
        //Texto em css
    }

    private converterParaFolEsInterno(conteudoDoArquivo: string[]) {
        const resultadoLexadorReverso = this.lexadorReverso.mapear(conteudoDoArquivo);
        const resultadoAvaliadorSintaticoReverso = this.avaliadorSintaticoReverso.analisar(resultadoLexadorReverso.simbolos);
        const traducaoReversa = this.tradutorReverso.traduzir(resultadoAvaliadorSintaticoReverso);
        return traducaoReversa;
    }
    
    converterParaCss(nomeArquivo: string): string {
        const dadosDoArquivo: Buffer = arquivos.readFileSync(nomeArquivo);
        const conteudoDoArquivo: string[] = dadosDoArquivo
            .toString()
            .split('\n');

        return this.converterParaCssInterno(conteudoDoArquivo);
    }

    converterParaFolEs(nomeArquivo: string): string {
        const dadosDoArquivo: Buffer = arquivos.readFileSync(nomeArquivo);
        const conteudoDoArquivo: string[] = dadosDoArquivo
            .toString()
            .split('\n');

        return this.converterParaFolEsInterno(conteudoDoArquivo);
    }

    converterTextoParaCss(texto: string): string {
        return this.converterParaCssInterno([texto]);
    }

    converterTextoParaFolEs(texto: string): string {
        return this.converterParaFolEsInterno([texto]);
    }
}

 const a = new FolEs();
 console.log(a.converterParaCss('../exemplos/exemplo.foles'));