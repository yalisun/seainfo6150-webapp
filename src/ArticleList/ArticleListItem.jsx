import React from "react";
import styles from "./ArticleListItem.module.css";
import SlugButton from "./SlugButton";
import ArticleImage from "./ArticleImage";


const ArticleListItem = props => {
  return (
    <html>
      <div>
        <body>
          <ArticleImage url={props.article.image._url} title={props.article.title} />
          <section>
            <h1 className={styles.title}>{props.article.title}</h1>
            <p>{props.article.shortText}</p>
            <time dateTime={props.article.pubYear}>{props.article.pubDate}</time>
            <div id="button">
              {<SlugButton slug={props.article.slug} buttonText={props.article.author} />}
            </div>
          </section>
        </body>
      </div>
    </html>
  );
};

export default ArticleListItem;
