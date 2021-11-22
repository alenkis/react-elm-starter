port module CodeGenTarget exposing (..)

import InteropDefinitions
import Json.Encode
import TsJson.Decode
import TsJson.Encode
import TsJson.Type


allTypeDefs : { fromElm : String, toElm : String, flags : String }
allTypeDefs =
    { fromElm = TsJson.Encode.tsType InteropDefinitions.interop.fromElm |> TsJson.Type.toTypeScript
    , toElm = TsJson.Decode.tsType InteropDefinitions.interop.toElm |> TsJson.Type.toTypeScript
    , flags = TsJson.Decode.tsType InteropDefinitions.interop.flags |> TsJson.Type.toTypeScript
    }


port fromElm : Json.Encode.Value -> Cmd msg


port elmTsInteropTypeDefinitions :
    { fromElm : String
    , toElm : String
    , flags : String
    }
    -> Cmd msg


main : Program () () ()
main =
    Platform.worker
        { init =
            \() ->
                ( ()
                , elmTsInteropTypeDefinitions allTypeDefs
                )
        , update = \msg model -> ( model, Cmd.none )
        , subscriptions = \() -> Sub.none
        }
