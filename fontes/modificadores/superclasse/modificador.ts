import { Metodo } from "../../valores/metodos/metodo";
import { PragmasModificador } from "./pragmas-modificador";

export class Modificador {
    nomeFoles: string | string[];
    propriedadeCss: string;
    valor: Metodo | string;
    quantificador: string;
    pragmas?: PragmasModificador;
    pragmasTraducao?: PragmasModificador;

    constructor(nomeFoles: string | string[], propriedadeCss: string, pragmas?: PragmasModificador) {
        this.nomeFoles = nomeFoles;
        this.propriedadeCss = propriedadeCss;
        this.pragmas = pragmas;
    }
}
