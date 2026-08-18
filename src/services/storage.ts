import type { Article } from '../types';
import initialData from '../data/initialArticles.json';

const storage_key = 'article_review_data';

export const initializeStorage = (): void =>{
    if(!localStorage.getItem(storage_key)){
        localStorage.setItem(storage_key, JSON.stringify(initialData));
    }
}

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const fetchArticles = async (): Promise<Article[]> => {
    await delay(800);
    initializeStorage();

    const data = localStorage.getItem(storage_key);
    if(!data)
        throw new Error("Failed to load articles");

    try{
        const parsedData = JSON.parse(data) as Article[];
        return parsedData;
    } catch(error){
        throw new Error("Data is malformed");
    }
}

export const updateArticle = async (updatedArticle: Article): Promise<Article> => {
    await delay(500);

    const articles = await fetchArticles();
    const index = articles.findIndex(a => a.id === updatedArticle.id);

    if(index === -1){
        throw new Error("Article not found");
    }

    articles[index] = updatedArticle;
    localStorage.setItem(storage_key, JSON.stringify(articles));

    return updatedArticle;
}