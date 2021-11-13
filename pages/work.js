import styled from "styled-components";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

const Work = () => {
  return (
    <>
      <StyledWork>
        <Header dark font="literata" />

        <section className="main-article--container ">
          <div className="main-article column-center">
            <h3>
              WEB <span>DEVELOPMENT</span> IS GREAT
            </h3>
            <h6>SEE MY CODE ON GITHUB!</h6>
            <a href="https://github.com/gfouz">
              <img src="/icons/git-alt-yw.svg" />
            </a>
            <a href="https://github.com/gfouz">
              {" "}
              <h5>Gfouz</h5>{" "}
            </a>
          </div>
        </section>

        <section className="github-projects column-center">
          <div className="column-center">
            <h2>Take a look at my code!</h2>
            <div className="row-start">
              <a href="https://github.com/gfouz">
                -Portfolio 2021 with Nuxt JS
              </a>
              <a href="https://github.com/gfouz">-Markdown to JSX React JS</a>
              <a href="https://github.com/gfouz">-Simple Blog with Next JS</a>
            </div>
          </div>
          <a href="https://github.com/gfouz">
            <img src="/icons/github-red.svg" />
          </a>
        </section>
        <div className="row-center title">
          <h4>INTERESTING SUBJECTS FOR DEVELOPERS</h4>
        </div>

        <article className="outstandingArticles--container">
          <div className="outstandingArticles--item column-start">
            <div className="outstanding-articles__image1 "></div>
            <div className="row-start">
              <h3>Goals and hopes!</h3>
              <p>
                When we are faced with difficult times as we are now with the
                effects of a worldwide pandemic, it is easy to get discouraged
                and lose hope. Hope is a vital component of human existence, and
                it is needed to find happiness and peace during times that might
                otherwise lead us to be discouraged. Setting a goal can keep
                your thoughts focused, direct your energy, and inspire the hope
                that is needed to move through and beyond a moment of despair.
              </p>
            </div>
          </div>
          <div className="outstandingArticles--item column-start">
            <div className="outstanding-articles__image2"></div>
            <div className="row-start">
              <h3>Imagination & inspiration</h3>
              <p>
                The ability to imagine things pervades our entire existence. It
                influences everything we do, think about and create. It leads to
                elaborate theories, dreams and inventions in any profession and
                ultimately, imagination influences everything we do regardless
                of our profession. But how to enhance your imagination you
                firstly need to know your goal and have a vision of what you
                want to achieve...
              </p>
            </div>
          </div>
        </article>

        <section className="contact">
          <div className="contact__list">
            <a href="https://github.com" className="box--light">
              <img src="/icons/telegram.svg" className="small--icon" />
              <p>telegram</p>
            </a>
            <a href="https://github.com" className="box--light">
              <img src="/icons/whatsapp.svg" className="small--icon" />
              <p>whatsapp</p>
            </a>
            <a href="https://github.com" className="box--light">
              <img src="/icons/envelope.svg" className="small--icon" />
              <p>email</p>
            </a>
          </div>
          <h6>technologies: html css scss javascript react nextjs</h6>
          <img src="/images/atom.png" />
          <p>Write once run everywhere!</p>
        </section>
        
        <Footer
          color="#ffff00"
          bg="#263238"
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
      </StyledWork>
    </>
  );
};

export default Work;

const StyledWork = styled.div`
  
    display: grid;
    grid-template-rows: 70px 350px 200px  100px auto 320px 70px;
    grid-template-columns: 1fr;

    .main-article--container{
       display: flex;
       justify-content: center;
       align-items: center;
       width: 100%;
       height: 350px;
       
    }

    .main-article {
      color: #ffffff;
      width: 100%;
      height: 350px;
      background-image: url('/images/yellow.jpg');
      background-repeat: no-repeat;
      background-position: right;
      background-size: cover;

      img {
         width: 30px;
         margin: 1em 0;
         margin-bottom: 0;
      }
      span {
        color: yellow;

      }
      a {
         text-decoration: none;
         font-family: literata;
         font-size: 20px;
         color: yellow;
         margin: 0;
      }
      h3,h6 {
         margin: 0.2rem 0;
         letter-spacing: 2px;
         background-color: #000000;
         border-radius: 8px;
         font-family: literata;
         @media (min-width: 500px){
            letter-spacing: 8px;
         }
      }
      h5 {
         margin: 0;
         letter-spacing: 0.2rem;
         font-family: script;
         font-size: 14px;
      }
    }

    .github-projects {
        font-family:  "Times", serif;
        padding-top: 2rem;
       h2 {
         padding: 0;
         margin: 0 0 0.5rem 0;
         color: ${({ theme }) => theme.blue500};
       }
       a {
         text-decoration: none;
         margin: 0;
         margin-bottom: 0.3rem;
         padding: 0;
         color: ${({ theme }) => theme.grey900};
         font-family: literata;
         img {
            width: 20px;
            margin-top: 1rem;
         }
       }
    }
    }

    .outstandingArticles--container {
       display: flex;
       flex-wrap: wrap;
       justify-content: space-evenly;
    }
    .outstandingArticles--item {
       max-width: 400px;
       height: auto;
       margin: 2em 0;
       div {
          width:100%;
          h3 {
             color: ${({ theme }) => theme.grey700};
             margin: 1rem 0 0 0;
         
          }
          p {
             color: ${({ theme }) => theme.grey700};
             margin: 0;
          }
       }
      }
      .outstanding-articles__image1 {
         width: 100%;
         height: 200px;
         background: url('/images/cooper.jpg') no-repeat center ;
         background-size: cover;
      }
      .outstanding-articles__image2 {
         width: 100%;
         height: 200px;
         background: url('/images/children.jpg') no-repeat center;
         background-size: cover;
      }

      .contact {
          display: flex;
          flex-direction: column;
          justify-content:center;
          align-items: center;
          h6 {
            color: ${({ theme }) => theme.blue500};
            text-transform: uppercase;
          }
      }
      .contact__list {
         display: flex;
         justify-content: space-evenly;
      }

     .small--icon {
       width: 20px;
       margin: 0.5rem;
     }
     .box--light {
       display: flex;
       align-items: center;
       width: 110px;
       height: 40px;
       margin: 1rem;
       border-radius: 8px;
       color: #000000;
       text-decoration: none;
       background-color: ${({ theme }) => theme.grey300};
     }
 `;
