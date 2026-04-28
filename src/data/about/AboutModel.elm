module Data.About.AboutModel exposing (AboutProp, viewAbout)

import Html exposing (..)
import Html.Attributes exposing (..)

type alias AboutProp = 
  {
    class : String,
    headerText: String,
    text : String
  }

viewAbout : List AboutProp -> Html msg
viewAbout aboutItems =
  div [] (List.map (\item ->
    section [ class item.class, id item.class ]
      [ h2 [] [ text item.headerText ]
      , p [] [ text item.text ]
      ]
    ) aboutItems)
