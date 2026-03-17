export type CreateGreetingOptions = {
  readonly name: string;
  readonly punctuation?: string;
};

export const createGreeting = ({ name, punctuation = "!" }: CreateGreetingOptions): string =>
  `Hello, ${name}${punctuation}`;
