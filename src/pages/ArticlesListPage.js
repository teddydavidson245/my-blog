import React from 'react'
import articles from './article-content'
import ArticlesList from '../components/ArticlesList'

function ArticlesListPage() {
  return (
    <>
    <h1>Articles</h1>
<ArticlesList articles={articles} />
</>
  )
}

export default ArticlesListPage