import React, { useState } from "react";
import Head from "next/head";
import FeaturedPost from "../components/FeaturedPost";
import CardPost from "../components/CardPost";
import Container from "../components/Container";
import Layout from "../components/Layout";
import mockPosts from "../utils/posts.json";

// export async function getServerSideProps() {
//   // show data post when featured = true and show all relation data
//   const reqFeatured = await fetch(
//     process.env.APIURL + `/api/posts?filters[featured]=true&populate=*`
//   );
//   let featured = await reqFeatured.json();

//   if (featured.data.length < 1) {
//     featured = {};
//   }

//   return { props: { featured: featured.data[0] } };
// }

export default function Home() {
  const [posts] = useState(mockPosts);
  return (
    <>
      <Layout>
        <Head>
          <title>Home &mdash; Epicblog</title>
        </Head>
        <Container>
          <FeaturedPost />
          <div className="-mx-4 mt-6 flex flex-wrap">
            {posts.map((post) => (
              <div key={post.id} className="mt-4 w-full px-4 md:w-4/12">
                <CardPost {...post} />
              </div>
            ))}
          </div>
        </Container>
      </Layout>
    </>
  );
}
