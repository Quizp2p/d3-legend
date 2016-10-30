import {ScaleLinear } from 'd3-scale';

interface Legend {
  (): any;
  scale: (_: any) => Legend | ScaleLinear<number, number>;
  cells: (_: any) => Legend | number[];
  orient: (_: any) => Legend | string;
  ascending: (_: any) => Legend | boolean;
  shapePadding: (_: any) => Legend | number;
  classPrefix: (_: any) => Legend | string;
  title: (_: any) => string | Legend;
  labels: (_: string[]) => Legend | any[];
  labelAlign: (_: any) => Legend | string;
  labelFormat: (_: any) => Legend | ((n: number) => string);
  labelOffset: (_: any) => Legend | number;
  labelDelimiter: (_: any) => Legend | string;
  on: (_: any) => Legend;
}

interface SymbolLegend extends Legend {
}

interface SizeLegend extends Legend {
  shape: (_: any, d: any) => SizeLegend | string;
  shapeWidth: (_: any) => SizeLegend | number;
}

interface ColorLegend extends Legend {
  shape: (_: any, d: any) => string | ColorLegend;
  shapeWidth: (_: any) => number | ColorLegend;
  shapeHeight: (_: any) => number | ColorLegend;
  shapeRadius: (_: any) => number | ColorLegend;
  useClass: (_: any) => boolean | ColorLegend;
}

export {SizeLegend, ColorLegend, SymbolLegend}
