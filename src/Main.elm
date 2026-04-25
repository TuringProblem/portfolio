module Main exposing (main)

import Browser
import Html exposing (..)
import Html.Attributes exposing (..)
import Projects exposing (viewProjects)


main : Program () () Never
main =
    Browser.sandbox { init = (),  view = \_ -> view, update = \_ model -> model }



-- VIEW


view : Html Never
view =
    div [ class "app" ]
        [ 
          viewNav,
          viewHero,
          viewProjects,
          viewAbout,
          viewFooter
        ]


viewNav : Html Never
viewNav =
    nav [ class "nav" ]
        [ div [ class "nav-name", style "background-image" "url(https://upload.wikimedia.org/wikipedia/en/thumb/b/b9/New_England_Patriots_logo.svg/1280px-New_England_Patriots_logo.svg.png)" ] [], ul [ class "nav-links" ]
            [ 
              li [] [ a [ href "#projects" ] [ text "Projects" ] ],
              li [] [ a [ href "#about" ] [ text "About" ] ],
              li [] [ a [ href "https://github.com/turingProblem", target "_blank" ] [ text "GitHub" ] ]
            ]
        ]


viewHero : Html Never
viewHero =
    section [ class "hero" ]
        [ 
          h1 [ class "hero-title" ] [ text "Andrew  " ],
          p [ class "hero-subtitle" ] [ text "Software Engineer" ],
          p [ class "hero-bio" ] [ text "I build things for the web." ]
        ]



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
