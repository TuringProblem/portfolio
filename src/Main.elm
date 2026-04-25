module Main exposing (main)

import Browser
import Html exposing (..)
import Html.Attributes exposing (..)
import Projects exposing (viewProjects)
import Data.Nav.NavModel exposing (viewNav)
import Data.Nav.NavData exposing (navData)
import Data.Hero.HeroModel exposing (viewHero)
import Data.Hero.HeroData exposing (heroData)

-- author: { @Override } : Since: 20260725 @1604

main : Program () () Never
main =
    Browser.sandbox { init = (), view = \_ -> view, update = \_ model -> model }


-- VIEW

view : Html Never
view =
    div [ class "app" ]
        [ viewNav navData
        , viewHero heroData
        , viewProjects
        , viewAbout
        , viewFooter
        ]


viewAbout : Html Never
viewAbout =
    section [ class "about", id "about" ]
        [ h2 [] [ text "About" ]
        , p [] [ text "Software engineer based in Boston. I like building clean, useful things." ]
        ]


viewFooter : Html Never
viewFooter =
    footer [ class "footer" ] [ p [] [ text "Built with Elm · ", a [ href "mailto:tazizthegreat@gmail.com" ] [ text "Get in touch" ] ] ]
