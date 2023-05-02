Sure, here's the reformatted markdown file with the added information that the widget only works on YouTube:

# javascript-closed-caption-runner Blog widget for YouTube

This widget is designed to work only on YouTube videos. Here's the URL that should be entered into an iframe:

```text
https://rkdmf0000.github.io/javascript-closed-caption-runner/main/dist/
```

The following parameters can be used in the URL:

- `debug` = 1 | 0 - Specifies whether the debug mode is on or off.
- `cc_sync` - Specifies the synchronization of the closed captions in seconds.
- `cc_encode` - Specifies the encoding of the closed captions. Supported values are utf-8, euc-kr, etc.
- `cc_uri` - Specifies the URL of the closed captions file.
- `#` Youtube video_id - Specifies the ID of the YouTube video.

[DEMO PLAY](https://rkdmf0000.github.io/javascript-closed-caption-runner/main/dist?debug=1&cc_sync=0&cc_encode=utf-8&cc_uri=https://raw.githubusercontent.com/rkdmf0000/cc-collection/main/back%20number%20-%20%E6%B0%B4%E5%B9%B3%E7%B7%9A.srt#iqEr3P78fz8)

### Example

Here's an example of a URL that includes all of the parameters:

```text
https://rkdmf0000.github.io/javascript-closed-caption-runner/main/dist?debug=1&cc_sync=0&cc_encode=utf-8&cc_uri=https://raw.githubusercontent.com/rkdmf0000/cc-collection/main/back%20number%20-%20%E6%B0%B4%E5%B9%B3%E7%B7%9A.srt#iqEr3P78fz8
```
