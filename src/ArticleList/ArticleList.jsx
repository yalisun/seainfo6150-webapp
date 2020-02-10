import React from "react";
import PropTypes from 'prop-types'
import ArticleListItem from './ArticleListItem.jsx';
import styles from './ArticleList.module.css';

const ArticleList = props => {
  return (
    <section className = {styles.container}>
      <fieldset>
        {props.articles.map(article => (
          <h1 key={article.slug}><ArticleListItem article={article}/></h1>
        ))}
      </fieldset>
    </section>
  );
};

ArticleList.propTypes = {
  articles: PropTypes.array.isRequired
};
export default ArticleList;
