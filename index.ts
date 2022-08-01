import * as fs from 'fs';
import { Lexador } from './fontes/lexador';

const dadosDoArquivo: Buffer = fs.readFileSync('./exemplos/exemplo.foles');
const conteudoDoArquivo: string[] = dadosDoArquivo
    .toString()
    .split('\n');
const lexador = new Lexador();
const resultado = lexador.mapear(conteudoDoArquivo);
console.log(resultado);