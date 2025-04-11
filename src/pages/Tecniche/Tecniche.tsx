import PageLayout from "../../components/PageLayout";
import "./Tecniche.css";

function Tecniche() {
  return (
    <PageLayout title="Tecniche">
      <div className="flex flex-col">
        <div className="tecniche-reverse">
          <div className="tecniche-wrapper">
            <img src="/images/tecniche/jigorokano.webp" alt="Il Judo" />
          </div>
          <div className="flex flex-col gap-20 items-center">
            <h1 className="text-5xl/20 text-center text-black font-bold font-oswald">
              Via della cedevolezza
            </h1>
            <div className="text-xl/9 text-center font-gidole flex flex-col gap-2 items-center">
              <p>
                La parola "<strong>jūdō</strong>" vuol dire letteralmente "
                <em>via della cedevolezza</em>"; con questo, si cerca di
                spiegare come il modo per vincere una forza non sia opporsi ad
                essa, bensì il contrario, <strong>sfruttarla</strong> e
                dirigerla per il proprio fine.
                <br /> <br />
                Nel judo, infatti, non è raro vedere persone di corporatura
                esile capaci di proiettare persone molto più corpulente.
              </p>
            </div>
          </div>
        </div>
        <div className="tecniche-regular">
          <div className="tecniche-wrapper">
            <img src="/images/tecniche/jigorokanored.jpg" alt="Jigoro Kano" />
          </div>
          <div className="flex flex-col gap-20 items-center">
            <h1 className="text-5xl/20 text-center text-black font-bold font-oswald">
              Com'è nato il judo?
            </h1>
            <div className="text-xl/9 text-center font-gidole flex flex-col gap-3 items-center">
              <p>
                Il metodo judo nasce da un studio elaborato dal prof.{" "}
                <strong>Jigorō Kanō</strong> che, in gioventù, praticò con
                entusiasmo e senza risparmiarsi due diversissime scuole di
                ju-jutsu: <strong>Tenshin Shin'yō-ryū</strong>, di origine
                civile e <strong>Kitō-ryū</strong>, di origine militare.
                <br /> <br />
                Segue un codice morale composto da{" "}
                <strong>8 principi fondamentali</strong>, che sono qualità che
                ogni judoka deve necessariamente apprendere:
              </p>
              <div className="text-green-700 font-bold grid grid-cols-2 items-center text-center gap-1">
                <p>L'educazione</p>
                <p>Il coraggio</p>
                <p>La sincerità</p>
                <p>L'onore</p>
                <p>La modestia</p>
                <p>Il rispetto</p>
                <p>L'autocontrollo</p>
                <p>L'amicizia</p>
              </div>
            </div>
            <a
              href="https://it.wikipedia.org/wiki/Judo"
              target="_blank"
              className="font-gidole bg-red-500 hover:bg-red-600 px-8 py-6 text-xl rounded-lg text-white"
            >
              Storia del Judo
            </a>
          </div>
        </div>
        <div className="tecniche-full">
          <div className="flex flex-col gap-20 items-center">
            <div className="flex flex-col items-center gap-0">
              <h1 className="text-5xl/20 text-center text-black font-bold font-oswald">
                Go-kyō
              </h1>
              <h3 className="text-3xl text-center text-black font-bold font-oswald">
                Le tecniche dei Cinque Gruppi
              </h3>
            </div>
            <div className="text-xl/9 text-center font-gidole flex flex-col gap-2 items-center">
              <p>
                Il <strong>go-kyō</strong> (i Cinque Principi o Cinque Gruppi) è
                il metodo di insegnamento del judo che classifica{" "}
                <strong>67</strong> tecniche, di cui 40 classiche piu 27
                aggiunte in seguito. Dopo il 1982 furono aggiunte alle 40
                tecniche basilari delle tecniche addizionali.
                <br /> <br />
                In Italia, il go-kyō viene insegnato come{" "}
                <strong>base delle conoscenze judoistiche</strong>. Infatti, i
                gradi inferiori alla cintura nera sono rilasciati in seguito ad
                un passaggio di cintura organizzati dal club, dove si esgue uno
                dei raggruppamenti di tecniche in base alle proprie conoscenze.
                Il go-kyō classifica 40 tecniche in{" "}
                <strong>cinque classi</strong>, ciascuna di 8 tecniche in base
                alla difficoltà di esecuzione del movimento e alla violenza
                della caduta. Jigoro Kano selezionò dal ju-jitsu, quelle
                tecniche che meglio rispondevano a criteri educativi e che{" "}
                <strong>non presentavano pericoli</strong> per i praticanti.
                <br /> <br />
                Vuoi approfondire? Guarda un{" "}
                <a
                  href="https://www.youtube.com/watch?v=LMKgaMdm9UY"
                  className="underline text-blue-700 visited:text-red-800"
                >
                  video
                </a>{" "}
                oppure{" "}
                <a
                  href="https://www.infojudo.com/tecniche-di-proiezione/go-kyo/"
                  className="underline text-blue-700 visited:text-red-800"
                >
                  leggi questo articolo
                </a>
                .
              </p>
            </div>
            <div className="tecniche-cards">
              <div className="small-wrapper">
                <img src="/images/tecniche/ippon.jpg" alt="Jigoro Kano" />
              </div>
              <div className="small-wrapper">
                <img src="/images/tecniche/osoto_gari.jpg" alt="Jigoro Kano" />
              </div>
              <div className="small-wrapper">
                <img src="/images/tecniche/taiotoshi.jpg" alt="Jigoro Kano" />
              </div>
            </div>
            <div className="tecniche-cards-mid">
              <div className="flex flex-row gap-10 items-center">
                <div className="small-wrapper">
                  <img src="/images/tecniche/ippon.jpg" alt="Jigoro Kano" />
                </div>
                <div className="small-wrapper">
                  <img
                    src="/images/tecniche/osoto_gari.jpg"
                    alt="Jigoro Kano"
                  />
                </div>
              </div>
              <div className="small-wrapper">
                <img src="/images/tecniche/taiotoshi.jpg" alt="Jigoro Kano" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

export default Tecniche;
