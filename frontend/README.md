# Pokemon-challenge
This solution allow to list all pokemons and filter pokemons by name.
the application has been decomposed as following:
    App: it't the root of all component and it contains :
        State: 
         - pokemons : saving requested pokemon data (6 pokemon per request)
         - searchterm : saving the search input for the filtering
         - previousUrl: saving the url for requesting the next page
         - nextUrl: saving the url for requesting the previous page
         - isLoading and isError : for knowing the state of the request

        Functions:
         - getPokemonsData(url) : getting pokemons of the url given (it can be executed when the page redner of when previous or next button are clicked)
         - handleNextClick : call getPokemonsData(next page url)
         - handlePreviousClick : call getPokemonsData(previous page url)
         - handleSearch : saving the input of the search ( localStorage is used in case of refreshing the page)

        Child Components:
          List: map throw the pokemons array taken as props
            Child Components :
              Pokemon : Display pokemon data taken as props (id, name ,moves,types...) in a card that can be extanded to show details
               sate :
               - expanded : to save the state of the card expanded or not 
               functions :
               - handleExpandClick : to handle the extention of the card
          Search: to Display the input field and take use input
        

        Notes:

        - issue 1 : There's a bug when loading the page the pokemons are not displayed , you need to make changes on the input for the data to be displayed.
        - issue 2 :Since the date is loaded by page (6 pokemons), the issue is that the filtering is made in the front so only on the displayed data, and there's note in the api doc a way to filter by names starting with a given letters.
        - Solution : A solution is to load all data and handle the pagination in the frontend, the filtering will work.
           * probleme here is that loading all data not by page is a bad thing for performance.
        - General observation : some refactoring can be made as some function are repetitive  for example: handlePreviousClick and handleNextClick

    