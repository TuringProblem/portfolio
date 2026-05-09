module Projects.Jpiler exposing (project)

import Shared.Types exposing (Project)

-- author: { @Override } : Since: 20260725 @1604

project : Project
project =
    { class       = "jpiler"
    , title       = "Jpiler"
    , description = "This repo is a simple transplier, taking normal java source code and converting it to a simple IR representation. (Similier to Compiler Explorer)"
    , url         = "https://github.com/TuringProblem/JPiler"
    , tags        = [ "Java", "JavaFX", "Gradle", "Maven" ]
    , additionalText = Nothing 
    , imageUrls    = Nothing 
    }

