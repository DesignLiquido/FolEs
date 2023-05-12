import { Abreviacao } from "./lmht/abreviacao";
import { Aparte } from "./lmht/aparte";
import { Area } from "./lmht/area";
import { AreaTexto } from "./lmht/area-texto";
import { Estrutura } from "./estrutura";
import { Lmht } from "./lmht/lmht";

export const DicionarioEstruturasLmht: { [nomeFolEs: string]: typeof Estrutura } = {
    "abreviacao": Abreviacao,
    "aparte": Aparte,
    "area-texto": AreaTexto,
    "área-texto": AreaTexto,
    "area": Area,
    "área": Area,
    "lmht": Lmht
}