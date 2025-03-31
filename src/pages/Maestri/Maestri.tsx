import PageLayout from "../../components/PageLayout";
import MoreInfo from "./MoreInfo";

function Maestri() {
  return (
    <PageLayout>
      <div className="flex flex-col">
        <div className="flex flex-col gap-32 py-24 px-60 bg-gray-200 shadow-2xl">
          <div className="h-fit flex flex-row gap-32 items-center">
            <div className="rounded-full w-[350px] max-h-[350px] h-auto overflow-hidden border">
              <img
                src="/images/maestri/giancarlo.png"
                width="350px"
                alt="Giancarlo Casolari"
              />
            </div>
            <div className="flex flex-col items-center justify-center gap-24 ml-auto">
              <div className="flex flex-col items-center gap-3">
                <h1 className="text-5xl font-bold font-oswald">
                  Giancarlo Casolari
                </h1>
                <h3 className="text-3xl font-oswald text-green-700">5° DAN</h3>
              </div>
              <div className="flex flex-col gap-10 items-center">
                <div className="text-xl font-gidole flex flex-col gap-2 items-center">
                  <p>
                    Il maestro Casolari porta con se un'esperienza{" "}
                    <strong>ultradecennale</strong> nell'ambito
                  </p>
                  <p>
                    delle arti marziali e della difesa personale, con un focus
                    specifico sul Judo, studiato
                  </p>
                  <p>
                    sotto tutti i suoi aspetti: <strong>tecnico</strong>,{" "}
                    <strong>artistico</strong> e <strong>pedagogico</strong>.
                  </p>
                  <br />
                  <p>
                    L'
                    <strong>
                      Accademia Nazionale Italiana Judo e Karate
                    </strong>{" "}
                    rilascia a Giancarlo, nel 1981,
                  </p>
                  <p>
                    il brevetto da aspirante istruttore, rendendolo a tutti gli
                    effetti il primo
                  </p>
                  <p>
                    sassolese ad acquisire il <strong>grado di cintura</strong>{" "}
                    nera in un arte marziale
                  </p>
                </div>
              </div>
            </div>
          </div>
          <MoreInfo>
            <div className="flex flex-col items-center gap-14 px-32">
              <div className="flex flex-col items-center gap-2">
                <h1 className="text-2xl font-bold font-oswald text-green-700">
                  1981 - 1982
                </h1>
                <p className="text-center text-lg font-gidole">
                  Giancarlo risponde al bando emesso dalla{" "}
                  <strong>
                    Federazione Italiana Lotta Pesi Judo (F.I.L.P.J.)
                  </strong>{" "}
                  per la formazione di 25 nuovi aspiranti istruttori sul
                  territirio nazionale; superato brillantemente l'esame di
                  ammissione diventa subito allievo scelto dell'
                  <strong>Accademia Nazionale Italiana Judo e Karate</strong> ed
                  il 5 Agosto, con il massimo dei voti, gli viene rilasciato il
                  brevetto di aspirante istruttore, diventando così il primo
                  sassolese ad aquisire il grado di cintura nera in un' arte
                  marziale.
                </p>
                <p className="text-center text-lg font-gidole">
                  Sempre quest'anno, consegue anche il diploma di insegnante di
                  Educazione Fisica presso <strong>l'I.S.E.F.</strong> di
                  Bologna. Nel 1982 verrà poi promosso a{" "}
                  <strong>istruttore di Judo 2° dan</strong>.
                </p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <h1 className="text-2xl font-bold font-oswald text-green-700">
                  1987
                </h1>
                <p className="text-center text-lg font-gidole">
                  Giancarlo frequenta il corso multimediale del C.O.N.I. e
                  diventa istruttore dei centri{" "}
                  <strong>C.O.N.I. di avviamento allo sport</strong>.
                </p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <h1 className="text-2xl font-bold font-oswald text-green-700">
                  1994
                </h1>
                <p className="text-center text-lg font-gidole">
                  Giancarlo si specializza nell'insegnamento agli{" "}
                  <strong>alunni con disabilità</strong> frequentando il corso
                  polivalente di specializzazione presso il Provveditorato agli
                  Studi di Modena.
                </p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <h1 className="text-2xl font-bold font-oswald text-green-700">
                  1999 - 2002
                </h1>
                <p className="text-center text-lg font-gidole">
                  Giancarlo consegue il grado di cintura nera{" "}
                  <strong>3° dan</strong>.
                </p>
                <p className="text-center text-lg font-gidole">
                  Solo 3 anni dopo, nel 2002, conseguirà poi il grado di cintura
                  nera <strong>4° dan</strong> e il{" "}
                  <strong>titolo di maestro</strong>.
                </p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <h1 className="text-2xl font-bold font-oswald text-green-700">
                  2003 - 2004
                </h1>
                <p className="text-center text-lg font-gidole">
                  Giancarlo si specializza nel{" "}
                  <strong>metodo globale di autodifesa (M.G.A.)</strong> e ne
                  diventa il responsabile per la provincia di Modena.
                </p>
                <p className="text-center text-lg font-gidole">
                  Nel 2004 consegue poi la cintura nera del{" "}
                  <strong>Ju-Jitsu</strong>.
                </p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <h1 className="text-2xl font-bold font-oswald text-green-700">
                  2010
                </h1>
                <p className="text-center text-lg font-gidole">
                  Giancarlo consegue il <strong>5° dan</strong> di cintura nera.
                </p>
              </div>
            </div>
          </MoreInfo>
        </div>
        <div className="flex flex-col gap-32 py-24 px-60 mt-20 mb-12">
          <div className="h-fit flex flex-row-reverse gap-10 items-center justify-center">
            <div className="rounded-full w-[350px] max-h-[350px] overflow-hidden border">
              <img
                src="/images/maestri/daniele.jpeg"
                width="350px"
                alt="Daniele Di Martino"
              />
            </div>
            <div className="flex flex-col items-center justify-center gap-24 mr-auto">
              <h1 className="text-5xl font-bold font-oswald">
                Daniele Di Martino
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
              </div>
            </div>
          </div>
          <MoreInfo>Storia di Daniele (WIP)</MoreInfo>
        </div>
      </div>
    </PageLayout>
  );
}

export default Maestri;
