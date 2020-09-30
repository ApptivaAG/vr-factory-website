# VR Factory mit Nanogen

Die Website vr-factory.ch auf Basis des static site generators Nanogen (https://doug2k1.github.io/nanogen/).

#### Besonderheiten Nanogen:

- Teile der Website als wiederverwendbare Module
- Mehrfach verwendbare Layouts

## Voraussetzungen

```
- Node
```

## Installation

#### Installation Nanogen (global):

```
npm i -g nanogen
```

#### Erstellen der für Nanogen nötigen Ordnerstruktur:

```bash
nanogen init # im Zielordner
```

#### Installation Node Packages

```
npm i
npm start
```

## Besonderheiten

Um pages mit einem Layout zu verknüpfen, schreibe folgendes im page Dokument, vor dem content:

```
---
layout: #Name der Layout-Datei#
---
```

Das Video spielt automatisch ab, sobald ein gewisser Anteil des Videos im Viewport ist und pausiert ausserhalb des Viewports. Dies wurde mit Hilfe von `getBoundingClientRect` erreicht (sh. _/src/assets/utils/play-video-in-viewport.js_).

Autoplay in iOS benötigt das Video-Attribut `playsinline`
