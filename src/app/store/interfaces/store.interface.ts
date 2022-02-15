export interface Productos {
    id:          number;
    title:       string;
    price:       number;
    description: string;
    category:    Category;
    image:       string;
    rating:      Rating;
    cantidad:   number;
    total:      number;
}

export enum Category {
    Electronics = "electronics",
    Jewelery = "jewelery",
    MenSClothing = "men's clothing",
}

export interface Rating {
    rate:  number;
    count: number;
}
