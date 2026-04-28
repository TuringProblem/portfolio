module Main exposing (main)

import Browser
import Html exposing (..)
import Html.Attributes exposing (..)
import Projects exposing (viewProjectDetail, viewProjects)
import Shared.Types exposing (Project)
import Data.Nav.NavModel exposing (viewNav)
import Data.Nav.NavData exposing (navData)
import Data.Hero.HeroModel exposing (viewHero)
import Data.Hero.HeroData exposing (heroData)

-- author: { @Override } : Since: 20260725 @1604


-- The two possible "pages" in the app.
-- ProjectDetail carries the full project record so the detail view has all the data it needs.
-- TODO: find a way to contain the Poject with some extra fiels
type Page
    = Home
    | ProjectDetail Project

type alias Model = { page : Page }
type Msg = GoTo Page


main : Program () Model Msg
main =
    Browser.element
        { init          = \_ -> ( { page = Home }, Cmd.none )
        , update        = update
        , view          = view
        , subscriptions = \_ -> Sub.none
        }


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        GoTo page ->
            ( { model | page = page }, Cmd.none )


-- Switches what to render based on the current page.
-- Think of this like: if (page === 'home') return <Home /> else return <ProjectDetail />
view : Model -> Html Msg
view model =
    case model.page of
        Home -> viewHome
        ProjectDetail project -> viewProjectDetail (GoTo Home) project


viewHome : Html Msg
viewHome =
    div [ class "app" ]
        [ viewNav navData
        , viewHero heroData
        , viewProjects (\p -> GoTo (ProjectDetail p))
        , viewAbout
        , viewFooter
        ]


viewAbout : Html msg
viewAbout =
    section [ class "about", id "about" ]
        [ 
          h2 [] [ text "About" ],
          p [] [ text "Software engineer based in Boston. I like building clean, useful things." ]
        ]


viewFooter : Html msg
viewFooter =
    footer [ class "footer" ]
        [ p [] [ text "Built with Elm · ", a [ href "mailto:tazizthegreat@gmail.com" ] [ text "Get in touch" ] ] ]
