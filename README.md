git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/ajay-CaTi/playway.git
git push -u origin main

# Approach

- Head
- Body
- Sildebar
- menuItem
- Maincontainer
- buttonlist
- videocontainer
- videocard

# Story

install redux
create store
craete slice
provide store
see browser redux extension

# Route

partial route

const appRouter = createBrowserRouter([
{
path: "/",
element: <Body />, --> Body willl change in every route
},
]);

function App() {
return (
<Provider store={store}>

<div className="">
<Head />
<RouterProvider router={appRouter} /> // AS CHANGE BODY WILL RENDER
</div>
</Provider>
);
}

const Body = () => {
return (
<div className="grid grid-flow-col h-full">
<SideMenu />
<MainBlock /> // IN BODY THESE TWO BLACKS CHANGE ACCORDING TO ROUTE
<WatchPage/> // IN BODY THESE TWO BLACKS CHANGE ACCORDING TO ROUTE
</div>
);
};
