module Data.About.AboutData exposing (aboutData)

import Data.About.AboutModel exposing (AboutProp)

-- author: { @Override } : Since: 20260726 @1020


-- What does the data look like for about?
aboutData : List AboutProp
aboutData =
  [
    {
      class = "about",
      headerText = "About",
      text = "Software engineer based in Boston. Here are some things I enjoy. <@codeblock={-   Music 🎶\n-   <@href={https://en.wikipedia.org/wiki/Disc_golf} text={Disc Golf} color={#3ded97}> 🥏\n-   Gaming 🎮\n-   Basketball 🏀}> "
    }
  ]
