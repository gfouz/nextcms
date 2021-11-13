import fs from "fs";
import path from "path";
import styled from 'styled-components';
import matter from "gray-matter";
import Markdown from "markdown-to-jsx";
import Link from "next/link";

export default function PostPage({slug, content}) {
       return (
              <>
               <StyledSlug>
                  <p style= {{color:"red"}}>{content}</p>
                  <Markdown  className = "content-md">{content}</Markdown>
               </StyledSlug>   
              </>
              
       )
}

const root = process.cwd();

export async function getStaticPaths() {
       const files = fs.readdirSync(path.join(root, 'posts'));
       const paths = files.map(filename => ({ 
              params: {
                     slug: filename.replace('.md','')
              }
       }));
        console.log(paths);
       return {
              paths,
              fallback: false,
       };
} 


export async function getStaticProps({ params: { slug } }) {
       const markdownMeta = fs.readFileSync(path.join(root, 'posts', slug + '.md'), 'utf-8');
       const { data: frontmatter, content } = matter(markdownMeta);

       return {
              props: {
                     frontmatter,
                     slug,
                     content,
              },
       };
}



 export const StyledSlug = styled.div`
    .content-md {
       color: darkgrey;
       h2 {
              color:green;
       }
    }

 `;











