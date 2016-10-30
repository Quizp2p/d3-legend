declare global {
  interface d3 {
  }
}

import color from './color'
import size from './size'
import symbol from './symbol'
import helpers from './helpers'

(<any>d3).legendColor = color;
(<any>d3).legendSize = size;
(<any>d3).legendSymbol = symbol;
(<any>d3).legendHelpers = helpers;
