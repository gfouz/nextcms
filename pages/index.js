import Head from "next/head";
import Link from "next/link";
import { FaGitAlt, FaReact } from "react-icons/fa";
import styled from "styled-components";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

export default function Home({ posts }) {
  return (
    <>
      <Head>
        <title>NextJS Blog with markdown files</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preload" href="/fonts/script.ttf" as="font" crossOrigin="" />
        <link rel="preload" href="/fonts/script.ttf" as="font" crossOrigin="" />
      </Head>

      <StyledHome>
        <Header dark font="Times New Roman, Georgia, serif" />
        <div className="front-topic">
          <div className="front-topic__container">
            <h1 className="front-topic__title">Portfolio 2021</h1>
            <a href="https://github.com/gfouz">
              {/*  <img src="/icons/git-alt-wt.svg"  width="30px"/> */}
              <FaGitAlt
                style={{
                  fontSize: "30px",
                  color: "#ddda68",
                  marginTop: "0.5em",
                }}
              />
            </a>
          </div>
        </div>

        <Footer
          color="#ffffff"
          bg="#212121"
          font="Times New Roman, Georgia, serif"
        >
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
  min-height: 100vh;
  border: 1px solid black;
  display: grid;
  grid-template-rows: 70px auto 70px;
  grid-template-columns: 1fr;
  .front-topic {
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    color: #ffffff;
    background: url("/images/pen.jpg") no-repeat center;
    background-size: cover;
  }
  .front-topic__container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: 150px;
    width: fit-content;
    margin: 0 1.5em;
  }
  .front-topic__title {
    color: #ddda68;
    font-family: literata;
    font-size: 2rem;
  }
`;
