import React from "react";
import Typewriter from "typewriter-effect";

const AnimateText = () => {
  return (
    <div className="animateText">
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .typeString(
              `I build web applications that are user experience 
                        focused and provide enterprise solutions to businesses.`
            )
            .pauseFor(1000)
            // .deleteAll()
            .typeString(
              "<br/>Currently, I am an ERP Administrator at BA Nigeria Distribution Ltd. "
            )
            .pauseFor(1000)
            .typeString(
              "where I provide database management and business solutions."
            )
            .start();
        }}
      />
    </div>
  );
};

export default AnimateText;
