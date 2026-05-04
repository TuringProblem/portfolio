module Data.Hero.HeroData exposing (heroData)

import Data.Hero.HeroModel exposing (HeroProp)

-- author: { @Override } : Since: 20260725 @1604

heroData : List HeroProp
heroData =
  [ { class = "hero-title",    text = "Andrew" }
  , { class = "hero-subtitle", text = "Software Engineer" }
  , { class = "hero-bio",      text = "I'm a Computer Science Major at Northeastern University. Some of my interests include Programming Language Theory, Compilers, Type Theory, Logic, Mathematics, and Philosophy. I'm currently a software-engineer intern at <@href={https://www.hqo.com/} color={#234232} text={HqO}>." }

  ]
