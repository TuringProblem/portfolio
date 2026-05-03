module Components.Carousel.Carousel exposing (viewCarousel)

import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (onClick)
import Html.Keyed as Keyed

-- author: { @Override } : Since: 20260802 @0950

viewCarousel : msg -> msg -> Int -> List String -> Html msg
viewCarousel onPrev onNext currentIndex imageUrls =
    case imageUrls of
        [] ->
            div [] []

        _ ->
            let total = List.length imageUrls
                safeIndex = modBy total currentIndex
                current = imageUrls |> List.drop safeIndex |> List.head in
            div [ class "carousel" ]
                [ case current of
                    Nothing ->
                        div [] []
                    Just url ->
                        Keyed.node "div"
                            [ class "carousel-track" ]
                            [ ( String.fromInt safeIndex
                              , img [ class "carousel-image", src url] []
                              )
                            ]
                , div [ class "carousel-controls" ]
                    [ button [ class "carousel-btn", onClick onPrev ] [ text "←" ]
                    , div [ class "carousel-dots" ]
                        (List.indexedMap (\i _ -> span [ class (if i == safeIndex then "carousel-dot carousel-dot--active" else "carousel-dot") ] []) imageUrls)
                    , button [ class "carousel-btn", onClick onNext ] [ text "→" ]
                    ]
                ]
