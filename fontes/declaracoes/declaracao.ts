import { Modificador } from "../modificadores";
import { Seletor } from "../seletores";

export abstract class Declaracao {
    seletores: Seletor[];
    modificadores: Modificador[];
    declaracoesAninhadas: Declaracao[];
    espacoReservado?: string;
}
