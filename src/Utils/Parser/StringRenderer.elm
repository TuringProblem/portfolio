module Utils.Parser.StringRenderer exposing (renderString)

import Html exposing (..)
import Html.Attributes exposing (..)
import Utils.Parser.StringParser exposing (AtType(..), Token(..), parseString)


-- author: { @Override } : Since: 20260504


renderString : String -> List (Html msg)
renderString input =
    List.map renderToken (parseString input)


renderToken : Token -> Html msg
renderToken token =
    case token of
        Text str ->
            Html.text str

        Tag Href url params ->
            let
                maybeColor = getParam "color" params
                maybeDownloadable = getParam "download" params
                label      = getParam "text" params |> Maybe.withDefault url
                colorAttr  = case maybeColor of
                    Just c  -> [ style "color" c ]
                    Nothing -> []

                downloadAttr = case maybeDownloadable of
                    Just d  -> [ download d]
                    Nothing -> []
            in
            a ([ href url, target "_blank"] ++ colorAttr ++ downloadAttr) [ Html.text label ]

        Tag Math expr _ ->
            span [ class "math" ] [ Html.text expr ]

        Tag Codeblock codeContent params ->
            let lang = getParam "language" params |> Maybe.withDefault ""
            in
            Html.pre [ class "dsl-codeblock" ]
                [ Html.code [ class ("language-" ++ lang) ] (renderString codeContent) ]


getParam : String -> List ( String, String ) -> Maybe String
getParam key params =
    params
        |> List.filter (\( k, _ ) -> k == key)
        |> List.head
        |> Maybe.map Tuple.second
