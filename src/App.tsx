import "./styles/global.css";
import { ReactLogo } from "./ReactLogo";
import { Heading } from "./components/Heading";
import { Text } from "./components/Text";
import { TextInput } from "./components/TextInput";
import { Envelope, Lock } from "phosphor-react";
import { Checkbox } from "./components/Checkbox";
import { Button } from "./components/Button";

function LoginHeader() {
  return (
    <header className="flex flex-col items-center justify-center">
      <ReactLogo width={120} height={120} />
      <Heading size="lg" className="text-center mt-4">
        React Storybook Design System
      </Heading>
      <Text className="text-gray-400 mt-1">Example Login page</Text>
    </header>
  );
}

function LoginForm() {
  return (
    <form className="flex flex-col items-stretch w-full md:max-w-md px-8 mt-10 gap-4">
      <label htmlFor="email" className="flex flex-col gap-3">
        <Text className="font-semibold">E-mail address</Text>
        <TextInput.Root>
          <TextInput.Icon>
            <Envelope />
          </TextInput.Icon>
          <TextInput.Input
            id="email"
            placeholder="Type your best e-mail address"
            type="email"
            required
          />
        </TextInput.Root>
      </label>

      <label htmlFor="password" className="flex flex-col gap-3">
        <Text className="font-semibold">Password</Text>
        <TextInput.Root>
          <TextInput.Icon>
            <Lock />
          </TextInput.Icon>
          <TextInput.Input
            id="password"
            placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
            type="password"
            required
          />
        </TextInput.Root>
      </label>

      <label htmlFor="remember" className="flex items-center gap-2">
        <Checkbox id="remember" />
        <Text size="sm" className="text-gray-200">
          Remember account for 30 days
        </Text>
      </label>

      <Button className="mt-4">Sign in</Button>
    </form>
  );
}

function LoginFooter() {
  return (
    <footer className="mt-8">
      <Text
        size="sm"
        className="underline block text-center font-semibold text-gray-400 hover:text-gray-200"
        asChild
      >
        <a href="https://google.com" target="_blank">
          Forgot your password?
        </a>
      </Text>
      <Text
        size="sm"
        className="underline mt-3 block text-center font-semibold text-gray-400 hover:text-gray-200"
        asChild
      >
        <a href="https://google.com" target="_blank">
          Don't have account? Create now!
        </a>
      </Text>
    </footer>
  );
}

export function App() {
  return (
    <main className="w-screen h-screen bg-gray-900 flex flex-col items-center justify-center text-gray-100">
      <LoginHeader />
      <LoginForm />
      <LoginFooter />
    </main>
  );
}
