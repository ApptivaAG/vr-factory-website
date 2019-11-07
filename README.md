# Bubble CMS mit Nanogen

Die Website bubblecms.io auf Basis des static site generators Nanogen (https://doug2k1.github.io/nanogen/).

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