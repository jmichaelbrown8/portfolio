import React from "react";
import Polaroid from "../components/Polaroid";

const styles = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, 25rem)",
  gap: "2em",
  justifyItems: "center",
  alignItems: "center",
  justifyContent: "center",
  alignContent: "center",
  padding: "2em",
};

const photos = [
  "media/photos/201609.jpg",
  "media/photos/201911.jpg",
  "media/photos/1738949.jpg",
  "media/photos/1740907.jpg",
  "media/photos/1742479.jpg",
  "media/photos/1742670.jpg",
  "media/photos/1742725.jpg",
  // "media/photos/1743070.jpg",
  // "media/photos/10499267.jpg",
  // "media/photos/10518208.jpg",
  // "media/photos/10520167.jpg",
  // "media/photos/10522827.jpg",
  // "media/photos/10584554.jpg",
  // "media/photos/10808704.jpg",
  // "media/photos/11116798.jpg",
  // "media/photos/11187073.jpg",
  // "media/photos/11189925.jpg",
  // "media/photos/11191470.jpg",
  // "media/photos/11192873.jpg",
  // "media/photos/11195720.jpg",
  // "media/photos/11208195.jpg",
  // "media/photos/11246075.jpg",
  // "media/photos/11258037.jpg",
  // "media/photos/11272778.jpg",
  // "media/photos/11283304.jpg",
  // "media/photos/11313691.jpg",
  // "media/photos/11325095.jpg",
  // "media/photos/11325406.jpg",
  // "media/photos/11372459.jpg",
  // "media/photos/11373682.jpg",
  // "media/photos/11374685.jpg",
  // "media/photos/11377550.jpg",
  // "media/photos/11377855.jpg",
  // "media/photos/11380821.jpg",
];

const work = photos.map((photo) => ({ imageUrl: photo }));

function Photos() {
  return (
    <section style={styles} className="gallery">
      {work.map((workItem) => (
        <Polaroid key={workItem.imageUrl} {...workItem} highlight="yellow" />
      ))}
    </section>
  );
}

export default Photos;
