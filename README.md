# PayPal Online Transactions Calculator

Personal project due to the need to calculate the percentage necessary to send each of my transactions via PayPal

![Showcase (1)](https://user-images.githubusercontent.com/25030238/111574281-92017780-8782-11eb-8cba-29049e53e192.png)

The app in general is developed using Next.js, I have plans migrate to a lighter framework to make the bundle smaller because I don't use the next.js utilities, only next.js is my everyday tool.

## Requirements to build the application locally

- Node.js version >= 12
- yarn || npm
- MacOS, Windows, Linux

## Steps to build locally

Steps below are using **yarn**, in case you use npm run the commands with npm directly.

- Clone this repository:

```bash
git clone https://github.com/x64Bits/paypal-fee-calc
```

- Install dependencies using **yarn** inside the newly cloned folder:

```bash
yarn install
```

- Run the app locally:

```bash
yarn dev
```

- Generate static export and extension file for browser:

```bash
yarn export
```

The above command generates a file **extension.zip** in the root of the project which can be loaded into firefox to use as a plugin

- Generate static extension without compiling the project again.

```bash
yarn make:ext
```
