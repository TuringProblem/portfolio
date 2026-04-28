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
      text = ""
    }
  ]
