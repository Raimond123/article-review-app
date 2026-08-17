export type ArticleStatus = 'draft' | 'published' | 'archived';

export interface Article{
    id: string;
    title: string;
    author: string;
    section: string;
    status: ArticleStatus;
    publishedAt: string | null;
    summary: string;
}

export interface FilterCriteria{
    search: string;
    section: string;
    status: string;
    sortBy: 'date' | "title";
}