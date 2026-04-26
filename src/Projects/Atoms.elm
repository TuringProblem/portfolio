module Projects.Atoms exposing (project)

import Shared.Types exposing (Project)

-- author: { @Override } : Since: 20260725 @1604

project : Project
project =
    { title       = "Atoms"
    , description = "I really enjoyed Latex, but I found Typst to fit my style more so I'm still working on a ui library for it"
    , url         = "https://github.com/TuringProblem/atoms"
    , tags        = [ "Typst", "Rust" ]
    , additionalText = Just "I'm not sure if you enjoy Latex, but $x = 5$ - that's pretty neat to have"
    }
