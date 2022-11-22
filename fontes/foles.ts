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
    
    converterParaCss(nomeArquivo: string) {
        const dadosDoArquivo: Buffer = arquivos.readFileSync(nomeArquivo);
        const conteudoDoArquivo: string[] = dadosDoArquivo
            .toString()
            .split('\n');

        const resultadoLexador = this.lexador.mapear(conteudoDoArquivo);
        const resultadoAvaliadorSintatico = this.avaliadorSintatico.analisar(resultadoLexador.simbolos);
        const traducao = this.tradutor.traduzir(resultadoAvaliadorSintatico);
        console.log(traducao);
    }

    converterParaFolEs(nomeArquivo: string) {
        const dadosDoArquivo: Buffer = arquivos.readFileSync(nomeArquivo);
        const conteudoDoArquivo: string[] = dadosDoArquivo
            .toString()
            .split('\n');

        const resultadoLexadorReverso = this.lexadorReverso.mapear(conteudoDoArquivo);
        const resultadoAvaliadorSintaticoReverso = this.avaliadorSintaticoReverso.analisar(resultadoLexadorReverso.simbolos);
        const traducaoReversa = this.tradutorReverso.traduzir(resultadoAvaliadorSintaticoReverso);
        return traducaoReversa;
    }
}
