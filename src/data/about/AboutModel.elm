module Data.About.AboutModel exposing (AboutProp, viewAbout)

import Html exposing (..)
import Html.Attributes exposing (..)
import Utils.Parser.StringRenderer exposing (renderString)


-- author: { @Override } : Since: 20260509 @1904
type alias AboutProp = 
  {
    class : String,
    headerText: String,
    text : String
  }

displayAboutComponents : AboutProp -> Html msg
displayAboutComponents = (\item ->
    section [ class item.class, id item.class ]
      [ h2 [] [ text item.headerText ]
      , p [] (renderString item.text)
      ]
    ) 

viewAbout : List AboutProp -> Html msg
viewAbout aboutItems =
  div [] (List.map  displayAboutComponents aboutItems)
