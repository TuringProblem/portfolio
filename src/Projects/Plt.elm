module Projects.Plt exposing (project)

import Shared.Types exposing (Project)

-- author: { @Override } : Since: 20260725 @1604

project : Project
project =
    { class       = "plt"
    , title       = "PLT"
    , description = "This repo contains all of my theoretical research on Compilers/Programming Langauges/any theory topics that I find interesting."
    , url         = "https://github.com/TuringProblem/plt"
    , tags        = [ "TypeScript", "Racket", "Ocaml", "Plait" ]
    , additionalText = Just "There is something really cool about compilers - I've always had a fascination with them. I think it's mostly because we just expect the language to work as developers but don't really appreciate the high-level abstraction that we get to use on a daily basis because MAN DOES IT GET LOW-LEVEL"
    }
