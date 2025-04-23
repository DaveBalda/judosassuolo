import Carousel from "../../components/Carousel/Carousel";
import PageLayout from "../../components/PageLayout";
import "./Media.css";

function Media() {
  const CAR1_IMAGES = [
    "/images/carousel/car1/car1.jpg",
    "/images/carousel/car1/car2.jpg",
    "/images/carousel/car1/car3.jpg",
    "/images/carousel/car1/car4.jpg",
    "/images/carousel/car1/car5.jpg",
    "/images/carousel/car1/car6.jpg",
    "/images/carousel/car1/car7.jpg",
    "/images/carousel/car1/car8.jpg",
    "/images/carousel/car1/car9.jpg",
    "/images/carousel/car1/car10.jpg",
    "/images/carousel/car1/car11.jpg",
  ];

  const CAR2_IMAGES = [
    "/images/carousel/car2/car1.jpg",
    "/images/carousel/car2/car2.jpg",
    "/images/carousel/car2/car3.jpg",
    "/images/carousel/car2/car4.jpg",
    "/images/carousel/car2/car5.jpg",
    "/images/carousel/car2/car6.jpg",
    "/images/carousel/car2/car7.jpg",
    "/images/carousel/car2/car8.jpg",
    "/images/carousel/car2/car9.jpg",
    "/images/carousel/car2/car10.jpg",
    "/images/carousel/car2/car11.jpg",
    "/images/carousel/car2/car12.jpg",
    "/images/carousel/car2/car13.jpg",
    "/images/carousel/car2/car14.jpg",
    "/images/carousel/car2/car15.jpg",
  ];

  return (
    <PageLayout title="Media">
      <div className="media-main">
        <div className="media-row1">
          <h1 className="text-4xl/20 text-center font-bold font-oswald">
            Sfoglia gli album
          </h1>
          <div className="carousel-wrapper">
            <Carousel className="carousel" imageUrls={CAR1_IMAGES} />
          </div>
          <div className="carousel-wrapper">
            <Carousel className="carousel" imageUrls={CAR2_IMAGES} />
          </div>
        </div>
        <div className="media-row2">
          <h1 className="text-4xl/20 text-center font-bold font-oswald">
            Guarda i video
          </h1>
          <div className="yt-wrapper">
            <iframe
              src="https://www.youtube.com/embed/Nc0-m8euo-k?si=JzF88PCSVuiecxuB"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              className="w-full h-full"
            ></iframe>
          </div>
          <div className="yt-wrapper">
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
