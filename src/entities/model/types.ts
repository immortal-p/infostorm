export interface Feed {
    id: string;
    url: string;
    title: string;
    description: string;
}

export interface Post {
    id: string;
    feedId: string;
    title: string;
    link: string;
    date: string;
    description: string;
    img?: string | null;
}

export type ParsedFeed = Omit<Feed, 'id'>;
export type ParsedPost = Omit<Post, 'id' | 'feedId'>;
