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

      .container-illustration iframe {
        max-width: 100%;
        width: 1000px;
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

    <div className="pink-background container">
      <div className="row">
        <div className="container-illustration">
          <img src="/static/retrospillmessen-bilde-2.jpg" />
        </div>
        <div className="info-container">
          <h3 className="container-header">
            Billetter
          </h3>
          <p>
            Du får kjøpt billetter både på nettet, og i døra <strong>under hele arrangementet</strong>.<br/>
            Vi aksepterer selvsagt ledsagerbevis, og <strong>barn under 3 år kommer inn gratis</strong>.
          </p>
          <h4><strong>Priser:</strong></h4>  
          <p>
            <strong>1. "Tidlig adgang"-billetter:</strong><br />
            Disse billetter gir deg adgang <i>én time</i> før åpningstiden både lørdag og søndag. Perfekt for deg som vil gjøre en god deal, eller møte kjendisgjester før alle andre. <u>OBS kun 300 billetter tilgjengelig</u>.<br />
            <strong>Voksen: 499,-<br /> barn: 249,-</strong><br />
            <a className="button thin" href="https://retrospillmessen.hoopla.no/sales/3529925231?fbclid=IwAR0uJxsyIVkyekNcAo-mjQY9zfhPmq0u3fURqpbA9DasnECRY0gQO4kZDBs" target="_blank" id="buy-tickets-early-bird">Kjøp</a>
          </p>
          <p>
            <strong>2. Helgepass:</strong><br />
            Disse billettene gir adgang til Retrospillmessen både lørdag og søndag.<br />
            <strong>Voksen: 349,-<br /> barn: 149,-</strong><br />
            <a className="button thin" href="https://retrospillmessen.hoopla.no/sales/3529925231?fbclid=IwAR0uJxsyIVkyekNcAo-mjQY9zfhPmq0u3fURqpbA9DasnECRY0gQO4kZDBs" target="_blank" id="buy-tickets-weekend-pass">Kjøp</a>
          </p>
          <p>
            <strong>3. Dagspass:</strong><br />
            Gir adgang til Retrospillmessen enten lørdag eller søndag. Husk velge riktig dato i menyen<br />
            <strong>Voksen: 199,-<br /> barn: 99,-</strong><br />
            <a className="button thin" href="https://retrospillmessen.hoopla.no/sales/3529925231?fbclid=IwAR0uJxsyIVkyekNcAo-mjQY9zfhPmq0u3fURqpbA9DasnECRY0gQO4kZDBs" target="_blank" id="buy-tickets-day-pass">Kjøp</a>
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
          <h3 className="container-header">
            Overnatting
          </h3>
          <p> 
            Planlegger du å bli hele helgen på Retrospillmessen? Da bør du bo på Sandefjords største hotell <a href="https://www.scandichotels.com/hotels/sweden/stockholm/scandic-park?cmpid=ppc_BH2nd&s_kwcid=AL!7589!3!245108001546!e!!g!!scandic%20park%20hotel&gclid=Cj0KCQiAk-7jBRD9ARIsAEy8mh7T1lQ_OpNRNCbNENW6kFf_10SuXkqQkWf-wvtdvfEWiGTRy4xPT2kaAu7GEALw_wcB" target="new_window">Scandic Park</a>, med den beste hotellfrokosten i fylket. <i>Den er seriøst verdt hver krone!</i>
            Spesialprisene våre får du <i>kun</i> ved å ringe <a href="tel:33447423">33 44 74 23</a> eller booke via e-postadressen <a href="mailto:meeting.parksandefjord@scandichotels.com">meeting.parksandefjord@scandichotels.com</a>.<br /><br />
            <strong>Priser (inkludert frokost):</strong><br />
             Enkeltrom kr. 875,- pr. døgn<br />
             Dobbeltrom kr. 1030,- pr. døgn<br />
             Trippelrom kr. 1236,- pr. døgn<br />
             Firemannsrom kr. 1442,- pr. døgn<br />
             ** oppgradering til superior-rom 200,-<br />
             <strong>Obs! Rom må bookes innen 21/4/2019.</strong>
          </p>
        </div>
      </div>
    </div>
    <div className="green-background container  ">
      <div className="row">
        <div className="container-illustration">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2046.0495225922464!2d10.18295477276878!3d59.14830060088362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4646c0d946585e91%3A0x44ab2add79b2fdf9!2sRunarhallen!5e0!3m2!1sen!2sno!4v1551616764989" width="100%" height="450" frameborder="0"  allowfullscreen></iframe>
        </div>
        <div className="info-container">
          <h3 className="container-header">
            Reise
          </h3>
          <p><strong>Adresse:</strong> Runarhallen, Klavenesveien 20.</p>
          <h4>En kort avkjøring unna E18</h4>
          <p>Du kan søke opp både Runarhallen og Klavenesveien på Google Maps.<br /><br />
          Kjører du <u>bil</u> ligger hallen en kjapp avkjøring unna E18. Vi prøver å skilte så godt vi kan til parkering.</p>
          <h4>Ta buss fra togstasjonen, eller gå</h4>
          <p>Kommer du med tog tar du buss 01 fra togstasjonen i Sandefjord. Ønsker du å gå tar det ca 40 minutter fra stasjonen.</p>

            <p><a href="ttps://www.google.no/maps/place/Runarhallen/@59.1486775,10.1854385,17z/data=!3m1!4b1!4m5!3m4!1s0x4646c0d946585e91:0x44ab2add79b2fdf9!8m2!3d59.1486775!4d10.1854386?hl=no">Google maps retninger her.</a></p>
        </div>
      </div>
    </div>
  </Layout>
)