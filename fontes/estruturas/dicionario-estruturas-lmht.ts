import { Abreviacao } from "./lmht/abreviacao";
import { Aparte } from "./lmht/aparte";
import { Area } from "./lmht/area";
import { AreaTexto } from "./lmht/area-texto";
import { Cabeca } from "./lmht/cabeca";
import { Corpo } from "./lmht/corpo";
import { Estrutura } from "./estrutura";
import { Lmht } from "./lmht/lmht";

export const DicionarioEstruturasLmht: { [nomeFolEs: string]: typeof Estrutura } = {
    "abreviacao": Abreviacao,
    "aparte": Aparte,
    "area-texto": AreaTexto,
    "área-texto": AreaTexto,
    "area": Area,
    "área": Area,
    "cabeca": Cabeca,
    "cabeça": Cabeca,
    "corpo": Corpo,
    "lmht": Lmht
}