# Initial setup

- Clone repository
- Run `npm install`
- Create an actual `.env` file from `.env.example`, you can do so by running `cp .env.example .env`
- Fill in your `.env` variable values

When doing `git commit` husky should automatically lint your changes. If you see the following warning:
```
hint: The '.husky/pre-commit' hook was ignored because it's not set as executable.
hint: You can disable this warning with `git config advice.ignoredHook false`.
```
Make sure you run `chmod +x .husky/pre-commit`.


### Available commands:
- `npm run dev` - start a development build
- `npm run build` - create a production build in `dist` folder

When adding new env variables, refer to: https://vitejs.dev/guide/env-and-mode.html#env-variables-and-modes.
For the styling and theme usage, refer to: https://github.com/vntrs/vntrs-boilerplates-frontend-react-nocra/tree/main/src/theme

### Libraries included:
- `react-router-dom` for routing and navigation
- `axios` for making http calls
- `zod` for validation (Please research it more, as it is very powerful library)
- `styled-components` for styling
- `storybook` for creating components in isolation

Libraries that are approved by the tech forum, but not used in this boilerplate:
- `tailwind`
- `react-query`
- `radix-ui`
- `cypress`
- `react-hook-form`

These libraries can be used in a project if there is a specific need for them. Multiple libraries with the same purpose should **NOT** be mixed. 
If you wish to use this library in the project OR you have a need for a very specific library not listed above, please contact tech forum first and state your case before doing so.


### General guidelines
- Follow atomic design principles as much as possible (https://atomicdesign.bradfrost.com/chapter-2/).
- Build in isolation! Components should have their storybook attached to them. Try to at least cover atoms & molecules with storybook.
- Always use CSS variables over theming with context based theme.
- Components should be free of any business logic, and should contain only jsx, all forms of logic should be extracted into custom hooks.
- Prefer context using context and custom hooks more extensively over adding a library such as redux.
- **Don't ignore eslint!** When pushing to git please make sure your code is in check with all the eslint rules that we have in place.
