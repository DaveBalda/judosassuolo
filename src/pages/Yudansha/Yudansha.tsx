import PageLayout from "../../components/PageLayout";
import More from "./More";
import "./Yudansha.css";

function Yudansha() {
  return (
    <PageLayout title="Yudansha">
      <div className="flex flex-col">
        <div className="yudansha-upper">
          <div className="flex flex-col gap-20 items-center">
            <h1 className="text-5xl text-center font-bold font-oswald pt-2 pb-3.5 px-4 bg-black rounded-3xl text-white">
              La cintura nera
            </h1>
            <div className="text-xl/9 text-center font-gidole flex flex-col gap-2 items-center">
              <p>
                Il percorso di un <strong>judoka</strong> è lungo e può durare,
                a volte, anche tutta la vita.
                <br />
                Si tende quindi a pensare, che il grado più alto del judo sia la
                cintura nera (<strong>yūdansha</strong>) e che con essa il
                percorso del judoka sia giunto a termine.
                <br />
                Ma è davvero così? La risposta è un sonoro "<strong>no</strong>
                ".
                <br />
                <br />
                L'ottenimento della cintura nera non indica altro che un
                ulteriore inizio di un{" "}
                <strong>percorso di studio approfondito</strong> dell'arte
                marziale, che porterà l'atleta verso l'ottenimento di{" "}
                <strong>10 dan</strong> (ovvero "gradi", "livelli") di yudansha
                e quindi all'ottenimento della cintura{" "}
                <span className="text-red-600">bianca e rossa</span> (sesto dan)
                e di quella <span className="text-red-600">rossa</span> (ottavo
                dan).
              </p>
            </div>
            <div className="flex flex-row gap-20">
              <div className="yudansha-small-wrapper">
                <img src="/images/yudansha/c_nera.png" alt="Cintura Nera" />
              </div>
              <div className="yudansha-small-wrapper">
                <img src="/images/yudansha/c_b_r.png" alt="Cintura Nera" />
              </div>
              <div className="yudansha-small-wrapper">
                <img src="/images/yudansha/c_rossa.png" alt="Cintura Nera" />
              </div>
            </div>
          </div>
        </div>
        <div className="yudansha-regular h-fit flex items-center justify-center py-32 shadow-2xl">
          <div className="flex flex-row gap-32 items-center">
            <div className="yudansha-wrapper">
              <img src="/images/yudansha/fabiogianca.jpeg" />
            </div>
            <div className="flex flex-col gap-20 items-center">
              <h1 className="text-5xl/20 text-center text-green-800 font-bold font-oswald">
                Le nostre cinture nere
              </h1>
              <div className="text-xl/9 text-center font-gidole flex flex-col gap-2 items-center">
                <p>
                  Molti allievi del Judo Club Sassuolo, negli anni, sono
                  diventati grandi atleti e <strong>campioni</strong>,
                  conseguendo anche il titolo di cintura nera.
                  <br /> <br />
                  Qua sotto sono elencati tutti coloro che hanno raggiunto
                  questo <strong>importante traguardo</strong>.
                </p>
              </div>
            </div>
          </div>
          <div className="yudansha-list flex flex-row gap-50 justify-center">
            <div className="flex flex-col items-center gap-5">
              <h1 className="text-3xl text-center text-green-800 font-bold font-oswald">
                1° DAN
              </h1>
              <div className="flex flex-col items-center gap-1 text-xl font-gidole">
                <p>Battaglia Francesca</p>
                <p>Bettuzzi Paolo</p>
                <p>Buffagni Fabio</p>
                <p>Bulfamante Alessio</p>
                <p>Camurani Francesca</p>
                <More>
                  <p>Canali Erica</p>
                  <p>Canalini Fabio</p>
                  <p>Canarini Stefano</p>
                  <p>Casolari Daniele</p>
                  <p>Cataldo Vincenzo</p>
                  <p>Cavani Raffaele</p>
                  <p>Colli Francesco</p>
                  <p>Cuoghi Matteo</p>
                  <p>Dal Folco Giancarlo</p>
                  <p>Di Sano Romano</p>
                  <p>Fellone Domenico</p>
                  <p>Gandolfi Emilio</p>
                  <p>Lista Carlo</p>
                  <p>Lioia Rossella</p>
                  <p>Lufrano Federica</p>
                  <p>Magri Anna</p>
                  <p>Mangano Roberto</p>
                  <p>Marani Massimo</p>
                  <p>Medici Roberta</p>
                  <p>Montaggioli Nicolò</p>
                  <p>Nicolini Stefano</p>
                  <p>Olivastri Chiara</p>
                  <p>Orlandini Annalisa</p>
                  <p>Schenetti Caterina</p>
                  <p>Tirino Nazareno</p>
                  <p>Vezzani Simone</p>
                  <p>Zanelli Barbara</p>
                </More>
              </div>
            </div>
            <div className="flex flex-col items-center gap-5">
              <h1 className="text-3xl text-center text-green-800 font-bold font-oswald">
                2° DAN
              </h1>
              <div className="flex flex-col items-center gap-1 text-xl font-gidole">
                <p>Bisi Mauro</p>
                <p>Righi Mattia</p>
                <p>Scannavino Giovanni</p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-5">
              <h1 className="text-3xl text-center text-green-800 font-bold font-oswald">
                3° DAN
              </h1>
              <div className="flex flex-col items-center gap-1 text-xl font-gidole">
                <p>Di Martino Daniele</p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-5">
              <h1 className="text-3xl text-center text-green-800 font-bold font-oswald">
                5° DAN
              </h1>
              <div className="flex flex-col items-center gap-1 text-xl font-gidole">
                <p>Bondi Marco</p>
                <p>Casolari Giancarlo</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

export default Yudansha;
