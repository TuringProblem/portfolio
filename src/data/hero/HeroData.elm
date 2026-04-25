module Data.Hero.HeroData exposing (heroData)

import Data.Hero.HeroModel exposing (HeroProp)

-- author: { @Override } : Since: 20260725 @1604

heroData : List HeroProp
heroData =
  [ { class = "hero-title",    text = "Andrew" }
  , { class = "hero-subtitle", text = "Software Engineer" }
  , { class = "hero-bio",      text = "I build things for the web." }
  ]
