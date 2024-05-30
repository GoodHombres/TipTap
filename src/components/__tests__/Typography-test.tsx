import * as React from "react";
import renderer from "react-test-renderer";

import { Typography } from "../Typography";

it(`renders correctly`, () => {
  const tree = renderer
    .create(<Typography variant="body">Snapshot test!</Typography>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
