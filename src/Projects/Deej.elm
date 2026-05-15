module Projects.Deej exposing (project)

import Shared.Types exposing (Project)

-- author: { @Override } : Since: 20260510 @0100

project : Project
project =
    { class       = "deej"
    , title       = "Deej"
    , description = ""
    , url         = "https://github.com/TuringProblem/deej"
    , tags        = [ "C" ]
    , additionalText = Nothing
    , imageUrls    = Nothing
    }
