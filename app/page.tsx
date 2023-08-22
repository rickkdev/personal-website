import Link from "next/link";
import { compareDesc, format, parseISO } from "date-fns";
import { allPosts, Post } from "contentlayer/generated";
import { getMDXComponent } from "next-contentlayer/hooks";

function PostCard(post: Post) {
  const Content = getMDXComponent(post.body.code);

  return (
    <div className="mb-8">
      <h2 className="text-xl">
        <Link
          href={post.url}
          className="text-blue-700 hover:text-blue-900"
          legacyBehavior
        >
          {post.title}
        </Link>
      </h2>
      <time dateTime={post.date} className="block mb-2 text-xs text-gray-600">
        {format(parseISO(post.date), "LLLL d, yyyy")}
      </time>
      <div className="text-md">
        <Content />
      </div>
    </div>
  );
}

export default function Home() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  return (
    <div className="pt-4 px-5">
      <div className="text-lg font-bold pb-1">about</div>
      <div className="flex md:flex-row flex-col">
        <img
          src="/rick-blog-4.png"
          alt="Rick's Image"
          width="200"
          className="flex-shrink-0 mb-4 md:mb-0 md:mr-4 md:hidden pt-5"
        />
        <div>
          i'm a software engineer and head of execution of{" "}
          <Link className="underline" href={"https://openq.dev/"}>
            openq.
          </Link>{" "}
          I'm originally from a small town in southwest germany known as
          offenburg. <br />
          <br />
          my tryst with coding began thanks to the vastness of the web and
          friends who nudged me to experiment with ideas i had.
          <br />
        </div>
        <img
          src="/rick-blog-4.png"
          alt="Rick's Image"
          width="190"
          className="flex-shrink-0 mb-4 md:mb-0 md:mr-4 hidden md:block"
        />
      </div>
      <br />
      by 15, i freelanced in web development and 3d animation. working for a 3d
      studio full-time for a year shifted my focus from animation to coding
      again. <br />
      <br />i studied cs at the technical university of berlin, though much of
      my knowledge is self-taught. for over a decade, i've been deep into crypto
      and web3, professionally focusing on blockchain for the last 5 years.
      <br />
      <br />
      my first company, cwc, analyzed crypto exchanges. i sold that company two
      years later. free time and freelance gigs as dev rel (my biggest passion)
      led me to various hackathons, where i met my co-founder. together, we
      founded{" "}
      <Link className="underline" href={"https://openq.dev/"}>
        openq
      </Link>
      , partnering with top hackathon organizers and distributing the largest
      prize pool in hackathon history, fully on-chain. <br />
      <br />
      today i'm mainly focusing on developer relations with our new{" "}
      <Link className="underline" href={"https://openq.dev/drm"}>
        drm
      </Link>{" "}
      product and in my free time i play around with ai like everyone else.
      {/* {posts.map((post, idx) => (
        <PostCard key={idx} {...post} />
      ))} */}
      <div className="flex flex-row justify-between pt-10 text-xs">
        <div className="flex flex-row space-x-1">
          <div>Riccardo Lamanna </div>
          <div>
            <Link
              href="https://twitter.com/rickkdev/"
              className="underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              (@rickkdev)
            </Link>
          </div>
        </div>
        <Link
          href="https://github.com/rickkdev/personal-website"
          className="underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          source
        </Link>
      </div>
    </div>
  );
}
