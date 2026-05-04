module Main exposing (main)

import Browser
import Html exposing (..)
import Html.Attributes exposing (..)
import Projects exposing (viewProjectDetail, viewProjects)
import Shared.Types exposing (Project)
import Data.Nav.NavModel exposing (viewNav)
import Data.Nav.NavData exposing (navData)
import Data.About.AboutModel exposing (viewAbout)
import Data.About.AboutData exposing (aboutData)
import Data.Hero.HeroModel exposing (viewHero)
import Data.Hero.HeroData exposing (heroData)
import Time

-- author: { @Override } : Since: 20260725 @1604


type Page
    = Home
    | ProjectDetail Project

type alias Model =
    { page : Page
    , carouselIndex : Int
    }

type Msg
    = GoTo Page
    | CarouselPrev
    | CarouselNext
    | CarouselTick Time.Posix


main : Program () Model Msg
main =
    Browser.element
        { init          = \_ -> ( { page = Home, carouselIndex = 0 }, Cmd.none )
        , update        = update
        , view          = view
        , subscriptions = subscriptions
        }


type alias Record =
  {
    class : String
  , mail : String
  , inTouch : String
  , text : String
  }

footerConsts : Record
footerConsts =
  {
    class = "footer",
    mail = "mailto:tazizthegreat@gmail.com",
    inTouch = "Get in touch",
    text = "Built with Elm · "
  }


subscriptions : Model -> Sub Msg
subscriptions model =
    case model.page of
        ProjectDetail project ->
            case project.imageUrls of
                Just (_ :: _) ->
                    Time.every 3000 CarouselTick

                _ ->
                    Sub.none

        Home ->
            Sub.none


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        GoTo page ->
            let resetIndex =
                    case page of
                        ProjectDetail _ -> 0
                        Home -> model.carouselIndex in
            ( { model | page = page, carouselIndex = resetIndex }, Cmd.none )

        CarouselPrev ->
            ( { model | carouselIndex = model.carouselIndex - 1 }, Cmd.none )

        CarouselNext ->
            ( { model | carouselIndex = model.carouselIndex + 1 }, Cmd.none )

        CarouselTick _ ->
            ( { model | carouselIndex = model.carouselIndex + 1 }, Cmd.none )


view : Model -> Html Msg
view model =
    case model.page of
        Home ->
            viewHome

        ProjectDetail project ->
            viewProjectDetail (GoTo Home) CarouselPrev CarouselNext model.carouselIndex project


viewHome : Html Msg
viewHome =
    div [ class "app" ]
        [ viewNav navData
        , viewHero heroData
        , viewProjects (\p -> GoTo (ProjectDetail p))
        , viewAbout aboutData
        , viewFooter
        ]

viewFooter : Html msg
viewFooter =
    footer [ class footerConsts.class ]
        [ p [] [ text footerConsts.text, a [ href footerConsts.mail ] [ text footerConsts.inTouch ] ] ]
