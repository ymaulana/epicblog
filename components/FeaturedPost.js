import Link from "next/link";
import React from "react";
import InfoPost from "./InfoPost";

function featuredPost(props) {
  return (
    <article>
      <div className="-mx-4 flex flex-wrap items-start lg:items-center">
        <div className="px-4 md:w-7/12 lg:w-8/12">
          <Link href="/detail">
            <a>
              <img
                src="/assets/featured-thumbnail.png"
                alt=""
                className="mb-4 w-full rounded-xl transition duration-300 hover:scale-105 md:mb-0"
              />
            </a>
          </Link>
        </div>
        <div className="w-full px-4 md:w-5/12 lg:w-4/12">
          {/* <InfoPost
            category={props.attributes.category.data.attributes.name}
            date={props.publishedAt}
            title={props.attributes.title}
            shortDescription={props.headline}
            authorAvatar={props.thumbnail}
            authorName="Jaenap"
            authorJob="UI Designer"
          /> */}
          <InfoPost
            category="UI DESIGN"
            date="July 2, 2021"
            title="Understanding color theory: the color wheel and finding complementary colors"
            shortDescription="Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. "
            authorAvatar="/assets/author-1.png"
            authorName="Leslie Alexander"
            authorJob="UI Designer"
          />
        </div>
      </div>
      <hr className="mt-10 border-tosca/20 md:hidden" />
    </article>
  );
}

export default featuredPost;
