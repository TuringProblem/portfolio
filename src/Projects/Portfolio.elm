module Projects.Portfolio exposing (project)

import Shared.Types exposing (Project)

-- author: { @Override } : Since: 20260725 @1604

project : Project
project =
    { title       = "Portfolio"
    , description = "This Website that you are currently looking at! Originally I wanted to write it in Typescript + Docasaurus but I challenged myself to learn Elm!"
    , url         = "https://github.com/TuringProblem/portfolio"
    , tags        = [ "Elm", "CSS", "HTML" ]
    , additionalText = Nothing
    }
