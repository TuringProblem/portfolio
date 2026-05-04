module Utils.Parser.StringParser exposing (AtType(..), Token(..), parseString)

import Parser exposing (..)


-- author: { @Override } : Since: 20260802


type AtType
    = Href
    | Math
    | Codeblock


type Token
    = Text String
    | Tag AtType String (List ( String, String ))


parseString : String -> List Token
parseString input =
    Parser.run tokensParser input
        |> Result.withDefault [ Text input ]


tokensParser : Parser (List Token)
tokensParser =
    loop [] tokensHelp


tokensHelp : List Token -> Parser (Step (List Token) (List Token))
tokensHelp acc =
    oneOf
        [ map (\t -> Loop (t :: acc)) (backtrackable tagParser)
        , map (\t -> Loop (t :: acc)) textParser
        , succeed (Done (List.reverse acc))
        ]


tagParser : Parser Token
tagParser =
    succeed (\atType primary params -> Tag atType primary params)
        |. symbol "<@"
        |= atTypeParser
        |. symbol "={"
        |= bracedValue
        |. symbol "}"
        |= paramsParser
        |. symbol ">"


atTypeParser : Parser AtType
atTypeParser =
    oneOf
        [ succeed Href |. keyword "href"
        , succeed Math |. keyword "math"
        , succeed Codeblock |. keyword "codeblock"
        ]


bracedValue : Parser String
bracedValue =
    getChompedString (chompWhile (\c -> c /= '}'))


paramsParser : Parser (List ( String, String ))
paramsParser =
    loop [] paramsHelp


paramsHelp : List ( String, String ) -> Parser (Step (List ( String, String )) (List ( String, String )))
paramsHelp acc =
    oneOf
        [ backtrackable
            (succeed (\k v -> Loop (( k, v ) :: acc))
                |. spaces
                |= keyParser
                |. symbol "={"
                |= bracedValue
                |. symbol "}"
            )
        , succeed (Done (List.reverse acc))
        ]


keyParser : Parser String
keyParser =
    getChompedString
        (succeed ()
            |. chompIf Char.isAlpha
            |. chompWhile (\c -> Char.isAlphaNum c || c == '-' || c == '_')
        )


textParser : Parser Token
textParser =
    map Text <|
        getChompedString <|
            succeed ()
                |. chompIf (\c -> c /= '<')
                |. chompWhile (\c -> c /= '<')
