import { useEffect, useState } from "react"
import { getContacts } from "../../Network/ContactRequests"
import List from "./List"

const ContactList = () => {
  const [user, setUser] = useState()
  const [fail, setFail] = useState()

  const fetchContacts = async () => {
    try {
      const response = await getContacts("/users")
      setUser(response.data)
    } catch (error) {
      setFail("yes")
    }
  }

  useEffect(() => {
    setTimeout(() => {
      fetchContacts()
    }, 2000)
  }, [])

  return (
    <div className="container">
      <div className="card card-default" id="card_contacts">
        <div
          id="contacts"
          className="panel-collapse collapse show"
          aria-expanded="true"
          style={{}}
        >
          <ul className="list-group pull-down" id="contact-list">
            {fail && <div>Error On fecth</div>}
            {user && <List userInfo={user} />}
            {!fail && <div>Loading......</div>}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ContactList
