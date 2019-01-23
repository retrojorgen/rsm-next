import Link from 'next/link'
import Layout from '../components/PageLayout.js'
import Head from 'next/head'

export default () => (
  <Layout>
    <Head>
        <title>Retrospillmessen 2019, 22. - 23. juni 2019</title>
        <meta property="og:title" content="Retrospillmessen 2019, 22. - 23. juni 2019" />
        <meta property="og:url" content="https://www.retrospillmessen.no/" />
    </Head>
    <style jsx>{`
      @keyframes animateLeft {
        0% {
          background-position: 0px 0px;
        }
        100% {
          background-position: -1000px 0px;
        }
      }
      @keyframes appear {
        0% {
          transform: scale(0);
          opacity: 0;
        }
        100% {
          transform: scale(1);
          opacity: 1;
        }
      }
      @keyframes slidein {
        0% {
          transform: translateY(-4px);
          opacity: 0;
        }
        100% {
          transform: translateY(0);
          opacity: 1;
        }
      }
      #frontpage-hero {
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        background: url(/static/retrospillmessen-hero-background.png) repeat;
        animation: animateLeft 200s linear;
        padding: 60px 20px;
      }
      #frontpage-hero a {
        color: white;

      }
      #frontpage-hero img {
          max-width: 100%;
      }
      #frontpage-hero-logo {
        width: 600px;
        animation: appear 1s ease-in-out forwards;
      }
      #frontpage-hero-info {
        color: white;
        
        letter-spacing: 1px;
        text-align: center;
        opacity: 0;
        transform: translateY(-4px);
        animation: slidein 0.4s ease-in-out 0.4s forwards;
      }
      #frontpage-hero-info h1 {
        font-size: 40px;
        margin: 0;
        text-shadow: 0 4px 10px rgba(0,0,0,0.6);
        text-transform: uppercase;
        margin-top: 20px;
      }
      #frontpage-hero-info h2 {
        margin: 0;
        color: #f8c90c;
        text-shadow: 0 4px 10px rgba(0,0,0,0.6);
        text-transform: uppercase;
        font-size: 30px;
      }
      #frontpage-hero .hero-buttons {
        margin-top: 40px;
      }

      #frontpage-hero-info h3 {
        margin: 0;
      }
      .button {
        display: inline-block;
        border-radius: 10px;
        background: linear-gradient(0deg, #e38900, #fedd00, #fbce00);
        border: 4px solid black;
        overflow: hidden;
        padding: 20px 30px;
        font-weight: bold;
        color: black;
        position: relative;

      }
      a.button {
        color: black !important;
        text-decoration: none;
      }
      .button:before {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 4px;
        background: #a34a00;
        padding:
      }
      .pink-background {
        background: url(/static/retrospillmessen-pink-background.jpg);
      }
      .pink-background .info-container .container-header {
        color: #4300bd;
        text-shadow: 0 2px 6px #1facff;
      }
      .pink-background .info-container p {
        color: #10003e;
      }
      .pink-background .container-illustration img {
        box-shadow: 0 2px 6px #1facff;
      }

      .green-background {
        background: url(/static/retrospillmessen-green-background.jpg);
      }
      .green-background .info-container .container-header {
        color: #4300bd;
        text-shadow: 0 2px 6px #1facff;
      }
      .green-background .info-container p {
        color: #10003e;
      }
      .green-background .container-illustration img {
        box-shadow: 0 2px 6px #1facff;
      }
      
      .container {
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .row {
        max-width: 1000px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 60px 40px;
        flex-direction: column;
      }
      .info-container {
        max-width: 600px;
      }

      .container.left .info-container {
        
      }
      .info-container p {
        font-size: 20px;
        line-height: 28px;

      }
      .container-illustration {
        display: inline-block;
        margin-bottom: 40px;
      }
      .container-illustration img {
        max-width: 100%;
      }
      
      .container-header {
        color: #4300bd;
        text-transform: uppercase;
        font-size: 48px;
        text-align: center;
        text-shadow: 0 2px 6px #1facff;
        margin: 0 0 10px 0;
      }
    `}</style>
    <div id="frontpage-hero">
      <img id="frontpage-hero-logo" src="/static/retrospillmessen-logo.png" />
      <div id="frontpage-hero-info">
        <h1>22.-23. juni 2019</h1>
        <h2>Runarhallen, Sandefjord</h2>
        <p>For siste nytt og spørsmål besøk oss på <a href="https://www.facebook.com/retrospillmessen">Facebook</a></p>
        <div className="hero-buttons">
          <a className="button" href="https://retrospillmessen.hoopla.no/sales/3529925231?fbclid=IwAR0uJxsyIVkyekNcAo-mjQY9zfhPmq0u3fURqpbA9DasnECRY0gQO4kZDBs" target="_blank" id="buy-tickets">Kjøp billetter</a>
        </div>
      </div>
    </div>
    <div className="pink-background container left">
      <div className="row">
        <div className="container-illustration">
          <img src="/static/retrospillmessen-bilde-1.jpg" />
        </div>
        <div className="info-container">
          <h3 className="container-header">
          Velkommen til RSM2019!
          </h3>
          <p>
            For femte år på rad arrangerer vi Retrospillmessen i Runarhallen i Sandefjord. Med rundt 100 spillbare retrokonsoller og maskiner, fantastiske gjester og et stort marked med retrospill og merch er Retrospillmessen et av årets største happenings for gamere i alle aldre!
          </p>
        </div>
      </div>
    </div>
    <div className="green-background container left">
      <div className="row">
        <div className="container-illustration">
          <img src="/static/retrospillmessen-bilde-2.jpg" />
        </div>
        <div className="info-container">
          <h3 className="container-header">
          Mer info kommer
          </h3>
          <p>
            Fremover kommer vi til å annonsere spennende gjester, turneringer og utstillere. Følg oss her og på vår <a href="https://www.facebook.com/retrospillmessen">Facebookside</a>
          </p>
        </div>
      </div>
    </div>
  </Layout>
)