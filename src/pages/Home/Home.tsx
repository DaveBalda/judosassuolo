import PageLayout from "../../components/PageLayout";
import "./Home.css";

function Home() {
  return (
    <PageLayout>
      <div className="flex flex-col">
        <div className="h-fit flex flex-row gap-20 items-center py-32 px-52 bg-gray-200 shadow-2xl">
          <img
            src="/images/home/logo.webp"
            width="450px"
            height="auto"
            alt="Logo JCS"
          />
          <div className="flex flex-col w-full items-center justify-center gap-24">
            <h1 className="text-5xl font-bold font-oswald">
              Una{" "}
              <span className="pt-0.5 pb-2 px-3 bg-black rounded-4xl text-white">
                famiglia
              </span>{" "}
              prima ancora di una palestra
            </h1>
            <div className="flex flex-col gap-10 items-center">
              <div className="text-xl font-gidole flex flex-col gap-2 items-center">
                <p>
                  <strong>Judo Club Sassuolo</strong> è questo e molto altro.
                </p>
                <p>
                  Che tu sia un esperto judoka o qualcuno alle prime armi,
                  possiamo garantirti
                </p>
                <p>
                  soltanto il massimo dai nostri{" "}
                  <strong>istruttori professionisti</strong> e qualificati.
                </p>
              </div>
              <a
                href="/maestri"
                className="font-gidole bg-red-500 hover:bg-red-600 px-8 py-6 text-xl rounded-lg text-white"
              >
                I maestri
              </a>
            </div>
          </div>
        </div>
        <div className="h-fit mt-20 mb-12 py-24 flex flex-row-reverse gap-20 items-center px-52">
          <img
            src="/images/home/rossella.jpg"
            width="600px"
            height="auto"
            alt="Logo JCS"
            className="rounded-3xl"
          />
          <div className="flex flex-col w-full items-center justify-center gap-24">
            <h1 className="text-5xl text-green-900 font-bold font-oswald">
              Tutti{" "}
              <span className="pt-0.5 pb-2 px-3 bg-green-900 rounded-3xl text-white">
                insieme
              </span>{" "}
              per migliorare
            </h1>
            <div className="flex flex-col gap-10 items-center">
              <div className="text-xl font-gidole flex flex-col gap-2 items-center">
                <p>Il Judo è uno sport individuale, tuttavia è</p>
                <p>
                  fondamentale <strong>collaborare</strong> per beneficiare al
                  100% degli allenamenti.
                </p>
                <p>Noi questo lo sappiamo bene e per questo motivo,</p>
                <p>
                  da noi non sarai mai lasciato <strong>indietro</strong>!
                </p>
              </div>
              <a
                href="#"
                className="font-gidole bg-red-500 hover:bg-red-600 px-8 py-6 text-xl rounded-lg text-white"
              >
                I nostri corsi
              </a>
            </div>
          </div>
        </div>
        <div className="h-fit flex flex-row gap-20 items-center py-32 px-52 bg-emerald-600/50 shadow-2xl">
          <img
            src="/images/home/oldpic.jpg"
            width="800px"
            height="auto"
            alt="Logo JCS"
            className="rounded-3xl"
          />
          <div className="flex flex-col w-full items-center justify-center gap-24">
            <h1 className="text-5xl font-bold font-oswald">
              Il nostro lavoro dal{" "}
              <span className="pt-0.5 pb-2 px-3 bg-black rounded-4xl text-white">
                1988
              </span>
            </h1>
            <div className="flex flex-col gap-10 items-center">
              <p className="text-xl font-gidole flex flex-col gap-2 items-center">
                <p>
                  Il nostro team, capitanato dal maestro{" "}
                  <strong>Giancarlo Casolari</strong>,
                </p>
                <p>è una realtà ormai da molti anni.</p>
                <p>
                  Gli studi del maestro Casolari, coadiuvati alle abilità e alla
                </p>
                <p>
                  <strong>professionalità</strong> dei suoi assistenti, hanno
                  reso, negli anni, Judo Club Sassuolo
                </p>
                <p>
                  un punto di riferimento per agonisti, amatori e bambini di{" "}
                  <strong>ogni età</strong>.
                </p>
              </p>
              <a
                href="/storia"
                className="font-gidole bg-red-500 hover:bg-red-600 px-8 py-6 text-xl rounded-lg text-white"
              >
                La nostra storia
              </a>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

export default Home;
