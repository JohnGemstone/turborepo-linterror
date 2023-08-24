import { Button, Header } from "ui";

const foo = process.env.NEXT_PUBLIC_TEST ?? "no env";

export default function Page(): JSX.Element {
  return (
    <>
      <Header text="Web" />
      <p>{foo}</p>
      <Button />
    </>
  );
}
