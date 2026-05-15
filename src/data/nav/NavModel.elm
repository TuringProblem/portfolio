module Data.Nav.NavModel exposing (NavProp, viewNav)

import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (onClick)
import Shared.Types exposing (Theme(..))

-- author: { @Override } : Since: 20260725 @1604

type alias NavProp =
  { href : String
  , text : String
  }

-- This flag is what is going to trigger the blog when it's ready
isBlogEnabled : Bool
isBlogEnabled = False


displayProps : NavProp -> Html msg
displayProps = (\item -> li [] [ (if item.href == "/blog" && not isBlogEnabled then a[][] else a [ href item.href ] [ text item.text ]) ])

viewNav : List NavProp -> Theme -> msg -> Html msg
viewNav navItems theme toggleMsg =
    nav [ class "nav" ]
        [ a [ href "#", class "nav-logo" ]
            [ img [ src "./images/formal-languages.png", alt "Andrew", class "nav-avatar" ] [] ]
        , ul [ class "nav-links" ]
            (List.map displayProps navItems)
        , button [ class "theme-toggle", onClick toggleMsg ]
            [ text (case theme of
                Dark -> "Light"
                Light -> "Dark"
            ) ]
        ]
