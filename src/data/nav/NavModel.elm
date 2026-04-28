module Data.Nav.NavModel exposing (NavProp, viewNav)

import Html exposing (..)
import Html.Attributes exposing (..)

-- author: { @Override } : Since: 20260725 @1604

type alias NavProp =
  { href : String
  , text : String
  }


viewNav : List NavProp -> Html msg
viewNav navItems =
    nav [ class "nav" ]
        [ div [ class "nav-name"] []
        , ul [ class "nav-links" ]
            (List.map (\item -> li [] [ a [ href item.href ] [ text item.text ] ]) navItems)
        ]
