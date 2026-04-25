module Projects exposing (Project, projects, viewProjects)

import Html exposing (..)
import Html.Attributes exposing (..)

urlLink : String
urlLink =
    "https://github.com/TuringProblem"

type alias Project =
    { 
      title : String,
      description : String,
      url : String,
      tags : List String
    }



projects : List Project
projects =
    [ { 
        title = "Project One",
        description = "A short description of what this project does and why it matters.", 
        url = urlLink,
        tags = [ "Elm", "CSS" ]
      },
      { 
        title = "Project Two",
        description = "A short description of what this project does and why it matters.",
        url = urlLink,
        tags = [ "TypeScript", "Node" ]
      }
    ]


viewProjects : Html Never
viewProjects =
    section [ class "projects", id "projects" ]
        [ 
          h2 [] [ text "Projects" ], 
          div [ class "project-grid" ] (List.map viewProject projects)
        ]


viewProject : Project -> Html Never
viewProject project =
    a [ class "project-card", href project.url, target "_blank", rel "noopener noreferrer" ]
        [ 
          h3 [] [ text project.title ], 
          p [] [ text project.description ], 
          div [ class "tags" ] (List.map viewTag project.tags)
        ]


viewTag : String -> Html Never
viewTag tag = span [ class "tag" ] [ text tag ]
