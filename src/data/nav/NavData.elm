module Data.Nav.NavData exposing (navData)

import Data.Nav.NavModel exposing (NavProp)

-- author: { @Override } : Since: 20260725 @1604

navData : List NavProp
navData =
  [ { href = "#projects", text = "Projects" }
  , { href = "#about", text = "About" }
  , { href = "https://github.com/turingProblem", text = "GitHub" }
  ]
