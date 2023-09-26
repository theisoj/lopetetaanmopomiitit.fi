"use client"

import Footer from "@/components/Footer"
import Header from "@/components/Header"
import { client } from "@/sanity/lib/client"
import { PortableText, toPlainText } from "@portabletext/react"
import Head from "next/head"

type Props = {
  data: Page[]
}

export default function Home({ data }: Props) {
  return (
    <>
      <Head>
        <title>{`${data[0].title} - Lopetetaan mopomiitit`}</title>
      </Head>

      <Header />

      <main className="min-h-screen container mx-auto bg-gray-100 font-[Poppins]">
        <p className="text-xl">
          {data[0] && (
            <div
              className="flex flex-col items-start justify-center px-12 gap-4 py-6"
            >
              <p id="tietoa" className="text-lg">
                <PortableText
                  value={data[0].content}
                  components={{
                    list: {
                      bullet: ({ children }) => (
                        <ul className="list-disc ml-0">{children}</ul>
                      ),
                      numbered: ({ children }) => (
                        <ol className="list-decimal ml-6">{children}</ol>
                      ),
                    },
                    listItem: {
                      bullet: ({ children }) => (
                        <li
                          className="list-disc ml-6"
                        >
                          {children}
                        </li>
                      ),
                      checkmarks: ({ children }) => <li>{children}</li>,
                    },
                    marks: {
                      strong: ({ children }) => (
                        <strong className="font-bold">{children}</strong>
                      ),
                      em: ({ children }) => (
                        <em className="italic">{children}</em>
                      ),
                      link: ({ value, children }) => {
                        const href = value?.href
                        return (
                          <a
                            href={href}
                            className="text-blue-500 hover:underline"
                          >
                            {children}
                          </a>
                        )
                      },
                      strikeThrough: ({ children }) => (
                        <del className="line-through">{children}</del>
                      ),
                    },
                    block: {
                      h1: ({ children }) => (
                        <h1 className="text-4xl font-bold my-3">{children}</h1>
                      ),
                      h2: ({ children }) => (
                        <h2 className="text-3xl font-bold my-3">{children}</h2>
                      ),
                      h3: ({ children }) => (
                        <h3 className="text-2xl font-bold my-3">{children}</h3>
                      ),
                      h4: ({ children }) => (
                        <h4 className="text-xl font-bold my-3">{children}</h4>
                      ),
                      h5: ({ children }) => (
                        <h5 className="text-base font-bold my-3">{children}</h5>
                      ),
                      h6: ({ children }) => (
                        <h6 className="text-sm font-bold my-3">{children}</h6>
                      ),
                      normal: ({ children }) => (
                        <p className="text-lg my-3">{children}</p>
                      ),
                      blockquote: ({ children }) => (
                        <blockquote className="text-lg italic">
                          {children}
                        </blockquote>
                      ),
                      code: ({ children }) => (
                        <code className="text-lg font-mono">{children}</code>
                      ),
                    },
                    types: {
                      image: ({ value }) => <img src={value.imageUrl} alt="Kuva" />,
                      callToAction: ({ value, isInline }) =>
                        isInline ? (
                          <a href={value.url}>{value.text}</a>
                        ) : (
                          <div className="callToAction">{value.text}</div>
                        ),
                    },
                  }}
                />
              </p>
            </div>
          )}
        </p>
      </main>

      <Footer />
    </>
  )
}

export async function getStaticProps() {
  const data = await client.fetch<Page[]>(
    `*[_type == "page"]{_id, title, content}`
  )
  return {
    props: {
      data,
    },
  }
}
