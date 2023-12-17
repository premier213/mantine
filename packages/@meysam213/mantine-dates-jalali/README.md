# @meysam213/mantine-dates-jalali

[![npm](https://img.shields.io/npm/dm/@meysam213/mantine-dates-jalali)](https://www.npmjs.com/package/@meysam213/mantine-dates-jalali)

Jalali Calendars, date and time pickers based on Mantine components

[View documentation](https://github.com/premier213/mantine/)

## Installation

```bash
# With yarn
yarn add @meysam213/mantine-dates-jalali

# With npm
npm install @meysam213/mantine-dates-jalali

# With pnpm
pnpm add @meysam213/mantine-dates-jalali
```

![mantine-dates-jalali](./screenshot.png?raw=true "Screenshot")


## Usage
```tsx
import { MantineProvider, createTheme } from "@mantine/core";
import {
  DatePickerInput,
  DatesProvider,
} from "@meysam213/mantine-dates-jalali";
import "dayjs/locale/fa";

export default function Test() {
  const theme = createTheme({
    /** Put your mantine theme override here */
  });

  return (
    <MantineProvider theme={theme}>
      <DatesProvider
        settings={{ locale: "fa", weekendDays: [4, 5], firstDayOfWeek: 6 }}
      >
        <DatePickerInput />
      </DatesProvider>
    </MantineProvider>
  );
}
```

## License

MIT
