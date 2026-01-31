export type Post = {
    id: string;
    feedId: string;
    title: string;
    link: string;
    description: string;
    date: string;
    img?: string | null;
    read: boolean;
};
