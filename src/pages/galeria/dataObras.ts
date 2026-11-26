export interface tipoObra {
    id: number;
    titulo: string;
    imagen: string;
    descripcion: string;
    etiqueta: string;
    fecha: string;
}

export const ListaObras : tipoObra[] = [
    {
        id: 1,
        titulo: "Vaga general (BN)",
        imagen: "vaga_general_bn.jpg",
        descripcion: "Pintada vaga general 11N",
        etiqueta: "Artes visuales",
        fecha: "02/11/2026"
    },{
        id: 2,
        titulo: "Vaga general (Rojo)",
        imagen: "vaga_general_rojo.jpg",
        descripcion: "Pintada vaga general 11N en rojo",
        etiqueta: "Artes visuales",
        fecha: "02/11/2026"
    },
    {
        id: 3,
        titulo: "La ley nos burla",
        imagen: "cartel_la_ley.png",
        descripcion: "Cartel en serigrafía",
        etiqueta: "Artes visuales",
        fecha: "02/11/2026"
    },
    ]