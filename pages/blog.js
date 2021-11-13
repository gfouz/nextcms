import Head from "next/head";
import fs from "fs";
import path from "path";
import { FaReact } from "react-icons/fa";
import matter from "gray-matter";
import Post from "../components/Post";
import Link from "next/link";
import styled from "styled-components";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

export default function Blog({ posts }) {
  return (
    <>
      <StyledHome>
        <Head>
          <title>NextJS Blog with markdown files</title>
          <link rel="icon" href="/favicon.ico" />
          <link
            rel="preload"
            href="/fonts/goudy.ttf"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/script.ttf"
            as="font"
            crossOrigin=""
          />
        </Head>

        <Header
          color="#000000"
          bg="#cdc058"
          font="Times New Roman, Georgia, serif"
          position="fixed"
        />

        <div className="post-container">
          <h3 className="subtitle">
            Some interesting issues for those who like reading
          </h3>
          <div className="post__item">
            {posts.map((post) => (
              <Post post={post} key={post.frontmatter.title} />
            ))}
          </div>
        </div>
        <FaReact
          style={{ fontSize: "60px", color: "#2196f3", margin: "2em 0" }}
        />
        <Footer color="#000000" font="Times New Roman, Georgia, serif">
          <div className="bottom-bar">
            <h4 className="bottom-bar__item">
              Gfouz &copy; {new Date().getFullYear()}
            </h4>
            <h4 className="bottom-bar__item">
              technologies: html css scss javascript react
            </h4>
          </div>
        </Footer>
      </StyledHome>
    </>
  );
}

export const StyledHome = styled.div`
  margin-top: 70px;
  text-align: center;

  .subtitle {
    margin: 2em 0 0 0;
    color: #006644;
  }
  .post-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .post__item {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: flex-start;
    @media (min-width: 800px) {
      max-width: 1000px;
    }
  }
`;

export async function getStaticProps() {
  // get markdown files from the post dir
  const files = fs.readdirSync(path.join("posts"));
  const posts = files.map((filename) => {
    const slug = filename.replace(".md", "");
    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );
    const { data: frontmatter } = matter(markdownWithMeta);

    return {
      slug,
      frontmatter,
    };
  });
  return {
    props: {
      posts,
    },
  };
}
