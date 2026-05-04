module Data.Hero.HeroModel exposing (HeroProp, viewHero)

import Html exposing (..)
import Html.Attributes exposing (..)
import Utils.Parser.StringRenderer exposing (renderString)

-- author: { @Override } : Since: 20260725 @1604

type alias HeroProp =
  { class : String
  , text : String
  }


viewHero : List HeroProp -> Html msg
viewHero heroItems =
    section [ class "hero" ]
        (List.map viewHeroItem heroItems)


viewHeroItem : HeroProp -> Html msg
viewHeroItem item =
    p [ class item.class ] (renderString item.text)
