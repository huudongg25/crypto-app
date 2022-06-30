import Head from "next/head";
import Layout from "../layout";
import "normalize.css";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Dynamic</title>
        <link rel="icon" href="logo.png" />
        <link
          href="//db.onlinewebfonts.com/c/9fbffe9c24e09e4fac70f87f5a76f558?family=Brinnan"
          rel="stylesheet"
          type="text/css"
        />
      </Head>

      <main>
        <Layout namePage={"Home"}>
          <h1 style={{ marginLeft: 400, marginTop: 200, fontSize: 30 }}>
            This is HomePage
          </h1>
        </Layout>
      </main>

      <style jsx global>{`
        html,
        body {
          color: #fff;
          padding: 0;
          margin: 0;
          font-family: "Brinnan";
          font-size: 62.5%;
        }

        body::-webkit-scrollbar {
          width: 4px;
          background: #000;
        }

        body::-webkit-scrollbar-thumb {
          background-color: #77838f;
          border-radius: 20px;
        }

        * {
          box-sizing: border-box;
        }

        ul {
          padding: 0;
          margin: 0;
          list-style: none;
        }
        a {
          text-decoration: none;
          color: #fff;
        }
      `}</style>
    </div>
  );
}
