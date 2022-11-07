export interface IItem{
    readonly id: number;
    readonly imgUrl: string;
    readonly title: string,
    readonly description: string;
}

export interface ISellsItems extends IItem{
    readonly price: string;
}

export interface IImages {
    readonly [key: string]: string
}

export interface ITag {
    readonly id: number;
    readonly name: string;
}