import type {Article} from '../types'

interface ArticleCardProps{
    article: Article;
    onSelect: (id: string) => void;
}

export function ArticleCard({article, onSelect} : ArticleCardProps){
    const formattedDate = article.publishedAt ? new Date(article.publishedAt).toLocaleDateString() : 'Not published yet';

    return(
        <article className="article-card">
            <h3>{article.title}</h3>
            <div className='article-meta'>
                <span className='author'>By {article.author}</span>
                <span className='section'>Section: {article.section} </span>
                <span className={'status-badge ${article.status'}>{article.status}</span>
            </div>
            <p className="summary">{article.summary}</p>
            <p className='date'><small>Date: {formattedDate}</small></p>

            <button onClick={() => onSelect(article.id)} className="btn-read-more">
                Read & Edit
            </button>
        </article>
    );
}