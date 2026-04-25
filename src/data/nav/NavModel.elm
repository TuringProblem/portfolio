module Data.Nav.NavModel exposing (NavProp, viewNav)

import Html exposing (..)
import Html.Attributes exposing (..)

-- author: { @Override } : Since: 20260725 @1604

type alias NavProp =
  { href : String
  , text : String
  }


viewNav : List NavProp -> Html Never
viewNav navItems =
    nav [ class "nav" ]
        [ div [ class "nav-name", style "background-image" "url(https://upload.wikimedia.org/wikipedia/en/thumb/b/b9/New_England_Patriots_logo.svg/1280px-New_England_Patriots_logo.svg.png)" ] []
        , ul [ class "nav-links" ]
            (List.map (\item -> li [] [ a [ href item.href ] [ text item.text ] ]) navItems)
        ]
