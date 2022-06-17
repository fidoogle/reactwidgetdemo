# reactwidgetdemo

Source code at https://github.com/fidoogle/reactwidgetdemo.git

## Installation

    npm install --save reactwidgetdemo

or

    yarn add reactwidgetdemo

## Usage

```
import React from 'react';
import CryptoList from 'reactwidgetdemo';

function Demo(){
    return(
        <React.Fragment>
            <div>
                <CryptoList />
            </div>
        </React.Fragment>
    )
}

export default Demo;
```

## Props

    backgroundColor string (for example "red", or "#ff0000") defaults to "#1e2329"
