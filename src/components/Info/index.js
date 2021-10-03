import { useState, useEffect } from "react";
import {
  InfoContainer,
  InfoTitle,
  InfoText,
  InfoFooter,
  PrimaryButton,
} from "../../StyledComponents/Components.style";
import Logo from "../Logo";

const Info = () => {
  const [shouldDisplay, setShouldDisplay] = useState(false);
  useEffect(() => {
    if (window && window.localStorage) {
      const storage = window.localStorage;

      if (storage.getItem("mastermind") === null) {
        setShouldDisplay(true);
      } else {
        setShouldDisplay(false);
      }
    }
  }, []);

  const handleStart = () => {
    if (window && window.localStorage) {
      window.localStorage.setItem("mastermind", "true");
    }
    setShouldDisplay(false);
  };
  return shouldDisplay ? (
    <InfoContainer>
      <Logo />
      <InfoTitle>Rules are simple</InfoTitle>
      <InfoText>
        <p>
          You need to figure out which secret the game hides from you. A secret
          is a sequence of four unique colors.
        </p>
        <p>
          To find the secret you must select colors and create color sequences.
          After submitting each sequence, the game will give you a hint of how
          many colors are correct and how many colors are also the correct
          position. Then, based on the history of your sequences and hints you
          should be able to find the correct sequence that matches the secret.
        </p>
        <p>On minor detail: you have 9 tries! Good luck!</p>
      </InfoText>
      <InfoFooter>
        <PrimaryButton onClick={handleStart}>Start Game!</PrimaryButton>
      </InfoFooter>
    </InfoContainer>
  ) : null;
};

export default Info;
