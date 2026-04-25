module Main exposing (main)

import Browser
import Html exposing (..)
import Html.Attributes exposing (..)
import Projects exposing (viewProjects)


main : Program () () Never
main =
    Browser.sandbox { init = (),  view = \_ -> view, update = \_ model -> model }


type alias NavProp = 
  {
    href : String,
    text : String
  }

navData : List NavProp
navData = 
  [
    { href = "#projects", text = "Projects" },
    { href = "#about", text = "About" },
    { href = "https://github.com/turingProblem", text = "GitHub" }
  ]


type alias HeroProp = 
  {
    class : String,
    text : String
  }



heroData : List HeroProp
heroData =
  [
    {
      class = "hero-title",
      text = "Andrew"
    },
    {
      class = "hero-subtitle",
      text = "Software Engineer"
    },
    {
      class = "hero-bio",
      text = "I build things for the web."
    }
  ]



-- VIEW

view : Html Never
view =
    div [ class "app" ]
        [ 
          viewNav navData,
          viewHero heroData,
          viewProjects,
          viewAbout,
          viewFooter
        ]


viewNav : List NavProp -> Html Never
viewNav navItem =
    nav [ class "nav" ]
        [ div [ class "nav-name", style "background-image" "url(https://upload.wikimedia.org/wikipedia/en/thumb/b/b9/New_England_Patriots_logo.svg/1280px-New_England_Patriots_logo.svg.png)" ] [], ul [ class "nav-links" ]
            (List.map (\item -> li [] [ a [ href item.href ] [ text item.text ] ]) navItem)
        ]



viewHero : List HeroProp -> Html Never
viewHero heroItem =
    section [ class "hero" ]
        (List.map (\item -> p [ class item.class ] [ text item.text ]) heroItem)



viewAbout : Html Never
viewAbout =
    section [ class "about", id "about" ]
        [ 
          h2 [] [ text "About" ],
          p [] [ text "Software engineer based in Boston. I like building clean, useful things." ]
        ]


viewFooter : Html Never
viewFooter =
    footer [ class "footer" ] [ p [] [ text "Built with Elm · ", a [ href "mailto:tazizthegreat@gmail.com" ] [ text "Get in touch" ] ] ]
