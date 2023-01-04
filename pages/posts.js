import React from "react";
import Container from "../components/Container";
import CardPost from "../components/CardPost";
import Layout from "../components/Layout";
import mockPosts from "../utils/posts.json";
import { useState } from "react";
import SectionHeader from "../components/SectionHeader";
import Head from "next/head";

function Posts() {
  const [posts, setPosts] = useState(mockPosts);
  return (
    <Layout>
      <Head>
        <title>Posts &mdash; Epictatus</title>
      </Head>
      <Container>
        <SectionHeader>UI Design</SectionHeader>
        {!posts.length ? (
          <div className="py-16 text-center">
            <h2 className="text-5xl">No result 😢</h2>
            <p className="mx-auto mt-6 w-full text-xl text-tosca/60 md:w-8/12">
              We couldn’t find any posts with the keyword `yahahahayuk`. Please
              try another keyword.
            </p>
          </div>
        ) : (
          <div className="-mx-4 mt-6 flex flex-wrap">
            {posts.map((post) => (
              <div key={post.id} className="mt-4 w-full px-4 md:w-4/12">
                <CardPost {...post} />
              </div>
            ))}
          </div>
        )}
      </Container>
    </Layout>
  );
}

export default Posts;
