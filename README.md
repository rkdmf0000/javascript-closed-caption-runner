# JavaScript Closed Caption Runner Widget for YouTube

------------
### Note: Full-screen mode is not yet supported.

------------

The JavaScript Closed Caption Runner widget was created to solve the problem of some YouTube videos having disabled captions, which can prevent individuals with hearing impairments from fully enjoying the content. By using this widget, users can enable closed captions for such videos and enjoy them fully.

The widget is built using the `youtube-vue3` library, which provides a Vue 3 component for embedding YouTube videos. Additionally, it uses the `webvtt-parser` library for parsing WebVTT files and the `subsrt` library for parsing SRT files.

The closed caption file is not hosted on a separate server, as the developer does not have the resources to host it. Instead, they recommend using a public online storage service for hosting the file.

### Usage

To use the widget, include the following URL in an iframe on your website:

```html
<iframe src="https://rkdmf0000.github.io/javascript-closed-caption-runner/main/dist/?debug=1&cc_sync=0&cc_encode=utf-8&cc_uri=[your_closed_caption_file_url]#[your_youtube_video_id]"
        frameborder="0"
        allowfullscreen
        width="640"
        height="360"></iframe>
```

Replace `[your_closed_caption_file_url]` with the URL of your closed caption file and `[your_youtube_video_id]` with the ID of the YouTube video you want to use the widget with. You can also adjust the `width` and `height` attributes to fit your needs.

The following parameters can be used in the URL:

- `debug` = 1 | 0 - Specifies whether the debug mode is on or off.
- `cc_sync` - Specifies the synchronization of the closed captions in seconds.
- `cc_encode` - Specifies the encoding of the closed captions. Supported values are utf-8, euc-kr, etc.
- `cc_uri` - Specifies the URL of the closed captions file.
- `#` Youtube video_id - Specifies the ID of the YouTube video.

You can also use the following attributes that are supported by YouTube:
allowfullscreen="" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ... etc


### Example

Here's an example of a URL that includes all of the parameters:

```text
https://rkdmf0000.github.io/javascript-closed-caption-runner/main/dist?debug=1&cc_sync=0&cc_encode=utf-8&cc_uri=https://raw.githubusercontent.com/rkdmf0000/cc-collection/main/back%20number%20-%20%E6%B0%B4%E5%B9%B3%E7%B7%9A.srt#iqEr3P78fz8
```

And here's an example of how the iframe should look like:

```html
<iframe allowfullscreen="" frameborder="0" width="560" height="315" src="https://rkdmf0000.github.io/javascript-closed-caption-runner/main/dist?debug=0&cc_sync=0&cc_encode=utf-8&cc_uri=https://raw.githubusercontent.com/rkdmf0000/cc-collection/main/back%20number%20-%20%E6%B0%B4%E5%B9%B3%E7%B7%9A.srt#iqEr3P78fz8"></iframe>
```

Please note that the `src` attribute of the iframe needs to be adjusted based on your needs.



[DEMO PLAY](https://rkdmf0000.github.io/javascript-closed-caption-runner/main/dist?debug=0&cc_sync=0&cc_encode=utf-8&cc_uri=https://raw.githubusercontent.com/rkdmf0000/cc-collection/main/back%20number%20-%20%E6%B0%B4%E5%B9%B3%E7%B7%9A.srt#iqEr3P78fz8)

