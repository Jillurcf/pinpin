import { useRef } from "react";
import "./styles.css";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import img from "../assets/Images/bannerBackground.jpg";
import img1 from "../assets/Images/bacground1.jpg";
import img2 from "../assets/Images/background2.jpg";
import video from "../assets/video/mixkit-52476-video-52476-hd-ready.mp4"; // Add your video file

const mediaFiles = [video, img1, img, img2]; // Include your video file

const textFile = [
  {
    id: 1,
    title: "PIN PIN",
    description: "Things are Looking up",
    titleFontSize: "10rem", // Font size for the title on the first page
    descriptionFontSize: "3.5rem", // Font size for the description on the first page
    textAlign: "left-[30%]",
  },
  {
    id: 2,
    title: "Ambient computing for the real world.",
    description:
      "Introducing Ai Pin:The first multi-modal device that is wearable and easy to use. Whether you're making calls, sending messages, seeking answers, capturing moments, taking notes, or managing your digital world, Ai Pin acts as your assistant and second brain, allowing you to be present and in flow.",
    titleFontSize: "3rem", // Font size for the title on the second page
    descriptionFontSize: "2rem", // Font size for the description on the second page
    textAlign: "left-[4%]",
  },
  {
    id: 3,
    title: "Another Title",
    description: "Another Description",
    titleFontSize: "5rem", // Font size for the title on the third page
    descriptionFontSize: "2rem", // Font size for the description on the third page
    textAlign: "left-[4%]",
  },
  {
    id: 4,
    title: "More Titles",
    description: "More Descriptions",
    titleFontSize: "2.5rem", // Font size for the title on the fourth page
    descriptionFontSize: "1rem",
    textAlign: "left-[4%]",
  },
];

// Custom hook for creating parallax effect
function useParallax(value, distance) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

// Component to display each image or video with parallax effect
function Media({ file, text, index }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 50);

  const isVideo = file.endsWith(".mp4"); // Check if the file is a video

  const [firstWord, ...restOfTitleArr] = text.title.split(" ");

  const restOfTitle = restOfTitleArr.join(" ");

  
  return (
    <section>
      <div ref={ref}>
        {isVideo ? (
          <video
            className="fixed"
            src={file}
            controls
            autoPlay
            muted
            loop
            width="100%"
          /> // Display video with controls
        ) : (
          <img
            className="fixed"
            src={file}
            alt={`media-${index}`}
            width="100%"
          />
        )}
        {text && (
          <div className="bg-transparent text-white w-full h-full ">
            <motion.h2
              className={`text-white bottom-52 ${text.textAlign}`}
              style={{ y, fontSize: text.titleFontSize }}
            >
              {text.id === 1 ? (
                <span
                  style={{
                    color: "white",
                    fontWeight: "normal",
                    fontSize: "10rem",
                  }}
                >
                  {firstWord}
                </span>
              ) : text.id === 2 ? (
                <span
                  style={{
                    color: "gray",
                    fontWeight: "bold",
                    fontSize: "3rem",
                  }}
                >
                  {firstWord}
                </span>
              ) : text.id === 3 ? (
                <span
                  style={{
                    color: "blue",
                    fontWeight: "bold",
                    fontSize: "5rem",
                  }}
                >
                  {firstWord}
                </span>
              ) : text.id === 4 ? (
                <span
                  style={{
                    color: "purple",
                    fontWeight: "light",
                    fontSize: "2.5rem",
                  }}
                >
                  {firstWord}
                </span>
              ) : (
                <span>{firstWord}</span>
              )}
              {restOfTitle}
            </motion.h2>
            {text.id === 1 ? <motion.h2
                className={`text-white bottom-40 w-[800px] ${text.textAlign}`}
                style={{ y, fontSize: text.descriptionFontSize }}
              >
                {text.id === 1 ? (
                  <span
                    style={{
                      color: "white",
                      fontWeight: "normal",
                      fontSize: "3.5rem",
                    }}
                  >
                    {text.description}
                  </span>
                ) : text.id === 2 ? (
                  <span
                    style={{
                      width: "",
                      color: "white",
                      fontWeight: "bold",
                      fontSize: "1.5rem",
                      marginTop: "100px",
                    }}
                  >
                    {text.description}
                  </span>
                ) : text.id === 3 ? (
                  <span
                    style={{
                      color: "blue",
                      fontWeight: "bold",
                      fontSize: "5rem",
                    }}
                  >
                    {firstWord}
                  </span>
                ) : text.id === 4 ? (
                  <span
                    style={{
                      color: "purple",
                      fontWeight: "light",
                      fontSize: "2.5rem",
                    }}
                  >
                    {firstWord}
                  </span>
                ) : (
                  <span>{text.description}</span>
                )}
              </motion.h2> : text.id === 2 ? (
              <motion.h2
                className={`text-white bottom-4 w-[800px] ${text.textAlign}`}
                style={{ y, fontSize: text.descriptionFontSize }}
              >
                {text.id === 1 ? (
                  <span
                    style={{
                      color: "white",
                      fontWeight: "normal",
                      fontSize: "3.5rem",
                    }}
                  >
                    {text.description}
                  </span>
                ) : text.id === 2 ? (
                  <span
                    style={{
                      width: "",
                      color: "white",
                      fontWeight: "bold",
                      fontSize: "1.5rem",
                      marginTop: "100px",
                    }}
                  >
                    {text.description}
                  </span>
                ) : text.id === 3 ? (
                  <span
                    style={{
                      color: "blue",
                      fontWeight: "bold",
                      fontSize: "5rem",
                    }}
                  >
                    {firstWord}
                  </span>
                ) : text.id === 4 ? (
                  <span
                    style={{
                      color: "purple",
                      fontWeight: "light",
                      fontSize: "2.5rem",
                    }}
                  >
                    {firstWord}
                  </span>
                ) : (
                  <span>{text.description}</span>
                )}
              </motion.h2>
            ) : text.id === 3 ?(
              <motion.h2
                className={`text-white bottom-14 ${text.textAlign}`}
                style={{ y, fontSize: text.descriptionFontSize }}
              >
                {text.id === 1 ? (
                  <span
                    style={{
                      color: "white",
                      fontWeight: "normal",
                      fontSize: "3.5rem",
                    }}
                  >
                    {text.description}
                  </span>
                ) : text.id === 2 ? (
                  <span
                    style={{
                      width: "",
                      color: "white",
                      fontWeight: "bold",
                      fontSize: "1.5rem",
                      marginTop: "100px",
                    }}
                  >
                    {text.description}
                  </span>
                ) : text.id === 3 ? (
                  <span
                    style={{
                      color: "blue",
                      fontWeight: "bold",
                      fontSize: "5rem",
                    }}
                  >
                    {firstWord}
                  </span>
                ) : text.id === 4 ? (
                  <span
                    style={{
                      color: "purple",
                      fontWeight: "light",
                      fontSize: "2.5rem",
                    }}
                  >
                    {firstWord}
                  </span>
                ) : (
                  <span>{text.description}</span>
                )}
              </motion.h2>
            ) : text.id === 4 ?  <motion.h2
            className={`text-white bottom-14 ${text.textAlign}`}
            style={{ y, fontSize: text.descriptionFontSize }}
          >
            {text.id === 1 ? (
              <span
                style={{
                  color: "white",
                  fontWeight: "normal",
                  fontSize: "3.5rem",
                }}
              >
                {text.description}
              </span>
            ) : text.id === 2 ? (
              <span
                style={{
                  width: "",
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "1.5rem",
                  marginTop: "100px",
                }}
              >
                {text.description}
              </span>
            ) : text.id === 3 ? (
              <span
                style={{
                  color: "blue",
                  fontWeight: "bold",
                  fontSize: "5rem",
                }}
              >
                {firstWord}
              </span>
            ) : text.id === 4 ? (
              <span
                style={{
                  color: "purple",
                  fontWeight: "light",
                  fontSize: "2.5rem",
                }}
              >
                {firstWord}
              </span>
            ) : (
              <span>{text.description}</span>
            )}
          </motion.h2> :  <motion.h2
                className={`text-white bottom-14 ${text.textAlign}`}
                style={{ y, fontSize: text.descriptionFontSize }}
              >
                {text.id === 1 ? (
                  <span
                    style={{
                      color: "white",
                      fontWeight: "normal",
                      fontSize: "3.5rem",
                    }}
                  >
                    {text.description}
                  </span>
                ) : text.id === 2 ? (
                  <span
                    style={{
                      width: "",
                      color: "white",
                      fontWeight: "bold",
                      fontSize: "1.5rem",
                      marginTop: "100px",
                    }}
                  >
                    {text.description}
                  </span>
                ) : text.id === 3 ? (
                  <span
                    style={{
                      color: "blue",
                      fontWeight: "bold",
                      fontSize: "5rem",
                    }}
                  >
                    {firstWord}
                  </span>
                ) : text.id === 4 ? (
                  <span
                    style={{
                      color: "purple",
                      fontWeight: "light",
                      fontSize: "2.5rem",
                    }}
                  >
                    {firstWord}
                  </span>
                ) : (
                  <span>{text.description}</span>
                )}
              </motion.h2>
            }
          </div>
        )}
      </div>
    </section>
  );
}

// Main component rendering a series of media files and a progress bar
export default function HomePage() {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 100,
    restDelta: 0.001,
  });

  return (
    <>
      {mediaFiles.map((file, index) => (
        <Media key={index} file={file} text={textFile[index]} index={index} />
      ))}
      {/* <motion.div className="progress" style={{ scaleY }} /> */}
    </>
  );
}
