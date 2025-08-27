import { Valor } from "../../valores";
import { PragmasModificador } from "./pragmas-modificador";

export class Modificador {
    nomeFoles: string | string[];
    propriedadeCss: string;
    valores: Valor[];
    pragmas?: PragmasModificador;
    pragmasTraducao?: PragmasModificador;
    valoresAceitos?: { [valorFoles: string]: string };
    variavel: boolean = false;

    constructor(
        nomeFoles: string | string[],
        propriedadeCss: string,
        pragmas?: PragmasModificador,
    ) {
        this.nomeFoles = nomeFoles;
        this.propriedadeCss = propriedadeCss;
        this.pragmas = pragmas;
    }
}
