import Link from "next/link";
import styled from "styled-components";

export default function Post({ post }) {
  return (
    <StyledPost>
      <div className="post">
        <div className="post__items">
          <div
            className="post__image"
            style={{
              backgroundImage: `url(${post.frontmatter.article_image})`,
              backgroundPosition: `  ${post.frontmatter.position}`,
            }}
          ></div>
          <div className="post__date">{post.frontmatter.date}</div>
          <h3 className="post__title">{post.frontmatter.title}</h3>
          <p className="post__info">{post.frontmatter.description}</p>
          <Link href={`/blog/${post.slug}`}>
            <a className="post__link">Read More</a>
          </Link>
        </div>
      </div>
    </StyledPost>
  );
}

export const StyledPost = styled.div`
  margin: 2em 0;

  .post {
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${({ theme }) => theme.grey800};
  }

  .post__items {
    width: 350px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin: 0 0.3em;
  }
  .post__image {
    width: 350px;
    height: 250px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
  .post__date {
    color: red;
  }
  .post__link {
    color: green;
    text-decoration: none;
  }

  .post h3,
  p,
  a {
    margin: 3px 0;
  }
`;
