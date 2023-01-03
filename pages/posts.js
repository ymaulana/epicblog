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
          <div className="text-center py-16">
            <h2 className="text-5xl">No result 😢</h2>
            <p className="text-xl mt-6 md:w-8/12 w-full mx-auto text-tosca/60">
              We couldn’t find any posts with the keyword `yahahahayuk`. Please
              try another keyword.
            </p>
          </div>
        ) : (
          <div className="flex flex-wrap -mx-4 mt-6">
            {posts.map((post) => (
              <div key={post.id} className="md:w-4/12 w-full px-4 mt-4">
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
