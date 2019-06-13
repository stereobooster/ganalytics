# ganalytics [![Build Status](https://travis-ci.org/stereobooster/ganalytics.svg?branch=master)](https://travis-ci.org/stereobooster/ganalytics)

> A tiny (485B) client-side module for tracking with Google Analytics

This is the fork of [lukeed/ganalytics](https://github.com/lukeed/ganalytics).

This module exposes three module definitions:

- **ES Module**: `dist/ganalytics.mjs`
- **CommonJS**: `dist/ganalytics.js`
- **UMD**: `dist/ganalytics.min.js`

_Please see [Releases](https://github.com/stereobooster/ganalytics/releases) for changelog!_

## Install

```
$ yarn add @stereobooster/ganalytics
```

## Usage

```js
import GAnalytics from "@stereobooster/ganalytics";

if (
  window.location.hostname !== "localhost" &&
  !navigator.doNotTrack
) {
  GAnalytics("UA-XXXXXXXX-X", { aid: 1 });
}

// or
const ga = new GAnalytics("UA-XXXXXXXX-X", { aid: 1 });
// or
const ga = GAnalytics("UA-XXXXXXXX-X", { aid: 1 });

ga.send("pageview");
ga.send("pageview", { dt: "Foobar", dp: "/foo" });

ga.send("event", { ec: "Video", ea: "Play", el: "Home Hero" });
```

## API

### GAnalytics(trackerID, options, toWait)

#### trackerID

Type: `String`

Your Google Analytics tracker ID; eg `UA-XXXXXXXX-X`

#### options.aip

Type: `Integer`<br>
Default: `0`

Anonymize the sender's IP address. See [Anonymize IP](https://developers.google.com/analytics/devguides/collection/protocol/v1/parameters#aip).

#### options.an

Type: `String`

Specifies the application's name. See [Application Name](https://developers.google.com/analytics/devguides/collection/protocol/v1/parameters#an).

#### options.aid

Type: `String`

Specifies the application identifier. See [Application ID](https://developers.google.com/analytics/devguides/collection/protocol/v1/parameters#aid).

#### options.aiid

Type: `String`

Specifies the application installer identifier. See [Application Installer ID](https://developers.google.com/analytics/devguides/collection/protocol/v1/parameters#aiid).

#### options.av

Type: `String`

Specifies the application verison. See [Application Version](https://developers.google.com/analytics/devguides/collection/protocol/v1/parameters#av).

#### options.ds

Type: `String`

Indicates the data source type of the hit; eg `web` or `app`. See [Data Source](https://developers.google.com/analytics/devguides/collection/protocol/v1/parameters#ds).

#### toWait

Type: `Boolean`<br>
Default: `false`

When truthy, a `pageview` event **will not** be sent immediately upon initialization.

### ga.send(type, params)

#### type

Type: `String`

The type of hit to send. Must be one of these: `pageview`, `screenview`, `event`, `transaction`, `item`, `social`, `exception`, or `timing`.

#### params

Type: `Object`

The parameters to send based on the `type` of hit.

Please follow the links for each available parameter set:

- [Event](https://developers.google.com/analytics/devguides/collection/protocol/v1/parameters#events)
- [Exception](https://developers.google.com/analytics/devguides/collection/protocol/v1/parameters#exception)
- [Item](https://developers.google.com/analytics/devguides/collection/protocol/v1/parameters#ecomm)
- [Pageview](https://developers.google.com/analytics/devguides/collection/protocol/v1/parameters#content)
- [Screenview](https://developers.google.com/analytics/devguides/collection/protocol/v1/parameters#cd)
- [Social](https://developers.google.com/analytics/devguides/collection/protocol/v1/parameters#social)
- [Timing](https://developers.google.com/analytics/devguides/collection/protocol/v1/parameters#timing)
- [Transaction](https://developers.google.com/analytics/devguides/collection/protocol/v1/parameters#ecomm)

For `pageview` hits _only_, if no `params` are provided, then the `document.title` and `location.href` values will be auto-filled. This allows you to send valid requests by writing:

```js
ga.send("pageview");
// is the same as:
//=> ga.send('pageview', { dt:document.title, dl:location.href })
```

## License

MIT © [Luke Edwards](https://lukeed.com)
