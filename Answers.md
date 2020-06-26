1. What problem does the context API help solve?

Context API allows you to share data with a component without explicitly passing it down to the component through every level of the tree.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions are objects that create a new state. Reducers evaluate the current state and actions and return a new state.
The store stores all state for the app it stores state for every call that will be made by the app in global state and is know as the single source of trutch because it means that the only way to change your data in UI is to dispatch redux action which will change state within redux reducer.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is state that all components have access to and component state is stored locally and cannot be seen outside of the component.Component state should be used for things like forms and Application state should be used when you're using that state for the whole app.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux-thunk is a function that allows us to use async code it allows our creators to make api calls.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

I prefer redux all though context api is easier to use it has limitiations. I feel that going forward learning redux and it's uses as well as being able to use redux hooks which I haven't learned yet will be more useful with larger more complex apps.
