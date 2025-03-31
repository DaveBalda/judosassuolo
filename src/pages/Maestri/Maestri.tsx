import PageLayout from "../../components/PageLayout";

function Maestri() {
  return (
    <PageLayout>
      <div className="flex flex-col">
        <div className="h-fit flex flex-row gap-32 items-center py-32 px-60 bg-gray-200 shadow-2xl">
          <div className="rounded-full w-[350px] max-h-[350px] h-auto overflow-hidden border">
            <img
              src="/images/maestri/giancarlo.png"
              width="350px"
              alt="Giancarlo Casolari"
            />
          </div>
          <div className="flex flex-col items-center justify-center gap-24 ml-auto">
            <h1 className="text-5xl font-bold font-oswald">
              Giancarlo Casolari
            </h1>
            <div className="flex flex-col gap-10 items-center">
              <p className="text-xl font-gidole flex flex-col gap-2 items-center">
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
              </p>
            </div>
          </div>
        </div>
        <div className="h-fit mt-20 mb-12 py-24 flex flex-row-reverse gap-10 items-center justify-center px-60">
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
              <p className="text-xl font-gidole flex flex-col gap-2 items-center">
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
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

export default Maestri;
