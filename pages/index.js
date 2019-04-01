import Link from "next/link";
import Layout from "../components/PageLayout.js";
import Head from "next/head";

export default () => (
  <Layout>
    <Head>
      <title>Retrospillmessen 2019, 22. - 23. juni 2019</title>
      <meta
        property="og:title"
        content="Retrospillmessen 2019, 22. - 23. juni 2019"
      />
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
        height: 100vh;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding: 60px 20px;
        position: relative;
      }

      #frontpage-hero:before {
        background: url(/static/top-background.jpg) repeat;
        background-size: cover;
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        content: "";
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
      .button.thin {
        padding: 10px 20px;
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
      
      .container {
        display: flex;
        align-items: center;
        justify-content: center;
        background:#0a0c55 url(/static/container-background.jpg) no-repeat;
        background-size: cover;
      }
      
      .row {
        max-width: 1000px;
        display: flex;
        align-items: flex-start;
        justify-content: center;
        padding: 0;
        flex-direction: column;
      }



      @media (min-width: 1000px) {
        .row {
          flex-direction: row;
          padding: 60px 40px;
        }
        .container.reverse .row {
          flex-direction: row-reverse;
        }
      }
      .info-container {
        max-width: 600px;
      }
      @media (min-width: 1000px) {
        .info-container {
          max-width: 40%;
        } 
      }

      .container.left .info-container {
        
      }
      .info-container p {
        font-size: 16px;
        line-height: 28px;
        padding: 0 20px 0 20px ;
        color: rgba(255,255,255,0.8);
      }
      .info-container h4 {
        font-size: 22px;
        padding: 0 20px 0 20px;
        margin-bottom: 0;
      }
      .container-illustration {
        display: inline-block;
        margin-top: 20px;
      }
      .container-illustration img {
        max-width: 100%;
        display: block;
      }
      @media (min-width: 1000px) {
        .container-illustration {
          margin-bottom: 40px;
          margin-top: 20px;
        }
      }
      
      .container-header {
        color: white;
        text-transform: uppercase;
        font-size: 48px;
        text-align: center;
        background: #432383;
        padding: 20px;
        margin: 0 0 10px 0;
        position: relative;
        z-index: 3:
      }
      @media (min-width: 1000px) {
        .container-header {
          margin: 0 0 10px -20px;
          text-align: left;
        }
        .container.reverse .container-header {
          margin: 0 -20px 10px 0;
        }
      }
    `}</style>
    <div id="frontpage-hero">
      <img id="frontpage-hero-logo" src="/static/retrospillmessen-logo.png" />
      <div id="frontpage-hero-info">
        <h1>22.-23. juni 2019</h1>
        <h2>Runarhallen, Sandefjord</h2>
        <p>
          For siste nytt og spørsmål besøk oss på{" "}
          <a href="https://www.facebook.com/retrospillmessen">Facebook</a>
        </p>
        <div className="hero-buttons">
          <a
            className="button"
            href="https://retrospillmessen.hoopla.no/sales/3529925231?fbclid=IwAR0uJxsyIVkyekNcAo-mjQY9zfhPmq0u3fURqpbA9DasnECRY0gQO4kZDBs"
            target="_blank"
            id="buy-tickets"
          >
            Kjøp billetter
          </a>
        </div>
      </div>
    </div>
    <div className="pink-background container">
      <div className="row">
        <div className="container-illustration">
          <img src="/static/retrospillmessen-bilde-4.jpg" />
        </div>
        <div className="info-container">
          <h3 className="container-header">
            Velkommen til årets største retrofest!
          </h3>
          <p>
            For femte år på rad arrangerer vi Retrospillmessen i Runarhallen i
            Sandefjord. Med rundt 100 spillbare retrokonsoller og maskiner,
            barneaktiviteter, fantastiske gjester og et stort marked med
            retrospill og merch er Retrospillmessen et av{" "}
            <strong>årets største happenings for gamere i alle aldre!</strong>
          </p>
        </div>
      </div>
    </div>
    <div className="pink-background container reverse">
      <div className="row">
        <div className="container-illustration">
          <img src="/static/retrospillmessen-bilde-family.jpg" />
        </div>
        <div className="info-container">
          <h3 className="container-header">Ta med kidsa!</h3>
          <p>
            I Retrospillmessen er vi opptatt av familie, og Retrospillmessen er
            et trygt og trivelig opplevelsessenter for hele familien.
          </p>
          <p>
            Vi har eget barneområde med perling og barneaktiviteter, i tillegg
            elsker de større ungene å teste alle tv-spillene vi har utstilt. For
            ikke å snakke om LEGO, rare roboter, og mye annet rart. Vi har egen
            kantine hvor du får kjøpt mat, det er romslig for barnevogn, og vi
            har selvsagt også <strong>reduserte priser for barn</strong>. <br />
            <br /> Et barne-dagspass til Retrospillmessen{" "}
            <strong>koster faktisk mindre enn en kinobillett.</strong>
          </p>
        </div>
      </div>
    </div>
    <div className="pink-background container">
      <div className="row">
        <div className="container-illustration">
          <img src="/static/retrospillmessen-bilde-2.jpg" />
        </div>
        <div className="info-container">
          <h3 className="container-header">Billetter</h3>
          <p>
            Du får kjøpt billetter både på nettet, og i døra{" "}
            <strong>under hele arrangementet</strong>.<br />
            Vi aksepterer selvsagt ledsagerbevis, og{" "}
            <strong>barn under 3 år kommer inn gratis</strong>.
          </p>
          <h4>
            <strong>Priser:</strong>
          </h4>
          <p>
            <strong>1. "Tidlig adgang"-billetter:</strong>
            <br />
            Disse billetter gir deg adgang <i>én time</i> før åpningstiden både
            lørdag og søndag. Perfekt for deg som vil gjøre en god deal, eller
            møte kjendisgjester før alle andre.{" "}
            <u>OBS kun 300 billetter tilgjengelig</u>.<br />
            <strong>
              Voksen: 499,-
              <br /> barn: 249,-
            </strong>
            <br />
            <a
              className="button thin"
              href="https://retrospillmessen.hoopla.no/sales/3529925231?fbclid=IwAR0uJxsyIVkyekNcAo-mjQY9zfhPmq0u3fURqpbA9DasnECRY0gQO4kZDBs"
              target="_blank"
              id="buy-tickets-early-bird"
            >
              Kjøp
            </a>
          </p>
          <p>
            <strong>2. Helgepass:</strong>
            <br />
            Disse billettene gir adgang til Retrospillmessen både lørdag og
            søndag.
            <br />
            <strong>
              Voksen: 349,-
              <br /> barn: 149,-
            </strong>
            <br />
            <a
              className="button thin"
              href="https://retrospillmessen.hoopla.no/sales/3529925231?fbclid=IwAR0uJxsyIVkyekNcAo-mjQY9zfhPmq0u3fURqpbA9DasnECRY0gQO4kZDBs"
              target="_blank"
              id="buy-tickets-weekend-pass"
            >
              Kjøp
            </a>
          </p>
          <p>
            <strong>3. Dagspass:</strong>
            <br />
            Gir adgang til Retrospillmessen enten lørdag eller søndag. Husk
            velge riktig dato i menyen
            <br />
            <strong>
              Voksen: 199,-
              <br /> barn: 99,-
            </strong>
            <br />
            <a
              className="button thin"
              href="https://retrospillmessen.hoopla.no/sales/3529925231?fbclid=IwAR0uJxsyIVkyekNcAo-mjQY9zfhPmq0u3fURqpbA9DasnECRY0gQO4kZDBs"
              target="_blank"
              id="buy-tickets-day-pass"
            >
              Kjøp
            </a>
          </p>
        </div>
      </div>
    </div>
    <div className="green-background container reverse">
      <div className="row">
        <div className="container-illustration">
          <img src="/static/retrospillmessen-hotell.jpg" />
        </div>
        <div className="info-container">
          <h3 className="container-header">Praktisk info</h3>
          <h4>Åpningstider:</h4>
          <p>
            {" "}
            Lørdag 22.juni: 10:00-18:00 <br />
            Søndag 23.juni: 10:00-18:00{" "}
          </p>
          <h4>Reise:</h4>
          <p>
            Retrospillmessen arrangeres i Runarhallen i Sandefjord,
            Klavenesveien 20. Kjører du bil er det bare en kjapp avkjøring fra
            E18, og kommer du med tog tar du buss 01 fra stasjonen. Det tar ca
            40 minutter å gå fra stasjonen.
            <a href="ttps://www.google.no/maps/place/Runarhallen/@59.1486775,10.1854385,17z/data=!3m1!4b1!4m5!3m4!1s0x4646c0d946585e91:0x44ab2add79b2fdf9!8m2!3d59.1486775!4d10.1854386?hl=no">
              Google maps retninger her.
            </a>
          </p>
          <h4>Overnatting:</h4>
          <u>Bestillingskode nett: BRSM210619</u><br><br>
          <p>
            Planlegger du å bli hele helgen på Retrospillmessen? Da bør du bo på
            Sandefjords største hotell{" "}
            <a
              href="https://www.scandichotels.com/hotels/norway/sandefjord/scandic-park-sandefjord?cmpid=ppc_BH2nd&s_kwcid=AL!7589!3!245108004177!e!!g!!scandic%20park%20sandefjord&gclid=Cj0KCQiA5Y3kBRDwARIsAEwloL7XiSEqBJmjYYtjex9GZDkAp00On-AvVXf7jW63AR90H3gjt5dGHc0aArCqEALw_wcB"
              target="new_window"
            >
              Scandic Park
            </a>
            , med den beste hotellfrokosten i fylket.{" "}
            <i>Den er seriøst verdt hver krone!</i>
            Spesialprisene våre får du <i>kun</i> ved å ringe{" "}
            <a href="tel:33447423">33 44 74 23</a> eller booke via
            e-postadressen{" "}
            <a href="mailto:meeting.parksandefjord@scandichotels.com">
              meeting.parksandefjord@scandichotels.com
            </a>
            .<br />
            <br />
            <strong>
              <u>Bestillingskode nett: BRSM210619</u><br><br>
            </strong>
            <strong>Priser (inkludert frokost):</strong>
            <br />
            Enkeltrom kr. 875,- pr. døgn
            <br />
            Dobbeltrom kr. 1030,- pr. døgn
            <br />
            Trippelrom kr. 1236,- pr. døgn
            <br />
            Firemannsrom kr. 1442,- pr. døgn
            <br />
            ** oppgradering til superior-rom 200,-
            <br />
            <strong>Obs! Rom må bookes innen 21/4/2019.</strong>
          </p>
        </div>
      </div>
    </div>
    <div className="green-background container">
      <div className="row">
        <div className="container-illustration">
          <img src="/static/retrospillmessen-bilde-tetris.jpg" />
        </div>
        <div className="info-container">
          <h3 className="container-header">
            Classic Tetris World Championship
          </h3>
          <h4>Kvalifiser deg til finalen:</h4>
          <p>
            I år blir Retrospillmessen ett av ytterst få stoppesteder for den
            offisielle internasjonale Tetris-turneringen. På lørdagen (22. juni)
            kjører vi både en proff-turnering hvor du kan vinne en plass i
            finalen i Classic Tetris World Championship.
          </p>
          <p>
            I tillegg kjører vi en amatørturnering samme dag med fete premier.
          </p>
          <p>
            <strong>
              Påmelding skjer på Retrospillmessen, så husk å møt opp tidlig hvis
              du vil delta!
            </strong>
          </p>
        </div>
      </div>
    </div>
    <div className="green-background container reverse">
      <div className="row">
        <div className="container-illustration">
          <img src="/static/retrospillmessen-bilde-ngwt.jpg" />
        </div>
        <div className="info-container">
          <h3 className="container-header">
            NEO GEO World Championship med fete premier
          </h3>
          <h4>Slossespill-turneringen kommer tilbake</h4>
          <p>
            I fjor fikk vi besøk av Neo Geo-gjengen for første gang, og nå
            kommer de tilbake med en ny turnering. På lørdag (22. juni) skal det
            kjempes om finaleplass i Neo Geo World Championship i Hong Kong. Du
            kan vinne en plass på Retrospillmessen!
          </p>
          <p>
            Det vil foregå to turneringer; en i spillet King of Fighters 98
            (Nintendo Switch / Neo Geo), og en i King Of Fighters XIV (PS4).
          </p>
          <p>
            Du kan melde deg på turneringene{" "}
            <a href="https://l.facebook.com/l.php?u=https%3A%2F%2Fchallonge.com%2Fevents%2Fngwt2norway%3Ffbclid%3DIwAR1Zmx5Tac2o-uWIE3OgKUJVeyMAQ_T6fYGRK0wwnpXyoUeeQuKgf9Cqo6w&h=AT2rhee5uXIIv_G3VoaCIl0nTLuFiogOU9xRNc1cIYUwNmuzNRcMsjZIY4bpBPDgh5O_5bGPqKg4eaMhJGcqkE1DUqCEkHLKUznrydBkUpKBhkwirdv-tP1BjL8dhOZyBoUqRxskxUn4q_M2EAm2MQW_cFDd8xQtZudAcYNUuMHrasVehVzCaKUGwF8M5-IqyXTVtMl5_RgexGT_EPQIUlWvXeusxYW5MBZTF1MN12bhW7mEGYRI2Ed8chVChD3mlFIxi2lrvC1E7-eC8IsPPfIqT_1KrZjQbFyY5Oi7AZpaAS9KdTZ04Az8g2blhZUCqvGe0lZJjVgS8AmIQ853vKjw3JmYy6L22Ym5rfimds2FzXTLM_JwgZn0VVdjnOpavVcOCqugEOoCWBAjzQXeg8u_Pe4E3LdoPzrHXEFmLUrdgjPmcMmMw7G55glOQdlXJXBfF3wG9ht3eBVTG1Z1WMJOP17dJiIz_7Cz23xWY971Mb6baxTNIBdSkTjFNSQ3QeZcd2Qi0YHjAZWW0KhfWmgxfMzrEOgrba8hp8hnE1y_eLn7MPe6gvF39hV0oppcOvb4CmoRPBCDiqW-KMoyCtUkFbIXPUbPsJjwuwcpTPmMicGnEYgTR1U2smAL3sylphbCDhuEher">
              på challonge her
            </a>
            .
          </p>
          <h4>Metal Slug highscore attack</h4>
          <p>
            Gjengen kjører også i gang et highscore attack i Metal Slug med noen
            fete premier!
          </p>
        </div>
      </div>
    </div>
  </Layout>
);
