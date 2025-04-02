import PageLayout from "../../components/PageLayout";

function Corsi() {
  return (
    <PageLayout>
      <div className="flex flex-col">
        <div className="h-fit flex flex-col gap-10 items-center py-24 px-52 bg-gray-200 shadow-2xl">
          <div className="flex flex-col items-center gap-3">
            <h1 className="text-5xl font-bold font-oswald pt-2 pb-3.5 px-4 bg-green-900 rounded-3xl text-white">
              Junior
            </h1>
            <p className="text-xl font-oswald">
              per i bambini di 4-5 anni di età
            </p>
          </div>
          <hr className="w-full border-gray-300" />
          <div className="flex flex-row gap-24 items-center">
            <div className="rounded-xl w-[700px] max-h-[700px] h-auto overflow-hidden border">
              <img
                src="/images/corsi/garabimbi.jpeg"
                width="700px"
                alt="Corso Junior"
              />
            </div>
            <div className="flex flex-col w-full justify-center items-center gap-20 text-center px-10">
              <div className="flex flex-col gap-2 items-center">
                <h1 className="text-3xl font-bold font-oswald">
                  Giorni e Orari
                </h1>
                <p className="text-xl font-oswald">
                  Il corso si terrà il <strong>martedì</strong> e il{" "}
                  <strong>giovedì</strong> dalle ore <strong>17:30</strong> alle
                  ore <strong>18:30</strong>
                </p>
              </div>
              <div className="flex flex-col gap-2 items-center">
                <h1 className="text-3xl font-bold font-oswald">
                  Informazioni sul corso
                </h1>
                <div className="flex flex-col items-center gap-5">
                  <p className="text-xl font-oswald">
                    L'attività proposta sarà un percorso neuro-motorio{" "}
                    <strong>"MoviMente"</strong> volto ad incentivare lo
                    sviluppo intellettivo e motorio dei bambini di 4 o 5 anni di
                    età. Questo percorso, negli anni, si è dimostrato{" "}
                    <strong>molto efficace</strong> nella crescita di tutti i
                    bambini che lo hanno sperimentato.
                  </p>
                  <a
                    href="https://www.propatriajudo.it/presentazione-progetto-judogiocando"
                    target="_blank"
                    className="font-gidole bg-red-500 hover:bg-red-600 px-6 py-3 text-xl rounded-lg text-white"
                  >
                    Scopri di più
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

export default Corsi;
