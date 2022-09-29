API url: http://aquamon.starsknights.com:18888/v1

Endpoint:  /auth
Method: POST
Description: User Login
Body sample:
{
    "aid": "abc@aquadb.com",
    "code": "asdasdas"
}

where 
aid = username (email)
code = password

return token (for login)

Endpoint: /user
Method: GET
Description: User Info (No password return)
Body sample:
{
    "token": "<secret>"
}

where 
token = the token you get from /auth

Endpoint: /user
Method: PUT
Description: Update user info
Body sample:
{
    "token": "<secret>"
    "u": { Update information}
}

where 
token = the token you get from /auth
u = please check the return structure in User Info

Endpoint: /fish
Method: GET
Description: List ALL fish information available in database

Endpoint: /fish/:id
Method: GET
Description: List a fish information available in database. :id must match with DB PK

Endpoint: /fish
Method: POST
Description: Create a new fish information to the database
Body sample:
{
    "enname": "Grass carp",
    "zhname": "鯇魚",
    "endescription": "Grass carp have elongated, chubby, torpedo-shaped body forms. The terminal mouth is slightly oblique with non-fleshy, firm lips, and no barbels. The complete lateral line contains 40 to 42 scales. Broad, ridged pharyngeal teeth are arranged in a '2, 4-4, 2' formula. The dorsal fin has eight to 10 soft rays, and the anal fin is set closer to the tail than most cyprinids. Body color is dark olive, shading to brownish-yellow on the sides, with a white belly and large, slightly outlined scales.",
    "zhdescription": "本魚體側扁且延長，吻短而圓鈍，口大，無鬚，特徵是具2排梳狀咽頭齒。魚體背部青褐色而略帶黃色，腹部乳白，鱗片大且具黑緣；側線完整，側線鱗38-42枚，胸鰭與腹鰭略帶黃色，尾鰭淺叉形，背鰭硬棘3枚； 背鰭軟條7至8枚；臀鰭硬棘3枚；臀鰭軟條7至11枚，體長可達1.5公尺。",
    "kindom": "Animalia",
    "phylum": "Chordata",
    "class": "Actinopterygii",
    "order": "Cypriniformes",
    "family": "Cyprinidae",
    "subfamily": "Squaliobarbinae",
    "genus": "Ctenopharyngodon",
    "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Ctenopharyngodon_idella.jpg/220px-Ctenopharyngodon_idella.jpg",
    "environment": {
        "minTemp": 10,
        "maxTemp": 25,
        "minO2": 0.24,
        "minpH": 3,
        "maxpH": 7,
        "minDepth": 2,
        "maxDepth": 2.5
    }
}      

Endpoint: /fish
Method: PUT
Description: Update a new fish information to the database, based on id
Body sample:
{
    "id": "<id>",
    "u": {
        "enname": "Grass carp"
    }
}

Note: elements in under u is same as create a new record

