module Data.Hero.HeroModel exposing (HeroProp, viewHero)

import Html exposing (..)
import Html.Attributes exposing (..)

-- author: { @Override } : Since: 20260725 @1604

type alias HeroProp =
  { class : String
  , text : String
  }


viewHero : List HeroProp -> Html msg
viewHero heroItems =
    section [ class "hero" ]
        (List.map (\item -> p [ class item.class ] [ text item.text ]) heroItems)
