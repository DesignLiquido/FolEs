import { Modificador } from "../modificadores";
import { Seletor } from "../seletores";
import { Metodo } from "../valores/metodos/foles/metodo";

export abstract class Declaracao {
    seletores: Seletor[];
    modificadores: Modificador[];
    declaracoesAninhadas: Declaracao[];
    espacoReservado?: string;
    nome: string;
    valor: Metodo | string;
}
