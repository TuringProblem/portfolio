module Shared.Types exposing (Project)

-- author: { @Override } : Since: 20260725 @1604

-- Shared types that multiple modules need.
-- Lives here to avoid circular imports between Projects.elm and individual project modules.

type alias Project =
    { class       : String
    , title       : String
    , description : String
    , url         : String
    , tags        : List String
    , additionalText : Maybe String
    }


