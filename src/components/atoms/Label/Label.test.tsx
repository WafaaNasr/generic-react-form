import React from "react";
import { render } from "@testing-library/react";

import Label from "./Label.component";

describe("Label", () => {
    test("should display a blank login form, with remember me checked by default", async () => {
       
        return render(
            <Label htmlFor='text'>Hiii</Label>);
    });
});