import "./Home.css";

function Home() {
  return (
    <div className="flex flex-col">
      <div className="h-fit flex flex-row items-center py-32 px-52 bg-gray-200 shadow-2xl">
        <img
          src="/images/home/logo.webp"
          width="400px"
          height="auto"
          alt="Logo JCS"
        />
        <div className="flex flex-col w-full items-center justify-center gap-24">
          <h1 className="text-5xl font-bold font-oswald">
            Una{" "}
            <span className="pt-0.5 pb-2 px-3 bg-black rounded-4xl text-white">
              famiglia
            </span>{" "}
            prima ancora che una palestra
          </h1>
          <p className="text-xl font-gidole flex flex-col gap-2 items-center">
            <p>
              <strong>Judo Club Sassuolo</strong> è questo e molto altro.
            </p>
            <p>
              Che tu sia un esperto judoka o qualcuno alle prime armi, possiamo
              garantirti
            </p>
            <p>
              soltanto il massimo dai nostri{" "}
              <strong>istruttori professionisti</strong> e qualificati.
            </p>
          </p>
        </div>
      </div>
      <div className="h-fit mt-20 mb-20 flex flex-row-reverse items-center px-52">
        <img
          src="/images/home/rossella.jpg"
          width="750px"
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
          <p className="text-xl font-gidole flex flex-col gap-2 items-center">
            <p>Il Judo è uno sport individuale, tuttavia è</p>
            <p>
              fondamentale <strong>collaborare</strong> per beneficiare al 100%
              degli allenamenti.
            </p>
            <p>Noi questo lo sappiamo bene e per questo motivo,</p>
            <p>
              da noi non sarai mai lasciato <strong>indietro</strong>!
            </p>
          </p>
        </div>
      </div>
      <div className="h-fit flex flex-row items-center py-32 px-52 bg-gray-200 shadow-2xl">
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
              <strong>professionalità</strong> dei suoi assistenti, hanno reso,
              negli anni, Judo Club Sassuolo
            </p>
            <p>
              un punto di riferimento per agonisti, amatori e bambini di{" "}
              <strong>ogni età</strong>.
            </p>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
