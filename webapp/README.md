# WebApp Submission

## Setup

1. Make sure you have Node JS installed. If you don't have it:

    - [Download it from nodejs.org](https://nodejs.org)
    - [Install it using NVM](https://github.com/nvm-sh/nvm)
    - If you're on Mac, Homebrew is a good option too:

    ```script
    brew install node
    ```

2. Init the `.env` file from `.env.example` (for dev enviroment it should be the same)

3. Open the project folder:

    ```script
    cd webapp 
    ```

4. Install packages and dependencies:

    ```script
    yarn
    ```

    NOTE: If you don't have yarn installed, you can install it globally using npm:

    ```script
    npm install --global yarn
    ```

5. Start a local dev server at `http://localhost:3000`:

    ```script
    yarn start
    ```

6. Run tests

    ```script
    yarn test
    ```
