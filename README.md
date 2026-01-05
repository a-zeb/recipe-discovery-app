# Site: https://a-zeb-recipe-discovery-app.netlify.app/

# Repo: https://github.com/a-zeb/recipe-discovery-app

# recipe discovery app

a react app for browsing and searching recipes using themealdb api

## features

- browse recipes by category
- search for recipes
- view detailed recipe info with ingredients and instructions
- save favorites (stored in browser)
- responsive design

## how to run

install dependencies:

```
npm install
```

start dev server:

```
npm run dev
```

build for production:

```
npm run build
```

## tech used

- react
- react router
- themealdb api
- vite

## reflection

the hardest part was figuring out how to parse the ingredients from the api since they come as separate fields (strIngredient1, strIngredient2, etc). i had to use a loop to combine them.

i decided to use context for the favorites instead of prop drilling because it seemed easier to access the favorites state from different components. also used localstorage to persist the favorites so they dont disappear when you refresh.
