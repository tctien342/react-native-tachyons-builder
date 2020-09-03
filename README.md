# react-native-tachyons-builder

Build react native styles with tachyons syntax

## Features

- Darkmode auto switch
- Tachyons syntax likes

## Require

- React Native min version: `0.62`

## Installation

#### Install `react-native-dynamic`

```bash
    npm install react-native-dynamic
```

OR

```bash
    yarn add react-native-dynamic
```

#### Add builder to your project with `npx`

- In `src` folder, run following command

```bash
    npx degit github:tctien342/react-native-tachyons-builder#release styles
```

#### Import hook and using it

Example

```tsx
    import { useStyleBuilder } from 'styles';
    // On function component body
    const s = useStyleBuilder();
    // On render
    <Text style={s("f1 bold")}></Text>
    // => style={{ fontSize: {$MaxSize}, fontWeight: ${BoldWeight} }}
    <View style={s("flex vw-100")}></View>
    // => style={{ flex: 1, width: ${PhoneWidth*100%} }}
    <View style={[ s("flex bg-blue"),{ zIndex: -1} ]}></View>
    // => style={{ flex: 1, backgroundColor: ${blue}, zIndex: -1}}

    <View style={s('flex w-100 h-100 bg-hard')}></View>
    <View style={s('flex w-10% h-10% bg-blue pa-2%')}></View>
    <Text style={s('f1 bold hard tr w-100%')}></Text>
```

### Support command

| Command                  | About                                                                          | Note                                                                            |
| :----------------------- | :----------------------------------------------------------------------------- | :------------------------------------------------------------------------------ |
| <b>View Size             |                                                                                |                                                                                 |
| vw-{size}                | Width base on screen's width                                                   | value as percent                                                                |
| vh-{size}                | Height base on screen's height                                                 | value as percent                                                                |
| wh-{size}                | Height = Width = min screen's dimentions (Square view)                         | value as percent                                                                |
| h-{size}                 | height of view, base on parent size for percent or pixel                       | can be h-100% for 100% or h-100 for 100px                                       |
| w-{size}                 | width of view, base on parent size for percent or pixel                        | can be w-100% for 100% or w-100 for 100px                                       |
| mh-{size}                | maxHeight of view, base on parent size for percent or pixel                    | can be mh-100% for 100% or mh-100 for 100px                                     |
| mw-{size}                | maxWidth of view, base on parent size for percent or pixel                     | can be mw-100% for 100% or mw-100 for 100px                                     |
| mvh-{size}               | maxHeight of view, base on phone's height                                      | value as percent                                                                |
| mvw-{size}               | maxWidth of view, base on phone's width                                        | value as percent                                                                |
| flex-{size}              | define flex size of view                                                       | value as number, default is 1                                                   |
| <b>Text styles           |                                                                                |
| tc                       | textAlign: center                                                              |                                                                                 |
| tl                       | textAlign: left                                                                |                                                                                 |
| tr                       | textAlign: right                                                               |                                                                                 |
| f1                       | fontSize: \${xlSize}                                                           |                                                                                 |
| f2                       | fontSize: \${lSize}                                                            |                                                                                 |
| f3                       | fontSize: \${mSize}                                                            |                                                                                 |
| f4                       | fontSize: \${sSize}                                                            |                                                                                 |
| f5                       | fontSize: \${xsSize}                                                           |                                                                                 |
| bold                     | fontWeight: \${boldSize}                                                       |                                                                                 |
| thin                     | fontWeight: \${thinSize}                                                       |                                                                                 |
| <b>Object position       |                                                                                |
| absolute                 | position: absolute                                                             |                                                                                 |
| relative                 | position: relative                                                             |                                                                                 |
| top-{pos}                | set top position                                                               | can be top-10 for 10px or top-10% for 10% from top                              |
| bottom-{pos}             | set bottom position                                                            | can be bottom-10 for 10px or bottom-10% for 10% from bottom                     |
| left-{pos}               | set left position                                                              | can be left-10 for 10px or left-10% for 10% from left                           |
| right-{pos}              | set right position                                                             | can be right-10 for 10px or right-10% for 10% from right                        |
| z-{index}                | set zIndex of view                                                             | value as number > 0 only                                                        |
| pa-{size}                | padding view by size                                                           | size can be `10%` for percent or `10` for pixel                                 |
| pt-{size}                | paddingTop view by size                                                        | size can be `10%` for percent or `10` for pixel                                 |
| pb-{size}                | paddingBottom view by size                                                     | size can be `10%` for percent or `10` for pixel                                 |
| pl-{size}                | paddingLeft view by size                                                       | size can be `10%` for percent or `10` for pixel                                 |
| pr-{size}                | paddingRight view by size                                                      | size can be `10%` for percent or `10` for pixel                                 |
| ma-{size}                | margin view by size                                                            | size can be `10%` for percent or `10` for pixel                                 |
| mt-{size}                | marginTop view by size                                                         | size can be `10%` for percent or `10` for pixel                                 |
| mb-{size}                | marginBottom view by size                                                      | size can be `10%` for percent or `10` for pixel                                 |
| ml-{size}                | marginLeft view by size                                                        | size can be `10%` for percent or `10` for pixel                                 |
| mr-{size}                | marginRight view by size                                                       | size can be `10%` for percent or `10` for pixel                                 |
| <b>Border properties     |                                                                                |
| ba                       | borderStyle solid                                                              |                                                                                 |
| bdot                     | borderStyle dotted                                                             |                                                                                 |
| bdash                    | borderStyle dashed                                                             |                                                                                 |
| bw-{size}                | borderWidth size                                                               | size can be `10%` for percent or `10` for pixel                                 |
| br-{size}                | borderRadius size, default as \${Input Radius}                                 | size can be `10%` for percent or `10` for pixel                                 | percent or `10` for pixel |
| br--pill                 | borderRadius \${pill radius}                                                   |                                                                                 |
| br--bottom               | borderRadius only bottom                                                       |                                                                                 |
| br--top                  | borderRadius only top                                                          |                                                                                 |
| br--left                 | borderRadius only left                                                         |                                                                                 |
| br--right                | borderRadius only right                                                        |                                                                                 |
| <b>Utils properties      |                                                                                |
| centeritems              | center all items in view                                                       |                                                                                 |
| justifycenter            | justifyContent center                                                          |                                                                                 |
| itemscenter              | alignItems center                                                              |                                                                                 |
| row                      | flexDirection: row                                                             |                                                                                 |
| column                   | flexDirection: column                                                          |                                                                                 |
| shadow-${depth}-${color} | Drop shadow to view                                                            | depth as number default 3, color default #000, depth and color only work on ios |
| <b>Color properties      |                                                                                |
| o-{alpha}                | opacity: alpha size                                                            | alpha size from 0-100 as percent                                                |
| white                    | color: \${white}                                                               |
| prime                    | color: \${prime}                                                               |
| purble                   | color: \${purble}                                                              |
| blue                     | color: \${blue}                                                                |
| orange                   | color: \${orange}                                                              |
| red                      | color: \${red}                                                                 |
| green                    | color: \${green}                                                               |
| black                    | color: \${black}                                                               |
| light                    | color: \${fontLight}                                                           |
| hard                     | color: \${fontHard}                                                            |
| bg-{color}               | backgroundColor: color, support all above color, default as \${backgroundHard} | `light` and `hard` color with changed to `flight` and `fhard`                   |
| bg-med                   | color: \${backgroundMedium}                                                    |
| bg-light                 | color: \${backgroundLight}                                                     |
