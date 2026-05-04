module Data.Hero.HeroModel exposing (HeroProp, viewHero)

import Html exposing (..)
import Html.Attributes exposing (..)
import Utils.Parser.StringParser exposing (AtType(..), Token(..), parseString)

-- author: { @Override } : Since: 20260725 @1604

type alias HeroProp =
  { class : String
  , text : String
  }


viewHero : List HeroProp -> Html msg
viewHero heroItems =
    section [ class "hero" ]
        (List.map viewHeroItem heroItems)


viewHeroItem : HeroProp -> Html msg
viewHeroItem item =
    p [ class item.class ]
        (List.map renderToken (parseString item.text))


renderToken : Token -> Html msg
renderToken token =
    case token of
        Text str ->
            Html.text str

        Tag Href url params ->
            let
                maybeColor = getParam "color" params
                label     = getParam "text" params |> Maybe.withDefault url
                colorAttr = case maybeColor of
                    Just c  -> [ style "color" c ]
                    Nothing -> []
            in
            a ([ href url, target "_blank" ] ++ colorAttr) [ Html.text label ]

        Tag Math expr _ ->
            span [ class "math" ] [ Html.text expr ]

        Tag Codeblock codeContent params ->
            let lang = getParam "language" params |> Maybe.withDefault ""
            in
            Html.code [ class ("language-" ++ lang) ] [ Html.text codeContent ]


getParam : String -> List ( String, String ) -> Maybe String
getParam key params =
    params
        |> List.filter (\( k, _ ) -> k == key)
        |> List.head
        |> Maybe.map Tuple.second
