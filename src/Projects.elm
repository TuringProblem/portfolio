module Projects exposing (viewProjectDetail, viewProjects)

import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (onClick)
import Shared.Types exposing (Project)
import Projects.Atoms
import Projects.Okronos
import Projects.Plt
import Projects.Portfolio

-- author: { @Override } : Since: 20260725 @1604


-- To add a new project: create src/projects/<name>/<Name>.elm and add it here.
projects : List Project
projects =
    [ Projects.Portfolio.project
    , Projects.Okronos.project
    , Projects.Atoms.project
    , Projects.Plt.project
    ]


viewProjects : (Project -> msg) -> Html msg
viewProjects onSelect =
    section [ class "projects", id "projects" ]
        [ h2 [] [ text "Projects" ]
        , div [ class "project-grid" ] (List.map (viewProject onSelect) projects)
        ]


viewProject : (Project -> msg) -> Project -> Html msg
viewProject onSelect project =
    div [ class "project-card", onClick (onSelect project), style "cursor" "hover"]
        [ h3 [] [ text project.title ]
        , p [] [ text project.description ]
        , div [ class "tags" ] (List.map viewTag project.tags)
        ]



displayAdditionalText : Maybe String -> Html msg
displayAdditionalText additionalText =
    case additionalText of
        Nothing ->
            div [] []
        Just txt ->
            p [ class "project-detail-additional-text" ] [ text txt ]


viewProjectDetail : msg -> Project -> Html msg
viewProjectDetail onBack project =
    div [ class "app" ]
        [ section [ class "project-detail" ]
            [ button [ class "back-btn", onClick onBack ] [ text "← Back" ]
            , div [ class "project-detail-header" ]
                [ div [ class "project-detail-inner-header" ]
                    [ h1 [] [ text project.title ]
                    , div [ class "tags" ] (List.map viewTag project.tags)
                    ]
                , a [ class "project-link", href project.url, target "_blank", rel "noopener noreferrer" ]
                    [ text "View on GitHub →" ]
                ]
            , p [ class "project-detail-description" ] [ text project.description ]
            , displayAdditionalText project.additionalText
            ]
        ]


viewTag : String -> Html msg
viewTag tag =
    span [ class "tag" ] [ text tag ]
