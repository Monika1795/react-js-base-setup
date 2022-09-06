import React from 'react';

export interface RouteType {
  name: string;
  path: string;
  id: number;
  Component: React.FC;
}
