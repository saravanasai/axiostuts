import ContactList from "../components/contactList/ContactList"
import Home from "../Home"

export const routes = [
  {
    path: "/home",
    element: <Home />
  },
  {
    path: "/contact",
    element: <ContactList />
  }
]
