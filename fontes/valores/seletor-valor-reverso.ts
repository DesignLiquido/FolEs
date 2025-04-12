import { DicionarioReversoModificadores } from "../modificadores/dicionario/dicionario-reverso-modificadores";
import { DicionarioSuplementarMetodos } from "../modificadores/dicionario/dicionario-suplementar-metodos";

export class SeletorValorReverso {
    constructor(nomeCss: string, valores: any[], metodo?: boolean) {
        let modificador;

        if (metodo) {
            modificador = DicionarioSuplementarMetodos[nomeCss];
        } else {
            modificador = DicionarioReversoModificadores[nomeCss];
        }

        if (modificador === undefined || modificador === null) {
            throw new Error(`O valor \'${nomeCss}\' não foi encontrado.`);
        }
        return new modificador(...valores);
    }
}
