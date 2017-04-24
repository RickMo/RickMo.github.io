<?php
    ini_set("allow_url_fopen", true);

    $siteRootUrl = "https://jangosto.github.io/";
    $siteRootPath = "/home/jangosto/projects/elmundo/pwa/";
    $originDomain = "http://www.elmundo.es/";

    $sections = array("index", "economia", "espana", "deportes");

    foreach ($sections as $section) {
        $coverHtml = getFile($originDomain.$section.".html");
        $coverHtml = str_replace($originDomain, "/", $coverHtml);
        $coverHtml = str_replace("http://e00-marca.uecdn.es/", "/", $coverHtml);
        $coverHtml = str_replace("http://estaticos.elmundo.es/", "/", $coverHtml);

        $autocoverJson = file_get_contents("http://www.elmundo.es/json/".$section.".json");

        $autocoverArray = json_decode($autocoverJson);

        foreach ($autocoverArray->cts as $contentType) {
            $contentUrl = $contentType->url;
            
            if (urlExists(str_replace(".html", ".json", $contentUrl))) {
                $contentData = getFile(str_replace(".html", ".json", $contentUrl));
                $dataArray = json_decode($contentData);

                $htmlContent = generateHtmlContent($dataArray);
                
                file_put_contents("./contents/html/".$dataArray->id.".html", $htmlContent);
            }
        }

        if (!file_exists($siteRootPath.str_replace($originDomain, "", dirname($data->url)))) {
            mkdir($siteRootPath.str_replace($originDomain, "", dirname($data->url)), 0755, true));
        }
        file_put_contents("./contents/html/".$section.".html", $coverHtml);
    }


function urlExists ($url)
{
    stream_context_set_default(
        array(
            'http' => array(
                'method' => 'HEAD'
            )
        )
    );
    $headers = @get_headers($url);
    $status = substr($headers[0], 9, 3);
    if ($status >= 200 && $status < 400 ) {
        return true;
    } else {
        return false;
    }
}

function generateHtmlContent($data)
{
    global $siteRootUrl;

    $entireContent = getFile($data->url);
    $entireContent = str_replace($originDomain, "/", $entireContent);
    $entireContent = str_replace("http://e00-marca.uecdn.es/", "/", $entireContent);
    $entireContent = str_replace("http://estaticos.elmundo.es/", "/", $entireContent);
    $matches = array();
    preg_match('/<main[^>]+>(.*)<\/main>/s', $entireContent, $matches);
    $content = $matches[0];

    if (isset($data->multimedia) && count($data->multimedia) > 0) {
        foreach ($data->multimedia as $multimediaItem) {
            if (isset($multimediaItem->position) && $multimediaItem->position != '') {
                if ($multimediaItem->type == 'image') {
                    $imageExtension = pathinfo($multimediaItem->url)['extension'];
                    $imageFile = getFile(str_replace("http://e00-marca.uecdn.es/", "http://estaticos.elmundo.es/",$multimediaItem->url));
                    file_put_contents('./contents/html/images/'.$multimediaItem->id.'.'.$imageExtension, $imageFile);
                    if (!file_exists($siteRootPath.str_replace($originDomain, "", dirname($data->url)))) {
                        mkdir($siteRootPath.str_replace($originDomain, "", dirname($data->url)), 0755, true));
                    }
                    file_put_contents($siteRootPath.str_replace($originDomain, "", $data->url), $entireContent);
                    $content = str_replace($multimediaItem->url, $siteRootUrl."api/contents/html/images/".$multimediaItem->id.'.'.$imageExtension, $content);
                }
            }
        }
    }

    return $content;
}


function getFile($url)
{
    $ch = curl_init();
    $timeout = 5;
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, $timeout);
    $data = curl_exec($ch);
    curl_close($ch);
    return $data;
}
