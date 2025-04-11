import PageLayout from "../../components/PageLayout";

function Media() {
  return (
    <PageLayout title="Media">
      <div className="flex flex-row">
        <div className="flex flex-col gap-10 items-center w-1/2 h-fit px-32 py-24 bg-gray-200">
          <h1 className="text-4xl/20 text-center font-bold font-oswald">
            Sfoglia gli album
          </h1>
        </div>
        <div className="flex flex-col gap-10 items-center w-1/2 h-fit px-32 py-24 bg-emerald-600/50">
          <div className="yt-wrapper w-[640px] h-[360px] overflow-hidden rounded-md">
            <iframe
              src="https://www.youtube.com/embed/Nc0-m8euo-k?si=JzF88PCSVuiecxuB"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              className="w-full h-full"
            ></iframe>
          </div>
          <div className="yt-wrapper w-[640px] h-[360px] overflow-hidden rounded-md">
            <iframe
              src="https://www.youtube.com/embed/0oj81h44XRw?si=aXImGvFjA2KByjah"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

export default Media;
