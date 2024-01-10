# Githread
## Getting Started

### Install dependencies:

```bash
npm install
```

### First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

### Create migration:

```bash
npx prisma migrate dev
```

### Generate seed:

```bash
npm run prisma:seed
```

See all Model with prisma command
```bash
npx prisma studio
```


## .Env

To run the project, you need to create a `.env` file at the root of the project with the following variables:

```bash
DATABASE_URL="file:./dev.db"

GITHUB_ID="your_github_id"
GITHUB_SECRET="your_github_secret"
```

To get your Github ID and Secret, you need to create a Github OAuth App [here](https://docs.github.com/en/apps/oauth-apps/building-oauth-apps/creating-an-oauth-app).

After creating .env file, you need to run the following command to reload the project :

```bash
npm run dev
```


