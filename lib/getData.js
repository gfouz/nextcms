import matter from 'gray-matter';

      const root = process.cwd();
    
      async function getStaticProps(folder_name) {
       const files = fs.readdirSync(path.join(folder_name));
       const markdownMeta = fs.readFileSync(path.join(root, folder_name), 'utf-8');
       const { data: frontmatter, content } = matter(markdownMeta);

       return {
              props: {
                     frontmatter,
                     content,
              },
       };
}
      




export default getStaticProps;


