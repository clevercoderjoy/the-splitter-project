import type { Meta, StoryObj } from "@storybook/react";

import dollarSign from "../../../assets/dollarSign.svg";
import peopleSign from "../../../assets/peopleSign.svg";
import { NumberInput } from "./NumberInput";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
    title: "NumberInputs",
    component: NumberInput,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
        layout: "centered",
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ["autodocs"],
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    // argTypes: {
    //     backgroundColor: { control: "color" },
    // },
} satisfies Meta<typeof NumberInput>;

export default meta;
type Story = StoryObj<typeof NumberInput>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

const dollarImg = {
    src: dollarSign,
    alt: "dollar sign",
};

export const BillInputField: Story = {
    args: {
        label: "Bill",
        numberInputSymbol: dollarSign,
        decimalValues: 0.01,
    },
};

export const PeopleInputField: Story = {
    args: {
        label: "Number of People",
        numberInputSymbol: peopleSign,
        decimalValues: 0,
    },
};
