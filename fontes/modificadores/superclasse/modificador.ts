export class Modificador {
    nomeFoles: string | string[];
    propriedadeCss: string;
    valor: string;
    quantificador: string;

    constructor(nomeFoles: string | string[], propriedadeCss: string) {
        this.nomeFoles = nomeFoles;
        this.propriedadeCss = propriedadeCss;
    }
}