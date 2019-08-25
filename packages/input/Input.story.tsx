import { text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { Input } from "./Input";

storiesOf("Input", module)
  .add("default", () => <Input />)
  .add("with label", () => <Input label="dddd" id="test" />)
  .add("with label and type", () => (
    <Input id="test" type={text("Type", "password")} />
  ));
