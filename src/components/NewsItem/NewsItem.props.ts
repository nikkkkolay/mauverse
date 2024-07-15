export interface INews {
    active: boolean;
    published_at: string;
    body: string;
    title: string;
    announcement: string;
    pictures?: IPicture[];
    id: number;
}

interface IPicture {
    src: string;
    title: string;
}
