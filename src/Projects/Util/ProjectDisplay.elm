module Projects.Util.ProjectDisplay exposing (viewProject, viewTag)

import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (onClick)
import Shared.Types exposing (Project)

-- author: { @Override } : Since: 20260725 @1604

-- for now this should just be the logic for the card, but I'm going to create a component folder and add things in there - similiar to model structure
viewProject : (Project -> msg) -> Project -> Html msg
viewProject onSelect project =
    div [ class "project-card", onClick (onSelect project), style "cursor" "hover"]
        [ h3 [] [ text project.title ]
        , p [] [ text project.description ]
        , div [ class "tags" ] (List.map viewTag project.tags)
        ]


viewTag : String -> Html msg
viewTag tag =
    span [ class "tag" ] [ text tag ]

