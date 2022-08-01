export class Modificador {
    nomeFoles: string;
    propriedadeCss: string;
    valor: string;
    quantificador: string;

    constructor(nomeFoles: string, propriedadeCss: string) {
        this.nomeFoles = nomeFoles;
        this.propriedadeCss = propriedadeCss;
    }
}