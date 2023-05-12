import { Estrutura } from "./estrutura";
import { Lmht } from "./lmht/lmht";

export const DicionarioEstruturasHtml: { [nomeCss: string]: typeof Estrutura } = {
    "html": Lmht
}